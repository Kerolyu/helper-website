const cleaningOptions = document.querySelectorAll("#cleaning-options");
const selectedCleaningOption = document.getElementById("selected-cleaning-option");
const propertyOptions = document.querySelectorAll("#propertyOptions");
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
  }
});

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
    updateTotalCost(); // Update total cost when room amount changes
  }

  function updateTotalCost() {
    const bedrooms = parseInt(document.getElementById("bedroomAmount").textContent);
    const bathrooms = parseInt(document.getElementById("bathroomsAmount").textContent);

    const totalCost = 10 + (bedrooms * 30 + bathrooms * 10); // Adjust cost based on your requirements

    const totalCostValue = document.querySelector(".price-result");
    totalCostValue.textContent = totalCost.toFixed(2) + "$";
  }
});
