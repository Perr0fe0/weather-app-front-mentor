const WeatherCard = () => {
    return (
        <div className="weather-card w-[90%] rounded-lg p-5 mt-8 flex flex-col items-center">
            <div>
                <h2 className="text-3xl">Berlin, Germany</h2>
                <p>Tuesday, Aug 5 2025</p>
            </div>
            <div className="flex items-center">
                <img className="w-28" src="public/images/icon-sunny.webp" alt="" />
                <p className="text-8xl">68°</p>
            </div>
        </div>
    )
}
export default WeatherCard