``<template>
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
      <span class="sp-circle" v-if="withCircle">
        <div></div>
      </span>
      <span class="sp-value">{{ selectedOption ? selectedOption.title : placeholder }}</span>
      <slot name="icon-option" class="sp-icon"></slot>
    </div>
    <input type="checkbox" v-model="showOptions" :disabled="disabled" hidden />
    <div class="sp-options" v-show="showOptions">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="option"
        :class="{ selected: option === selectedOption, disabled: option.disabled }"
        @click.stop="selectOption(option)"
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
          <div class="sp-svg">
            <slot name="icon-option" class="sp-icon"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPCustomSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    withCircle: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showOptions: false,
      selectedOption: null
    }
  },
  mounted() { 
      this.selectedOption = this.options.find((option) => option.id == this.defaultValue)
  },
  // created() {
  //   if (this.defaultValue == 0) {
  //     this.selectedOption = this.options.find((option) => option.id === this.defaultValue)
  //   } else {
  //     this.selectedOption = this.options[0]
  //   }
  // },
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
        this.$emit('change', option)
      }
    }
  }
}
</script>
