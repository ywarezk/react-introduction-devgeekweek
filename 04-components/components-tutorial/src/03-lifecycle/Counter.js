import { useState, useEffect } from "react"


export function Counter({name}) {
	const [counter, setCounter] = useState(0)
	
	// mount, update
	useEffect(() => {
		setInterval(() => {
			setCounter((counterUpdated) => {
				return counterUpdated + 1
			});
		}, 1000);	
	}, [])
	
	/*
	useEffect(() => {
		
	})
	*/
	
	useEffect(() => {
		return () => {
			
		}	
	}, [counter, name])
	
	/*
	// Don't do this: We cannot place state update inside render function
	setInterval(() => {
		setCounter(counter + 1);
	}, 1000);
	*/
	
	/*
	if (...) {
		setState
	}
	*/
	
	return (
		<h1>
			{ counter }
		</h1>
	)
}