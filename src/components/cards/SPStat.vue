<template>
  <div class="sp-stat">
    <router-link :to="{ name: route }" class="bloc_one">
      <h2>{{ title }}</h2>
      <div class="bloc_svg">
        <img :src="svg" />
        <span class="counter">{{ counter }}</span>
      </div>
      <template v-if="showOnlyDescription">
        <h3 class="sp_add">{{ description }}</h3>
      </template>
      <template v-else>
        <ul class="sp-stat-list">
          <li>{{ number_men }}</li>
          <li>{{ number_women }}</li>
        </ul>
      </template>
    </router-link>
    <div class="bloc_two" @click="$emit('add')">
      <img :src="img_button_action" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    svg: String,
    title: String,
    img_button_action: String,
    description: String,
    counter: {
      default: 0,
      type: Number
    },
    showOnlyDescription: {
      type: Boolean,
      default: true
    },
    number_men: {
      default: '',
      type: String
    },
    number_women: {
      default: '',
      type: String
    },
    route: {
      default: '',
      type: String,
    }
  }
}
</script>