<template>
    <button class="sp-btn" @click="handleButtonClick">
        <div class="title">{{ title }}</div>
    </button>
</template>

<script>

export default {
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