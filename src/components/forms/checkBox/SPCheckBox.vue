<template>
    <div class="sp-form-radio">
        <input :id="uniqueId" type="checkbox" v-model="isChecked" @input="handleCheckboxChange">
        <label :for="uniqueId" class="sp-label-box">
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
        handleCheckboxChange() {
            this.$emit('checkbox-changed', this.isChecked);
        }
    }
}
</script>