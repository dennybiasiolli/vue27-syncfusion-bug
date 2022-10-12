require('dotenv').config({ path: '.env.test' });
process.env.TZ = 'GMT';

module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
    // '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$':
    //   require.resolve('jest-transform-stub'),
  },
  transformIgnorePatterns: [
    'node_modules/(vue-demi)',
  ],
  moduleNameMapper: {
    // support the same @ -> src alias mapping in source code
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: [
  ],
  snapshotSerializers: [
    'jest-serializer-vue-tjw',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,ts,vue}', '!**/node_modules/**'],
};
