<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 34 24" fill="none">
        <path d="M2 1.70801H32" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M2 10.708H32" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M2 21.708H32" stroke="white" stroke-width="3" stroke-linecap="round"/>
    </svg>
</template>

<script setup lang="ts">
    defineProps({
        width: {
            type: [String, Number],
            default: '34'
        },
        height: {
            type: [String,Number],
            default: '24'
        }
    })
</script>
