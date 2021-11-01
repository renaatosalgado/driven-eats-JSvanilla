function checkIconMain(selectedIcon) {
  if (selectedIcon === "icon1") {
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon2").style.display = "none";
    document.getElementById("icon3").style.display = "none";
  } else if (selectedIcon === "icon2") {
    document.getElementById("icon1").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon3").style.display = "none";
  } else {
    document.getElementById("icon1").style.display = "none";
    document.getElementById("icon2").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
  }
}

function checkIconDrinks(selectedIcon) {
  if (selectedIcon === "icon4") {
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon5").style.display = "none";
    document.getElementById("icon6").style.display = "none";
  } else if (selectedIcon === "icon5") {
    document.getElementById("icon4").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon6").style.display = "none";
  } else {
    document.getElementById("icon4").style.display = "none";
    document.getElementById("icon5").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
  }
}

function checkIconDesserts(selectedIcon) {
  if (selectedIcon === "icon7") {
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon8").style.display = "none";
    document.getElementById("icon9").style.display = "none";
  } else if (selectedIcon === "icon8") {
    document.getElementById("icon7").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
    document.getElementById("icon9").style.display = "none";
  } else {
    document.getElementById("icon7").style.display = "none";
    document.getElementById("icon8").style.display = "none";
    document.getElementById(selectedIcon).style.display = "initial";
  }
}

function mainSelection(mainSelected) {
  const selectedItem = document.querySelector(".main-course .option-border");

  if (selectedItem !== null) {
    selectedItem.classList.remove("option-border");
  }

  mainSelected.classList.add("option-border");
}

function drinkSelection(drinkSelected) {
  const selectedItem = document.querySelector(".drinks .option-border");

  if (selectedItem !== null) {
    selectedItem.classList.remove("option-border");
  }

  drinkSelected.classList.add("option-border");
}

function dessertSelection(dessertSelected) {
  const selectedItem = document.querySelector(".desserts .option-border");

  if (selectedItem !== null) {
    selectedItem.classList.remove("option-border");
  }

  dessertSelected.classList.add("option-border");
}

function finishOrder() {
  const selectedMain = document.querySelector(".main-course .option-border");
  const selectedDrink = document.querySelector(".drinks .option-border");
  const selectedDessert = document.querySelector(".desserts .option-border");

  const activeButton = document.querySelector(".active-button");
  const inactiveButton = document.querySelector(".inactive-button");

  if (
    selectedMain !== null &&
    selectedDrink !== null &&
    selectedDessert !== null
  ) {
    activeButton.classList.remove("hide-class");
    inactiveButton.classList.add("hide-class");
  }
}

function calculateTotal() {
  const mainPrice = Number(
    document
      .querySelector(".main-course .option-border")
      .querySelector(".value")
      .innerHTML.replace(",", ".")
  );
  const drinkPrice = Number(
    document
      .querySelector(".drinks .option-border")
      .querySelector(".value")
      .innerHTML.replace(",", ".")
  );
  const dessertPrice = Number(
    document
      .querySelector(".desserts .option-border")
      .querySelector(".value")
      .innerHTML.replace(",", ".")
  );

  const totalPrice = mainPrice + drinkPrice + dessertPrice;
  const convertedTotal = totalPrice.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return convertedTotal;
}

function sendMessage() {
  const info = `Olá, gostaria de fazer o pedido: \n- Prato: ${
    document
      .querySelector(".main-course .option-border")
      .querySelector(".item-name").innerHTML
  } \n- Bebida: ${
    document.querySelector(".drinks .option-border").querySelector(".item-name")
      .innerHTML
  } \n- Sobremesa: ${
    document
      .querySelector(".desserts .option-border")
      .querySelector(".item-name").innerHTML
  } \nTotal: ${calculateTotal()}`;

  const message = encodeURIComponent(info);

  window.location.href = "https://wa.me/5511999999999?text=" + message;
}
