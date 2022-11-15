import React from "react";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/home";
import { Box, ThemeProvider } from "@mui/material";
import { DefaultFooter } from "./components/Footer";
import { theme } from "./colors";

const App = () => {
	return (
		<Box
			sx={{
				width: "100%",
				overflowX: "hidden",
			}}
		>
			<Router>
				<ThemeProvider theme={theme}>
					<Nav />
					<Home />
					<DefaultFooter />
				</ThemeProvider>
			</Router>
		</Box>
	);
};

export default App;
