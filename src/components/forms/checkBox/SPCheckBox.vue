<template>
  <div class="sp-form-radio">
    <input :id="uniqueId" type="checkbox" v-model="isChecked"/>
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
    },
    isChecked() {
      get() { 
        return this.modelValue
      },
      set() {
        this.$emit('checkbox-changed', this.isChecked)
        this.$emit('update:modelValue', this.isChecked)
      }
    },
  },
}
</script>
