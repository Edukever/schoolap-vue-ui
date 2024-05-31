<template>
    <div class="sp-card-pricing">
        <div class="sp-card-pricing-head">
            <h2>{{ title }}</h2>
        </div>
        <div class="sp-card-pricing-body">
            <div class="sp-progress-circle">
                <svg width="250" height="250" viewBox="0 0 250 250" class="circular-progress" ref="circle" :data-progress="circleSize">
                    <circle class="bg"></circle>
                    <circle class="fg"></circle>
                </svg>
                <div class="sp-progress-circle-content">
                    <div class="sp-progress-circle-content-text">
                        <svg class="sp-courone" width="41" height="11" viewBox="0 0 41 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2308 11L12 3.47368C16.4308 8.56842 19.1795 3.2807 20 0V11H13.2308Z" fill="white"/>
                            <path opacity="0.7" d="M26.7692 11L28 3.47368C23.5692 8.56842 20.8205 3.2807 20 0V11H26.7692Z" fill="white"/>
                            <path d="M32.6713 11L32 6.89474C34.4168 9.67368 35.9161 6.78947 36.3636 5V11H32.6713Z" fill="white"/>
                            <path opacity="0.7" d="M40.056 11L40.7273 6.89474C38.3105 9.67368 36.8112 6.78947 36.3637 5V11H40.056Z" fill="white"/>
                            <path d="M0.671329 11L0 6.89474C2.41678 9.67368 3.91608 6.78947 4.36364 5V11H0.671329Z" fill="white"/>
                            <path opacity="0.7" d="M8.05597 11L8.72729 6.89474C6.31051 9.67368 4.81121 6.78947 4.36366 5V11H8.05597Z" fill="white"/>
                        </svg>
                        <h2 class="sp-price">{{ price }}$</h2>
                    </div>
                    <div class="sp-progress-circle-content-icon">
                        <p>{{ days }}</p>
                    </div>
                </div>
            </div>
            <div class="sp-badget-pricing">
                <div class="sp-badget-p">
                    {{ type }}
                </div>
            </div>

            <div class="sp-pricing-body-item">
                <div class="sp-svg">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.5 11.8277C30.9853 11.8277 33 9.84192 33 7.39232C33 4.94271 30.9853 2.95691 28.5 2.95691C26.0147 2.95691 24 4.94271 24 7.39232C24 9.84192 26.0147 11.8277 28.5 11.8277Z" fill="white"/>
                        <path d="M30.51 18.8062H25.545C24.15 18.8062 22.905 19.575 22.275 20.7873L21.075 23.1233C20.79 23.6851 20.22 24.0252 19.59 24.0252H14.925C14.49 24.0252 13.845 23.9365 13.44 23.1085L12.255 20.7873C11.625 19.5602 10.38 18.7914 8.985 18.7914H3.99C3.45 18.8062 3 19.2497 3 19.782V24.3504C3 29.4807 6.105 32.5264 11.295 32.5264H23.235C28.125 32.5264 31.14 29.8799 31.5 25.1932V19.782C31.5 19.2497 31.05 18.8062 30.51 18.8062Z" fill="white"/>
                        <path d="M31.5 15.3761V16.7511C31.185 16.6476 30.855 16.5884 30.51 16.5884H25.545C23.295 16.5884 21.27 17.8156 20.28 19.7967L19.23 21.8222H15.285L14.265 19.8115C13.245 17.8156 11.235 16.5884 8.985 16.5884H3.99C3.645 16.5884 3.315 16.6476 3 16.7511V12.5966C3 8.08724 6.705 4.43542 11.28 4.43542H20.4C21.36 4.43542 22.05 5.29294 21.87 6.20959C21.63 7.39236 21.735 8.67863 22.32 10.0388C22.995 11.5764 24.255 12.8183 25.815 13.4837C27.195 14.0603 28.5 14.1638 29.7 13.9272C30.63 13.7498 31.5 14.4299 31.5 15.3761Z" fill="white" fill-opacity="0.58"/>
                    </svg>
                </div>
                <div class="sp-description">
                    <p class="sp-title">{{ minutes }}</p>
                    <p class="sp-text">{{ subtileminute }}</p>
                </div>
            </div>

            <div class="sp-pricing-body-item">
                <div class="sp-svg">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.43 15.9022C25.785 15.9022 25.275 15.3847 25.275 14.7638C25.275 14.2167 24.72 13.0783 23.79 12.0878C22.875 11.1267 21.87 10.5649 21.03 10.5649C20.385 10.5649 19.875 10.0475 19.875 9.42651C19.875 8.80555 20.4 8.28809 21.03 8.28809C22.53 8.28809 24.105 9.08646 25.485 10.5206C26.775 11.866 27.6 13.5367 27.6 14.749C27.6 15.3847 27.075 15.9022 26.43 15.9022Z" fill="#FDDCAD"/>
                        <path d="M31.8456 15.9024C31.2006 15.9024 30.6906 15.385 30.6906 14.764C30.6906 9.51544 26.3556 5.25745 21.0456 5.25745C20.4006 5.25745 19.8906 4.73998 19.8906 4.11903C19.8906 3.49807 20.4006 2.96582 21.0306 2.96582C27.6306 2.96582 33.0006 8.25874 33.0006 14.764C33.0006 15.385 32.4756 15.9024 31.8456 15.9024Z" fill="#FDDCAD"/>
                        <path d="M16.575 22.112L13.8 24.8472C13.215 25.4238 12.285 25.4238 11.685 24.8619C11.52 24.6993 11.355 24.5515 11.19 24.3888C9.645 22.8512 8.25 21.2397 7.005 19.5542C5.775 17.8688 4.785 16.1833 4.065 14.5127C3.36 12.8272 3 11.2157 3 9.67807C3 8.67271 3.18 7.71171 3.54 6.82462C3.9 5.92276 4.47 5.09482 5.265 4.35558C6.225 3.42415 7.275 2.96582 8.385 2.96582C8.805 2.96582 9.225 3.05453 9.6 3.23194C9.99 3.40936 10.335 3.67549 10.605 4.05989L14.085 8.89448C14.355 9.2641 14.55 9.60415 14.685 9.92941C14.82 10.2399 14.895 10.5504 14.895 10.8313C14.895 11.1861 14.79 11.5409 14.58 11.881C14.385 12.221 14.1 12.5759 13.74 12.9307L12.6 14.0987C12.435 14.2613 12.36 14.4535 12.36 14.6901C12.36 14.8084 12.375 14.9118 12.405 15.0301C12.45 15.1484 12.495 15.2371 12.525 15.3258C12.795 15.8137 13.26 16.4495 13.92 17.2183C14.595 17.9871 15.315 18.7707 16.095 19.5542C16.245 19.7021 16.41 19.8499 16.56 19.9978C17.16 20.5744 17.175 21.5206 16.575 22.112Z" fill="white"/>
                        <path d="M32.9534 27.1092C32.9534 27.5232 32.8784 27.952 32.7284 28.3659C32.6834 28.4842 32.6384 28.6025 32.5784 28.7208C32.3234 29.253 31.9934 29.7557 31.5584 30.2288C30.8234 31.0272 30.0134 31.6038 29.0984 31.9734C29.0834 31.9734 29.0684 31.9882 29.0534 31.9882C28.1684 32.343 27.2084 32.5352 26.1734 32.5352C24.6434 32.5352 23.0084 32.1804 21.2834 31.4559C19.5584 30.7315 17.8334 29.7557 16.1234 28.5286C15.5384 28.0998 14.9534 27.6711 14.3984 27.2127L19.3034 22.3781C19.7234 22.6886 20.0984 22.9252 20.4134 23.0878C20.4884 23.1174 20.5784 23.1617 20.6834 23.2061C20.8034 23.2504 20.9234 23.2652 21.0584 23.2652C21.3134 23.2652 21.5084 23.1765 21.6734 23.0139L22.8134 21.905C23.1884 21.5354 23.5484 21.2545 23.8934 21.0771C24.2384 20.8701 24.5834 20.7666 24.9584 20.7666C25.2434 20.7666 25.5434 20.8257 25.8734 20.9588C26.2034 21.0919 26.5484 21.2841 26.9234 21.5354L31.8884 25.0098C32.2784 25.2759 32.5484 25.5864 32.7134 25.956C32.8634 26.3256 32.9534 26.6953 32.9534 27.1092Z" fill="#FDDCAD"/>
                    </svg>
                </div>
                <div class="sp-description">
                    <p class="sp-title">{{ sms }}</p>
                    <p class="sp-text">{{ subtitleSms }}</p>
                </div>
            </div>
        </div>
        <div class="sp-footer">
            <button class="sp-btn-white" @click="handleClick">{{ creditRecharge }}</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SPCardPricing',
    props: {
        circleSize: {
            type: [String, Number],
            default: 50,
        },
        title: {
            type: String,
            default: 'Votre abonnement',
        },
        price: {
            type: [String, Number],
            default: 35,
        },
        days: {
            type: [String, Number],
            default: "100 Jours restant",
        },
        minutes: {
            type: [String, Number],
            default: "10.5341",
        },
        subtileminute : {
            type: String,
            default: "Nombre des minutes",
        },
        sms: {
            type: [String, Number],
            default: "10.5341",
        },
        subtitleSms: {
            type: String,
            default: "Nombre des SMS",
        },
        creditRecharge : {
            type: String,
            default: "Recharger des crédits",
        },
        type: {
            type: String,
            default: "Premium",
        },
    },
    data() {
        return {
        myValue: 50, // Cette valeur peut être mise à jour dynamiquement
        };
    },
    mounted() {
        this.updateProgress();
    },
    watch: {
        myValue() {
            this.updateProgress();
        },
    },
    methods: {
        updateProgress() {
            const circle = this.$refs.circle as HTMLElement;
            const progress = circle.getAttribute('data-progress');
            circle.style.setProperty('--progress', progress);

            // const progress = this.$refs.circle.getAttribute('data-progress');
            // this.$refs.circle.style.setProperty('--progress', progress);
        },
        handleClick() {
            this.$emit('click');
        },
    },
}
</script>

<style lang="scss" scoped>

</style>