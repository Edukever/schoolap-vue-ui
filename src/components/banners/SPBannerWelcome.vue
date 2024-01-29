<template>
    <div class="sp-banner-welcome">
        <div class="bloc_one">
            <h2 class="welcome">{{ welcome }}</h2>
            <p class="paragraph">{{ description }}</p>
        </div>
        <div class="bloc_two">
            <img class="img" :src="src">
        </div>
    </div>
</template>

<script>

export default {

    props: {
        welcome: String,
        description: String,
        src: {
            default: '',
            type: String
        }
    }
}
</script>