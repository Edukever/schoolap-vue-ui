<template>
<tr v-for="(item, index) in rows" :key="index" class="sp-classe">
        <td>
            {{ index +1 }}
        </td>
        <td>
            {{ item['name'] }}
        </td>
        <td>
            <div class="sp-badget" :class="item['cycle'] === 'Secondaire'?'sp-badget-sec': ''">
                {{ item['cycle'] }}
            </div>
        </td>
        <td >
            {{ item['effectif'] }}
        </td>

        <td>
            {{ item['teacher'] }}
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
            :class="showAction === index ? 'active' : ''"
            @edit-clicked="handleEditClick"
            @detail-clicked="handleDetailClick"
            @archive-clicked="handleArchiveClick"
        />
    </tr>
</template>

<script>
import SPCardOption from '../../../components/cards/SPCardOption.vue'

export default {
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
            this.showAction = this.showAction  === index ? null : index
        }
    },
    mounted() {
        document.body.addEventListener('click', () => {
            this.showAction = null;
        });
    },
    data() {
        return {
            showAction : null
        }
    }
}
</script>