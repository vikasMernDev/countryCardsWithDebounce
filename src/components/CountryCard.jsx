
const CountryCard = ({ name, population, flag, capital, currency }) => {
    return (
        <div className='country-card'>
            <img src={flag} alt={name} />
            <div className='card-text'>
                <h3 className='card-title'>{name}</h3>
                <p className=''>
                    <b>Population :</b> {population}
                </p>
                <p>
                    <b>Currency :</b> {currency}
                </p>
                <p>
                    <b>Capital:</b> {capital}
                </p>
            </div>
        </div>
    )
}

export default CountryCard
