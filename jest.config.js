module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};
