<template>
  <div>
    <h1>Groceries</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Subtotal</th>
      </tr>
      <tr v-for="(grocery, index) in groceries" :key="index">
        <td>{{ grocery.name }}</td>
        <td>
          <input
            type="number"
            min="0"
            max="999"
            step="1"
            v-model="grocery.quantity"
          />
        </td>
        <td>{{ grocery.price }}</td>
        <td>{{ grocery.subTotal }}</td>
      </tr>
      <tr>
        <td colspan="3">Grand total</td>
        <td>{{ grandTotal }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import myGroceries from "../data/groceries";

const groceries = ref(myGroceries);

const grandTotal = computed(() => {
  return groceries.value
    .map((grocery) => {
      return grocery.subTotal;
    })
    .reduce((previous, current) => parseFloat(previous) + parseFloat(current))
    .toFixed(2);
});
</script>

<style>
td,
th {
  width: 150px;
  text-align: left;
}
</style>
