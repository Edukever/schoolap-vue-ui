<template>
  <div class="sp-card-notification">
    <div class="sp-card-notification-content">
      <div class="sp-card-notif-icon">
        <slot></slot>
      </div>
      <div class="sp-card-notif-text">
        <h2 class="sp-notif-title">{{ title }}</h2>
        <div class="sp-description">
          <span class="sp-name">{{ name }}</span>
          <span class="sp-date">{{ date }}</span>
        </div>
      </div>
      <div class="sp-status" v-if="isRead"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SPCardNotification',
    props: {
        title: {
            type: String,
            default: 'Création d’une rapport de présence'
        },
        name: {
            type: String,
            default: 'De la part de Nom / Prénom'
        },
        date: {
            type: String,
            default: 'Il y a 3 mm'
        },
        isRead: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped></style>
