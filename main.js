//Hente html elementer
const addNumbersButton = document.getElementById("add");
const sortNumbersButton = document.getElementById("sort");
const liElement = document.querySelectorAll("li");

const generateNumber = () => {
  liElement.forEach((item) => {
    const number = Math.floor(Math.random() * 9) + 1;

    item.innerText = number;
  });
};

addNumbersButton.addEventListener("click", generateNumber);

const sortingNumbers = () => {
  const sortingOfNumbers = Array.from(liElement).map((item) =>
    Number(item.innerText)
  );
  sortingOfNumbers.sort();

  liElement.forEach((item, index) => {
    item.innerText = sortingOfNumbers[index];
  });
};

sortNumbersButton.addEventListener("click", sortingNumbers);
