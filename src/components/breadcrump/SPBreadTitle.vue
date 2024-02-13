
<template>
    <div class="sp-bread-title"> 
        <img class="sp-bread-img" :src="src">
        <h4 class="sp-title">{{ title }}</h4>
    </div>
</template>

<script lang="ts">

export default {
    name: 'SPBreadTitle',

    props: {
        src: String,
        title: String
    }
}

</script>