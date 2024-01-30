<template>
    <div class="sp-card">
        <div class="sp-card-div">
            <img class="sp-card-img" :src="svg">
        </div>
        <h3 class="sp-title">{{ title }}</h3>
        <div class="sp-div-btn">
            <SPButtonPrimary class="sp-btn-bleu" :title="'Ajouter un personnel'">
            </SPButtonPrimary>
        </div>
    </div>
</template>

<script>
import SPButtonPcrimary from '../buttons/SPButtonPrimary.vue'

export default {

    name: 'SPCardActivity',

    components: {
        SPButtonPcrimary
    },

    props: {
        svg: String,
        title: String,
    }
}
</script>