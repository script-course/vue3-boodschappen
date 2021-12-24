import {ref} from 'vue';
/**
 * @param {string} name
 * @param {number} price
 * @param {number} amount
 * @returns {import("types").Grocery}
 */
export const transformGrocery = (name, price, amount) => {
    let _amount = ref(amount);
    return {
        name,
        price,
        get amount() {
            return _amount.value;
        },
        get total() {
            return (_amount.value * price).toFixed(2);
        },
        update({target}) {
            if (!target?.value) return;
            _amount.value = parseInt(target?.value);
        },
    };
};
