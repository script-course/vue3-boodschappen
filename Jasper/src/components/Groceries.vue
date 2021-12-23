<template>
    <h1>GroceryList</h1>
    <table class="centerTable">
        <tr>
            <th>Grocery</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Subtotal</th>
        </tr>
        <tr v-for="grocery in groceryList">
            <td>{{ grocery.name }}</td>
            <td>
                <InputValue v-model.number="grocery.price" />
            </td>
            <td><input type="number" v-model="grocery.amount" min="0" /></td>
            <td>{{ (grocery.amount * grocery.price).toFixed(2) }}</td>
        </tr>
        <tr>
            <td colspan="3">Total:</td>
            <td>{{ total }}</td>
        </tr>
    </table>
</template>

<script setup>
import {computed, reactive} from '@vue/reactivity';
import {GROCERIES} from '../store/index';
import InputValue from './form/Input.vue';

const groceryList = reactive([...GROCERIES]);

const total = computed(() =>
    groceryList
        .reduce((total, {price, amount}) => {
            return (total += price * amount);
        }, 0)
        .toFixed(2),
);
</script>

<style scoped>
.centerTable {
    margin: auto;
    text-align: left;
}
table,
td,
th {
    border: 1px solid;
}

a {
    color: #42b983;
}
</style>
