<template>
  <div class="sp-core-container">
    <SPSideBar />
    <main>
      <div class="container">
        <!-- <SPDataTableGrid
          :dataList="dataList"
          :columnClass="isFourColumns"
          perPage="9"
          itemsPerPage="9"
        >
          <template v-slot="{ item }"> -->
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
        <!-- <SPCardRapportPresenceTwo :title="item.name" :item="item" :key="item.id" />
          </template>
        </SPDataTableGrid> -->

        <SPDataTable :rows="dataList" :columns="columns" />

        <div class="mt-4">
          <p>Classe</p>
          <SPDataTable :rows="classesRows" :columns="classes" isForClasse="true" />
        </div>
        <div class="mt-4">
          <p>Finance</p>
          <SPDataTable :rows="financesRows" :columns="finances" isForFinance="true" />
        </div>

        <div class="mt-5">
          <p>Suivie Payement</p>
          <SPDataTable :rows="suivieFinances" :columns="suivieFinance" :isForSuiviePayement="'true'" />
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
import SPCardArchive from './components/cards/SPCardArchive.vue'
import SPCardPreviewFile from './components/cards/SPCardPreviewFile.vue'
import SPDataTableGrid from './components/datatable/SPDataTableGrid.vue'
import SPCardPresence from './components/cards/SPCardPresence.vue'
import SPCardRapportPresence from './components/cards/SPCardRapportPresence.vue'
import SPCardRapportPresenceTwo from './components/cards/SPCardRapportPresenceTwo.vue'
import SPDataTable from './components/datatable/SPDataTable.vue'
import SPCustomSelect from './components/forms/select/SPCustomSelect.vue'

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
    SPCustomSelect,
    SPSideBar,
    SPCardArchive,
    SPCardProfilSchool,
    SPCardPricing,
    SPCardPreviewFile,
    SPDataTableGrid,
    SPCardPresence,
    SPCardRapportPresence,
    SPCardRapportPresenceTwo,
    SPDataTable
  },
  data() {
    return {
      isFourColumns: 'sp-col-6',
      selectOptions: [
        { title: 'Present', status: 'green', id: 1 },
        { title: 'Absent', status: 'red', id: 0 }
      ],
      columns: [
        { label: 'Identité', field: 'identité' },
        { label: 'Sexe', field: 'sexe' },
        { label: 'Classe', field: 'clase' },
        { label: 'Contact', field: 'contact' },
        { label: 'Date de naissance', field: 'date' },
        { label: 'Action', field: 'action' }
      ],
      classes: [
        { label: '#', field: '#' },
        { label: 'Nom', field: 'nom' },
        { label: 'Cycle', field: 'cycle' },
        { label: 'Effectif', field: 'effectif' },
        { label: 'Enseignant', field: 'enseignant' },
        { label: 'Action', field: 'action' }
      ],
      classesRows: [
        { id: 1, name: '6ième Année', cycle: 'Secondaire', effectif: 34, teacher: 'Michael Doe' },
        { id: 2, name: '5ième Année', cycle: 'Secondaire', effectif: 30, teacher: 'John Smith' },
        { id: 3, name: '4ième Année', cycle: 'Primaire', effectif: 32, teacher: 'Jane Doe' },
        { id: 4, name: '3ième Année', cycle: 'Secondaire', effectif: 33, teacher: 'Emily Johnson' },
        { id: 5, name: '2ième Année', cycle: 'Secondaire', effectif: 31, teacher: 'Robert Brown' },
        { id: 6, name: '1ière Année', cycle: 'Secondaire', effectif: 35, teacher: 'William Davis' }
      ],

      suivieFinance: [
        { label: "Nom de l'etudiant", field: "nom de l'etudiant" },
        { label: 'Classe', field: 'classe' },
        { label: 'Nom de parent', field: 'nom de parent' },
        { label: 'Contact', field: 'contact' },
        { label: 'Type', field: 'type' },
        { label: 'Status', field: 'status' },
        { label: 'Action', field: 'action' }
      ],
      suivieFinances : [
        { id: 1, name: 'Mogolo', classe: '6eme Scientifique', parent: 'Mogolo', contact: '+243 8256789723', type: 'Paiement', status:'pending' },
        { id: 2, name: 'Mogolo', classe: '6eme Scientifique', parent: 'Mogolo', contact: '+243 8256789723', type: 'Paiement', status: 'collect' },
        { id: 3, name: 'Mogolo', classe: '6eme Scientifique', parent: 'Mogolo', contact: '+243 8256789723', type: 'Paiement', status: 'late' },
        { id: 4, name: 'Mogolo', classe: '6eme Scientifique', parent: 'Mogolo', contact: '+243 8256789723', type: 'Paiement', status: 'on-hold' }
      ],

      finances: [
        { label: 'Date de paiement', field: 'date' },
        { label: 'Personnes concernées', field: 'personnes' },
        { label: 'Envoyé', field: 'envoyé' },
        { label: 'Montant', field: 'montant' },
        { label: 'Status', field: 'status' },
        { label: 'Action', field: 'action' }
      ],

      financesRows: [
        {
          id: 1,
          date: '2022-01-11',
          personnes: 34,
          envoyé: true,
          montant: 100,
          devise: '$',
          status: true
        },
        {
          id: 2,
          date: '2022-01-11',
          personnes: 30,
          envoyé: true,
          montant: 100,
          devise: '$',
          status: true
        },
        {
          id: 3,
          date: '2022-01-11',
          personnes: 32,
          envoyé: true,
          montant: 100,
          devise: '$',
          status: true
        },
        {
          id: 4,
          date: '2022-01-11',
          personnes: 33,
          envoyé: false,
          montant: 100,
          devise: '$',
          status: false
        }
      ],

      dataList: [
        {
          id: 1,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 2,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        },
        {
          id: 3,
          name: 'Mogolo',
          lastname: 'Michael',
          gender: 'M',
          classe: '6eme Scientifique',
          contact: '+243 8256789723',
          date: '2022-01-11',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
        }
      ]
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
