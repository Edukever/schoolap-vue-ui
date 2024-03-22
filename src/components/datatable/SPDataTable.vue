<template>
<div class="sp-data-table">
    <table :class="{'sp-classe-table': isForClasse, 'sp-finance-table': isForFinance, 'sp-suivie-table': isForSuiviePayement}">
        <thead>
            <tr>
            </tr>
        </thead>
        <tbody>
            <template v-if="!isForClasse && !isForFinance && !isForSuiviePayement">
                <student-body :rows="rows"
                              @edit="handleEditClick"
                              @detail="handleDetailClick"
                              @archive="handleArchiveClick"/>
            </template>
            <template v-if="isForClasse">
                <classe-body :rows="rows" />
            </template>
            <template v-if="!isForClasse && isForFinance">
                <finance-body :rows="rows" />
            </template>
            <template v-if="isForSuiviePayement && !isForClasse && !isForFinance">
                <suvie-payement :rows="rows" />
            </template>
        </tbody>
    </table>
</div>
</template>

<script>
import studentBody from './tablebody/studentBody.vue'
import classeBody from './tablebody/classeBody.vue'
import financeBody from './tablebody/financeBody.vue'
import suviePayement from './tablebody/suviePayement.vue'
export default {
    name: 'SPDataTable',
    components:{
        studentBody,
        classeBody,
        financeBody,
        suviePayement
    },
    props: {
        rows: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        isForClasse:{
            type: Boolean,
            default: false
        },
        isForFinance:{
            type: Boolean,
            default: false
        },
        isForSuiviePayement:{
            type: Boolean,
            default: false
        }
    },
    methods: {
        renderTable() {
            if (this.isForFinance !== true){
                const thead = this.$el.querySelector('thead tr')
                this.columns.forEach((column) => {
                    const th = document.createElement('th')
                    th.textContent = column.label
                    thead.appendChild(th)
                })
            }
            else{
                const thead = this.$el.querySelector('thead tr')
                const thCheckbox = document.createElement('th')
                thead.appendChild(thCheckbox)

                this.columns.forEach((column) => {
                    const th = document.createElement('th')
                    th.textContent = column.label
                    thead.appendChild(th)
                })

            }
        },

        onLoading() {
            if (this.isForClasse == true){
                this.isForFinance == false
                this.isForSuiviePayement == false
            }
            else if (this.isForSuiviePayement == true){
                this.isForClasse == false
                this.isForFinance == false 
            }
            else if (this.isForFinance == true){
                this.isForClasse == false
                this.isForSuiviePayement == false
            }
        },

        handleEditClick() {
            this.$emit('edit');
        },
        handleDetailClick() {
            this.$emit('detail');
        },
        handleArchiveClick() {
            this.$emit('archive');
        },
    },
    mounted() {
        this.renderTable()
        this.onLoading()
    },

    data() {
        return {
            showAction : null
        }
    }
}
</script>
