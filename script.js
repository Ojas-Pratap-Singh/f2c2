const data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  showAllRecipes();
  fliterRecipeByName("");
});

const cardContainer = document.getElementById("container");
const searchInput = document.getElementById("searchInput");

function fliterRecipeByName(searchQuery) {
  const filteredData = data.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  displayRecipe(filteredData);
}

searchInput.addEventListener("input", () => {
  let searchQuery = searchInput.value;
  fliterRecipeByName(searchQuery);
});

function filterByRating() {
  const selectedFilter = document.querySelector(
    'input[name="ratingfilters"]:checked'
  );
  if (selectedFilter) {
    const filterValue = selectedFilter.value;
    if (filterValue == "above") {
      showRecipeAboveRating(4.5);
    } else if (filterValue == "below") {
      showRecipeBelowRating(4.5);
    }
  }
}
function showRecipeAboveRating(rating) {
  const highRatedData = data.filter((item) => item.rating >= rating);
  displayRecipe(highRatedData);
}
function showRecipeBelowRating(rating) {
  const lowRatedData = data.filter((item) => item.rating < rating);
  displayRecipe(lowRatedData);
}

function displayRecipe(recipes) {
  cardContainer.innerHTML = "";

  recipes.forEach((item) => {
    const card = document.createElement("div");

    const image = document.createElement("img");
    image.src = item.imageSrc;

    const type = document.createElement("p");
    type.innerText = item.type;

    const vegrow = document.createElement("div");
    vegrow.className = "vegrow";
    vegrow.append(type);

    const name = document.createElement("b");
    name.innerText = item.name;
    const rating = document.createElement("p");
    rating.innerText = item.rating;

    const namerow = document.createElement("div");
    namerow.className = "namerow";
    namerow.append(name, rating);

    const time = document.createElement("p");
    time.innerText = item.time;
    const isLiked = document.createElement("p");
    isLiked.innerText = item.isLiked;

    const timerow = document.createElement("div");
    timerow.className = "timerow";

    timerow.append(time);

    card.className = "card";

    card.append(image, vegrow, namerow, timerow);
    cardContainer.appendChild(card);
  });
}
document.getElementById("drawerBtn").addEventListener("click", toggleDrawer);
document
  .getElementById("closeDrawerBtn")
  .addEventListener("click", closeDrawer);

function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.style.left = drawer.style.left === "0px" ? "-250px" : "0";
}

function closeDrawer() {
  document.getElementById("drawer").style.left = "-250px";
}
//displayRecipe(data);

function showAllRecipes() {
  displayRecipe(data);
}

function showOnlyVeg() {
  const vegdata = data.filter((item) => item.type == "veg");
  displayRecipe(vegdata);
}
function showOnlyNonVeg() {
  const nonvegdata = data.filter((item) => item.type == "non-veg");
  displayRecipe(nonvegdata);
}

document.addEventListener("DOMContentLoaded", function () {
  showAllRecipes();
  fliterRecipeByName("");
});
