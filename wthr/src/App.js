import React from "react";

/* Import Components */
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

/* openweathermap.org API Key */
const API_KEY = "2346a7254155ff5fd112d0fbc0fbfc85";

class App extends React.Component{
    getWeather = async (e) => {
        //prevent default behaviour of the component when we press the button
        e.preventDefault();
        //user inputs
        //const city = e.target.elements.name.city.value;
        //const country = e.target.elements.name.country.value;
        //the constant to fetch the specified url
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}`);
        //convert the response to json format
        const data = await api_call.json();
        console.log("test");
        console.log(data);
    }
    render(){
        return(
            <Titles/>
            <Form getWeather={this.getWeather}/>
            <Weather/>
            </div>
        );
    }
}

export default App; /*make this component available for other files to import*/
