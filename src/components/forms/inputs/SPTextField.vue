<template>
    <div class="sp-form-group">
        <label class="sp-label">{{ label }}</label>
        <input class="sp-form-control" @input="onInput"  :placeholder="placeholder" type="text" >
    </div>
</template>

<script>

export default {
    name: 'SPTextField',
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
          this.$emit('textField', event.target.value)
          this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>