import { useContext, useReducer } from "react";
import {
	age,
	email,
	firstName,
	lastName,
	password,
	phoneNumber,
} from "./actions";
import appReducer from "./appReducer";
import { myContext } from "./myContext";
import StateDisplay from "./StateDisplay";

export const GlobalProvider = ({ children }) => {
	const initial_state = useContext(myContext);

	const [state, dispatch] = useReducer(appReducer, initial_state);

	const firstNameDispatch = (e) =>
		dispatch({ type: firstName, payload: e.target.value });

	const lastNameDipatch = (e) =>
		dispatch({ type: lastName, payload: e.target.value });

	const emailDispatch = (e) =>
		dispatch({ type: email, payload: e.target.value });

	const passwordDispatch = (e) =>
		dispatch({ type: password, payload: e.target.value });

	const phoneNumberDispatch = (e) =>
		dispatch({ type: phoneNumber, payload: e.target.value });

	const ageDispatch = (e) => dispatch({ type: age, payload: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "reset" });
	};
	return (
		<myContext.Provider
			value={{
				firstName: state.firstName,
				lastName: state.lastName,
				email: state.email,
				password: state.password,
				phoneNumber: state.phoneNumber,
				age: state.age,
				firstNameDispatch,
				lastNameDipatch,
				emailDispatch,
				passwordDispatch,
				phoneNumberDispatch,
				ageDispatch,
			}}
		>
			<div className="App">
				<h1>Form With React Context Api</h1>
				<form onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="firstName">First Name: </label>
					<input
						type="text"
						id="firstName"
						placeholder="Enter Your First Name"
						value={state.firstName}
						name="firstName"
						onChange={(e) => firstNameDispatch(e)}
						required
					/>
					<br />
					<br />
					<label htmlFor="lastName">Last Name: </label>
					<input
						type="text"
						id="lastName"
						placeholder="Enter Your Last Name"
						name="lastName"
						value={state.lastName}
						onChange={(e) => lastNameDipatch(e)}
						required
					/>
					<br />
					<br />
					<label htmlFor="email">E-mail: </label>
					<input
						type="email"
						id="email"
						placeholder="Enter Your email"
						name="email"
						value={state.email}
						onChange={(e) => emailDispatch(e)}
						required
					/>
					<br />
					<br />
					<label htmlFor="password">Password: </label>
					<input
						type="password"
						id="password"
						placeholder="Enter Your Password"
						name="password"
						value={state.password}
						onChange={(e) => passwordDispatch(e)}
						required
					/>
					<br />
					<br />
					<label htmlFor="age">Age: </label>
					<input
						type="text"
						id="age"
						placeholder="Enter Your Age"
						name="age"
						value={state.age}
						onChange={(e) => ageDispatch(e)}
						required
					/>
					<br />
					<br />
					<label htmlFor="phoneNumber">Phone Number: </label>
					<input
						type="text"
						id="phoneNumber"
						placeholder="Enter Your Phone Number"
						name="phoneNumber"
						value={state.phoneNumber}
						onChange={(e) => phoneNumberDispatch(e)}
						required
					/>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
				<StateDisplay />
			</div>
		</myContext.Provider>
	);
};
