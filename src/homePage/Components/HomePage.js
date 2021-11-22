import { Title } from "../../commons"
import WeatherCard from "../../WeatherCard"

function HomePage() {
    return(
        <div>
            <Title title={'5-Day Forecast'}/>
            <div>
                <p>Delhi, India</p>
                <WeatherCard/>
            </div>
        </div>
    )
}

export { HomePage }