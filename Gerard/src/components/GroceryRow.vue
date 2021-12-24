<template>
    <tr>
        <td>{{ grocery.name }}</td>
        <td>{{ grocery.price }}</td>
        <td><input min="0" type="number" :value="grocery.amount" @input="grocery.update" /></td>
        <td>{{ grocery.total }}</td>
    </tr>
</template>

<script setup>
defineProps({
    grocery: {
        /** @type {import('vue').PropType<import('types').Grocery>} */
        type: Object,
        required: true,
    },
});
</script>
