<template>
    <div class="sp-card-other-action">
        <div class="sp-card-orther-action-body">
            <div class="sp-icon-left">
                <div class="sp-icon">
                    <slot name="icon-left"></slot>
                </div>
            </div>
            <div class="sp-card-orther-action-content">
                <h2 class="sp-card-orther-action-content-title">{{ title }}</h2>
            </div>
            <div class="sp-icon-right">
                <button class="sp-bleu-btn " @click="handleButtonClick">
                    <slot name="icon-btn-right"></slot>
                    {{ labelButton }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SPCardOtherAction',
    components: {
    },
    props: {
        title: {
            default: 'another action',
            type: String
        },
        labelButton: {
            default: 'another action',
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