<template>
  <div class="sp-custom-select">
    <i class="toggle icon-arrow-down" v-if="!selectedOption"></i>
    <i class="toggle icon-arrow-up" v-if="selectedOption"></i>
    <div
      class="title"
      :class="{
        red: selectedOption && selectedOption.status === 'red',
        green: selectedOption && selectedOption.status !== 'red'
      }"
      @click="toggleOptions"
    >
      <span class="sp-value">{{ selectedOption ? selectedOption.title : placeholder }}</span>
      <slot name="icon-option" class="sp-icon"></slot>
    </div>
    <input type="checkbox" v-model="showOptions" :disabled="disabled" hidden />
    <div class="sp-options" v-show="showOptions">
      <label
        v-for="option in options"
        :key="option.id"
        class="option"
        :class="{ selected: option === selectedOption, disabled: option.disabled }"
        @click="selectOption(option)"
      >
        <input
          type="radio"
          :disabled="option.disabled"
          :checked="option === selectedOption"
          hidden
        />
        <div
          class="title"
          :class="{ red: option.status === 'red', green: option.status !== 'red' }"
        >
          <span class="sp-value">{{ option.title }}</span>
          <slot name="icon-option" class="sp-icon"></slot>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showOptions: false,
      selectedOption: null
    }
  },
  methods: {
    toggleOptions() {
      if (!this.disabled) {
        this.showOptions = !this.showOptions
      }
    },
    selectOption(option) {
      if (!option.disabled) {
        this.selectedOption = option
        this.showOptions = false
      }
    }
  }
}
</script>
