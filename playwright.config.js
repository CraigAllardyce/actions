const PORT = 3800;

module.exports = {
    testDir: 'test',

    outputDir: 'results',

    reporter: [['list'], ['junit', { outputFile: 'results/integration-test-results.xml' }]],

    webServer: {
        command: 'npx @insight/app-serve',
        port: PORT,
        timeout: 120 * 1000,
    },

    use: {
        baseURL: `http://localhost:${PORT}/`,
        viewport: { width: 1600, height: 1200 },
        video: 'on',
    },
};
