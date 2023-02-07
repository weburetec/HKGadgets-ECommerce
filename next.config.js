const path = require("path");
const webpack = require("webpack");
console.log(webpack.version);

module.exports = {
	 webpack: function (config, options) {
    		console.log(options.webpack.version); // 4.44.1
   		config.experiments = {};
    		return config;
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
