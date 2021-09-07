import React, { Component }  from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';



function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '733fdb49543252a3d7b8018ec57aa206',
    lat: '55.751244',
    lon: '37.618423',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
      <div className="App">
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Moscow"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
      </div>
  );
}

export default App;
