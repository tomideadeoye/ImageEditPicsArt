import React from "react";
import Nav from "./components/Navbar/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/createPage";
import Home from "./Pages/home";
import { PhotoEditContextProvider } from "./Services/axiosCalls";
import { Box, ThemeProvider } from "@mui/material";
import { DefaultFooter } from "./components/Footer";
import { theme } from "./colors";

export const routes = {
	home: {
		path: "/",
		component: Home,
		name: "Home",
	},
	create: {
		path: "/create",
		component: Create,
		name: "Create",
	},
};

const App = () => {
	let routes = {
		"/": <Home />,
		"/create": <Create />,
	};
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<PhotoEditContextProvider>
					<Nav />
					<Routes>
						{Object.entries(routes).map(([path, Component]) => (
							<Route key={path} path={path} element={Component} />
						))}
					</Routes>
					<Box
						sx={{
							bottom: 0,
							width: "100%",
							display: "flex",
						}}
					>
						<DefaultFooter />
					</Box>
				</PhotoEditContextProvider>
			</ThemeProvider>
		</Router>
	);
};

export default App;
