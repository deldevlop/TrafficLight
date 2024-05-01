import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("green");

	return (
		<div className="trafficLight">
			<div className="rectangleForm">
				<div onClick={() => setColor("red")}
					className={"circle red " + (color === "red" ? "glowRed" : " ")}></div>
				<div onClick={() => setColor("green")}
					className={"circle green " + (color === "green" ? "glowGreen" : " ")}></div>
				<div onClick={() => setColor("yellow")}
					className={"circle yellow " + (color === "yellow" ? "glowYellow" : " ")}></div>
			</div>
		</div>
	);
};

export default Home;


