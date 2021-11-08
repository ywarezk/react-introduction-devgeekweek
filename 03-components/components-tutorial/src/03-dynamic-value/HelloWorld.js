

// <HelloWorld />
// <h1 class="hello"></h1>
// <label for=""></label>
// label.for
// <p style="background-color: red" ></p>
export function HelloWorldWithDynamicValue() {
	return (
		<>
			{/* number */}
			<h1 className={'hello-world-' + Math.random()} >Hello world {Math.random()}</h1>			
			
			{/* string */}
			<h1 className={'hello-world-' + Math.random()} >Hello world {'some string'}</h1>			
			
			{/* true */}
			{/* false */}
			{/* null/ undefined / falsey */}
			<h1 className={'hello-world-' + Math.random()} >Hello world {true} {false}</h1>			
			
			{/* JSX */}
			<h1 className={'hello-world-' + Math.random()} >Hello world { <span>some span</span> }</h1>			
			
			{/* array */}
			<h1>
				{
					[
						'hello',
						42,
						true,
						false,
						<span>
							some span
						</span>
					]
				}
			</h1>
			
			<p style={ {backgroundColor: 'red'} }>
				Style this paragaph
			</p>
		</>
	)
}

/*
1. between tags
2. props - attribute
*/

/**

expressions =>  a + b
statement =>  var a = 10

// statement
if (someCondition) {
	... do something
}

const hello = someCondition ? 'hello' : false


you have to place expression in  {}


When between tags you have to return ReactNode

1. number
2. string

 */