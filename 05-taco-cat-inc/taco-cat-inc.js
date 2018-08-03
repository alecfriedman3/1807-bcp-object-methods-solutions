let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,

  currentInventory: function () {
    let inventoryValue = 0;
    for (let productCategoryName in this){
      let category = this[productCategoryName];
      if (typeof category !== 'object') {
        continue;
      }
      for (let itemName in category){
        let item = category[itemName];
        inventoryValue += item.cost * item.quantity;
      }
    }
    return inventoryValue;
  },

  sale: function(order) {
    let total = 0;

    for (let categoryName in order){
      let item = order[categoryName];
      let itemObject = this[categoryName][item];
      itemObject.quantity -= 1;
      total += itemObject.cost;
    }

    return this.cash = total;
  }
};

// YOUR CODE BELOW
