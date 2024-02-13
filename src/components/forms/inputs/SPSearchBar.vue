<template>
    <div class="search-container">
        <span class="search-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.70829 12.6875C3.41246 12.6875 0.729126 10.0041 0.729126 6.70829C0.729126 3.41246 3.41246 0.729126 6.70829 0.729126C10.0041 0.729126 12.6875 3.41246 12.6875 6.70829C12.6875 10.0041 10.0041 12.6875 6.70829 12.6875ZM6.70829 1.60413C3.89079 1.60413 1.60413 3.89663 1.60413 6.70829C1.60413 9.51996 3.89079 11.8125 6.70829 11.8125C9.52579 11.8125 11.8125 9.51996 11.8125 6.70829C11.8125 3.89663 9.52579 1.60413 6.70829 1.60413Z"
                    fill="#292D32" />
                <path
                    d="M12.8333 13.2706C12.7225 13.2706 12.6116 13.2297 12.5241 13.1422L11.3575 11.9756C11.1883 11.8064 11.1883 11.5264 11.3575 11.3572C11.5266 11.1881 11.8066 11.1881 11.9758 11.3572L13.1425 12.5239C13.3116 12.6931 13.3116 12.9731 13.1425 13.1422C13.055 13.2297 12.9441 13.2706 12.8333 13.2706Z"
                    fill="#292D32" />
            </svg>
        </span>
        <input type="text" @input="onInput" class="sp-form-control" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
export default {
    name: 'SPSearchBar',
    setup() {

    },
    props: {
        placeholder: {
            type: String
        }
    },

    methods: {
        onInput(event) {
            this.$emit('search', event.target.value)
          this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

