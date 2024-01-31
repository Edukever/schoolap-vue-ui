<template>
    <div class="sp-modal-right">
        <div class="svg">
            <img src="../../assets/img/icons/desktop.svg">
            <h2 class="welcome">{{ welcome }}</h2>
            <div class="successful-message">
               {{ sucessfully_message  }}</div>
            <div class="message">
               {{ message }} 
            </div>
        </div>
        <div class="sp-button-position">
            <SPButtonPrimary @button-clicked="start" :title="'Commencer'"></SPButtonPrimary>
            <div class="paragraph">En cliquant sur “ commencer “, vous confirmez avoir lu et accepté nos Conditions d’utilisation et notre Politique de confidentialité</div>
        </div>

    </div>
</template>

<script>
import SPButtonPrimary from '../buttons/SPButtonPrimary.vue'

export default {

    name: 'SPModalRight',

    components: {
        SPButtonPrimary
    },

    props: {
        welcome: String,
        sucessfully_message: String,
        message: String
    },

    methods: { 
        start() {
            this.$emit('button-clicked');
        }
    }
}
</script>