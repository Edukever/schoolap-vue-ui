<template>
    <div v-if="!selectedImage" class="sp-file-upload">
        <div class="svg">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 6.73405C18.1146 6.73405 17.5313 6.36947 17.2396 5.80697L16.4896 4.29655C16.0104 3.34863 14.7604 2.56738 13.6979 2.56738H11.3125C10.2396 2.56738 8.98959 3.34863 8.51043 4.29655L7.76043 5.80697C7.46876 6.36947 6.88543 6.73405 6.25001 6.73405C3.9896 6.73405 2.19793 8.6403 2.34376 10.8903L2.88543 19.4945C3.01043 21.6403 4.16668 23.4007 7.04168 23.4007H17.9583C20.8333 23.4007 21.9792 21.6403 22.1146 19.4945L22.6563 10.8903C22.8021 8.6403 21.0104 6.73405 18.75 6.73405ZM10.9375 8.03613H14.0625C14.4896 8.03613 14.8438 8.3903 14.8438 8.81738C14.8438 9.24447 14.4896 9.59863 14.0625 9.59863H10.9375C10.5104 9.59863 10.1563 9.24447 10.1563 8.81738C10.1563 8.3903 10.5104 8.03613 10.9375 8.03613ZM12.5 19.359C10.5625 19.359 8.97918 17.7861 8.97918 15.8382C8.97918 13.8903 10.5521 12.3174 12.5 12.3174C14.4479 12.3174 16.0208 13.8903 16.0208 15.8382C16.0208 17.7861 14.4375 19.359 12.5 19.359Z" fill="#41A3DF"/>
            </svg>
        </div>
        <input type="file" class="upload" ref="fileInput" @change="handleFileChange" />
        <span class="title" @click="triggerFileInput">{{ title }}</span>
    </div>
    <div v-else>
        <div class="sp-file-upload-with-img">
            <img class="sp-file-img" v-if="selectedImage" :src="selectedImage" />
            <div class="s-block">
                <div class="sp-file-name">{{ fileName }}</div>
                <img class="sp-file-loader" src="../../../assets/img/icons/file-loader.svg" />
                <div class="sp-file-size">{{ size }}</div>
            </div>
            <div @click="closeFile" class="sp-file-svg">
                <svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9998 29.3337C23.3332 29.3337 29.3332 23.3337 29.3332 16.0003C29.3332 8.66699 23.3332 2.66699 15.9998 2.66699C8.6665 2.66699 2.6665 8.66699 2.6665 16.0003C2.6665 23.3337 8.6665 29.3337 15.9998 29.3337Z" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.2266 19.7732L19.7732 12.2266" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.7732 19.7732L12.2266 12.2266" stroke="#41A3DF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'SPFileUpload',
    props: {
        title: String
    },

    data() {
        return {
            selectedImage: null,
            fileName: '',
            size: ''
        }
    },

    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            this.$emit('file-selected', file);

            if (file) {
                this.fileName = file.name;
                this.size = file.size;
                this.selectedImage = URL.createObjectURL(file);
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },

        closeFile() {
            this.selectedImage = null
        }
    },
};
</script>
