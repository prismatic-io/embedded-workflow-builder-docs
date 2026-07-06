import type { CommanderStatic } from "commander";
import fs from "node:fs";
import handlebars from "handlebars";
import path from "node:path";
import { getPrivateConnector } from "./getPrivateConnector";
import { getPublicConnectors } from "./getPublicConnectors";
import type { Component } from "./queries";
import { fetchConnectorIcon } from "./fetchConnectorIcon";

handlebars.registerHelper("cleanDefaultForTable", (value: string) => {
  if (!value) return;
  if (value.startsWith("{") || value.startsWith("[")) {
    return `<code>${value.replaceAll("\n", "<br />")}</code>`;
  }
  return value.replaceAll("\n", "<br />").replaceAll("*", "\\*");
});

handlebars.registerHelper("lowerCase", (value: string) => value.toLowerCase());

handlebars.registerHelper("anchor", (context) => `{#${context.toLowerCase()}}`);

handlebars.registerPartial(
  "inputsTable",
  fs.readFileSync(path.join(__dirname, "templates", "inputsTable.md.hbs"), {
    encoding: "utf-8",
  }),
);

// We skip importing certain connectors' connection docs because they are too Prismatic-specific
const IGNORED_CONNECTOR_CONNECTION_DOCS = ["pipedrive"];

// We skip importing certain connectors' description docs because they are too Prismatic-specific or not well-suited to be shown in the public docs
const IGNORED_CONNECTOR_DESCRIPTION_DOCS = ["code", "prismatic", "recursive-flow"];

const writeConnectorDocsFile = (
  connector: Component,
  connectorTemplate: HandlebarsTemplateDelegate<unknown>,
) =>
  fs.writeFileSync(
    path.join(
      __dirname,
      "..",
      "..",
      "..",
      "docs",
      "connectors",
      `${connector.key.toLowerCase()}.md`,
    ),
    connectorTemplate(connector),
  );

async function generateConnectorDocs({
  publicConnectors,
  privateConnector,
  fromManifest,
}) {
  const connectorTemplate = handlebars.compile(
    fs.readFileSync(path.join(__dirname, "templates", "connector.md.hbs"), {
      encoding: "utf-8",
    }),
  );
  if (publicConnectors) {
    const connectors = await getPublicConnectors({ fromManifest });
    fs.writeFileSync(
      path.join(__dirname, "public-connectors-manifest.json"),
      JSON.stringify(connectors, null, 2),
    );

    for (const connector of connectors) {
      const connectorDocsDir = path.join(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "components",
        "components",
        connector.key,
        "documentation",
      );
      const descriptionPath = path.join(connectorDocsDir, "description.mdx");
      if (
        fs.existsSync(descriptionPath) &&
        !IGNORED_CONNECTOR_DESCRIPTION_DOCS.includes(connector.key)
      ) {
        connector.docsDescription = fs
          .readFileSync(descriptionPath, {
            encoding: "utf-8",
          })
          .replaceAll("####", "##"); // Downgrade heading levels from description files to fit in the connector docs page better
      }
      for (const connection of connector.connections.nodes) {
        const docsPath = path.join(
          connectorDocsDir,
          "connections",
          `${connection.key}.mdx`,
        );
        if (
          fs.existsSync(docsPath) &&
          !IGNORED_CONNECTOR_CONNECTION_DOCS.includes(connector.key)
        ) {
          connection.connectionDocs = fs
            .readFileSync(docsPath, { encoding: "utf-8" })
            .replaceAll(
              /<OauthCallbackUrl \/>/g,
              "`https://oauth2.%WHITE_LABEL_BASE_URL%/callback`",
            )
            .replaceAll(/!\[.*\]\(.*\)/g, ""); // Remove images
        }
      }

      fetchConnectorIcon(connector);
      writeConnectorDocsFile(connector, connectorTemplate);
    }
  }
  if (privateConnector) {
    const connector = await getPrivateConnector({
      componentKey: privateConnector,
    });
    fetchConnectorIcon(connector);
    writeConnectorDocsFile(connector, connectorTemplate);
  }
}

async function connectorDocsPlugin() {
  return {
    name: "connector-docs",
    extendCli(cli: CommanderStatic) {
      const command = cli.command("generate-connector-docs");
      command
        .description(
          "Generate connector documentation files for all public connectors or a single private connector.",
        )
        .option("--public-connectors", "Generate public connector docs")
        .option(
          "--private-connector <component-key>",
          "Generate docs for a specific private connector by component key",
        )
        .option(
          "--from-manifest",
          "Generate public connector docs from an existing manifest (saves time pulling the API)",
        )
        .parse(process.argv)
        .action(async () => {
          const { publicConnectors, privateConnector, fromManifest } = command;
          await generateConnectorDocs({
            publicConnectors,
            privateConnector,
            fromManifest,
          });
        });
    },
  };
}

module.exports = connectorDocsPlugin;
