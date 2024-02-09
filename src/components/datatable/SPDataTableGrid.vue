<template>
    <div class="sp-dataTable-grid">
        <div class="sp-row">
            <div :class="columnClass" v-for="(item, index) in paginatedData" :key="index">
                <slot :item="item" :index="index"></slot>
            </div>
        </div>
        <div class="">
            <SPPagination :totalItems="rows" :perPage="perPage" :itemsPerPage="itemsPerPage" @page-changed="onPageChanged"/>
        </div>
    </div>
</template>

<script>
import SPPagination from '../navigation/pagination/SPPagination.vue'
export default {
    components: {
        SPPagination
    },
    props: {
        dataList:{
            type: Array,
            required: true
        },
        columnClass: {
            type: String,
            default: 'sp-col-6',
        },
        perPage: {
            type: Number,
            default: 4
        },
        itemsPerPage: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentPage: 1,
        } 
    },
    methods:{
        onPageChanged(newPage) {
            this.currentPage = newPage;
        },
    },
    computed: {
        rows() {
            return this.dataList.length
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.dataList.slice(start, end);
        },
    }
}
</script>

<style lang="scss" scoped></style>
