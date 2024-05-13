import { useState } from "react";

const Object = () => {
    const [country, setcountry] = useState({
        countryName: "Nigeria",
        countryYear: 1990,
        countryPresident: "Tinubu",
    });
    const handleCountryName = (e) => {
        setcountry(prevCountryName => ({ ...prevCountryName, countryName: e.target.value }))
    }
    const handleCountryYear = (e) => {
        setcountry(prevCountryYear => ({ prevCountryYear, countryYear: e.target.value }))
    }
    const handleCountryPresident = (e) => {
        setcountry(prevCountryPresident => ({ ...prevCountryPresident, countryPresident: e.target.value }))
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="display-1 fw-bold">JSx Object Updater</h1>
            <br />
            <p>Country Name: <input value={country.countryName} type="text" onChange={handleCountryName} /></p>
            <p>Country Year: <input value={country.countryYear} type="number" onChange={handleCountryYear} /></p>
            <p>Country President: <input value={country.countryPresident} type="text" onChange={handleCountryPresident} /></p>

            <p>My country name is {country.countryName}, it's was founded in {country.countryYear}, our current {country.countryName} president name is {country.countryPresident} </p>
        </div>
    )
}

export default Object
