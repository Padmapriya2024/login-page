import React from 'react';
//import ReactDOM from 'react-dom/client';

export default function Garage(props) {
//   const cars = props.cars;
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Garage cars={cars} />);

              