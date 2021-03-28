module.exports = {
  '**/*.{js,ts}': (filenames) => [
    ...filenames.map((filename) => `prettier --write '${filename}'`),
    ...filenames.map((filename) => `git add '${filename}'`),
    'npm run test'
  ],
  '**/*.{md}': (filenames) => [
    ...filenames.map((filename) => `prettier --write '${filename}'`),
    ...filenames.map((filename) => `git add '${filename}'`),
  ],
};