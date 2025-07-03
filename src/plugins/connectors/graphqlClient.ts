/**
 * Create an GraphQL client that authenticates with the Prismatic API
 * in order to pull metadata about existing connectors
 */
import { Graffle } from "graffle";
import { readConfig } from "./auth";

export const getPrismaticConnection = () => {
  const { PRISMATIC_API_KEY, PRISMATIC_URL } = process.env;

  const API_ENDPOINT = PRISMATIC_URL
    ? `${PRISMATIC_URL}/api`
    : "https://app.prismatic.io/api";

  // If the environment variable is set, use it to create the client
  if (PRISMATIC_API_KEY) {
    return {
      PRISMATIC_API_KEY,
      PRISMATIC_URL: PRISMATIC_URL || "https://app.prismatic.io",
      API_ENDPOINT,
    };
  }

  // Otherwise, read the access token from the prism config file
  const { accessToken } = readConfig();
  return {
    PRISMATIC_API_KEY: accessToken,
    PRISMATIC_URL: PRISMATIC_URL || "https://app.prismatic.io",
    API_ENDPOINT,
  };
};

export const createPrismaticApiClient = () => {
  const { PRISMATIC_API_KEY, API_ENDPOINT } = getPrismaticConnection();

  return Graffle.create().transport({
    url: API_ENDPOINT,
    headers: { Authorization: `Bearer ${PRISMATIC_API_KEY}` },
  });
};
