const data = [
    { title: 'Title 1', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'Title 2', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'Title 3', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'Title 4', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'Title 5', content: 'Lorem ipsum dolor sit amet...' }
];

function genererFriseChronologique(data) {
    const outerDiv = document.querySelector('.timeline .outer');

    outerDiv.innerHTML = '';

    data.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card'); 

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');

        const titleElement = document.createElement('h3');
        titleElement.classList.add('title');
        titleElement.textContent = item.title;

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = item.content;

        infoDiv.appendChild(titleElement);
        infoDiv.appendChild(paragraphElement);

        cardDiv.appendChild(infoDiv);

        outerDiv.appendChild(cardDiv);
    });
}

genererFriseChronologique(data);