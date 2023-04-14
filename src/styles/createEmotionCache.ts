import createCache from "@emotion/cache";

const isProduction = process.env.NODE_ENV === "production";

export const createEmotionCache = () => {
  return createCache({
    key: isProduction ? "css" : "dev-css",
    nonce: "jun",
  });
};
