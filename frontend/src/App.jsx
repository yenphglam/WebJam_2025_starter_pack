import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import RandomItem from "@/components/RandomItem";

/*
This is the starting point of our application. Here, we can begin coding 
and transforming this page into whatever best suits our needs. 
For example, we can start by creating a login page, home page, or an about section; 
there are many ways to get your application up and running. 
With App.jsx, we can also define global variables and routes to store information as well as page navigation.
*/
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<nav id="navbar">
				<a id="navbar-brand" href="#">HygenicMe</a>
				<div id="navbar-items">
					<a class="navbar-item" href="#">Home</a>
					<a class="navbar-item" href="#">Quiz</a>
					<a class="navbar-item" href="#">FAQ</a>
					<a class="navbar-item" href="#">Contact</a>
				</div>
			</nav>

			<div id="welcome" class="header-section">
				<h2>Welcome to HygenicMe</h2>
				<h3>Just one click away from a healthier you!</h3>
			</div>

			<div class="column-section">
				<div class="header-section">
					<h2>Who We Are</h2>
					<p>The creators of HygenicMe strive to create a better world by educating the public about common methods to stay hygenic and practical tips that anyone can apply to their life instantly!</p>
				</div>
				<separator></separator>
				<div class="header-section">
					<h2>What We Do</h2>
					<p>We do the Lorem Ipsum Dolor Sit Amet. Super interesting stuff, I know. Let's blabber some more to fill up this page, and I don't think that's enough text. Just a little more yapping to fill up the lorem ipsum dolor sit amet and I think we're good now!</p>
				</div>
				<separator></separator>
				<div class="header-section">
					<h2>Your Next Steps</h2>
					<p>You can also do the Lorem Ipsum Dolor Sit Amet. Super interesting stuff, I know. Let's blabber some more to fill up this page, and I don't think that's enough text. Just a little more yapping to fill up the lorem ipsum dolor sit amet and I think we're good now!</p>
				</div>
			</div>
		</>
	);
}

export default App;
