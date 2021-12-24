/**
 * @typedef {import("types").RawGrocery} RawGrocery
 */
import {transformGrocery} from 'transformers/grocery';
import {reactive} from 'vue';

/** @type {import("types").GroceryList} */
export const groceries = reactive({});

/** @type {RawGrocery[]} */
const serverResponse = [
    {
        name: 'Brood',
        price: 0.15,
        amount: 2,
    },
];

/**
 * @param {RawGrocery[]} newGroceries
 */
const setGroceries = newGroceries => {
    for (const {name, price, amount} of newGroceries) {
        groceries[name] = transformGrocery(name, price, amount);
    }
};

export const getGroceriesFromServer = () => {
    setGroceries(serverResponse);
};
