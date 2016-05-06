module.exports = {
    entry: './src/index.js',
    output: {
        path: '/'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'file' },
            { test: /\.sol$/, loader: 'raw' }
        ]
    }
};