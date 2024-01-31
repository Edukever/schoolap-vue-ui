<template>
    <div class="sp-form-radio">
        <input id="check" type="checkbox" v-model="isChecked" @input="handleCheckboxChange">
        <label for="check" class="sp-label-box">
            {{ label }}
        </label>     
    </div>

</template>


<script>
export default {
    name: 'SPCheckBox',
    props: {
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
        handleCheckboxChange() {
            this.$emit('checkbox-changed', this.isChecked);
        }
    }
}
</script>