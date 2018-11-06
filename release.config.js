module.exports = {
  branch: 'production',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    './src/command/release'
  ]
};
