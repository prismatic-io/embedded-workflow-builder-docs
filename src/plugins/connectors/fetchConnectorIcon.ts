import path from "node:path";
import sharp from "sharp";
import { getPrismaticConnection } from "./graphqlClient";
import type { Component } from "./queries";

export const fetchConnectorIcon = async (connector: Component) => {
  const { PRISMATIC_API_KEY, PRISMATIC_URL } = getPrismaticConnection();
  const assetFilePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "docs",
    "connectors",
    "assets",
    `${connector.key.toLowerCase()}.png`,
  );

  const imageResponse = await fetch(new URL(connector.iconUrl, PRISMATIC_URL), {
    headers: { Authorization: `Bearer ${PRISMATIC_API_KEY}` },
  });
  const imageBuffer = await imageResponse.arrayBuffer();
  await sharp(Buffer.from(imageBuffer))
    .resize({ height: 32, width: 32 })
    .toFile(assetFilePath);
};
