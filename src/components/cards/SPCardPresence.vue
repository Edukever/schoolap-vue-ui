<template>
  <div class="sp-card-presence">
    <div class="sp-card-presence-content">
      <div class="sp-user-infos">
        <div class="sp-user-infos__avatar">
          <img :src="img" alt="Avatar" />
        </div>
        <div class="sp-user-infos__name">
          <h3>{{ name }}</h3>
          <p>{{ subtitle }}</p>
        </div>
      </div>
      <div class="sp-content-select">
        <SPCustomSelect
          :options="selectOptions"
          placeholder="Select a class"
          :value="selectedValue"
          @input="handleSelectChangeUnique"
          @change="handleSelectChange"
          withCircle="true"
        >
          <template v-slot:icon-option>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9336 7.57617H9.74195H5.06695C4.26695 7.57617 3.86695 8.54284 4.43361 9.10951L8.75028 13.4262C9.44195 14.1178 10.5669 14.1178 11.2586 13.4262L12.9003 11.7845L15.5753 9.10951C16.1336 8.54284 15.7336 7.57617 14.9336 7.57617Z"
                fill="#1FAA52"
              />
            </svg>
          </template>
        </SPCustomSelect>
      </div>
    </div>
  </div>
</template>

<script>
import SPCustomSelect from '../forms/select/SPCustomSelect.vue'
export default {
  components: {
    SPCustomSelect
  },
  props: {
    name: {
      type: String,
      default: 'John Doe'
    },
    subtitle: {
      type: String,
      default: 'Mathematics'
    },
    selectedValue: {
      type: String,
      default: ''
    },
    handleSelectChange: {
      type: Function,
      default: () => {}
    },
    img: {
      type: String,
      default: 'https://via.placeholder.com/150'
    },
    selectOptions: {
        type: Array,
        default: () => [
            { title: 'Presence', status: 'green' },
            { title: 'Absent', status: 'red' }
        ]
    }
  },

  methods: {
    handleSelectChangeUnique(value) {
      this.$emit('change', value)
    }
  }
}
</script>
