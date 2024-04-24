const data = [
    { title: 'Nouvelle Gamme', content: "Ryzen Série 7000X3D, disposant d'un maximum de 144 Mo de mémoire sur puce" },
    { title: 'Technologie AMD EXPO', content: "sur socket AM5, cette technologie offre à l'utilisateur un overclocking facile de la mémoire DDR5" },
    { title: 'AMD Ryzen AI', content: 'selon les préférences et les besoins individuels de chaque utilisateur, ce qui permet à chaque employé de travailler de manière plus créative et productive' },
    { title: 'Capacités multitâches de pointe avec AMD Ryzen AI', content: "certaines applications optimisées par l'IA à une vitesse incroyable et avec une latence minimale, accélérant ainsi les processus métiers critiques." },
    { title: 'Fonctionnalités de sécurité de pointe', content: 'Il est conçu pour isoler du CPU les menaces provenant de logiciels malveillants pour renforcer la sécurité.' }
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