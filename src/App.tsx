import DailyForecast from "./components/DailyForecast"
import FeelsLikeWeather from "./components/FeelsLikeWeather"
import Header from "./components/Header"
import Humidity from "./components/Humidity"
import Precipitation from "./components/Precipitation"
import SearchCity from "./components/SearchCity"
import WeatherCard from "./components/WeatherCard"
import Wind from "./components/Wind"

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <SearchCity />
      <WeatherCard />

      <div className="grid grid-cols-2 gap-3 mt-4 w-[90%]">
        <FeelsLikeWeather />
        <Humidity />
        <Wind />
        <Precipitation />
      </div>

      <DailyForecast />
    </div>
  )
}
export default App