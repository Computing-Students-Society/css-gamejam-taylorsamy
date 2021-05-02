export const addToInventory = (newItem) => {
    return ({
        type: "ADD_ITEM",
        newItem
    })
}