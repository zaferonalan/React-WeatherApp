import React from "react";

const Weather = ({setLocation,location}) => {

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Hava Durumu Uygulaması</h1>
      <div className="input-container">
        <input
          className="location-input"
          type="text"
          placeholder="Şehir Giriniz"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
};

export default Weather;
