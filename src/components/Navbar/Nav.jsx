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
		paddingTop: "2rem",
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
				<Link
					to={routes.create.path}
					style={{
						textDecoration: "none",
						color: "black",
					}}
				>
					Create
				</Link>
			</Button>
		</Stack>
	);
};

export default Nav;
