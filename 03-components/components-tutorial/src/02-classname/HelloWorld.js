

// <HelloWorld />
// <h1 class="hello"></h1>
// <label for=""></label>
// label.for
export function HelloWorldWithClass() {
	return (
		<>
			<h1 className="hello">Hello world</h1>
			<label htmlFor="email" data-testid="hello">
				Email
			</label>
		</>
		
	)
}