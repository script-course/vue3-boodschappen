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
            <AddGroceryRow />
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Totaal</td>
                <td>{{ total }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<script setup>
import GroceryRow from './GroceryRow.vue';
import AddGroceryRow from './AddGroceryRow.vue';
import {groceries, getGroceriesFromServer} from '../store/groceries';
import {onMounted, computed} from 'vue';

onMounted(() => getGroceriesFromServer());

const total = computed(() => {
    return Object.values(groceries)
        .reduce((acc, {total}) => acc + parseFloat(total), 0)
        .toFixed(2);
});
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
