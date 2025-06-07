document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const headerTitle = document.querySelector('header');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    headerTitle.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "2025, April, 13",
        area: 45456,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57799.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Utah, United States",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-44415.jpg"
    },
    {
        templeName: "Red Cliffs Utah",
        location: "Utah, United States",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44639.jpg"
    },
    // Add more temple objects here...
];

createTempleCard(temples);

const oldTemplesLink = document.querySelector(".oldTemplesLink");
const newTemplesLink = document.querySelector(".newTemplesLink");
const largeTemplesLink = document.querySelector(".largeTemplesLink");
const smallTemplesLink = document.querySelector(".smallTemplesLink");
const homeLink = document.querySelector(".homeLink");

oldTemplesLink.addEventListener("click", () => {
    let oldTemples = temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() < 1900;
    })

    createTempleCard(oldTemples);

})

newTemplesLink.addEventListener("click", () => {
    let newTemples = temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() > 2000;
    })

    createTempleCard(newTemples);

})

largeTemplesLink.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => { return temple.area > 90000 });

    createTempleCard(largeTemples);
})

smallTemplesLink.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => { return temple.area < 10000 });

    createTempleCard(smallTemples);
})

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
})

function createTempleCard(listofTemples) {
    document.querySelector(".temple-gallery").innerHTML = "";
    listofTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sqft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-gallery").appendChild(card);
    })
};