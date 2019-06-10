import React from "react";

/* Import Components */
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

/* openweathermap.org API Key */
const API_KEY = "2346a7254155ff5fd112d0fbc0fbfc85";

class App extends React.Component{

    //initial state of object that contains key-value pairs of the data that we need
    state = {
        city : undefined,
        country : undefined,
        temperature : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined
    }

    getWeather = async (e) => {
        //prevent default behaviour of the component when we press the button
        e.preventDefault();
        //user inputs
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        //the constant to fetch the specified url
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        //convert the response to json format
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                city : data.name,
                country : data.sys.country,
                temperature : data.main.temp,
                humidity : data.main.humidity,
                description : data.weather[0].description,
                error : ""
            })
        }else{
            this.setState({
                city : undefined,
                country : undefined,
                temperature : undefined,
                humidity : undefined,
                description : undefined,
                error : "Please enter a valid value."
            })
        }
    }
    render(){
        return(
            <div>
                <Titles/>
                <Form
                    getWeather={this.getWeather}
                />
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error ={this.state.error}
                />
            </div>
        );
    }
}

export default App; /*make this component available for other files to import*/
