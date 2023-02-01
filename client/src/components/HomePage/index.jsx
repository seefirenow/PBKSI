import React, { Component }  from 'react';
import {Navbar} from './navbar';
import styles from "./styles.module.css";




import MainPic from "../../assets/images/mainpage.svg";
import MainTwoPic from "../../assets/images/two.svg";
import MainThreePic from "../../assets/images/three.svg";


const Home = () => {

	
	return (
		<div >
		<Navbar/>
		<div className={styles.main_container} >
		<div className={styles.img_container}>
		<img src={MainTwoPic} alt="Obrazek dekoracyjny"></img>
		</div>
			<div className={styles.text_container }>
			<h1>ONLINE RESUME BUILDER</h1>
			<p>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
			<h3>Reviewed by the community. Trusted by professionals</h3>
			<div className={styles.toolbar}>
				<a href='/login'>
              <button>
                Create My Resume
              </button>
			  </a>
          </div>
			</div>
		</div>
	
		</div>
	);
};

export default Home;