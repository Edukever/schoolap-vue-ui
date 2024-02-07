<template>
    <div class="sp-card">
        <div class="sp-card-div">
            <img class="sp-card-img" :src="svg">
        </div>
        <h3 class="sp-title">{{ title }}</h3>
        <div class="sp-div-btn">
            <SPButtonIcon class="sp-btn-bleu" :src="'/src/assets/img/icons/group-plus.svg'" :position="'left'" :title="action">
            </SPButtonIcon>
        </div>
    </div>
</template>

<script lang="ts">
import SPButtonIcon from '../buttons/SPButtonIcon.vue'

export default {

    name: 'SPCardActivity',

    components: {
        SPButtonIcon,
    },

    props: {
        svg: String,
        title: String,
        action: String
    }
}
</script>