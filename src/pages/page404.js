import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/logo.png?v=2024-03-07T15:14:05.710Z"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65e9c9c80072400020eaf818"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});