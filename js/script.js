// const apiKey = "72ca8d2b31ab4f268b31b148230dcd45";

// const apiKey = "1dbe0c219f28437fad9363b38a431ecf";
// const apiKey = "2d682f793790462c80e92e2fa38b984e";
// const apiKey = "ca2ecbfb42f14697ab37f70271b2a93a";
// const apiKey = "a17a736ad69d47d88932de3e3fb90afa";
// used
// const apiKey = "a6dbab0b33d64ed5a5c0e9d881f2581a";
// const apiKey = "f5062cb49e07461bbc79236e750bf8dc";
// const apiKey = "2aa73ba9fe6241dda3c67365b5f94ac9";
const apiKey = "1618c6d7017049d991435204b135f212";

const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    offset: 0,
    totalPages: 1,
    totalResults: 0,
    category: "",
  },
};

// displaypopular
async function displayPopularRecipes() {
  const { results } = await fetchAPIData("popularity");
  document.querySelector("#popularRecipe").innerHTML = "";

  results.forEach((recipe) => {
    const div = document.createElement("div");
    let priceRating;
    if (recipe.pricePerServing / 100 < 5) {
      priceRating = '<img src="image/price.svg" width="35"  alt="" />';
    } else if (recipe.pricePerServing / 100 < 7) {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    } else {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    }

    div.classList = "p-4 rounded-lg";
    div.innerHTML = `
    <div
            class="popular-recipes border border-gray-200 rounded-lg shadow  dark:bg-dmode-lightolive dark:border-gray-700"
            >
              <a href="recipeDetails.html?id=${recipe.id}">
                <img
                  class="rounded-t-lg sm:h-4/5 w-full"
                  src="${recipe.image}"
                  alt=""
                />

                <div class="p-5 flex flex-col justify-center">
                  <h5
                    class="mb-2 text-2xl font-bold text-center mt-5 pb-10"
                  >
                    ${
                      recipe.title.length > 30
                        ? `${recipe.title.slice(0, 30)}...`
                        : recipe.title
                    }
                  </h5>
                  <br/>
                  <div
                  class="flex flex-row justify-center"
                  >
                  <div class="flex flex-col items-center justify-center mr-5">
                    <img src="image/ready.svg" alt="" width="35" />
                    <h2
                      class="font-sans font-bold md:text-xl pt-5 text-center"
                    >
                      Ready in ${recipe.readyInMinutes} Mins
                    </h2>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                  ${priceRating}
                  <h2
                  class="font-sans font-bold md:text-xl pt-5 text-center"
                  >
                      $${(recipe.pricePerServing / 100).toFixed(2)} per Serving
                      </h2>
                      </div>
                      </div>
                      </div>
              </a>
            </div>`;
    document.querySelector("#popularRecipe").appendChild(div);
  });
}

// displayhealthy
async function displayHealthyRecipes() {
  const { results } = await fetchAPIData("healthiness");
  document.querySelector("#healthyRecipe").innerHTML = "";

  results.forEach((recipe) => {
    const div = document.createElement("div");
    let priceRating;
    if (recipe.pricePerServing / 100 < 5) {
      priceRating = '<img src="image/price.svg" width="35"  alt="" />';
    } else if (recipe.pricePerServing / 100 < 7) {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    } else {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    }

    div.classList = "p-4 rounded-lg h-full";
    div.innerHTML = `
    <div
            class="popular-recipes border border-gray-200 rounded-lg shadow  dark:bg-dmode-lightolive dark:border-gray-700"
            >
              <a href="recipeDetails.html?id=${recipe.id}">
                <img
                  class="rounded-t-lg sm:h-4/5 w-full"
                  src="${recipe.image}"
                  alt=""
                />

                <div class="p-5 flex flex-col justify-center">
                  <h5
                    class="mb-2 text-2xl font-bold text-center mt-5 pb-10"
                  >
                    ${
                      recipe.title.length > 30
                        ? `${recipe.title.slice(0, 30)}...`
                        : recipe.title
                    }
                  </h5>
                  <br/>
                  <div
                  class="flex flex-row justify-center"
                  >
                  <div class="flex flex-col items-center justify-center mr-5">
                    <img src="image/ready.svg" alt="" width="35" />
                    <h2
                      class="font-sans font-bold md:text-xl pt-5 text-center"
                    >
                      Ready in ${recipe.readyInMinutes} Mins
                    </h2>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                  ${priceRating}
                  <h2
                  class="font-sans font-bold md:text-xl pt-5 text-center"
                  >
                      $${(recipe.pricePerServing / 100).toFixed(2)} per Serving
                      </h2>
                      </div>
                      </div>
                      </div>
              </a>
            </div>`;
    document.querySelector("#healthyRecipe").appendChild(div);
  });
}
// displaybooster
async function displayBoosterRecipes() {
  const { results } = await fetchAPIData("energy");
  document.querySelector("#boosterRecipe").innerHTML = "";

  results.forEach((recipe) => {
    const div = document.createElement("div");
    let priceRating;
    if (recipe.pricePerServing / 100 < 5) {
      priceRating = '<img src="image/price.svg" width="35"  alt="" />';
    } else if (recipe.pricePerServing / 100 < 7) {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    } else {
      priceRating =
        '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
    }

    div.classList = "p-4 rounded-lg h-full";
    div.innerHTML = `
    <div
            class="popular-recipes border border-gray-200 rounded-lg shadow  dark:bg-dmode-lightolive dark:border-gray-700"
            >
              <a href="recipeDetails.html?id=${recipe.id}">
                <img
                  class="rounded-t-lg sm:h-4/5 w-full"
                  src="${recipe.image}"
                  alt=""
                />

                <div class="p-5 flex flex-col justify-center">
                  <h5
                    class="mb-2 text-2xl font-bold text-center mt-5 pb-10"
                  >
                    ${
                      recipe.title.length > 30
                        ? `${recipe.title.slice(0, 30)}...`
                        : recipe.title
                    }
                  </h5>
                  <br/>
                  <div
                  class="flex flex-row justify-center"
                  >
                  <div class="flex flex-col items-center justify-center mr-5">
                    <img src="image/ready.svg" alt="" width="35" />
                    <h2
                      class="font-sans font-bold md:text-xl pt-5 text-center"
                    >
                      Ready in ${recipe.readyInMinutes} Mins
                    </h2>
                  </div>
                  <div class="flex flex-col items-center justify-center">
                  ${priceRating}
                  <h2
                  class="font-sans font-bold md:text-xl pt-5 text-center"
                  >
                      $${(recipe.pricePerServing / 100).toFixed(2)} per Serving
                      </h2>
                      </div>
                      </div>
                      </div>
              </a>
            </div>`;
    document.querySelector("#boosterRecipe").appendChild(div);
  });
}
// Pagination
async function previous() {
  if (global.search.offset !== 0) {
    window.scrollTo(0, 0);
    global.search.offset -= 12;
    document.querySelector("#page").innerHTML = `Page ${
      global.search.offset / 12 + 1
    }`;
    switch (global.currentPage) {
      case "/popular.html":
        displayPopularRecipes();
        break;
      case "/healthy.html":
        displayHealthyRecipes();
        break;
      case "/booster.html":
        displayBoosterRecipes();
        break;
      case "/search.html":
        displaySearchDefault(global.search.category);

        if (global.search.offset + 12 < global.search.totalResults) {
          document.querySelector(".next").classList.remove("unclickable");
          document.querySelector(".next").classList.remove("dark:unclickable");
        }
        if (global.search.offset + 12 >= global.search.totalResults) {
          document.querySelector(".next").classList.add("unclickable");
          document.querySelector(".next").classList.add("dark:unclickable");
        }
        break;
    }
    if (global.search.offset === 0) {
      document.querySelector(".prev").classList.add("unclickable");
      document.querySelector(".prev").classList.add("dark:unclickable");
    }
    if (global.search.offset > 0) {
      document.querySelector(".prev").classList.remove("unclickable");
      document.querySelector(".prev").classList.remove("dark:unclickable");
    }
  }
}
async function next() {
  if (!document.querySelector(".next").classList.contains("unclickable")) {
    window.scrollTo(0, 0);
    global.search.offset += 12;
    document.querySelector("#page").innerHTML = `Page ${
      global.search.offset / 12 + 1
    }`;
    switch (global.currentPage) {
      case "/popular.html":
        displayPopularRecipes();
        break;
      case "/healthy.html":
        displayHealthyRecipes();
        break;
      case "/booster.html":
        displayBoosterRecipes();
        break;
      case "/search.html":
        displaySearchDefault(global.search.category);

        if (global.search.offset + 12 < global.search.totalResults) {
          document.querySelector(".next").classList.remove("unclickable");
          document.querySelector(".next").classList.remove("dark:unclickable");
        }
        if (global.search.offset + 12 >= global.search.totalResults) {
          document.querySelector(".next").classList.add("unclickable");
          document.querySelector(".next").classList.add("dark:unclickable");
        }
        break;
    }
    if (global.search.offset === 0) {
      document.querySelector(".prev").classList.add("unclickable");
      document.querySelector(".prev").classList.add("dark:unclickable");
    }
    if (global.search.offset > 0) {
      document.querySelector(".prev").classList.remove("unclickable");
      document.querySelector(".prev").classList.remove("dark:unclickable");
    }
  }
}

//Fetch data from Spoonacular API
async function fetchAPIData(endpoint) {
  const API_KEY = apiKey;
  // const API_URL = global.api.apiUrl;
  // showSpinner();

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?&apiKey=${API_KEY}&addRecipeInformation=true&sort=${endpoint}&number=12&offset=${global.search.offset}`
  );

  const data = await response.json();

  // hideSpinner();

  return data;
}
// displayEnergy
async function displayRecipeInfo() {
  document.querySelector("#recipe-details").innerHTML = "";
  const showId = window.location.search.split("=")[1];
  const recipe = await fetchAPIDataRecipeInfo(showId);
  let priceRating;
  if (recipe.pricePerServing / 100 < 5) {
    priceRating = '<img src="image/price.svg" width="35"  alt="" />';
  } else if (recipe.pricePerServing / 100 < 7) {
    priceRating =
      '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
  } else {
    priceRating =
      '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
  }
  let instruction = recipe.analyzedInstructions[0].steps;
  document.querySelector("#recipe-details").innerHTML = `
  <section>
    <div class="container  py-40">
    
      <div
        class="container gap-8 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1
        relative">
        <img src="${recipe.image}" alt="${
    recipe.title
  }" class="w-full rounded-3xl"/>
        <div class="">
          <h2
            class="text-6xl pb-6 font-bold text-center border-t-2 pt-4 mb-6 sm:border-none dark:text-dmode-lightolive"
          >
            ${recipe.title}
          </h2>
          <p class="text-2xl pb-8 font-bold text-center md:text-left md:leading-normal lg:ml-6">
            ${recipe.summary}
          </p>
          <div class="flex justify-center items-center gap-10">
              <div class="flex flex-col items-center justify-end">
                <img src="image/ready.svg" alt="" />
                <h2 class="font-sans font-bold text-2xl pt-5">
                  Ready in ${
                    recipe.readyInMinutes < 60
                      ? recipe.readyInMinutes + " mins"
                      : Math.round(recipe.readyInMinutes / 60) +
                        " hrs & " +
                        (recipe.readyInMinutes % 60) +
                        " mins"
                  } 
                </h2>
              </div>
              <div class="flex flex-col items-center justify-center">
                <div class="flex gap-2">
                ${priceRating}
                </div>
                <h2 class="font-sans font-bold text-2xl pt-5">
                  $${(recipe.pricePerServing / 100).toFixed(2)} per serving
                </h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  <section> 
    <div class="justify-center place-items-center py-10 gap-12">
      <h2 class="text-5xl font-bold  pb-16 text-center">
        Ingredients
      </h2>
      <div>
             <div class="container ingredients grid grid-cols-2  lg:grid-cols-5 lg:grid-flow-row text-center gap-2 md:grid-cols-4 sm:grid-cols-2">
       ${recipe.extendedIngredients
         .map(
           (
             ingredient
           ) => `<div class="grid"><img src="https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}" alt="${ingredient.aisle}" class="pb-10" />
       <p class="text-xl font-semibold">${ingredient.original}</p></div>`
         )
         .join(" ")}
       </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container pb-10 border-b-2 sm:border-none py-10">
      <!-- Instructions -->
      <div class="grid justify-center items-center gap-8">
        <h2 class="text-5xl font-bold pb-4 text-center">
          Intructions
        </h2>    
        ${instruction
          .map(
            (steps) => `
        <div>
        <h3 class="text-3xl font-bold pb-1">
          Step ${steps.number} ${
              steps.length
                ? `- ${
                    steps.length.number > 60
                      ? `${steps.length.number / 60} Hours ${
                          steps.length.number % 60 !== 0
                            ? `${steps.length.number % 60}`
                            : ""
                        }`
                      : `${steps.length.number}`
                  }`
                : ""
            } ${
              steps.length
                ? `${
                    steps.length.number % 60 !== 0 ? `${steps.length.unit}` : ""
                  }`
                : ""
            }
        </h3>
        <p class="text-2xl font-semibold">
          ${steps.step}
        </p>
      </div>`
          )
          .join(" ")}    
        
      </div>
      </section>

  <section>
      <div class="container pb-10 border-b-2 sm:border-none py-10">
      <h2 class="text-5xl font-bold text-center pb-4 py-10">
          Nutritional Facts
        </h2>  
      <div  class="container gap-8 md:grid md:grid-flow-col md:grid-cols-2 md:justify-center
      relative">
      <div>
      <h2 class="text-4xl font-bold pb-4 mb-4 text-center py-10">Get Enough of These</h2>
      <table class="grid w-full ">
      <thead>
    <tr class="border-b-4 grid grid-cols-3 text-center">
      <th ><p class="text-2xl font-bold pb-1 lg:text-3xl">Nutrients</p></th>
      <th ><p class="text-2xl font-bold pb-1 lg:text-3xl">Amount</p></th>
      <th ><p class="text-2xl font-bold pb-1 lg:text-3xl">Daily Needs Percentage</p></th>
    </tr>
  </thead>
  <tbody class="grid gap-3 text-center">
      ${recipe.nutrition.nutrients
        .slice(9, recipe.nutrition.nutrients.length)
        .map(
          (nutrient) =>
            `<tr class="border-b-2 grid grid-cols-3">
      <td ><p class="text-2xl font-semibold">${nutrient.name}</p></td>
      <td><p class="text-2xl font-semibold">${nutrient.amount} ${nutrient.unit}</p></td>
      <td><p class="text-2xl font-semibold">${nutrient.percentOfDailyNeeds} %</p></td>
    </tr>`
        )
        .join(" ")}     
  </tbody>
</table>
</div>
      <div class="self-baseline">
      <h2 class="text-4xl font-bold pb-4 mb-4 text-center py-10">Limit These</h2>
      <table class="grid w-full">
  <thead>
    <tr class="border-b-4 grid grid-cols-2 text-center text-2xl lg:text-3xl">
      <th><p class=" font-bold pb-1 ">Caloric Breakdown</p></th>
      <th><p class=" font-bold pb-1 ">Amount per Serving</p></th>
    </tr>
  </thead>
  <tbody  class="grid gap-3">
    <tr class="border-b-2 grid grid-cols-2 text-center">
      <td><p class="text-2xl font-semibold">Carbohydrates Percentage</p></td>
      <td><p class="text-2xl font-semibold">${
        recipe.nutrition.caloricBreakdown.percentCarbs
      } %</p></td>
    </tr>
    <tr class="border-b-2 grid grid-cols-2 text-center">
      <td ><p class="text-2xl font-semibold">Fats Percentage</p></td>
      <td ><p class="text-2xl font-semibold">${
        recipe.nutrition.caloricBreakdown.percentFat
      } %</p></td>
    </tr >
    <tr class="border-b-2 grid grid-cols-2 text-center">
      <td ><p class="text-2xl font-semibold">Protein Percentage</p></td>
      <td ><p class="text-2xl font-semibold">${
        recipe.nutrition.caloricBreakdown.percentProtein
      } %</p></td>
    </tr>
    ${recipe.nutrition.nutrients
      .slice(0, 8)
      .map(
        (nutrient) =>
          `<tr class="border-b-2 grid grid-cols-2 text-center">
    <td><p class="text-2xl font-semibold">${nutrient.name}</p></td>
    <td><p class="text-2xl font-semibold">${nutrient.amount} ${nutrient.unit}</p></td>
  </tr>`
      )
      .join(" ")}      
  </tbody>
</table>
</div>
</div>
    </div>
    </div>
    
  </section>
  `;
}

//Fetch data from Spoonacular API
async function fetchAPIDataRecipeInfo(endpoint) {
  const API_KEY = apiKey;
  // const API_URL = global.api.apiUrl;
  // showSpinner();

  const response = await fetch(
    `https://api.spoonacular.com/recipes/${endpoint}/information?apiKey=${API_KEY}&analyzedInstruction&includeNutrition=true`
  );

  const data = await response.json();

  // hideSpinner();

  return data;
}

// search

async function displaySearchDefault(e) {
  const term = window.location.search.split("=")[1];
  await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${term}&apiKey=${apiKey}&addRecipeInformation=true&sort=${e}&number=12`
  )
    .then((response) => response.json())
    .then((data) => {
      const totalResults = data.totalResults;
      global.search.totalResults = totalResults;
      global.search.totalPages = Math.floor(totalResults / 12 + 1);
      document.querySelector(
        "#totalPages"
      ).innerHTML = `of ${global.search.totalPages} Pages`;
    });
  global.search.category = e;
  displaySearch(global.search.category);
}

async function displaySearch(e) {
  const term = window.location.search.split("=")[1];

  if (term === null || term === undefined) {
    document.querySelector(
      "#totalResults"
    ).innerHTML = `Please provide Search Term above and click Search again.`;
  } else {
    const { results } = await fetchSearchAPIData(e, term);
    document.querySelector("#results").innerHTML = "Please Wait for Results...";
    document.querySelector("#results").innerHTML = "";

    results.forEach((recipe) => {
      const div = document.createElement("div");
      let priceRating;
      if (recipe.pricePerServing / 100 < 5) {
        priceRating = '<img src="image/price.svg" width="35"  alt="" />';
      } else if (recipe.pricePerServing / 100 < 7) {
        priceRating =
          '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
      } else {
        priceRating =
          '<div class="flex flex-row items-center justify-center"><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /><img src="image/price.svg" width="35"  alt="" /></div>';
      }
      function switchResult(i) {
        switch (i) {
          case "default":
            return `<br/>`;
          case "popularity":
            return `${recipe.aggregateLikes} Likes`;
          case "healthiness":
            return `${recipe.healthScore}% Health Score`;
          case "potassium":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "calcium":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "vitamin-a":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "iron":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "protein":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "fiber":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "zinc":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          case "phosphorus":
            return `${Math.floor(recipe.nutrition.nutrients[0].amount)} ${
              recipe.nutrition.nutrients[0].unit
            } of ${recipe.nutrition.nutrients[0].name}`;
          default:
            return "<br/>";
        }
      }
      let categoryResult = switchResult(e);

      div.classList = "p-4 rounded-lg h-full text-center";
      div.innerHTML = `
      <div
              class="popular-recipes border border-gray-200 rounded-lg shadow  dark:bg-dmode-lightolive "
              >
                <a href="recipeDetails.html?id=${recipe.id}">
                  <img
                    class="rounded-t-lg sm:h-4/5 w-full"
                    src="${recipe.image}"
                    alt=""
                  />
  
                  <div class="p-5 flex flex-col justify-center">
                    <h5
                      class="pb-20 text-2xl font-bold  text-gray-900 dark:text-dmode-olive text-center mt-5"
                    >
                      ${
                        recipe.title.length > 25
                          ? `${recipe.title.slice(0, 25)}...`
                          : recipe.title
                      }
                    </h5>
                    <h5 class="text-2xl  text-gray-900 dark:text-dmode-olive text-center px-3">${categoryResult}</h5>
                      <br/>
                    <div
                    class="flex flex-row justify-center"
                    >
                    <div class="flex flex-col items-center justify-center mr-5">
                      <img src="image/ready.svg" alt="" width="35" />
                      <h2
                        class="font-sans font-bold md:text-xl pt-3 text-center"
                      >
                        Ready in ${recipe.readyInMinutes} Mins
                      </h2>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    ${priceRating}
                    <h2
                    class="font-sans font-bold md:text-xl pt-3 text-center"
                    >
                        $${(recipe.pricePerServing / 100).toFixed(
                          2
                        )} per Serving
                        </h2>
                        </div>
                        </div>
                        </div>
                </a>
              </div>`;
      document.querySelector("#results").appendChild(div);

      document.querySelector(
        "#totalResults"
      ).innerHTML = `${global.search.totalResults} Results for ${term}`;
    });
  }
}
// fetch search
async function fetchSearchAPIData(endpoint, term) {
  const API_KEY = apiKey;
  // const API_URL = global.api.apiUrl;
  // showSpinner();

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${term}&apiKey=${API_KEY}&addRecipeInformation=true&sort=${endpoint}&number=12&offset=${global.search.offset}`
  );

  const data = await response.json();

  // hideSpinner();

  return data;
}
async function sortBy(e) {
  global.search.offset -= global.search.offset;
  window.scrollTo(0, 0);
  document.querySelector("#page").innerHTML = `Page ${
    global.search.offset / 12 + 1
  }`;
  const all = document.querySelectorAll("*");
  all.forEach((element) => {
    element.classList.remove("active");
  });
  e.classList.add("active");
  displaySearchDefault(e.id);
  if (global.search.offset === 0) {
    document.querySelector(".prev").classList.add("unclickable");
    document.querySelector(".prev").classList.add("dark:unclickable");
  }
}
// randomrecipe
// async function displayRandomRecipe() {
//   const { results } = await fetchAPIRandomData("random");
//   document.querySelector("#random-recipe").innerHTML = "";
//   document.querySelector("#random-recipe").innerHTML = `<div
//     id="random-recipe"
//     class="container h-screen pb-20 mt-7 grid grid-cols-1 text-center z-50"
//   >
//     <div
//       class="md:grid md:grid-flow-col md:grid-cols-2 md:items-center md:justify-center z-50"
//     >
//       <div class="pt-24 px-6">
//         <h2 class="text-4xl pb-6 font-bold">
//         ${results[0].title}
//         </h2>
//         <p class="text-xl pb-8 font-bold">${results[0].summary}
//         </p>
//         <a href="recipeDetails.html?id=${results[0].id}" class="btn">More Info</a>
//       </div>
//       <div class="image">
//         <img
//           src="${results[0].image}"
//           alt=""
//           class="h-full w-full pt-10"
//         />
//       </div>
//     </div>
//   </div>`;
// }
// //Fetch data from Spoonacular API
// async function fetchAPIRandomData(endpoint) {
//   const API_KEY = apiKey;
//   // const API_URL = global.api.apiUrl;
//   // showSpinner();

//   const response = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&sort=${endpoint}&number=1`
//   );

//   const data = await response.json();

//   // hideSpinner();

//   return data;
// }
function displayFAQ() {
  const toggleButton = document.getElementById("toggleButton");
  const content = document.getElementById("content");

  toggleButton.addEventListener("click", function () {
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });

  const toggleButton1 = document.getElementById("toggleButton1");
  const content1 = document.getElementById("content1");

  toggleButton1.addEventListener("click", function () {
    if (content1.style.display === "none") {
      content1.style.display = "block";
    } else {
      content1.style.display = "none";
    }
  });

  const toggleButton2 = document.getElementById("toggleButton2");
  const content2 = document.getElementById("content2");

  toggleButton2.addEventListener("click", function () {
    if (content2.style.display === "none") {
      content2.style.display = "block";
    } else {
      content2.style.display = "none";
    }
  });

  const toggleButton3 = document.getElementById("toggleButton3");
  const content3 = document.getElementById("content3");

  toggleButton3.addEventListener("click", function () {
    if (content3.style.display === "none") {
      content3.style.display = "block";
    } else {
      content3.style.display = "none";
    }
  });

  const toggleButton4 = document.getElementById("toggleButton4");
  const content4 = document.getElementById("content4");

  toggleButton4.addEventListener("click", function () {
    if (content4.style.display === "none") {
      content4.style.display = "block";
    } else {
      content4.style.display = "none";
    }
  });

  const toggleButton5 = document.getElementById("toggleButton5");
  const content5 = document.getElementById("content5");

  toggleButton5.addEventListener("click", function () {
    if (content5.style.display === "none") {
      content5.style.display = "block";
    } else {
      content5.style.display = "none";
    }
  });

  const toggleButton6 = document.getElementById("toggleButton6");
  const content6 = document.getElementById("content6");

  toggleButton6.addEventListener("click", function () {
    if (content6.style.display === "none") {
      content6.style.display = "block";
    } else {
      content6.style.display = "none";
    }
  });

  const toggleButton7 = document.getElementById("toggleButton7");
  const content7 = document.getElementById("content7");

  toggleButton7.addEventListener("click", function () {
    if (content7.style.display === "none") {
      content7.style.display = "block";
    } else {
      content7.style.display = "none";
    }
  });

  const toggleButton8 = document.getElementById("toggleButton8");
  const content8 = document.getElementById("content8");

  toggleButton8.addEventListener("click", function () {
    if (content8.style.display === "none") {
      content8.style.display = "block";
    } else {
      content8.style.display = "none";
    }
  });

  const toggleButton9 = document.getElementById("toggleButton9");
  const content9 = document.getElementById("content9");

  toggleButton9.addEventListener("click", function () {
    if (content9.style.display === "none") {
      content9.style.display = "block";
    } else {
      content9.style.display = "none";
    }
  });

  const toggleButton10 = document.getElementById("toggleButton10");
  const content10 = document.getElementById("content10");

  toggleButton10.addEventListener("click", function () {
    if (content10.style.display === "none") {
      content10.style.display = "block";
    } else {
      content10.style.display = "none";
    }
  });

  const toggleButton11 = document.getElementById("toggleButton11");
  const content11 = document.getElementById("content11");

  toggleButton11.addEventListener("click", function () {
    if (content11.style.display === "none") {
      content11.style.display = "block";
    } else {
      content11.style.display = "none";
    }
  });

  const toggleButton12 = document.getElementById("toggleButton12");
  const content12 = document.getElementById("content12");

  toggleButton12.addEventListener("click", function () {
    if (content12.style.display === "none") {
      content12.style.display = "block";
    } else {
      content12.style.display = "none";
    }
  });

  const toggleButton13 = document.getElementById("toggleButton13");
  const content13 = document.getElementById("content13");

  toggleButton13.addEventListener("click", function () {
    if (content13.style.display === "none") {
      content13.style.display = "block";
    } else {
      content13.style.display = "none";
    }
  });

  const toggleButton14 = document.getElementById("toggleButton14");
  const content14 = document.getElementById("content14");

  toggleButton14.addEventListener("click", function () {
    if (content14.style.display === "none") {
      content14.style.display = "block";
    } else {
      content14.style.display = "none";
    }
  });

  const toggleButtonA = document.getElementById("toggleButtonA");
  const contentA = document.getElementById("contentA");

  toggleButtonA.addEventListener("click", function () {
    if (contentA.style.display === "none") {
      contentA.style.display = "block";
    } else {
      contentA.style.display = "none";
    }
  });

  const toggleButtonB = document.getElementById("toggleButtonB");
  const contentB = document.getElementById("contentB");

  toggleButtonB.addEventListener("click", function () {
    if (contentB.style.display === "none") {
      contentB.style.display = "block";
    } else {
      contentB.style.display = "none";
    }
  });

  const toggleButtonC = document.getElementById("toggleButtonC");
  const contentC = document.getElementById("contentC");

  toggleButtonC.addEventListener("click", function () {
    if (contentC.style.display === "none") {
      contentC.style.display = "block";
    } else {
      contentC.style.display = "none";
    }
  });
}
function init() {
  switch (global.currentPage) {
    case "/popular.html":
      displayPopularRecipes();
      document.querySelector("#previous").addEventListener("click", previous);
      document.querySelector("#next").addEventListener("click", next);
      if (global.search.offset === 0) {
        document.querySelector(".prev").classList.add("unclickable");
        document.querySelector(".prev").classList.add("dark:unclickable");
      }
      break;
    case "/healthy.html":
      displayHealthyRecipes();
      document.querySelector("#previous").addEventListener("click", previous);
      document.querySelector("#next").addEventListener("click", next);
      if (global.search.offset === 0) {
        document.querySelector(".prev").classList.add("unclickable");
        document.querySelector(".prev").classList.add("dark:unclickable");
      }
      break;
    case "/booster.html":
      displayBoosterRecipes();
      document.querySelector("#previous").addEventListener("click", previous);
      document.querySelector("#next").addEventListener("click", next);
      if (global.search.offset === 0) {
        document.querySelector(".prev").classList.add("unclickable");
        document.querySelector(".prev").classList.add("dark:unclickable");
      }
      break;
    case "/recipeDetails.html":
      displayRecipeInfo();
      break;
    case "/search.html":
      displaySearchDefault();
      document
        .querySelector("#category")
        .addEventListener("click", (e) => sortBy(e.target));
      document.querySelector("#previous").addEventListener("click", previous);
      document.querySelector("#next").addEventListener("click", next);
      if (global.search.offset === 0) {
        document.querySelector(".prev").classList.add("unclickable");
        document.querySelector(".prev").classList.add("dark:unclickable");
      }
      break;
      case "/faq.html":
      displayFAQ();
      break;


    //     displayHealthyRecipes();
    //     displayEnergyRecipes();
    //     searchIcon.addEventListener("click", (e) => {
    //       searchForm.classList.toggle("active");
    //     });
    //     close.addEventListener("click", (e) => {
    //       searchForm.classList.toggle("active");
    //     });
    // searchIcon.addEventListener("click", (e) => {
    //   searchForm.classList.toggle("active");
    // });
    // close.addEventListener("click", (e) => {
    //   searchForm.classList.toggle("active");
    // });
  }

  // highlightActiveLink();
}
document.addEventListener("DOMContentLoaded", init);
