const webpack = require("webpack");

module.exports = (envOptions) => {
    envOptions = envOptions || {};
    const config = {
        entry: {
            "01": "./entry01.ts",
            "02": "./entry02.ts",
        },
        output: {
            path: "dist",
            filename: "[name].bundle.js",
        },
        devtool: "source-map",
        module: {
            rules: [
                { test: /\.ts$/, loader: "light-ts-loader" },
            ],
        },
        resolve: {
            extensions: [".js", ".ts"]
        }
    };
    if (envOptions.MODE === "prod") {
        config.plugins = [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            }),
        ];
    }
    return config;
};
