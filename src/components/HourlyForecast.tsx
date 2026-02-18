import DropdownDays from "./DropDownDays";


const HourlyForecast = () => {
    const options = [
        { label: "Monday", value: "monday" },
        { label: "Tuesday", value: "tuesday" },
        { label: "Wednesday", value: "wednesday" },
        { label: "Thursday", value: "thursday" },
        { label: "Fryday", value: "fryday" },
        { label: "Saturday", value: "saturday" },
        { label: "Sunday", value: "sunday" },

    ];

    const handleSelect = (option: { label: string; value: string }) => {
        console.log("Seleccionaste:", option);
    };
    return (
        <div>
            <div>
                <h2 className="capitalize">hourly forecast</h2>
                <DropdownDays options={options} onSelect={handleSelect} />
            </div>
        </div>
    )
}
export default HourlyForecast