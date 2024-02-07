<template>
    <div class="sp-stat">
        <div class="bloc_one">
            <h2>{{ title }}</h2>
            <div class="bloc_svg">
                <img :src="svg">
                <span class="counter">{{ counter }}</span>
            </div>
            <h3 class="sp_add">{{ description }}</h3>

        </div>
        <div class="bloc_two">
            <img :src="img_button_action">
        </div>
    </div>
</template>

<script lang="ts">

export default {

    props: {
        svg: String,
        title: String,
        img_button_action: String,
        description: String,
        counter: {
            default: 0,
            type: Number
        }
    }
}
</script>