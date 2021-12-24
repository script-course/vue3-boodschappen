<template>
    <tr>
        <td><input v-model="grocery.name" type="text" placeholder="Naam" /></td>
        <td>
            <input v-model.number="grocery.price" type="number" step="0.1" />
        </td>
        <td colspan="2"><button @click="add">Voeg toe</button></td>
    </tr>
</template>

<script setup>
import {addGroceryToList} from 'store/groceries';
import {reactive} from 'vue';

/** @type {import('store/groceries').RawGrocery} */
const grocery = reactive({name: '', price: 0, amount: 0});

const add = () => {
    if (!grocery.name) return;
    if (!grocery.price) return;
    addGroceryToList(grocery);
    grocery.name = '';
    grocery.price = 0;
};
</script>
