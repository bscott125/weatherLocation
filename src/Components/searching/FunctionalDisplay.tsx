import React from 'react'

type PropsRecieved = {
	latitude: number, 
	longitude: number,
	// weatherApiKey: string,
	temperature: string

}


const FunctionalDisplay: React.FunctionComponent<PropsRecieved> = (props) => {
	return(
		<div>
			<h4>Current Latitude: {props.latitude}</h4>
      <h4>Current longitude: {props.longitude}</h4>
			<h4>Temperature: {props.temperature}</h4>
		</div>
	)
}

export default FunctionalDisplay