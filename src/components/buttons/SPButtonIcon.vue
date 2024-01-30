<template>
    <button class="sp-btn" @click="handleButtonClick">
        <template v-if="position == 'right'">
            <div class="title">{{ title }}</div>
            <div class="svg-right">
                <img class="svg-img" :src="src">
                <!-- <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.025 5.81915L17.0834 11.1304L12.025 16.4417" stroke="white" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.91663 11.1304L16.9416 11.1304" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg> -->
            </div>
        </template>
        <template v-else>
            <div class="svg-left">
                <img class="svg-img" :src="src">
                <!-- <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.025 5.81915L17.0834 11.1304L12.025 16.4417" stroke="white" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.91663 11.1304L16.9416 11.1304" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg> -->
            </div>
            <div class="title-left">{{ title }}</div>
        </template>
    </button>
</template>

<script>

export default {
    name: 'SPButtonGoogle',
    props: {
        title: String,
        position: {
            default: 'right',
            type: String
        },
        src: {
            default: '',
            type: String
        }
    },
    
    methods: {
        handleButtonClick() {
            this.$emit('button-clicked');
        }
    }
}
</script>