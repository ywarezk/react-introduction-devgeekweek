

// Array.prototype.map
// const somenewArray = somearray.map((originalValue) => transform(originalValue))
export function ForExample() {
	const todoList = [
		{ id: 1, title: 'hello world' },
		{ id: 2, title: 'foo bar' },
		{ id: 3, title: 'lurem ipsum' },
	]
	
	return (
		<ul>
			{/* <li></li> */}
			{/* {
				[
					<li>hello world</li>,
					<li>hello world</li>,
					<li>hello world</li>	
				]
			} */}
			
			{
				todoList.map((orignalObject) => {
					return (
						<li key={orignalObject.id}>
							{
								orignalObject.title
							}
						</li>
					)
				})
			}
		</ul>
		
	)
}

