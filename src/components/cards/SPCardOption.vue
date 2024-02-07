<template>
    <div class="sp-card-option">
        <div class="sp-card-content-option">
            <div class="sp-edit" @click="handEditClick">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70898 1.5H7.12565C3.16732 1.5 1.58398 3 1.58398 6.75V11.25C1.58398 15 3.16732 16.5 7.12565 16.5H11.8757C15.834 16.5 17.4173 15 17.4173 11.25V9.75" stroke="#4E4E4E" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.698 2.26495L6.45966 8.17495C6.22216 8.39995 5.98466 8.84245 5.93716 9.16495L5.59674 11.4224C5.47008 12.2399 6.07966 12.8099 6.94258 12.6974L9.32549 12.3749C9.65799 12.3299 10.1251 12.1049 10.3705 11.8799L16.6088 5.96995C17.6855 4.94995 18.1922 3.76495 16.6088 2.26495C15.0255 0.764945 13.7747 1.24495 12.698 2.26495Z" stroke="#4E4E4E" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8047 3.1123C12.3351 4.9048 13.8155 6.3073 15.7155 6.8173" stroke="#4E4E4E" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{ editText }}</p>
            </div>
            <div class="sp-detail" @click="handDetailClick">
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3327 6.53092V14.2497C18.3327 16.6247 16.6918 17.4163 14.666 17.4163H7.33268C5.30685 17.4163 3.66602 16.6247 3.66602 14.2497V6.53092C3.66602 3.95801 5.30685 3.36426 7.33268 3.36426C7.33268 3.85509 7.56182 4.29842 7.93766 4.623C8.31349 4.94759 8.82685 5.14551 9.39518 5.14551H12.6035C13.7402 5.14551 14.666 4.34592 14.666 3.36426C16.6918 3.36426 18.3327 3.95801 18.3327 6.53092Z" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6673 3.36426C14.6673 4.34592 13.7415 5.14551 12.6048 5.14551H9.39648C8.82815 5.14551 8.31479 4.94759 7.93896 4.62301C7.56313 4.29842 7.33398 3.85509 7.33398 3.36426C7.33398 2.38259 8.25982 1.58301 9.39648 1.58301H12.6048C13.1732 1.58301 13.6865 1.78093 14.0623 2.10551C14.4382 2.43009 14.6673 2.87342 14.6673 3.36426Z" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.33398 10.292H11.0007" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.33398 13.458H14.6673" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{ detailText }}</p>
            </div>
            <div class="sp-archive" @click="handArchiveClick">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6673 6.875V10.625C14.6673 13.125 14.0007 13.75 11.334 13.75H4.66732C2.00065 13.75 1.33398 13.125 1.33398 10.625V4.375C1.33398 1.875 2.00065 1.25 4.66732 1.25H5.66732C6.66732 1.25 6.88732 1.525 7.26732 2L8.26732 3.25C8.52065 3.5625 8.66732 3.75 9.33398 3.75H11.334C14.0007 3.75 14.6673 4.375 14.6673 6.875Z" stroke="#4E4E4E" stroke-width="0.75" stroke-miterlimit="10"/>
                    <path d="M5.33398 1.25H11.334C12.6673 1.25 13.334 1.875 13.334 3.125V3.9875" stroke="#4E4E4E" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>{{ archiveText }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SPCardOption',
    props:{
        editText :{
            type: String,
            default: 'Modifier'
        },
        detailText :{
            type: String,
            default: 'Detail'
        },
        archiveText :{
            type: String,
            default: 'Archive'
        }
    },
    methods: {
        handEditClick() {
            this.$emit('edit-clicked');
        },
        handDetailClick() {
            this.$emit('detail-clicked');
        },
        handArchiveClick() {
            this.$emit('archive-clicked');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>