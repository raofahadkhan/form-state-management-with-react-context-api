import { createContext } from "react";

const initial_state = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	phoneNumber: "",
	age: "",
};

export const myContext = createContext(initial_state);
