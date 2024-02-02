<template>
    <div class="sp-card-rapport-presence-two">
        <div class="sp-card-rapport-presence-body">
            <div class="sp-icon">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2151 34.9319C22.6868 35.0417 22.7302 35.6599 22.2709 35.8134C22.2615 35.8165 22.2521 35.8197 22.2426 35.8229L19.4776 36.7329C12.5301 38.9729 8.87261 37.1004 6.61511 30.1529L4.37511 23.2404C2.13511 16.2929 3.99011 12.6179 10.9376 10.3779L12.6166 9.82182C13.0195 9.6884 13.4041 10.0896 13.2751 10.4939C13.0903 11.073 12.9206 11.6993 12.7576 12.3729L11.0426 19.7054C9.11761 27.9479 11.9351 32.4979 20.1776 34.4579L22.2151 34.9319Z" fill="#A8D8F2"/>
                    <path d="M30.0478 5.61788L27.1253 4.93538C21.2803 3.55288 17.7978 4.69038 15.7503 8.92538C15.2253 9.99288 14.8053 11.2879 14.4553 12.7754L12.7403 20.1079C11.0253 27.4229 13.2828 31.0279 20.5803 32.7604L23.5203 33.4604C24.5353 33.7054 25.4803 33.8629 26.3553 33.9329C31.8153 34.4579 34.7203 31.9029 36.1903 25.5854L37.9053 18.2704C39.6203 10.9554 37.3803 7.33288 30.0478 5.61788ZM26.7578 23.3279C26.6003 23.9229 26.0753 24.3079 25.4803 24.3079C25.3753 24.3079 25.2703 24.2904 25.1478 24.2729L20.0553 22.9779C19.3553 22.8029 18.9353 22.0854 19.1103 21.3854C19.2853 20.6854 20.0028 20.2654 20.7028 20.4404L25.7953 21.7354C26.5128 21.9104 26.9328 22.6279 26.7578 23.3279ZM31.8853 17.4129C31.7278 18.0079 31.2028 18.3929 30.6078 18.3929C30.5028 18.3929 30.3978 18.3754 30.2753 18.3579L21.7878 16.2054C21.0878 16.0304 20.6678 15.3129 20.8428 14.6129C21.0178 13.9129 21.7353 13.4929 22.4353 13.6679L30.9228 15.8204C31.6403 15.9779 32.0603 16.6954 31.8853 17.4129Z" fill="#41A3DF"/>
                </svg>
            </div>
            <div class="sp-card-rapport-presence-content">
                <div class="sp-card-rapport-presence-title">
                    {{ title }}
                </div>
                <div class="sp-card-rapport-presence-subtitle">
                    {{ subtitle }}
                </div>
            </div>
            <div class="sp-values">
                <div class="sp-content">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 4.5C5.53553 4.5 6.375 3.66053 6.375 2.625C6.375 1.58947 5.53553 0.75 4.5 0.75C3.46447 0.75 2.625 1.58947 2.625 2.625C2.625 3.66053 3.46447 4.5 4.5 4.5Z" stroke="#41A3DF" stroke-opacity="0.42" stroke-width="0.78" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.72179 8.25C7.72179 6.79875 6.27805 5.625 4.50055 5.625C2.72305 5.625 1.2793 6.79875 1.2793 8.25" stroke="#41A3DF" stroke-width="0.78" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span>{{ present }} / {{ total }} </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SPCardRapportPresenceTwo',
    props: {
        title: {
            type: String,
            default: 'Rapport de présence'
        },
        subtitle:{
            type: String,
            default: '11 décembre 2023 à 09:22'
        },

        total: {
            type: Number,
            default: 29
        },
        present: {
            type: Number,
            default: 29
        }
    }
}
</script>

<style lang="scss" scoped>

</style>