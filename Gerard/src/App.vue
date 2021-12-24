<template>
    <TheNavBar id="navbar" />
    <GroceryList id="table" />
</template>

<script setup>
import GroceryList from 'components/GroceryList.vue';
import TheNavBar from 'components/TheNavBar.vue';
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        'top-left top-left navbar top-right top-right'
        'left table table table right';
}

#navbar {
    grid-area: navbar;
    margin-left: auto;
    margin-right: auto;
}

#table {
    grid-area: table;
}
</style>
