document.getElementById("currentYear").textContent = new Date().getFullYear();

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const logo = document.querySelector('.logo');
const selectElement = document.getElementById("field");


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('stack');
    hambutton.classList.toggle('show');
    logo.classList.toggle('hide');
});

const fields = [
    {
        id: "0001",
        name: "Greenwood Park Field"
    },
    {
        id: "0002",
        name: "Riverside Arena"
    },
    {
        id: "0003",
        name: "Oak Valley Stadium"
    },
    {
        id: "0004",
        name: "Sunset Turf"
    },
    {
        id: "0005",
        name: "Highland Sports Complex"
    },
    {
        id: "0006",
        name: "Lakeview Pitch"
    },
    {
        id: "0007",
        name: "Maplewood Grounds"
    },
    {
        id: "0008",
        name: "Ironhill Soccer Field"
    },
    {
        id: "0009",
        name: "Windmere Athletic Park"
    },
    {
        id: "0010",
        name: "Cedar Ridge Field"
    }
];

fields.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

let count = localStorage.getItem("reviewCount");