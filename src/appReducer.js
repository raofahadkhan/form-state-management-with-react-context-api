import {
	age,
	email,
	firstName,
	lastName,
	password,
	phoneNumber,
	reset,
} from "./actions";

const appReducer = (state, action) => {
	switch (action.type) {
		case firstName:
			return {
				...state,
				firstName: action.payload,
			};

		case lastName:
			return {
				...state,
				lastName: action.payload,
			};

		case email:
			return {
				...state,
				email: action.payload,
			};

		case password:
			return {
				...state,
				password: action.payload,
			};

		case phoneNumber:
			return {
				...state,
				phoneNumber: action.payload,
			};

		case age:
			return {
				...state,
				age: action.payload,
			};

		case reset:
			return {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				phoneNumber: "",
				age: "",
			};

		default:
			return state;
	}
};

export default appReducer;
