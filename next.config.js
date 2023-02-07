const path = require("path");

module.exports = {
	webpack: (config) => {
		const webpack = require('webpack')
		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
		config.plugins = config.plugins || []
		config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/))
		config.plugins.push(new BundleAnalyzerPlugin())
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	eslint: { ignoreDuringBuilds: true },
	env: {
		JWT_SECRET: "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd",
		CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dev-empty/image/upload",
		CLOUD_NAME: "dev-empty",
		UPLOAD_PRESET: "vikings",
	},
	trailingSlash: true,
};
