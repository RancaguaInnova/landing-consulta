import React from 'react'
import './styles.css'
import GoogleMapReact from 'google-map-react';


interface IProps {
 center?:{
   lat:number,
   lng:number
 },
 zoom?:number
}


const Map:  React.FC<IProps> = ({center={lat:-34.17083,lng:-70.74444},zoom=13}:IProps,props)  => {
  
	return (
		<div className='Map mt-5'>
		<div>
    	<h4>Horario y lugares de votación</h4>
			<p>
		
					Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat justo cras, urna nostra
					convallis consequat molestie. In vitae cum quam taciti at ac cursus donec aliquet, tincidunt auctor
					et non nascetur facilisis condimentum tortor phasellus, scelerisque mollis penatibus id turpis metus
					dis pretium.
			</p></div>
			{/* <img className='img-fluid' src='assets/mapa.png' /> */}
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
      
        </GoogleMapReact>
      </div>
		</div>
	)
}

export default Map



/*

class SimpleMap extends React.Component {

  static defaultProps: { center: { lat: number, lng: number }, zoom: number} = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


  render() {
    const { center } = this.props
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
        >
      
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
*/