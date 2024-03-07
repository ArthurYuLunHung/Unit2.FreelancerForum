const freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let currentIndex = 2;

const table = document.querySelector("#table");

function addFreelancer() {
  if (currentIndex < freelancers.length) {
    const freelancer = freelancers[currentIndex];
    const element = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = freelancer.name;
    element.appendChild(name);

    const occupation = document.createElement("td");
    occupation.textContent = freelancer.occupation;
    element.appendChild(occupation);

    const price = document.createElement("td");
    price.textContent = freelancer.price;
    element.appendChild(price);

    table.appendChild(element);

    currentIndex += 1;
    calculateAndDisplayAveragePrice();
  } else {
    clearInterval(addFreelancerInterval);
  }
}

const addFreelancerInterval = setInterval(addFreelancer, 1000);

function staticRenderForEach(freelancers) {
  freelancers.slice(0, 2).forEach((freelancer) => {
    const element = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = freelancer.name;
    element.appendChild(name);

    const occupation = document.createElement("td");
    occupation.textContent = freelancer.occupation;
    element.appendChild(occupation);

    const price = document.createElement("td");
    price.textContent = freelancer.price;
    element.appendChild(price);

    table.appendChild(element);
  });
}
staticRenderForEach(freelancers);

function calculateAndDisplayAveragePrice() {
  const totalPrices = freelancers
    .slice(0, currentIndex)
    .reduce((acc, curr) => acc + curr.price, 0);

  const averagePrice = currentIndex > 0 ? totalPrices / currentIndex : 0;

  displayAveragePrice(averagePrice);
}

function displayAveragePrice(averagePrice) {
  const averagePriceDisplay = document.getElementById("averagePrice");

  averagePriceDisplay.textContent = `Average Price: $${averagePrice.toFixed(
    2
  )}`;
}
calculateAndDisplayAveragePrice();
