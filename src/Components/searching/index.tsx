import React from "react";
import FunctionalDisplay from './FunctionalDisplay'

	type myLocation = {
		latitude: number, 
		longitude: number,
		weatherApiKey: string,
		temperature: string

	}


class Searching extends React.Component<{}, myLocation> {
   constructor(props: any) {
	 super(props)
	 this.state = {
		latitude: 0,
		longitude: 0,
		weatherApiKey: '1ad2e3efb2144a7300b3427b4f263957',
		temperature: ''
	 }
	 }

	 componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Position:', position)
			this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			})
				
				fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.state.weatherApiKey}&units=imperial`)
						.then(res => res.json())
						.then(json => this.setState({ temperature: json.main.temp}))
						.catch(e => console.error(e))
    });
	}
	
					
				
	render(){
		return(
			<>
			<h1>SEE THE WEATHER IN YOUR LOCATION</h1>
			<FunctionalDisplay 
			latitude = {this.state.latitude}
      longitude ={this.state.longitude}
			temperature={this.state.temperature}
			/>
			</>
		)
	}
}

export default Searching