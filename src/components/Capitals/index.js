import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].country}

  countrySelect = event => {
    const selectId = event.target.value
    console.log(selectId)

    const selectedCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === selectId,
    )
    console.log(selectedCountry)
    this.setState({activeCountryId: selectedCountry.country})
  }

  render() {
    const {activeCountryId} = this.state
    return (
      <>
        <div className="capitalsContainer">
          <div className="capitalsBox">
            <h1>Countries and Capitals</h1>
            <div className="flexRow">
              <select
                className="countriesSelect"
                onChange={this.countrySelect}
                value={activeCountryId}
              >
                {countryAndCapitalsList.map(eachCountry => (
                  <option key={eachCountry.id} value={eachCountry.id}>
                    {eachCountry.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is capital of which country?</p>
            </div>
            <h3>{activeCountryId}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default Capitals
