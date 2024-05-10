<template>
    <div class="boundary">
        <label>First Name</label>
        <input class="native-input mb-10" type="text" v-model="name" @input="handleChange" />
        <label>Last Name</label>
        <input class="native-input" type="text" v-model="surname" />
        <div>You have entered "{{ name }} {{ surname }}" using v-model and v-model:surname</div>
        <div>Single Name or Pet Name "{{ props.singleName }}" comes from outside</div>
        <slot name="footer" message="message from slotProps"></slot>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        singleName: {
            type: String,
            default: '',
        }
    });
    const emit = defineEmits(['change']);
    const name = defineModel();
    const surname = defineModel('surname');
    const handleChange = () => {
        emit('change', name.value);
    };
</script>
<style scoped>
label, input {
    display: block;
}
</style>