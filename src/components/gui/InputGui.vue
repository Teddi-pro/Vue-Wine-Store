<template>
    <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />

</template>

<style>
    input {
        color: white;
    }

</style>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>