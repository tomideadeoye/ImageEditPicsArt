import React from "react";
import HeroImg from "./HeroImg/HeroImg";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	footer: {
		padding: "2rem 0",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#362417",
		color: "#ffffff",
		fontSize: "0.9rem",
		borderRadius: "1rem",
		margin: "2rem",
		boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
	},
	footerContent: {
		margin: "0 4rem",
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
					PicAndEdit makes it easier for both individuals and businesses to have
					a central point from where they can create exciting image
					transformations with one click. <br /> Here, you can create without
					any huge creativity process. Our{" "}
					<b style={{ fontSize: "1.3rem" }}>PicsArt</b> APIs will do the
					hardwork for you.
				</p>
				<p>Copyright © {currentYear}</p>
			</Stack>
		</Stack>
	);
};

export const SimpleFooter = () => {
	const classes = useStyles();
	return (
		<Box className={classes.footer}>
			<Stack
				direction="column"
				justifyContent="space-between"
				alignItems="center"
			>
				<HeroImg />
				<p>Copyright © {currentYear}</p>
			</Stack>
		</Box>
	);
};
