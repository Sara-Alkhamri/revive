import React, { useState, useEffect } from "react";
import Contact from './Contact'


export default function About({ who, title }) {
  const [dog, setDog] = useState([])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setDog(json.message);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h2>{who}</h2>
        <p> {title} </p>
        <img src={dog} />
      </div>
    </>
  );
}
