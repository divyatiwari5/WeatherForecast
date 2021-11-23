import axios from "axios"
import { useEffect, useState } from "react"
import { Title } from "../../../commons"
import WeatherCard from "../../../WeatherCard"

function HomePage() {

    const [ data, setData ] = useState([]);
    useEffect(() => {
        axios.get('http://api.weatherapi.com/v1/forecast.json?key=f01413abdc8f48dbaf581544212211&q=Delhi&days=5&aqi=no&alerts=no')
        .then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log({error});
        })
    }, [])

    return(
        <div className="main">
            <Title title={'5-Day Forecast'}/>
            <p className="location">Delhi, India</p>
            <div className="content">
                {
                    data && data?.forecast?.forecastday.map((forecast, i) => {
                        const temperature = forecast?.day?.avgtemp_c;
                        const condition = forecast?.day?.condition?.text;
                        const icon = forecast?.day?.condition?.icon;
                        return <WeatherCard
                            key={i}
                            date={forecast.date}
                            temperature={temperature}
                            condition={condition}
                            icon={icon}
                        />
                    })
                }
            </div>
        </div>
    )
}

export { HomePage }