<template>
    <button class="sp-btn-bleu" @click="handleButtonClick">
        <div class="title">{{ title }}</div>
    </button>
</template>

<script>

export default {
    name: 'SPButtonGoogle',
    props: {
        title: String,
    },

    methods: {
        handleButtonClick() {
            this.$emit('button-clicked');
        }
    }
}
</script>