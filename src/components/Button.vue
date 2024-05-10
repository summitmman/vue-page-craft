<template>
    <button class="btn" @click="handleClick"><slot></slot></button>
</template>
<script setup lang="ts">
const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent): void => {
    emit('click', event);
};
</script>
<style scoped>
.btn {
    padding: 10px;
    border-radius: 4px;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}
</style>