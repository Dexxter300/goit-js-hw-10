
export const fetchCatByBreed = (breedId) => {
    const searchUrl = `https://api.thecatapi.com/v1/breeds/${breedId}?api_key=live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo`
    return fetch(searchUrl)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })
}

export const fetchCatImg = (breed) => {
    const searchUrl = `https://api.thecatapi.com/v1/images/search?api_key=live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo&breed_ids=${breed}`
    return fetch(searchUrl)
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })
}