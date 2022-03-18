module.exports = {
  coverageReporters: ['json', 'json-summary', 'text', 'lcov', 'clover'],
  moduleDirectories: ['node_modules', 'src', '<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  roots: ['__test__'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
}
