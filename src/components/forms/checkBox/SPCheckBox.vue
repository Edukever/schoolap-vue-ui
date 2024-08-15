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
    modelValue: Boolean,
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
      isChecked: this.modelValue
    }
  },

  methods: {
    handleCheckboxChange() {
      this.$emit('checkbox-changed', this.isChecked)
      this.$emit('update:modelValue', this.isChecked)
    }
  }
}
</script>
