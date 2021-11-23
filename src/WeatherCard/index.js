function WeatherCard(props) {
    return (
        <div className="weather-card">
            <div className="day-time">
                <h4 className="day">Monday</h4>
                <p className="time">{props.date}</p>
            </div>
            <div className="temperature">
                <img src={props.icon}/>
                <h3>{props.temperature} C</h3>
            </div>
            <p className="condition">{props.condition}</p>
        </div>
    )
}

export default WeatherCard