import React from 'react';

// Import Components
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = (props) => {
	const results = props.photos;
	let query = props.match.params.query;
	let photos;

	if (results.length > 0) {
		// Loading content with if statements
		if (props.loading === true) {
			return <h2>Loading...</h2>;
			// Once the content is loaded then send to photos component to generate photo element
		} else if (props.loading === false) {
			photos = results.map((photo) => {
				return (
					<Photo
						key={photo.id}
						id={photo.id}
						query={query}
						farm={photo.farm}
						secret={photo.secret}
						server={photo.server}
						alt={photo.title}
					/>
				);
			});
		}
		// If nothing is found then display not found component
	} else if (results.length === 0) {
		photos = <NotFound />;
	}

	return (
		<div className='photo-container'>
			<h2>Results for: {query}</h2>
			<ul>{photos}</ul>
		</div>
	);
};

export default Gallery;
