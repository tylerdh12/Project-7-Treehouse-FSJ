import React from 'react';

export default function Preview(props) {
	return (
		<div className='preview'>
			<img className='preview--image' src={props.location.url} alt='random' />
		</div>
	);
}
