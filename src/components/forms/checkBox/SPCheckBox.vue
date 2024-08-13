<template>
  <div class="sp-form-radio">
    <input :id="uniqueId" type="checkbox" v-model="isChecked" @input="handleCheckboxChange" />
    <label :for="uniqueId" class="sp-label-box">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SPCheckBox',
  props: {
    value: Boolean,
    label: {
      type: String
    }
  },

  computed: {
    uniqueId() {
      return `radio-${Math.random().toString(36).substr(2, 9)}`
    }
  },

  data() {
    return {
      isChecked: this.value
    }
  },

  methods: {
    handleCheckboxChange() {
      this.$emit('checkbox-changed', this.isChecked)
      this.$emit('input', this.isChecked)
    }
  }
}
</script>
