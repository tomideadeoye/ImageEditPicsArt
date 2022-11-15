import React from "react";
import "./Nav.css";
import HeroImg from "../HeroImg/HeroImg";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AnimatedText from "react-animated-text-content";

export const navMapper = {
	Create: { link: "/create", className: "btn1" },
};

const useStyles = makeStyles((theme) => ({
	navContainer: {
		width: "100%",
		padding: "2rem",
		backgroundColor: "black",
	},

	buttons: {
		"&:hover ": {
			padding: "0.5rem",
			border: "1px solid black",
		},
	},
}));

const Nav = () => {
	const classes = useStyles();
	return (
		<Stack>
			<Stack
				direction="row"
				justifyContent="space-around"
				className={classes.navContainer}
			>
				<HeroImg />
				<Button variant="text" component="label" className={classes.buttons}>
					<a
						href="https://tomide-adeoye.netlify.app/"
						target="_blank"
						rel="noreferrer"
						style={{
							textDecoration: "none",
							color: "white",
						}}
					>
						Developer
					</a>
				</Button>
			</Stack>
			<Box
				sx={{
					fontSize: "2rem",
					color: "white",
					background:
						"linear-gradient(90deg, rgba(17,1,1,1) 0%, rgba(119,5,5,1) 67%, rgba(43,1,1,1) 100%)",
				}}
			>
				<AnimatedText
					type="words"
					animation={{
						x: "200px",
						y: "-20px",
						scale: 1.1,
						ease: "ease-in-out",
					}}
					animationType="float"
					interval={0.06}
					duration={0.8}
					tag="h2"
					includeWhiteSpaces
					threshold={0.1}
					rootMargin="20%"
				>
					Start creating new exciting notes!
				</AnimatedText>
			</Box>
		</Stack>
	);
};

export default Nav;
