import React, { Component }  from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/HomePage";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			{user && <Route path="/resume" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
		
			<Route path="/resume" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
