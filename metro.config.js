const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix for Metro bundler export issues
config.resolver.platforms = ['ios', 'android', 'native', 'web'];
config.resolver.sourceExts = ['js', 'json', 'ts', 'tsx', 'jsx'];

// Ensure proper module resolution
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

// Exclude problematic paths
config.resolver.blockList = [
  /.*\/stores\/.*/, // Block any stores directory
  /.*\/FileStore.*/, // Block any FileStore references
  /.*\/__tests__\/.*/, // Block test files
  /.*\/node_modules\/metro-cache\/.*/, // Block metro-cache issues
];

// Reset cache on start
config.resetCache = true;

module.exports = config;
