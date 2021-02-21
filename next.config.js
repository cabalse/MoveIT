const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/abstract/_variables.scss";`,
  },
  env: {
    PRICE_REQUEST_BASE_URL: process.env.PRICE_REQUEST_BASE_URL,
  },
};
