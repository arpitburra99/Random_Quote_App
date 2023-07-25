const button = document.querySelector("button");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const tagsText = document.querySelector("#tags");

const fetchData = async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  quoteText.innerText = data.content;
  authorText.innerText = data.author;
  tagsText.innerText = data.tags;
};
button.addEventListener("click", fetchData);
