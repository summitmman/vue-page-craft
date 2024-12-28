<template>
    <div class="boundary">
        <label>First Name</label>
        <input class="native-input mb-10" type="text" v-model="name" @input="handleChange" />
        <label>Last Name</label>
        <input class="native-input" type="text" v-model="surname" />
        <div v-if="$slots.footer" class="comp-footer">
            <slot name="footer" :fullName="`${name} ${surname}`"></slot>
        </div>
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
.comp-footer {
    margin-top: 10px;
    border-top: 1px dashed #aaa;
    padding-top: 10px;
}
</style>