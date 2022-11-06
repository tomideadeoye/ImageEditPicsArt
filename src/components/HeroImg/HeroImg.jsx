import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	heroImg: {
		width: "20%",
		display: "flex",
		cursor: "pointer",
		justifyContent: "center",
		alignItems: "center",
	},
	h1: {
		fontWeight: "700",
	},
	span: {
		fontSize: "1.2rem",
		fontWeight: "400",
	},

	img: {
		width: "60px",
		height: "60px",
	},
}));

const HeroImg = () => {
	const classes = useStyles();
	return (
		<Link
			to="/"
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<div className={classes.heroImg}>
				Pic<span className={classes.span}>&</span>Edit
				<img
					className={classes.img}
					src={process.env.PUBLIC_URL + "./images/PicAndEdit.png"}
					alt="PicAndEdit_logo"
				/>
			</div>
		</Link>
	);
};

export default HeroImg;
