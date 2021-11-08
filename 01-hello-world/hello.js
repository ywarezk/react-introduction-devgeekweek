/**
 Create hello world in <h1> with react
 */

/*
 
const h1 = document.createElement('h1')
h1.innerText = 'hello world'
container = document.getElementById('container');
container.appendChild(h1)

*/
/*
<h1>
	<strong>
		<u>
			hello world with react and underline
		</u>
	</strong>
</h1>
*/
// ReactElement
// const h1 = React.createElement(
// 	'h1',
// 	null,
// 	React.createElement(
// 		'strong', 
// 		null,
// 		React.createElement(
// 			'u',
// 			null,
// 			'hello world with underline'
// 		)
// 	)
// );	

// React.createElement(Hello)

// const h1 = (
// 	<h1 className="" id="" data-dor="my-element">
// 		<strong>
// 			<u>
// 				hello world with react and underline and jsx
// 			</u>
// 		</strong>
// 	</h1>
// )

// component
function Hello() {
	return (
		<h1>
			<strong>
				<u>
					hello world with react and underline and jsx in a function with createelement as funtion
				</u>
			</strong>
		</h1>
	)
}

function App() {
	return (
		<Hello />
	)
}

ReactDOM.render(<App />, document.getElementById('container'));


