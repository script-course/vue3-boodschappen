<template>
    <input type="number" :value="modelValue" @input="update" step="0.01" />
</template>

<script setup>
defineProps({
    modelValue: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const update = event => {
    if (!event.target) return;
    emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
input {
    width: 50px;
}
</style>
