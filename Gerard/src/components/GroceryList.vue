<template>
    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Prijs</th>
                <th>Aantal</th>
                <th>Totaal</th>
            </tr>
        </thead>
        <tbody>
            <GroceryRow v-for="grocery in groceries" :key="grocery.name" :grocery="grocery" />
        </tbody>
    </table>
</template>

<script setup>
import GroceryRow from './GroceryRow.vue';
import {groceries, getGroceriesFromServer} from '../store/groceries';
import {onMounted} from 'vue';

onMounted(() => getGroceriesFromServer());
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
