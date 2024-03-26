import { TbTemperatureCelsius } from "react-icons/tb";
import { WiSunset } from "react-icons/wi";
const Info = () => {
  return (
    <div className="info">
        <p id="Şehir, ülke"></p>
        <div className="genelDeger">
            <p id="sicaklik">--</p><TbTemperatureCelsius className='fa-c'/>
        </div>
        <p id="havadurumu">Hava Durumu</p>
        <div className="his">
            <p id="hissedilen">Hissedilen</p><WiSunset className='fa-c'/>
        </div>
    </div>
  )
}

export default Info