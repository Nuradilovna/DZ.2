const cards = document.querySelector('.cards_inner');
const URL = 'https://jsonplaceholder.typicode.com/posts'

const addCard = (title, body) =>{
    const card = document.createElement('div');
    const img = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    card.setAttribute('class', 'card')
    img.setAttribute('class', 'img')

    cards.append(card)
    card.append(img)
    card.append(h2)
    card.append(p)

    h2.innerText = title
    p.innerText = body
}
const getData = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        data.forEach((item) => {
            const {title, body} = item;
            addCard(title, body);
        })
    } catch(error) {
        console.log(error)
    } finally {
        console.log('finally')
    }

}
getData()