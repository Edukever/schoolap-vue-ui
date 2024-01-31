<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 46 45" fill="none">
    <g filter="url(#filter0_b_398_24290)">
        <circle cx="23.4045" cy="22.5" r="22.5" fill="white" fill-opacity="0.2"/>
    </g>
    <path d="M27.7297 31.7871V21.7626V12.7358C27.7297 11.1911 25.8215 10.4188 24.7029 11.5129L16.1816 19.8478C14.8162 21.1834 14.8162 23.3556 16.1816 24.6911L19.4223 27.861L24.7029 33.026C25.8215 34.1041 27.7297 33.3318 27.7297 31.7871Z" fill="white"/>
    <defs>
        <filter id="filter0_b_398_24290" x="-1.09546" y="-2" width="49" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_398_24290"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_398_24290" result="shape"/>
        </filter>
    </defs>
    </svg>
</template>

<script lang="ts" setup>
    defineProps({
        width: {
            type: [String, Number],
            default: 46
        },
        height: {
            type: [String, Number],
            default: 45
        },
    })
</script>