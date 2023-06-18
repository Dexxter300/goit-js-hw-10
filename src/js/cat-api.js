
export const fetchCatByBreed = (breedId) => {
    const searchUrl = `https://api.thecatapi.com/v1/breeds/${breedId}?api_key=live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo`
    return fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
}

export const fetchBreeds = () => {
    return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
}

export const fetchCatImg = (breed) => {
    const searchUrl = `https://api.thecatapi.com/v1/images/search?api_key=live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo&breed_ids=${breed}`
    return fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
}