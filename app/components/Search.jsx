"use client"
import React, { useState } from 'react'
import axios from "axios";

  import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Cards from './Cards';


const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherDataFromApi();
    // e.target.reset()
    setSearchText("");

  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };


  const getWeatherDataFromApi = async () => {
    let apiKey = "00484987152255e2d06f78d9149a1649";
    let units = "metric";
    let lang = "tr";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

    try {
      const response = await axios.get(url);
      const { name, main, sys, weather, id } = response.data;
   
      let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      const isExist = data.some((card) => card.id === id);

             if (isExist) {
               setError(
                 `You already know the weather for ${name}, Please search for another city 😉`
               );
               setTimeout(() => {
                 setError("");
               }, 5000);
             } else {
               setData([{ name, main, sys, weather, id, iconUrl }, ...data]);
             }
    } catch (err) {
      console.log(err);
             setError(err.message);
             setTimeout(() => {
               setError("");
             }, 5000);
    }
  };



  return (


    <>

<div className="flex gap-4 justify-center  w-full  mt-4 items-center space-x-2">

<form onSubmit={handleSubmit}>
<div className='flex gap-4'>

<Input   onChange={handleChange}
          type="text"
          placeholder="Search for a city"
          value={searchText}
           />
    <Button type="submit">Submit</Button>
</div>
 
    </form>
  </div>



  <div className='flex justify-center'>

  <ul className="grid grid-cols-5 gap-8">
          {data.map((item) => (
            <Cards key={item.id} data={item} />

          ))}
        </ul>
  </div>





    
    </>


  )
}

export default Search