module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    resourceQuery: /blockType=emotion/,
                    loader: require.resolve('vue-emotion-plugin/loader')
                }
            ]
        }
    }
}
