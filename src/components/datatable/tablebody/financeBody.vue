<template>
        <tr v-for="(item, index) in rows" :key="index">
            <td>
                <input type="checkbox" v-model="item.checked" @change="updateCheckedStatus(item)">
                {{ item['date'] }}
            </td>
            <td>
                {{ item['personnes'] }} 
            </td>
            <td>
                <div class="sp-IsSend">
                    <div class="sp-send" v-if="item['envoyé'] == true">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.66144L4.32941 7.99085L11 1.33203" stroke="#292D32" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Envoyé</p>
                    </div>
                    <div class="sp-not-send" v-else>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.17188 6.82992L6.83187 1.16992" stroke="#292D32" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.83187 6.82992L1.17188 1.16992" stroke="#292D32" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Non envoyé</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="sp-montant">
                    <p>{{ item['montant']}}{{ item['devise'] }} </p>
                </div>
            </td>
            <td>
                <div class="sp-status">
                    <div class="sp-status-badget" :class="{'paid': item['status']}">
                        <p v-if="item['status']">Payé</p>
                        <p v-else>Non payé</p>
                    </div>
                </div>
            </td>
            <td class="sp-td-action">
                <div class="sp-action" @click="toggleAction(index)">
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.49718 4C7.49718 5.93316 5.93064 7.5 3.99859 7.5C2.06654 7.5 0.5 5.93316 0.5 4C0.5 2.06684 2.06654 0.5 3.99859 0.5C5.93064 0.5 7.49718 2.06684 7.49718 4Z" stroke="black"/>
                        <path d="M19.4933 4C19.4933 5.93316 17.9267 7.5 15.9947 7.5C14.0626 7.5 12.4961 5.93316 12.4961 4C12.4961 2.06684 14.0626 0.5 15.9947 0.5C17.9267 0.5 19.4933 2.06684 19.4933 4Z" stroke="black"/>
                        <path d="M31.4884 4C31.4884 5.93316 29.9219 7.5 27.9898 7.5C26.0577 7.5 24.4912 5.93316 24.4912 4C24.4912 2.06684 26.0577 0.5 27.9898 0.5C29.9219 0.5 31.4884 2.06684 31.4884 4Z" stroke="black"/>
                    </svg>
                </div>
            </td>
            <SPCardOption
                :class="show === index ? 'active' : ''"
                :editText="'Télécharger'"
                :detailText="'Envoyer'"
                :archiveText="'Détail'"
                @edit-clicked="handleEditClick"
                @detail-clicked="handleDetailClick"
                @archive-clicked="handleArchiveClick"
            >
                <template v-slot:edit-icon>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0586 12.0254L10.0003 17.0837L4.94193 12.0254" stroke="#4E4E4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 2.91699L10 16.942" stroke="#4E4E4E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
                <template v-slot:detail-icon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z" stroke="#4E4E4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.1094 13.6496L13.6894 10.0596" stroke="#4E4E4E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
                <template v-slot:archive-icon>
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6693 8.25V18C21.6693 21 19.7301 22 17.3359 22H8.66927C6.2751 22 4.33594 21 4.33594 18V8.25C4.33594 5 6.2751 4.25 8.66927 4.25C8.66927 4.87 8.94007 5.43 9.38424 5.84C9.82841 6.25 10.4351 6.5 11.1068 6.5H14.8984C16.2418 6.5 17.3359 5.49 17.3359 4.25C19.7301 4.25 21.6693 5 21.6693 8.25Z" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.3346 4.25C17.3346 5.49 16.2405 6.5 14.8971 6.5H11.1055C10.4338 6.5 9.82711 6.25 9.38294 5.84C8.93877 5.43 8.66797 4.87 8.66797 4.25C8.66797 3.01 9.76214 2 11.1055 2H14.8971C15.5688 2 16.1755 2.25 16.6197 2.66C17.0638 3.07 17.3346 3.63 17.3346 4.25Z" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.66797 13H13.0013" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.66797 17H17.3346" stroke="#4E4E4E" stroke-width="1.29217" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </template>
            </SPCardOption>
        </tr>
</template>

<script>
import SPCardOption from '../../../components/cards/SPCardOption.vue'

export default {
    name: 'financeBody',
    components:{
        SPCardOption
    },
    props:{
        rows: {
            type: Array,
            required: true
        },
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
        toggleAction(index){
            event.stopPropagation();
            this.show = this.show  === index ? null : index
        }
    },
    mounted() {
        document.body.addEventListener('click', () => {
            this.show = false;
        })
    },

    data() {
        return {
            show : null
        }
    }
}
</script>