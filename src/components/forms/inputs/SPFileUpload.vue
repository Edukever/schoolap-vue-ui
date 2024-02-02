<template>
    <div class="sp-file-upload">
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 6.73405C18.1146 6.73405 17.5313 6.36947 17.2396 5.80697L16.4896 4.29655C16.0104 3.34863 14.7604 2.56738 13.6979 2.56738H11.3125C10.2396 2.56738 8.98959 3.34863 8.51043 4.29655L7.76043 5.80697C7.46876 6.36947 6.88543 6.73405 6.25001 6.73405C3.9896 6.73405 2.19793 8.6403 2.34376 10.8903L2.88543 19.4945C3.01043 21.6403 4.16668 23.4007 7.04168 23.4007H17.9583C20.8333 23.4007 21.9792 21.6403 22.1146 19.4945L22.6563 10.8903C22.8021 8.6403 21.0104 6.73405 18.75 6.73405ZM10.9375 8.03613H14.0625C14.4896 8.03613 14.8438 8.3903 14.8438 8.81738C14.8438 9.24447 14.4896 9.59863 14.0625 9.59863H10.9375C10.5104 9.59863 10.1563 9.24447 10.1563 8.81738C10.1563 8.3903 10.5104 8.03613 10.9375 8.03613ZM12.5 19.359C10.5625 19.359 8.97918 17.7861 8.97918 15.8382C8.97918 13.8903 10.5521 12.3174 12.5 12.3174C14.4479 12.3174 16.0208 13.8903 16.0208 15.8382C16.0208 17.7861 14.4375 19.359 12.5 19.359Z" fill="#41A3DF"/>
        </svg>
        <input type="file" class="upload" ref="fileInput" @change="handleFileChange" />
        <span class="title" @click="triggerFileInput">{{ title }}</span>
    </div>
</template>

<script>
export default {

    name: 'SPFileUpload',
    props: {
        title: String
    },

    methods: {
        handleFileChange(event) {
            const selectedFile = event.target.files[0];
            this.$emit('file-selected', selectedFile);
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
    },
};
</script>
