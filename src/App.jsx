import React from "react";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import { Box, ThemeProvider } from "@mui/material";
import { DefaultFooter } from "./components/Footer";
import { theme } from "./colors";

export const routes = {
	home: {
		path: "/",
		component: Home,
		name: "Home",
	},
};

const App = () => {
	let routes = {
		"/": <Home />,
	};
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
					<Routes>
						{Object.entries(routes).map(([path, Component]) => (
							<Route key={path} path={path} element={Component} />
						))}
					</Routes>
					<DefaultFooter />
				</ThemeProvider>
			</Router>
		</Box>
	);
};

export default App;
