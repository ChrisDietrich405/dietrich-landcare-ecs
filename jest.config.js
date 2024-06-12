const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

const config = {
  preset: '@shelf/jest-mongodb',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageProvider: "v8",
  watchPathIgnorePatterns: ['globalConfig'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleNameMapper: {
    '^.+\\/mongodb$': '<rootDir>/__mocks__/mongodbMock.js'
  }
}

module.exports = createJestConfig(config)