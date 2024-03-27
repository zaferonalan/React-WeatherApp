import axios from "axios";
import { useState } from "react";

const Weather = ({setInfo,setState}) => {
const [city, setCity] = useState("")
const handleChange = async() => 
{
  const api = "2e14d9a37a744faa77f7d49e092a7524"
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
  await axios(baseURL).then(response => setInfo(response.data))
  setState(true)
}
  return (
    <div className="app-container">
      <h1 className="app-title">Hava Durumu Uygulaması</h1>
      <form onSubmit={(e)=>{e.preventDefault(); handleChange()}}>
        <div className="form" >
          <input onChange={(e)=>{setCity(e.target.value)}} className="inputText" placeholder="Şehri Giriniz" type="text" />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn" >Verileri Getir</button>
        </div>
      </form>
    </div>
  );
};

export default Weather;
