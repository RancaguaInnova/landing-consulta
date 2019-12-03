import React from 'react'
import Map from 'components/Map'
import Bases from 'components/Bases'
import Vote from 'components/Vote'
import './styles.css'

const Home: React.FC = () => {
	return (
		<div className='Home'>
			<p>Bajada</p>
			<Vote />
			<Bases />
			<Map />
			<a href=''>Inscripción de voluntarios</a>
		</div>
	)
}

export default Home
