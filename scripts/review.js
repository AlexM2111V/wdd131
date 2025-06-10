let count = Number(localStorage.getItem("reviewCount"));

count++;

localStorage.setItem("reviewCount", count);

const reviewCountElement = document.querySelector(".reviews");


if (count === 1) {
    reviewCountElement.textContent = `You have submitted ${count} review so far.`;
}
else {
    reviewCountElement.textContent = `You have submitted ${count} reviews so far.`;
}

