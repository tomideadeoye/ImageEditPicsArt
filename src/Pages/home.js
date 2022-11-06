import { Link } from "react-router-dom";
import Button from "../components/Button";
import { navMapper } from "../components/Navbar/Nav";
import AnimatedText from "react-animated-text-content";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	whiteBoxy: {
		border: "0.1rem solid white",
		margin: "1rem",
		padding: "1.5rem",

		"&:hover": {
			backgroundColor: "rgba(black, 0.5)"
		}
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<>
			<section className="upperSection">
				<img
					className="headerBg"
					src={process.env.PUBLIC_URL + "./images/PicAndEditBG.jpg"}
					alt="PicAndEdit_headerBg"
				/>
				<div className="headerNote">
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
						Start creating new exciting image transformations!
					</AnimatedText>
					<Box className={classes.whiteBoxy}>
						<h6>
							Say Toodles to expensive designers, poor-quality prints, and slow
							creative processes. With PicAndEdit, you can create new exciting
							image transformations, fantastic banner templates, customize it
							online, and print it on multiple social media platforms - no
							creative skills needed
						</h6>
						<Link to={navMapper.Create.link}>
							<Button title="Start Creating!" />
						</Link>
					</Box>
				</div>
			</section>
		</>
	);
};

export default Home;
