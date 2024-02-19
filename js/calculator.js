const cleaningOptions = Array.from(document.querySelectorAll("#cleaning-options"));
const selectedCleaningOption = document.getElementById("selected-cleaning-option");
const propertyOptions = Array.from(document.querySelectorAll("#propertyOptions"));
const selectedPropertyOption = document.getElementById("selected-property-option");
const totalCostValue = document.querySelector(".price-result");

document.addEventListener("DOMContentLoaded", function () {
  cleaningOptions.forEach((option) => {
    option.addEventListener("click", function () {
      updateCleaningOption(option);
    });
  });

  function updateCleaningOption(selectedOption) {
    cleaningOptions.forEach((option) => option.classList.remove("desc-selected"));
    selectedOption.classList.add("desc-selected");
    selectedCleaningOption.textContent = selectedOption.textContent;
    if (cleaningOptions[1].classList.contains("desc-selected")) {
      cleaningOptions[1].value = 15;
    } else cleaningOptions[1].value = 0;
    cleaningOptions[0].value = 0;
  }
});

function getCleaningTypeValue() {
  for (let option of cleaningOptions) {
    if (option.classList.contains("desc-selected")) {
      return option.value;
    }
  }
  return 0;
}
function updateTotalCost() {
  getCleaningTypeValue();
  const bedrooms = parseInt(document.getElementById("bedroomAmount").textContent);
  const bathrooms = parseInt(document.getElementById("bathroomsAmount").textContent);
  const cleaningType = getCleaningTypeVazlue();

  const totalCost = cleaningType + 10 + (bedrooms * 15 + bathrooms * 10);

  const totalCostValue = document.querySelector(".price-result");
  totalCostValue.textContent = totalCost.toFixed(2) + "$";
}

document.addEventListener("DOMContentLoaded", function () {
  propertyOptions.forEach((option) => {
    option.addEventListener("click", function () {
      updatePropertyOption(option);
    });
  });

  function updatePropertyOption(selectedOption) {
    propertyOptions.forEach((option) => option.classList.remove("desc-selected"));
    selectedOption.classList.add("desc-selected");
    selectedPropertyOption.textContent = selectedOption.textContent;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const bedroomConfig = {
    amountElement: document.getElementById("bedroomAmount"),
    minusButton: document.getElementById("minusButton"),
    plusButton: document.getElementById("plusButton"),
    selectedRooms: document.getElementById("selected-bedrooms"),
  };

  setupCounter(bedroomConfig, "Bedrooms", 30);

  const bathroomConfig = {
    amountElement: document.getElementById("bathroomsAmount"),
    minusButton: document.getElementById("minusBButton"),
    plusButton: document.getElementById("plusBButton"),
    selectedRooms: document.getElementById("selected-bathrooms"),
  };

  setupCounter(bathroomConfig, "Bathrooms", 10);

  function setupCounter(config, roomType, costPerUnit) {
    config.minusButton.addEventListener("click", function () {
      updateRoomAmount(config, -1, roomType, costPerUnit);
    });

    config.plusButton.addEventListener("click", function () {
      updateRoomAmount(config, 1, roomType, costPerUnit);
    });
  }

  function updateRoomAmount(config, change, roomType, costPerUnit) {
    let currentAmount = parseInt(config.amountElement.textContent);
    currentAmount += change;
    if (currentAmount < 1) {
      currentAmount = 1;
    }
    if (currentAmount > 7) {
      currentAmount = 7;
    }
    config.amountElement.textContent = currentAmount;
    config.selectedRooms.textContent = currentAmount + " " + roomType;
    updateTotalCost();
  }
});
