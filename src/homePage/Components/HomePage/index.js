import axios from "axios"
import moment from "moment";
import { useEffect, useState } from "react"
import { Title, Search } from "../../../commons"
import WeatherCard from "../../../WeatherCard"

function HomePage() {

    const [ data, setData ] = useState([]);
    const [ location, setLocation ] = useState('');
    const [ daysCount, setDaysCount ] = useState(0);
    const [ area, setArea ] = useState('Delhi');

    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=f01413abdc8f48dbaf581544212211&q=${area}&days=5&aqi=no&alerts=no`)
        .then((res) => {
            console.log(res);
            setData(res.data);
        }).catch((error) => {
            console.log({error});
        })
    }, [area])

    useEffect(() => {
        setLocation(data?.location?.name + ', ' + data?.location?.country);
        setDaysCount(data?.forecast?.forecastday.length);
    }, [data])

    const search = (value) => {
        setArea(value);
    }

    return(
        <div className="main">
            <Title title={daysCount + '-Day(s) Forecast'}/>
            <Search onEnterPress={search}/>
            <p className="location">{location}</p>
            <div className="content">
                {
                    data && data?.forecast?.forecastday.map((forecast, i) => {
                        const temperature = forecast?.day?.avgtemp_c;
                        const condition = forecast?.day?.condition?.text;
                        const icon = forecast?.day?.condition?.icon;
                        const date = moment.unix(forecast.date_epoch).format('MMM Do, YYYY, ddd, h:mm A')
                        return <WeatherCard
                            key={i}
                            date={date}
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