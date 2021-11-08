// Props

// <HelloWorld name="Yariv" age={36} /> */}
// {name: "yariv", age: 36}
export function HelloWorld({
	name,
	age,
	children
}) {
	return (
		<>
			<h1>
				Hello World {name} {age}
			</h1>
			{children}
		</>
	)	
}