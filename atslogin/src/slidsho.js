import React from 'react';
import './slide.css';
import butterfly from './butterfly.png';
import bank from './bank.png';
import banks from './banks.png';

const images = [butterfly, bank, banks]; 

const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <div
            className="slide"
            key={idx}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => setIndex(idx)} 
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
