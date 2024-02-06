<template>
  <div class="sp-core-container">
    <SPSideBar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <SPCardArchive />
          </div>
          <div class="col-2">
            <SPCardArchive />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SPButtonPrimary from './components/buttons/SPButtonPrimary.vue'
import SPButtonBack from './components/buttons/SPButtonBack.vue'
import SPButtonGoogle from './components/buttons/SPButtonGoogle.vue'
import SPButtonIcon from './components/buttons/SPButtonIcon.vue'
import SPTextField from './components/forms/inputs/SPTextField.vue'
import SPSearchBar from './components/forms/inputs/SPSearchBar.vue'
import SPRadio from './components/forms/radio/SPRadio.vue'
import SPCheckBox from './components/forms/checkBox/SPCheckBox.vue'
import SPTextFieldIcon from './components/forms/inputs/SPTextFieldIcon.vue'
import SPTextarea from './components/forms/inputs/SPTextarea.vue'
import SPSelect from './components/forms/select/SPSelect.vue'
import SPBannerLogin from './components/banners/SPBannerLogin.vue'
import SPSideBar from './components/navigation/sidebar/SPSideBar.vue'
import SPCardProfilSchool from './components/cards/SPCardProfilSchool.vue'
import SPCardPricing from './components/cards/SPCardPricing.vue'
import SPCardOthreAction from './components/cards/SPCardOthreAction.vue'
import SPCardRapportPresence from './components/cards/SPCardRapportPresence.vue'
import SPCardRapportPresenceTwo from './components/cards/SPCardRapportPresenceTwo.vue'
import SPCustomSelect from './components/forms/select/SPCustomSelect.vue'
import SPCardPresence from './components/cards/SPCardPresence.vue'
import SPPagination from './components/navigation/pagination/SPPagination.vue'
import SPCardNotification from './components/cards/SPCardNotification.vue'
import SPCardOption from './components/cards/SPCardOption.vue'
import SPCardArchive from './components/cards/SPCardArchive.vue'

export default {
  components: {
    // HelloWorld,
    // TheWelcome,
    // SPButtonPrimary,
    // SPButtonBack,
    // SPButtonIcon,
    // SPTextField,
    // SPSearchBar,
    // SPRadio,
    // SPCheckBox,
    // SPTextFieldIcon,
    // SPTextarea,
    // SPButtonGoogle,
    // SPBannerLogin,
    SPSideBar,
    SPCardOption,
    SPCardArchive
    // SPCardProfilSchool ,
    // SPCardPricing,
    // SPCardOthreAction,
    // SPCardRapportPresenceTwo,
  },
  data() {
    return {
      selectOptions: [
        { id: 1, title: 'Option 1', status: 'red', icon: 'icon-1' },
        { id: 2, title: 'Option 2', status: 'green', icon: 'icon-2' },
        { id: 3, title: 'Option 3', status: 'red', icon: 'icon-3', disabled: true },
        { id: 4, title: 'Option 4', status: 'green', icon: 'icon-4' }
      ],
      selectedValue: ''
    }
  },
  computed: {
    paginatedItems() {
      const start = (this.currentPage - 1) * 10
      return this.items.slice(start, start + 10)
    }
  },
  methods: {
    handleSelectChange(value) {
      console.log('Nouvelle option sélectionnée :', value)
    },
    onPageChanged(pageNumber) {
      this.currentPage = pageNumber
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
