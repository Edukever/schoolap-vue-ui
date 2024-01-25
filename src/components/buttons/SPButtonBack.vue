<template>
    <button class="sp-btn-back" @click="handleButtonClick">
        <div class="svg-left">
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.97498 16.4417L2.91664 11.1304L7.97498 5.81915" stroke="#F68C2C" stroke-width="1.5"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.0834 11.1304L3.05838 11.1304" stroke="#F68C2C" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div class="title-left">{{ title }}</div>
    </button>
</template>

<script>

export default {
    name: 'SPButtonBack',
    props: {
        title: String,
        position: {
            default: 'right',
            type: String
        }
    },

    methods: {
        handleButtonClick() {
            this.$emit('button-clicked');
        }
    }
}
</script>