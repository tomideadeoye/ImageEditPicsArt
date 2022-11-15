import { makeStyles } from "@mui/styles";
import { Button, Divider, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		backgroundColor: "#000",
		padding: "2rem",
	},

	whiteBoxy: {
		border: "0.1rem solid white",
		margin: "1rem",
		padding: "1.5rem",
		textAlign: "left",

		"&:hover": {
			backgroundColor: "rgba(black, 0.5)",
		},

		"& > *": {
			color: "white",
		},
	},

	input: {
		color: "blue",
	},
}));

const Home = () => {
	const classes = useStyles();

	const oldData = JSON.parse(localStorage.getItem("myNotes"));

	const [notesList, setNotesList] = useState(oldData || []);
	const [currentNote, setCurrentNote] = useState({
		title: "",
		content: "",
	});

	return (
		<>
			<section className={classes.container}>
				<Box
					sx={{
						color: "white",
					}}
				>
					<Stack
						className={classes.whiteBoxy}
						dividers={
							<Divider
								orientation="horizontal"
								flexItem
								sx={{ color: "white" }}
							/>
						}
					>
						<Stack
							component="form"
							noValidate
							autoComplete="off"
							sx={{
								backgroundColor: "white",
								padding: "4rem",
							}}
						>
							<TextField
								id="filled-basic"
								label="Title"
								variant="filled"
								inputProps={{ className: classes.input }}
								value={currentNote.title}
								onChange={(e) => {
									setCurrentNote({
										...currentNote,
										title: e.target.value,
									});
								}}
							/>
							<TextField
								inputProps={{ className: classes.input }}
								id="standard-basic"
								label="Note"
								variant="standard"
								fullWidth={true}
								rows={10}
								multiline={true}
								value={currentNote.content}
								onChange={(e) => {
									setCurrentNote({
										...currentNote,
										content: e.target.value,
									});
								}}
							/>
							<Button
								title="Save"
								sx={{
									textAlign: "center",
								}}
							/>
							<Button
								onClick={() => {
									let newNotesList = [...notesList, currentNote];
									localStorage.setItem("myNotes", JSON.stringify(newNotesList));
									setNotesList([...notesList, currentNote]);
									setCurrentNote({
										title: "",
										content: "",
									});
								}}
							>
								Save
							</Button>
						</Stack>
						<Stack>
							{notesList.map((note) => {
								return (
									<Stack
										key={note.title}
										// className={classes.whiteBoxy}
										sx={{
											backgroundColor: "black",
											padding: "4rem",
										}}
									>
										<h4>{note.title}</h4>
										<Box
											sx={{
												fontSize: "1rem",
											}}
										>
											{note.content}
										</Box>
									</Stack>
								);
							})}
						</Stack>
					</Stack>
				</Box>
			</section>
		</>
	);
};

export default Home;
