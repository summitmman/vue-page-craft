<template>
    <input class="native-input" type="text" v-model="name" @input="handleChange" />
</template>
<script setup lang="ts">
    const emit = defineEmits(['change']);
    const name = defineModel();
    const handleChange = () => {
        emit('change', name.value);
    };
</script>