module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|expo-.*|@expo/.*)/)',
  ],
  moduleNameMapper: {
    '^expo-local-authentication$': '<rootDir>/src/__tests__/__mocks__/expo-local-authentication.ts',
    '^expo-secure-store$': '<rootDir>/src/__tests__/__mocks__/expo-secure-store.ts',
    '^expo-crypto$': '<rootDir>/src/__tests__/__mocks__/expo-crypto.ts',
    '^expo-file-system$': '<rootDir>/src/__tests__/__mocks__/expo-file-system.ts',
    '^expo-image-picker$': '<rootDir>/src/__tests__/__mocks__/expo-image-picker.ts',
    '^expo-document-picker$': '<rootDir>/src/__tests__/__mocks__/expo-document-picker.ts',
    '^expo-image-manipulator$': '<rootDir>/src/__tests__/__mocks__/expo-image-manipulator.ts',
    '^expo-sharing$': '<rootDir>/src/__tests__/__mocks__/expo-sharing.ts',
    '^expo-av$': '<rootDir>/src/__tests__/__mocks__/expo-av.ts',
    '^@bam.tech/react-native-image-resizer$': '<rootDir>/src/__tests__/__mocks__/@bam.tech/react-native-image-resizer.ts',
    '^react-native-sqlite-2$': '<rootDir>/src/__tests__/__mocks__/react-native-sqlite-2.ts',
    '^react-native-device-info$': '<rootDir>/src/__tests__/__mocks__/react-native-device-info.ts',
  },
  testEnvironment: 'node',
};
