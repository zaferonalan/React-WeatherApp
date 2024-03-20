import React from "react";

const Weather = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Hava Durumu Uygulaması</h1>
      <div className="input-container">
        <input
          className="location-input"
          type="text"
          placeholder="Şehir Giriniz"
        />
      </div>
    </div>
  );
};

export default Weather;
