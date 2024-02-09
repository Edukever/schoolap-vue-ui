<template>
  <div class="sp-core-container">
    <SPSideBar />
    <main>
      <div class="container">
        <SPDataTableGrid
          :dataList="dataList"
          :columnClass="isFourColumns"
          perPage="9"
          itemsPerPage="9"
        >
          <template v-slot="{ item }">
            <!-- <SPCardPresence
              :name="item.name"
              :item="item"
              :index="item.id"
              @change="handleSelectChange"
              :attended="item.attented"
              :id="item.id"
              :key="item.id"
            /> -->
            <!-- <SPCardArchive :item="item" :titleFolder="item.name" :index="index" :key="item.id" /> -->
            <SPCardRapportPresenceTwo :title="item.name" :item="item" :key="item.id" />
          </template>
        </SPDataTableGrid>
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
import SPCardArchive from './components/cards/SPCardArchive.vue'
import SPCardPreviewFile from './components/cards/SPCardPreviewFile.vue'
import SPDataTableGrid from './components/datatable/SPDataTableGrid.vue'
import SPCardPresence from './components/cards/SPCardPresence.vue'
import SPCardRapportPresence from './components/cards/SPCardRapportPresence.vue'
import SPCardRapportPresenceTwo from './components/cards/SPCardRapportPresenceTwo.vue'

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
    SPCardArchive,
    SPCardProfilSchool,
    SPCardPricing,
    SPCardPreviewFile,
    SPDataTableGrid,
    SPCardPresence,
    SPCardRapportPresence,
    SPCardRapportPresenceTwo
  },
  data() {
    return {
      isFourColumns: 'sp-col-6',
      dataList: [
        { id: 1, name: 'michael 1', attented: true },
        { id: 2, name: 'michael 2', attented: false },
        { id: 3, name: 'michael 3', attented: true },
        { id: 4, name: 'michael 4', attented: false },
        { id: 5, name: 'michael 5', attented: true },
        { id: 6, name: 'michael 6', attented: true },
        { id: 7, name: 'michael', attented: true },
        { id: 8, name: 'michael', attented: true },
        { id: 9, name: 'michael', attented: true }
      ]
    }
  },
  methods: {
    handleSelectChange(value) {
      // console.log('moi', value)
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
