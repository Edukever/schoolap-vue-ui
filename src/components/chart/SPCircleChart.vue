<script>
export default {
  name: 'SPCircleChart',
  props: {
    percentages: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      default: 'au total'
    }
  },
  computed: {
    totalPercentage() {
      if (Array.isArray(this.percentages) && this.percentages.length > 0) {
        return this.percentages.reduce((sum, percentage) => sum + percentage, 0)
      } else {
        return 0
      }
    }
  },

  methods: {
    calculateRingStyle(index) {
      const startPercentage = this.calculateStartPercentage(index)
      const strokeColor = this.calculateStrokeColor(index)
      const strokeDasharray = `${100 - startPercentage} ${startPercentage}`

      return {
        stroke: strokeColor,
        strokeDasharray
      }
    },

    calculateStartPercentage(index) {
      return this.percentages.slice(0, index).reduce((sum, percentage) => sum + percentage, 0)
    },

    calculateStrokeColor(index) {
      const colors = ['#F68C2C', '#FF5050', '#1FAA52', '#F2B200']
      return colors[index % colors.length]
    }
  }
}
</script>

<template>
  <div class="sp-donut">
    <svg class="donut-chart" viewBox="0 0 42 42">
      <circle class="donut-chart__hole" cx="21" cy="21" r="15.91549430918954"></circle>
      <circle
        v-for="(percentage, index) in percentages"
        :key="index"
        class="donut-chart__ring"
        cx="21"
        cy="21"
        r="15.91549430918954"
        :style="calculateRingStyle(index)"
      ></circle>
    </svg>

    <div class="sp-description">
        <h2>{{ total }}</h2>
        <p>{{ description }}</p>
    </div>
  </div>
</template>
