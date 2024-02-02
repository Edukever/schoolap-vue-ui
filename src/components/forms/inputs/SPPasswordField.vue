<template>
    <div class="sp-form-password">
        <label class="sp-label">{{ label }}</label>
        <input :type="showField ? 'text' : 'password'" id="txtPassword" class="sp-form-control"
            :placeholder="placeholder" @input="emitInput" />
        <button type="button" id="btnToggle" class="toggle" @click="togglePassword()" >
            <svg v-if="!showField" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                        stroke="#1C274C" stroke-width="1.5"></path>
                    <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="#1C274C" stroke-width="1.5"></path>
                </g>
            </svg>
            <svg v-else width="24px" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705"
                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M8.41992 19.5297C9.55992 20.0097 10.7699 20.2697 11.9999 20.2697C15.5299 20.2697 18.8199 18.1897 21.1099 14.5897C22.0099 13.1797 22.0099 10.8097 21.1099 9.39969C20.7799 8.87969 20.4199 8.38969 20.0499 7.92969"
                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.5104 12.7002C15.2504 14.1102 14.1004 15.2602 12.6904 15.5202" stroke="#292D32"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.47 14.5303L2 22.0003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M22.0003 2L14.5303 9.47" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>

<script>

export default {
    name: 'SPPasswordField',
    
    props: {
        label: {
            default: '',
            type: String
        },
        placeholder: {
            default: '',
            type: String
        }
    },

    data() {
        return {
            showField: false
        };
    },

    methods: {
        togglePassword() {
            this.showField = !this.showField,
            this.$emit('toggle-password', this.showField);    
        },

        emitInput(event) {
          this.$emit('passwordField', event.target.value)
          this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>