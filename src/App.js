import React, { useState } from 'react'
import Header from './components/Header'

export default function App() {
	const [images, setImages] = useState([])
	return (
		<>
			<Header handleSubmit={(data) => setImages(data.results)} />
			<div className="container">
				<div className="images">
					{images.map((image) => (
						<article className="images__container" key={image.id}>
							<img
								className="images__container--img"
								src={image.urls.small}
								alt={image.alt_description}
							/>
						</article>
					))}
				</div>
			</div>
		</>
	)
}
