// Props

import { useState } from 'react';

export function Toggle() {
	// [isVisible, setIsVisible]
	// if ()
	const [isVisible, setIsVisible] = useState(true)
	// const isVisibleArray = useState(true);
	// const isVisible = isVisibleArray[0];
	// const setIsVisible = isVisibleArray[1];
	
	const [user, setUser] = useState({
		firstName: 'Yariv',
		lastName: 'Katz'
	})
	
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	}
	
	return (
		<>
			{
				isVisible && (
					<h1>
						toggle me
					</h1>
				)
			}
			<button onClick={ toggleVisibility }>
				toggle visibility
			</button>
		</>
	)	
}