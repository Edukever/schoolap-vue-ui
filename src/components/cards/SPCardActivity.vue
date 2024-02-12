<template>
    <div class="sp-card">
        <div class="sp-card-div">
            <img class="sp-card-img" :src="svg">
        </div>
        <h3 class="sp-title">{{ title }}</h3>
        <div class="sp-div-btn">
            <SPButtonPrimary class="sp-btn-bleu" :position="'left'" :title="action">
            </SPButtonPrimary>
        </div>
    </div>
</template>

<script lang="ts">
import SPButtonPrimary from '../buttons/SPButtonPrimary.vue'

export default {

    name: 'SPCardActivity',

    components: {
        SPButtonPrimary,
    },

    props: {
        svg: String,
        title: String,
        action: String
    }
}
</script>