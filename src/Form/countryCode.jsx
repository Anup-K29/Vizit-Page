import React from 'react'
import { useEffect, useState } from 'react'

export const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState([])


  useEffect(() => {
    fetchCountryCodes().then((data) => {
      setCountryCode(data)
    }).catch(() => { setCountryCode([]) })
  }, [])

  return countryCode
}


export async function fetchCountryCodes() {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd');
  const data = await res.json();

  return data
    .map(c => ({
      country: c.name.common,
      calling_code: c.idd.root + (c.idd.suffixes?.[0] ?? '')
    }))
    .filter(c => c.calling_code)          // drop any empty
    .sort((a, b) => a.country.localeCompare(b.country));
}