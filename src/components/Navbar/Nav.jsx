import React from "react";
import "./Nav.css";
import HeroImg from "../HeroImg/HeroImg";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { routes } from "../../App";
import { makeStyles } from "@mui/styles";

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
	);
};

export default Nav;
