import React, { useRef, useEffect } from 'react';

const WithRef = () => {
	const inputEl = useRef(null);

	useEffect(() => {
		console.log(inputEl);
	});

	return (
		<div>
			<input placeholder='name' ref={inputEl} />
		</div>
	);
};

export { WithRef };
