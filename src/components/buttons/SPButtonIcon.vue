<template>
    <button class="sp-btn" @click="handleButtonClick">
        <template v-if="position == 'right'">
            <div class="title">{{ title }}</div>
            <div v-if="src" class="svg-right">
                <img class="svg-img" :src="src">
            </div>
        </template>
        <template v-else>
            <div v-if="src" class="svg-left">
                <img class="svg-img" :src="src">
            </div>
            <div class="title-left">{{ title }}</div>
        </template>
    </button>
</template>

<script>

export default {
    name: 'SPButtonIcon',
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