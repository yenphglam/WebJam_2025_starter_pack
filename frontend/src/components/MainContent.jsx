import RandomItem from "@/components/RandomItem";

export default function MainContent() {
    return (
		<>
			<div id="welcome" class="header-section">
				<h1>HygenicMe</h1>
				<h2>A click away from a healthier you!</h2>
			</div>

			<div class="column-section">
				<button class = "button-light">Learn More</button>
				<button class = "button-dark">Take the Quiz</button>
			</div>

			<div class="column-section">
				<div class="header-section">
					<h3>Who We Are</h3>
					<p>The creators of HygenicMe strive to create a better world by educating the public about common methods to stay hygenic and practical tips that anyone can apply to their life instantly!</p>
				</div>
				<separator></separator>
				<div class="header-section">
					<h3>What We Do</h3>
					<p>We do the Lorem Ipsum Dolor Sit Amet. Super interesting stuff, I know. Let's blabber some more to fill up this page, and I don't think that's enough text. Just a little more yapping to fill up the lorem ipsum dolor sit amet and I think we're good now!</p>
				</div>
				<separator></separator>
				<div class="header-section">
					<h3>Your Next Steps</h3>
					<p>You can also do the Lorem Ipsum Dolor Sit Amet. Super interesting stuff, I know. Let's blabber some more to fill up this page, and I don't think that's enough text. Just a little more yapping to fill up the lorem ipsum dolor sit amet and I think we're good now!</p>
				</div>
			</div>

			<div class="header-section">
				<h1>Heading</h1>
				<h2>Subheading</h2>
				<div class="grid-section">
					<RandomItem maximum="1000" />
					<RandomItem maximum="1000" />
					<RandomItem maximum="1000" />
					<div class="centered"><RandomItem maximum="1000"/></div>
				</div>
			</div>
		</>
    )
}