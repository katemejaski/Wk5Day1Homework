// Homework 1 Random Number Promise

function getRandomNumber () {
  let num = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random() *10), 500)
  });
return num;
}

async function calIt() {
  let numberFunc = await getRandomNumber();
  console.log(numberFunc);
}

calIt();

setTimeout(() => something, 6000)

// Homework 2 Fetch

async function city(cityName) {
  let response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  .then((response) => response.json())
  .then((result) => {
      console.log(result.longt);
      console.log(result.latt);
  })
  .catch((error) => console.log("error", error));
}
city("Seattle");