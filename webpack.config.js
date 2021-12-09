module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img",
                        esModule: false
                    }
                }
            }
        ]
    }
};