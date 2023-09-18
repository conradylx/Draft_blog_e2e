module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./testSetup.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "svg"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(svg)$": "<rootDir>/svgTransform.js",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
