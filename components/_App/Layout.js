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

			</Head>

			{loader ? "Loading" : children}

			<GoTop scrollStepInPx="100" delayInMs="10.50" />
		</>
	);
};

export default Layout;
