const initialState = {
    inventory: []
};

const InventoryReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_ITEM':
            //Inventory item is {name: 'string', quantity: 1}

           let inventory = state.inventory;
           let index;
           let found = inventory.find((cur, i) => {
               if (cur.name === action.newItem.name) {
                   index = i;
                   return true;
               } else {
                   return false;
               }
           })
           if (!found) {
               inventory.push(action.newItem)
           } else {
               inventory[index].quantity += action.newItem.quantity;
           }
           return {
               // ... creates a copy of state as a new object so it is not copy by reference (Spread operator)
               ...state,
               inventory
           }
        default:
            return state;
    }
};

export default InventoryReducer;