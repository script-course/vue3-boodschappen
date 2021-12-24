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
        price: 1.15,
        amount: 2,
    },
];

/**
 * @param {RawGrocery} newGrocery
 */
export const addGroceryToList = ({name, price, amount}) => (groceries[name] = transformGrocery(name, price, amount));

export const getGroceriesFromServer = () => {
    for (const grocery of serverResponse) addGroceryToList(grocery);
};
