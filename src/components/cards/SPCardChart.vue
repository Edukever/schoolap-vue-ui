<script>
import SPCircleChart from '../chart/SPCircleChart.vue'
import SPLineProgress from '../chart/SPLineProgress.vue'

export default {
    name: 'SPCardChart',
    components: {
        SPCircleChart,
        SPLineProgress
    },
    props: {
        percentages: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            lineProgressColors: ['#F68C2C', '#FF5050', '#1FAA52', '#F2B200']
        }
    }
}
</script>

<template>
    <div class="sp-card-chart">
        <div class="sp-chart-left">
            <SPCircleChart :percentages="percentages" :total="total" description="au total" />
        </div>
        <div class="sp-chart-right">
            <div class="sp-content">
                <SPLineProgress v-for="(percentage, index) in percentages" :key="index" :percentage="percentage" :color="lineProgressColors[index]" />
            </div>
        </div>
    </div>
</template>