import React, { useState, useEffect } from 'react';

const phrases = ["College Student", "Developer"];

function DynamicText() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <span>{phrases[currentPhrase]}</span>
  );
}

export default DynamicText;
