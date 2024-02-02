<template>
    <div class="sp-form-group">
        <label class="sp-label">{{ label }}</label>
        <textarea class="sp-form-textarea"  :placeholder="placeholder"></textarea>
    </div>
</template>

<script>

export default {
    name: 'SPTextarea',
    
    props: {
        label: {
            default: '',
            type: String
        },
        placeholder: {
            default: '',
            type: String
        }
    },

    methods: {
        onInput(event) {
            this.$emit('textareaField', event.target.value)
        }
    }
}
</script>