import React from 'react'
import Map from 'components/Map'
import Bases from 'components/Bases'
import Vote from 'components/Vote'
import './styles.css'

const Home: React.FC = () => {
	return (
		<div className='container'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat justo cras, urna nostra convallis
				consequat molestie. In vitae cum quam taciti at ac cursus donec aliquet, tincidunt auctor et non
				nascetur facilisis condimentum tortor phasellus, scelerisque mollis penatibus id turpis metus dis
				pretium. Primis parturient dictum hac eleifend rutrum lobortis sollicitudin lacinia, vehicula fermentum
				placerat quisque ante velit a ornare, nostra etiam eros pretium leo aliquet varius. Eros accumsan dictum
				placerat libero ac litora curabitur interdum, senectus quisque cras ornare nisi luctus iaculis,
				vestibulum ligula sollicitudin augue semper dictumst mus.
			</p>
			<Vote />
			<Bases />
			<Map />
			<button className='btn btn-primary btn-lg'>Inscripción de voluntarios</button>
		</div>
	)
}

export default Home
