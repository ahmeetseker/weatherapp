"use client"
import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Cards = ({data}) => {
  const { name, main, sys, iconUrl, weather } = data; 
  return (
    
    <Card>
  <CardHeader>
    <CardTitle>{name}</CardTitle>
    <CardDescription>      <sup>{sys.country}</sup></CardDescription>
  </CardHeader>
  <CardContent>
  {Math.round(main.temp)}
        <sup>°C</sup>
  </CardContent>
  <CardFooter>
  <figure>
        <img className="city-icon" src={iconUrl} alt="city-icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
  </CardFooter>
</Card>
  )
}

export default Cards