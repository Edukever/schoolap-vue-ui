<template>
    <div class="sp-right-side-modal" :class="{ 'sp-closed-modal' : !isOpen }">
        <div class="sp-header-modal">
            <div class="sp-close-modal" @click="closeModal">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9998 29.3337C23.3332 29.3337 29.3332 23.3337 29.3332 16.0003C29.3332 8.66699 23.3332 2.66699 15.9998 2.66699C8.6665 2.66699 2.6665 8.66699 2.6665 16.0003C2.6665 23.3337 8.6665 29.3337 15.9998 29.3337Z" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2266 19.7732L19.7732 12.2266" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.7732 19.7732L12.2266 12.2266" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="sp-content-modal">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">

export default {

    name: 'SPRightSideModal',

    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
        }
    },

    methods: { 
        closeModal() {
            console.log("============")
            this.$emit('close'); 
        }
    }
}
</script>