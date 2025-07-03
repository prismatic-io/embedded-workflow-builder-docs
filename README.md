# Prismatic Embedded Workflow Builder Documentation

[![Tests](https://github.com/prismatic-io/embedded-workflow-builder-docs/actions/workflows/tests.yaml/badge.svg)](https://github.com/prismatic-io/embedded-workflow-builder-docs/actions/workflows/tests.yaml)
[![Site preview badge](https://img.shields.io/badge/Example-Site_Preview-blue)](https://embedded-workflow-builder.netlify.app)

Prismatic offers an [embedded workflow builder](https://prismatic.io/docs/embed/workflow-builder/) that you can embed within your application.
The embedded workflow builder lets your customers build workflows that sync data between your app and the other apps they use.
They can do this without leaving your app.

This repository contains documentation that you can white-label, deploy, and present to your customers.

## Deployment options

You have two options for deploying white-labeled documentation:

1. If you want to generate static HTML/CSS/JS artifacts that can be deployed to a web server, see [Building Branded HTML Assets](./BUILDING-HTML.md).
   This is useful if you want to host the documentation on your own web server, or if you want to deploy it to a static hosting service like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [GitHub Pages](https://pages.github.com/).
2. If you want to ingest the markdown files and screenshots into a content management system that supports markdown (including your own Docusaurus project), see [Building Branded Markdown Files](./BUILDING-MARKDOWN.md).

## Generating private connector documentation

If you have private connectors that you offer to your customers and you want documentation for them to live alongside the public connectors, you can generate documentation for them.

After installing node dependencies locally, ensure that you are logged in to the Prismatic CLI with `prism login`.
If you do not have the Prismatic CLI installed, you can install it with:

```bash
npm install -g @prismatic-io/prism
```

Then, identify the key of the private connector you want to generate documentation for by running:

```bash
prism components:list --filter public=false --columns key,label,description
```

Using the `key` of the connector you want to generate documentation for, run:

```bash
npm run generate-private-connector-docs YOUR-COMPONENT-KEY
```

**Note**: Make sure you can successfully run `prism me` before running the above command, as it relies on your Prismatic CLI being configured correctly.

This will generate a markdown file in the `docs/connectors/` directory, and pull down the connector's icon into `docs/connectors/assets/`.
