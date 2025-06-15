let count = Number(localStorage.getItem("reviewCount"));

count++;

localStorage.setItem("reviewCount", count);

const reviewCountElement = document.querySelector(".reviews");


if (count === 1) {
    reviewCountElement.textContent = `You have reserved ${count} field with us so far.`;
}
else {
    reviewCountElement.textContent = `You have reserved ${count} fields with us so far.`;
}

