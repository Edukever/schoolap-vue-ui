<template>
    <div class="sp-schoolap-video">
        <div class="image-overlay"></div>
        <img class="sp-video" :src="src">
        <svg class="sp-svg-icon" width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M55.1839 30.3614C57.1738 31.5335 57.1487 34.4201 55.1387 35.5574L5.39226 63.7051C3.3823 64.8423 0.894941 63.3773 0.915007 61.068L1.41166 3.91245C1.43172 1.60314 3.94417 0.181544 5.93406 1.35358L55.1839 30.3614Z"
                fill="white" />
        </svg>
    </div>
</template>

<script lang="ts">

export default {

    name: 'SPCardVideo',

    props: {
        src: String
    }

}

</script>