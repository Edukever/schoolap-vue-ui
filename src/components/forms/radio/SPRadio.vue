<template>
    <div class="sp-form-radio">
        <input id="attr" name="radio" type="radio" v-model="isChecked" @change="handleRadioChange">
        <label for="attr" class="radio-label">{{ label }}</label>
    </div>
</template>


<script>
export default {

    props: {
        placeholder: {
            type: String
        },
        label: {
            type: String
        }
    },

    data() {
        return {
            isChecked: false
        };
    },

    methods: {
        handleRadioChange() {
            this.$emit('radio-changed', this.isChecked);
        }
    }
}
</script>