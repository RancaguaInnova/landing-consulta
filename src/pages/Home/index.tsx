import React from 'react'
import Map from 'components/Map'
import Bases from 'components/Bases'
import Vote from 'components/Vote'
import './styles.css'

const Home: React.FC = () => {

	function openForm(){
		window.open("https://rancagua.cl/voluntarios", "_blank"); 

	}
	return (
		<div className='container mt-4'>
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat justo cras, urna nostra convallis
				consequat molestie. In vitae cum quam taciti at ac cursus donec aliquet, tincidunt auctor et non
				nascetur facilisis condimentum tortor phasellus, scelerisque mollis penatibus id turpis metus dis
				pretium.
			</p>
			<Vote />
			<Bases />
			<Map />
			<div className='mt-5'>
				<h4>Inscripción de voluntarios</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat justo cras, urna nostra
					convallis consequat molestie. In vitae cum quam taciti at ac cursus donec aliquet, tincidunt auctor
					et non nascetur facilisis condimentum tortor phasellus, scelerisque mollis penatibus id turpis metus
					dis pretium.
				</p>
				<button className='btn btn-danger btn-lg' onClick={openForm}>Inscripción de voluntarios</button>
			</div>
		</div>
	)
}

export default Home
