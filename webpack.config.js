const { configure } = require('@insight/webpack-config');

module.exports = configure({
    output: {
        publicPath: '/l/static/gitlab-test/',
    },
});
