import React from "react";
import HeroImg from "./HeroImg/HeroImg";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	footer: {
		width: "100%",
		padding: "2rem",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#362417",
		color: "#ffffff",
		fontSize: "0.9rem",
		borderRadius: "1rem",
		marginTop: "2rem",
		boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
	},
	footerContent: {
		margin: "0 4rem",
		textAlign: "left",
	},
}));

const currentYear = new Date().getFullYear();

export const DefaultFooter = () => {
	const classes = useStyles();

	return (
		<Stack
			spacing={2}
			className={classes.footer}
			direction="row"
			divider={<Divider orientation="vertical" flexItem light={true} />}
		>
			<HeroImg />
			<Stack className={classes.footerContent}>
				<p>
					Tomide is a software engineer with a vision to unite problem-solving
					across different domains in startups with software architecture.
				</p>
				<p>Copyright © {currentYear}</p>
			</Stack>
		</Stack>
	);
};
