import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import { useDebounce } from '../hooks/useDebounce'

const CountriesList = ({searchQuery}) => {
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    const getCountryList = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/countries/countries');
        const json = await resp.json();
        setCountryList(json);
      } catch (err) {
        setCountryList(err.message);
      }
    }
    getCountryList()
  }, [])

  const debounce = useDebounce(1000, searchQuery)

  const coutries = countryList.filter((item) => item.name.toLowerCase().includes(debounce))
  return (
    <div className='countries-container'>

      {
        coutries?.map((country) => {
          return (
            <CountryCard
              key={country.id}
              name={country.name}
              capital={country.capital}
              currency={country.currency}
              flag={country.media.flag}
              population={country?.population?.toLocaleString('en-IN')}
            />
          )
        })
      }
    </div>
  )
}

export default CountriesList
