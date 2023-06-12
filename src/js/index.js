import { fetchCatByBreed, fetchCatImg} from "./cat-api.js"
import cardTpl from "./cat-card.hbs"



const refs = {
    selectInput: document.querySelector('.breed-select'),
    loading: document.querySelector('.loader'),
    errorAlert: document.querySelector('.error'),
    catBox: document.querySelector('.cat-info')
}



const url = `https://api.thecatapi.com/v1/breeds`;
const API_KEY = 'live_ilRbQFMfKxyypjtmd2ntXyg3yvfeWpXbDJdvVq1HbhsvRa4Xmer7BJ7ni3Ce0JHo';

refs.selectInput.style.display = 'none';
refs.errorAlert.style.display = 'none';



fetch(url, {
    headers: {
    'x-api-key': API_KEY
    }
})
    .then(response => {
    return response.json();
})
    .then(setOption)
    .catch(error => {
        onError()
        console.log(error)
    })

function setOption(data) {
    data.map(el => {
        refs.selectInput.add(new Option(el.name, el.id))
    })
    onSuccess();
}



function onLoading() {
    refs.loading.style.display = 'block';
    refs.errorAlert.style.display = 'none';
    refs.catBox.style.display = 'none';
}

function onSuccess() {
    refs.selectInput.style.display = 'block';
    refs.loading.style.display = 'none';
    refs.errorAlert.style.display = 'none';
    refs.catBox.style.display = 'flex';
}
function onError() {
    refs.selectInput.style.display = 'none';
    refs.loading.style.display = 'none';
    refs.errorAlert.style.display = 'block';
    refs.catBox.style.display = 'none';
}

refs.selectInput.addEventListener('input', (event) => {
    onLoading()
    let selected = refs.selectInput.options[refs.selectInput.selectedIndex].value;
    let catInfo = null;
    fetchCatByBreed(selected)
        .then(data => {
            onSuccess()
            catInfo = {
                ...data
            }
        })
        .catch(error => {
            onError()
            console.log(error)
        })
    fetchCatImg(selected).then(data => {
        catInfo.imgUrl = data[0].url;
        const markup = cardTpl(catInfo);
        refs.catBox.innerHTML = markup;
    })
    .catch(error => {
        onError()
        console.log(error)
    })
})