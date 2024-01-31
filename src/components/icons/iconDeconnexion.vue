<template>
    <svg :width="width" :height="height" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M13.52 5.14648H18.48C24.4667 5.14648 29.3334 10.0132 29.3334 15.9998C29.3334 21.9865 24.4667 26.8531 18.48 26.8531H13.52C7.53335 26.8531 2.66669 21.9865 2.66669 15.9998C2.66669 10.0132 7.53335 5.14648 13.52 5.14648Z" fill="white"/>
        <path d="M18.48 21.8931C21.7348 21.8931 24.3733 19.2546 24.3733 15.9998C24.3733 12.745 21.7348 10.1064 18.48 10.1064C15.2252 10.1064 12.5867 12.745 12.5867 15.9998C12.5867 19.2546 15.2252 21.8931 18.48 21.8931Z" fill="white"/>
    </svg>

</template>

<script setup lang="ts">
    defineProps({
        width: {
            type: [String, Number],
            default: '32'
        },
        height: {
            type: [String,Number],
            default: '32'
        }
    })
</script>
