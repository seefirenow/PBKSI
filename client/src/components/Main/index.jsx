import React, { Component }  from 'react';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Navbar } from "../Main/navbar";
import Body from  '../../resume/Body/Body'


const Main = () => {

	return (
		<div>
			<Navbar/>
		<Body/>
		</div>
	);
};

export default Main;
