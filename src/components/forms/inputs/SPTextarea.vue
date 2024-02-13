<template>
    <div class="sp-form-group">
        <label class="sp-label">{{ label }}</label>
        <textarea class="sp-form-textarea"  :placeholder="placeholder"></textarea>
    </div>
</template>

<script lang="ts">

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
        },
        value: {
            default: '',
            type: String
        }
    },

    methods: {
        onInput(event) {
          this.$emit('textareaField', event.target.value)
          this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>