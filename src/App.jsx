import "./App.css";
import Info from "./components/Info";
import Weather from "./components/Weather";

function App() {
  // const [weatherData, setWeatherData] = useState(null)
  // const [location, setLocation] = useState("")


  // console.log(import.meta.env.VITE_WEATHER_API)
  // useEffect(() => {
  //   const fetchData = async () => 
  //   {
  //     try {
  //       const response = await axios.get(
  //         `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${location}&days=4&aqi=yes&alerts=yes`
  //       );
  //       setWeatherData(response.data)
  //       console.log(response)
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     if (location) 
  //     {
  //       fetchData()
  //     }
  //   };
  // }, [location]);

  return (
    <div className="App">
      <Weather/>
      <Info/>
    </div>
  );
}

export default App;
