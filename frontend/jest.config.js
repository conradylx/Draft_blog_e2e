module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./testSetup.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node", "svg"],
  testRegex: "src/.*\\.test\\.(ts|tsx)$",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(svg)$": "<rootDir>/svgTransform.js",
  },
};
