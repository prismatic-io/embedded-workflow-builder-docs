import { load } from "js-yaml";
import fs from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

export interface Configuration {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  scope: string;
  tokenType: string;
}

const configDirectory = path.join(homedir(), ".config", "prism");
const configFilePath = path.join(configDirectory, "config.yml");

export const configFileExists = () => fs.existsSync(configFilePath);

export const readConfig = (): Configuration => {
  if (!configFileExists()) return null;
  const contents = fs.readFileSync(configFilePath, { encoding: "utf-8" });
  const config = load(contents.toString()) as Configuration;
  return config;
};
