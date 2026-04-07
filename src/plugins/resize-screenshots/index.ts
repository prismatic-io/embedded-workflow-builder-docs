import type { CommanderStatic } from "commander";
import { globSync } from "node:fs";
import sharp from "sharp";
import path from "node:path";

// Max Docusaurus content width is about 960px
const MAX_SCREENSHOT_SIZE = 1500;

async function resizeScreenshots() {
  const assetPath = path.join(__dirname, "..", "..", "..", "docs", "assets");
  const screenshotFiles = globSync("**/*.png", { cwd: assetPath });
  for (const screenshotFile of screenshotFiles) {
    const screenshotPath = path.join(assetPath, screenshotFile);
    const metadata = await sharp(screenshotPath).metadata();
    if (metadata.width && metadata.width > MAX_SCREENSHOT_SIZE) {
      console.log(
        `${screenshotFile} is currently ${metadata.width} pixels wide. Resizing to ${MAX_SCREENSHOT_SIZE}.`,
      );
      await sharp(screenshotPath)
        .resize({ width: MAX_SCREENSHOT_SIZE })
        .toFile(screenshotPath + ".tmp");
      const fs = await import("node:fs/promises");
      await fs.rename(screenshotPath + ".tmp", screenshotPath);
    }
  }
}

async function resizeScreenshotsPlugin() {
  return {
    name: "resize-screenshots",
    extendCli(cli: CommanderStatic) {
      const command = cli.command("resize-screenshots");
      command
        .description("Resize all screenshots to a max width of 900px")
        .action(resizeScreenshots);
    },
  };
}

module.exports = resizeScreenshotsPlugin;
