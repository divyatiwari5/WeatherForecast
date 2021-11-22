function WeatherCard() {
    return (
        <div className="weather-card">
            <div className="day-time">
                <h4 className="day">Monday</h4>
                <p className="time">Nov 1st, 1:00pm</p>
            </div>
            <div className="temperature">
                <img/>
                <h3>34 C</h3>
            </div>
            <p className="">Clear sky</p>
        </div>
    )
}

export default WeatherCard