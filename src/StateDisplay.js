import React, { useContext } from "react";
import { myContext } from "./myContext";

const StateDisplay = () => {
	const text = useContext(myContext);
	return (
		<div>
			<b>{JSON.stringify(text)}</b>
		</div>
	);
};

export default StateDisplay;
