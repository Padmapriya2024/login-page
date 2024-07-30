import React, {useState} from 'react';

function Temperatureconverter() {
    const[ celsius, setCelsius]= useState('');
    const[ fahrenheit, setFahrenheit]= useState('');

    const CelsiusConverter = (e) => {
        const celsius =  e.target.value;
        setCelsius(celsius);
        setFahrenheit(celsius ? (celsius * 9 /5 +32). toFixed(2) : '');
    };

    const FahrenheitConverter =(e) => {
        const fahrenheit = e.target.value;
        setFahrenheit(fahrenheit);
        setFahrenheit( fahrenheit? ((fahrenheit - 32) * 5/9).toFixed(2) : '');
    };

    return (
        <div>
            <h1> Temperature Converter </h1>
            <div>
            <label>  
                 Celsius :
                <input type="number" value={celsius} onChange={CelsiusConverter}
                />
            </label>
        </div>
        <div>
            <label>
             Fahrenheit:
             <input type="numbers" value={fahrenheit} onChange={FahrenheitConverter}
             />
           </label>
      </div>
      </div>
    );

}

export default Temperatureconverter;
