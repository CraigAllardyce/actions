module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules[\\/](?!(focus.*|basecoat.*))', '\\.pnp\\.[^\\/]+$'],
    reporters: ['default', ['jest-junit', { outputDirectory: 'results' }]],
    coverageDirectory: 'results',
};
