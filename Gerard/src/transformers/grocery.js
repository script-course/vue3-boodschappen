import {ref, computed} from 'vue';
/**
 * @param {string} name
 * @param {number} price
 * @param {number} amount
 * @returns {import("types").Grocery}
 */
export const transformGrocery = (name, price, amount) => {
    const _amount = ref(amount);
    const _total = computed(() => (_amount.value * price).toFixed(2));

    return {
        name,
        price,
        get amount() {
            return _amount.value;
        },
        get total() {
            return _total.value;
        },
        update({target}) {
            if (!target?.value) return;
            _amount.value = parseInt(target?.value);
        },
    };
};
