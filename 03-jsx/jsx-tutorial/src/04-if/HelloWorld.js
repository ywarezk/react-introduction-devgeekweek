

// <HelloWorld />
// <h1 class="hello"></h1>
// <label for=""></label>
// label.for
// <p style="background-color: red" ></p>
export function IfExample() {
	// 0 - 1
	const stamRandom = Math.random();
	
	const calculateSomething = () => {
		// if()
		//  return 
	}
	
	// if(...) is not an express
	// someCondition ? 'some value' : ' other'
	return (
		<h1>
			{ stamRandom > 0.5 ? 'big' : 'small' }	
			{ stamRandom > 0.5 ? 'big' : null }	
			
			{/* false / 'big' */}
			{ stamRandom > 0.5 && 'big' }	
			
			{/* null / big */}
			{ stamRandom > 0.5 ? null : 'big' }				
			
			{/* true / big */}
			{ stamRandom > 0.5 || 'big' }	
			
			{
				calculateSomething()
			}
		</h1>
		
	)
}

