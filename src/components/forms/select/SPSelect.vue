<template>
    <div class="sp-form-group">
        <label class="sp-label">{{ label }}</label>
        <select class="sp-select" @input="onInput" :placeholder="placeholder">
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">

export default {

    name: 'SPSelect',

    props: {
        label: String,
        placeholder: String,
        options: Array,
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value);
        },
    },
}
</script>
