<template>
    <div class="sp-form-date">
        <input class="sp-input-field sp-date sp-form-control" @input="onInput" type="date">
    </div>
</template>

<script>

export default {

    name: 'SPDateFieldIcon',
    props: {
       
    },

    data() {
        return {
        };
    },

    methods: {
        onInput(event) {
          this.$emit('textField', event.target.value)
        }
    },

}
</script>
