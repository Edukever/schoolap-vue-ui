<template>
    <div class="sp-card-archive">
        <div class="sp-card-archive-content">
            <div class="sp-content-svg">
                <div class="sp-svg">
                    <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="4" width="26" height="22" rx="6" fill="#AEDAEE"/>
                        <path d="M33.5666 10.6275C32.8499 10.1237 32.0333 9.75 31.1499 9.53875C30.5666 9.37625 29.9333 9.295 29.2999 9.295H23.0999C22.1333 9.295 22.0666 9.1975 21.5499 8.53125L19.2166 5.50875C18.1333 4.11125 17.2833 3.25 14.5666 3.25H10.6999C6.63325 3.25 3.33325 6.4675 3.33325 10.4325V28.5675C3.33325 32.5325 6.63325 35.75 10.6999 35.75H29.2999C33.3666 35.75 36.6666 32.5325 36.6666 28.5675V16.4775C36.6666 14.0563 35.4499 11.9275 33.5666 10.6275ZM23.8833 26H16.1166C15.4666 26 14.9499 25.4963 14.9499 24.8625C14.9499 24.245 15.4666 23.725 16.1166 23.725H23.8666C24.4999 23.725 25.0333 24.245 25.0333 24.8625C25.0333 25.4963 24.5166 26 23.8833 26Z" fill="#41A3DF"/>
                    </svg>
                </div>
            </div>
            <div class="sp-option" @click="toggleShow">
                <svg width="6" height="21" viewBox="0 0 6 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="2.90919" cy="3.01506" rx="2.43498" ry="2.38182" transform="rotate(90 2.90919 3.01506)" fill="#292D32"/>
                    <ellipse cx="2.90919" cy="10.3197" rx="2.43498" ry="2.38182" transform="rotate(90 2.90919 10.3197)" fill="#292D32"/>
                    <ellipse cx="2.90919" cy="17.6254" rx="2.43498" ry="2.38182" transform="rotate(90 2.90919 17.6254)" fill="#292D32"/>
                </svg>

            </div>
        </div>
        <div class="sp-detail">
            <h4 class="sp-subtitle">{{ subtitle }}</h4>
            <h4 class="sp-title">{{ titleFolder }}</h4>
        </div>
        <SPCardOption 
            :class="{'active': show}" 
            @edit-clicked="handleEditClick"
            @detail-clicked="handleDetailClick"
            @archive-clicked="handleArchiveClick"
        />

    </div>
</template>

<script>
import SPCardOption from '../../components/cards/SPCardOption.vue'
export default {
    
    name: 'SPArchive',

    components: {
        SPCardOption
    },
    props:{
        titleFolder :{
            type: String,
            default: 'Dossier scolair'
        },
        subtitle: {
            type: String,
            default: '1 documents'
        },
        
    },
    data(){
        return{
            show: false
        }
    },
    methods: {
        handleEditClick() {
            this.$emit('edit');
        },
        handleDetailClick() {
            this.$emit('detail');
        },
        handleArchiveClick() {
            this.$emit('archive');
        },
        toggleShow(event){
            event.stopPropagation();
            this.show = !this.show;
        }
    },
    mounted() {
        document.body.addEventListener('click', () => {
            this.show = false;
        });
    },
}
</script>