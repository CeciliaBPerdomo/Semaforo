import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [sombra, setSombra] = useState("");
	return (
		<div className="d-flex flex-column mb-3" style={{margin: "50px auto", width: "75px"}}>
			<div onClick={() => setSombra("red")} 
				className={"cols-3 bg-danger text-center rounded-circle" + " " + 
				(sombra === "red" ? "buttonshadowR" : "")}>
				<h1>◯</h1>
			</div>
			
			<div onClick={() => setSombra("yellow")} 
			className={"cols-3 bg-warning text-center rounded-circle" + " " 
			+ (sombra === "yellow" ? "buttonshadowY" : "")}>
				<h1>◯</h1>
			</div>

			<div onClick={() => setSombra("green")} 
			className={"cols-3 bg-success text-center rounded-circle" + " " 
			+ (sombra === "green" ? "buttonshadowG" : "")}>
				<h1>◯</h1>
			</div> 
		</div>
	);
};

export default Home;
