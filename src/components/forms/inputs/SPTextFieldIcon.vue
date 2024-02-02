<template>
    <div class="sp-form-group">
        <label class="sp-label">{{ label }}</label>
        <div class="sp-form-icon">
            <i class="icon" :class="icon"></i>
            <input type="text" @input="onInput" class="sp-form-control" :placeholder="placeholder">
        </div>
    </div>
</template>

<script>

export default {
    name: 'SPTextFieldIcon',
    props: {
        icon: {
            type: String
        },
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
          this.$emit('textField', event.target.value)
          this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>