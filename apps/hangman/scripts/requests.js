const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    
    if(response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
}

// Create a new function called getCurrentCountry
// Should return a promise that resolves the country object for your current location
// Use async/await for the new function

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country');
    }    
}

const ipinfoToken = 'be05b3660840ed'

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountryDetails(location.country);
    return country;
}

const getLocation = async () => {
    const response = await fetch(`//ipinfo.io/json?token=${ipinfoToken}`);
    
    if (response.status === 200) {
        const data = await response.json();
        let parsedData = {};

        parsedData.city = data.city;
        parsedData.region = data.region;
        parsedData.country = data.country;

        return parsedData;
    } else {
        throw new Error('Unable to fetch ipInfo');
    }
}
