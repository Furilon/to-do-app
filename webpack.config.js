const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {    
        main: './src/main.js',
        items: './src/items.js',
        interface: './src/interface.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}  ;