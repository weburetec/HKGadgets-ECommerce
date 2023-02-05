import React from "react";
import Head from "next/head";
import GoTop from "../Shared/GoTop";

import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
	const [loader, setLoader] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => setLoader(false), 2000);
	}, []);
	return (
		<>
			<Head>
				<title>HK Gadgets - One Stopp Shoppe</title>
				<meta
					name="description"
					content="HK Gadgets - One Stopp Shoppe"
				/>
				<meta
					name="og:title"
					property="og:title"
					content="HK Gadgets - One Stopp Shoppe"
				></meta>
				<meta
					name="twitter:card"
					content="HK Gadgets - One Stopp Shoppe"
				></meta>
				<link
					rel="canonical"
					href="https://livani-react.envytheme.com/"
				></link>
				<meta
					property="og:image"
					content="https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
				/>
			</Head>

			{loader ? "Loading" : children}

			<GoTop scrollStepInPx="100" delayInMs="10.50" />
		</>
	);
};

export default Layout;
