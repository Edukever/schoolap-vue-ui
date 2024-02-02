<template>
    <div class="sp-form-radio">
        <input :id="uniqueId" name="radio" :value="value" type="radio" v-model="isChecked" @change="handleRadioChange">
        <label :for="uniqueId" class="radio-label">{{ label }}</label>
    </div>
</template>


<script lang="ts">
export default {
    name: 'SPRadio',
    props: {
        placeholder: {
            type: String
        },
        label: {
            type: String
        },
        value: {
            default: null
        }
    },

    computed: {
        uniqueId() {
            return `radio-${Math.random().toString(36).substr(2, 9)}`;
        },
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
