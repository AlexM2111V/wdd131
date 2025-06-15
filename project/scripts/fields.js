document.getElementById("currentYear").textContent = new Date().getFullYear();

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const logo = document.querySelector('.logo');


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('stack');
    hambutton.classList.toggle('show');
    logo.classList.toggle('hide');
});

const soccerFields = [
    {
        id: 1,
        name: "Greenwood Park Field",
        price: "$50",
        address: "1234 Elm St",
        city: "Los Angeles",
        state: "CA",
        imageFile: "images/fields/field1.webp"
    },
    {
        id: 2,
        name: "Riverside Arena",
        price: "$60",
        address: "4567 Oak Ave",
        city: "Los Angeles",
        state: "CA",
        imageFile: "images/fields/field2.webp"
    },
    {
        id: 3,
        name: "Oak Valley Stadium",
        price: "$50",
        address: "7891 Maple Dr",
        city: "San Diego",
        state: "CA",
        imageFile: "images/fields/field3.webp"
    },
    {
        id: 4,
        name: "Sunset Turf",
        price: "$40",
        address: "3210 Sunset Blvd",
        city: "San Diego",
        state: "CA",
        imageFile: "images/fields/field4.webp"
    },
    {
        id: 5,
        name: "Highland Sports Complex",
        price: "$35",
        address: "6542 Highland Rd",
        city: "San Jose",
        state: "CA",
        imageFile: "images/fields/field5.webp"
    },
    {
        id: 6,
        name: "Lakeview Pitch",
        price: "$45",
        address: "888 Lakeview Ln",
        city: "San Jose",
        state: "CA",
        imageFile: "images/fields/field6.webp"
    },
    {
        id: 7,
        name: "Maplewood Grounds",
        price: "$70",
        address: "4321 Pine St",
        city: "Sacramento",
        state: "CA",
        imageFile: "images/fields/field7.webp"
    },
    {
        id: 8,
        name: "Ironhill Soccer Field",
        price: "$69",
        address: "9087 Ironhill Way",
        city: "Sacramento",
        state: "CA",
        imageFile: "images/fields/field8.webp"
    },
    {
        id: 9,
        name: "Windmere Athletic Park",
        price: "$75",
        address: "1357 Breeze Blvd",
        city: "Fresno",
        state: "CA",
        imageFile: "images/fields/field9.webp"
    },
    {
        id: 10,
        name: "Cedar Ridge Field",
        price: "$80",
        address: "2468 Cedar Ridge Rd",
        city: "Fresno",
        state: "CA",
        imageFile: "images/fields/field10.webp"
    }
];

createFieldCard(soccerFields);

const sandiegoLink = document.querySelector('.sandiego');
const fresnoLink = document.querySelector('.fresno');
const sanjoseLink = document.querySelector('.sanjose');
const sacramentoLink = document.querySelector('.sacramento');
const losangelesLink = document.querySelector('.losangeles');

sandiegoLink.addEventListener('click', () => {
    const sandiegoFields = soccerFields.filter(field => field.city === "San Diego");
    createFieldCard(sandiegoFields);
})

fresnoLink.addEventListener('click', () => {
    const fresnoFields = soccerFields.filter(field => field.city === "Fresno");
    createFieldCard(fresnoFields);
})

sanjoseLink.addEventListener('click', () => {
    const sanjoseFields = soccerFields.filter(field => field.city === "San Jose");
    createFieldCard(sanjoseFields);
})

sacramentoLink.addEventListener('click', () => {
    const sacramentoFields = soccerFields.filter(field => field.city === "Sacramento");
    createFieldCard(sacramentoFields);
})

losangelesLink.addEventListener('click', () => {
    const losangelesFields = soccerFields.filter(field => field.city === "Los Angeles");
    createFieldCard(losangelesFields);
})

function createFieldCard(fields) {
    document.querySelector(".soccer-field-gallery").innerHTML = "";
    fields.forEach(field => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let price = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = field.name;
        address.innerHTML = `<span class="label">Address:</span> ${field.address}, ${field.city}, ${field.state}`;
        price.innerHTML = `<span class="label">Price:</span> ${field.price} per hour`;
        img.setAttribute("src", field.imageFile);
        img.setAttribute("alt", `${field.name} image`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(price);

        document.querySelector(".soccer-field-gallery").appendChild(card);
    });
}