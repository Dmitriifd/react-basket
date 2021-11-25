import React, { useState, useEffect } from 'react';

const Clicker = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		if (count) {
			setCount(count - 1);
		}
	};

	useEffect(() => {
		console.log('Hello from clicker', count);
	}, [count]);

	return (
		<div className='App' style={{ margin: '30px 0', textAlign: 'center' }}>
			<button className='btn' onClick={decrement}>
				-
			</button>
			<span
				style={{ display: 'inline-block', padding: '0 30px', fontSize: '20px' }}
			>
				{count}
			</span>
			<button className='btn' onClick={increment}>
				+
			</button>
		</div>
	);
};

export { Clicker };
