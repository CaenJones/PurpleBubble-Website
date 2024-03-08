import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section
			background="url(https://images.unsplash.com/photo-1583645870034-77b2292095f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0%/cover scroll,linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%)"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Box margin="-16px -16px -16px -16px" display="flex">
				<Box display="flex" padding="16px 16px 16px 16px" width="75%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text color="--lightD1" letter-spacing="1px" text-transform="uppercase" margin="0">
							A free and opensource project created and maintained by the community.{"\n\n"}
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Welcome to the PurpleBubble
						</Text>
					</Box>
				</Box>
			</Box>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase" color="#ffffff">
					Learn more
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="#000000">
			<Box
				padding="80px 72px 80px 72px"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1562563436-a73bab993173?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--light"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						A User Experience Like No Other{"\n\n"}
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="#ffffff" md-text-align="center">
						Unlike other mainstream messaging and contact solutions, the PurpleBubble project, aims to give the user the experience he or she deserves for free{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box
					display="flex"
					flex-direction="column"
					sm-margin="0px 0px 30px 0px"
					sm-width="100%"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/Rectangle1%20%287%29.svg?v=2024-03-08T12:26:24.953Z) 0% 0% /100% repeat scroll padding-box"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="#F7FBFF"
						width="49px"
						height="49px"
						background="rgba(0, 0, 0, 0)"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						{" "}End-to-End   Encryption{"\n\n\n\n"}
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-text-align="left">
						{" "}Ensure your conversations are secure   and private with end-to-end encryption.{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					sm-width="100%"
					sm-margin="0px 0px 30px 0px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/Rectangle2.svg?v=2024-03-08T12:30:26.274Z) 0% 0% /100% repeat scroll padding-box"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="rgba(0, 0, 0, 0)"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						{" "}Cross-Platform   Compatibility{"\n\n\n\n"}
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-text-align="left">
						{" "}Access your messages from any device,   whether it's a smartphone, tablet, or   computer.{"\n\n\n\n"}
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					sm-margin="0px 0px 30px 0px"
					sm-width="100%"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/Rectangle3.svg?v=2024-03-08T12:30:48.253Z) 0% 0% /100% repeat scroll padding-box"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="rgba(0, 0, 0, 0)"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						{" "}Customizable   Themes{"\n\n\n\n"}
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-text-align="left">
						{" "}Personalize your messaging experience   with a wide range of customizable   themes.{"                                                                   "}
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					sm-width="100%"
					sm-margin="0px 0px 0px 0px"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/65e9c9c80072400020eaf81a/images/Rectangle4.svg?v=2024-03-08T12:31:10.995Z) 0% 0% /100% repeat scroll padding-box"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="rgba(0, 0, 0, 0)"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						{" "}Easy Collaboration   and Contacts
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-text-align="left">
						{" "}Easily create and manage group chats to   collaborate with
              friends, family, or   colleagues.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Components.EmbedJS />
		<Components.EmbedJS />
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