<template>
  <div class="sp-core-container">
    <SPSideBar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-7"></div>
          <div class="col-5">
            <SPBullChat />
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <SPMiniDataTable :columns="miniDataTable" :rows="miniRows" />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-6">
            <SPCardChart :percentages="chartData" :total="'100'" />
          </div>
        </div>
        <div class="mb-5">
          <div class="row">
            <div class="col-3">
              <SPCircleChart :percentages="chartData" :total="'434 000'" />
            </div>
            <div class="col-9">
              <SPLineProgress :percentage="'50'" />
            </div>
          </div>
        </div>
        <div class="mt-5">
          <div class="col-3">
            <SPCircleChart :percentages="chartData" :total="'434 000'" />
          </div>
        </div>
        <SPDataTableGrid
        :dataList="dataList"
        :columnClass="isFourColumns"
        perPage="9"
        itemsPerPage="9"
        >
        <template v-slot="{ item, index }">
          <!-- <SPCardPresence
          :name="item.name"
          :item="item"
          :index="item.id"
          @change="handleSelectChange"
          :attended="item.attented"
          :id="item.id"
          :key="item.id"
          /> -->
          <SPCardArchive
          :titleFolder="item.name"
          :subtitle="item.lastname"
          :index="index"
          @toggle="handleToggle(index)"
          :indexValue="activeIndex === index"
          />
          <!-- <SPCardRapportPresenceTwo :title="item.name" :item="item" :key="item.id" /> -->
        </template>
      </SPDataTableGrid>
      
      <SPDataTable :rows="dataList" :columns="columns" />
      <SPCustomSelect :options="selectOptions" placeholder="Select an option" />

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
          <SPDataTable
            :rows="suivieFinances"
            :columns="suivieFinance"
            :isForSuiviePayement="'true'"
          />
        </div>
        <SPCardPreviewFile/>
      </div>
    </main>
  </div>
</template>

<script>
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
import SPCircleChart from './components/chart/SPCircleChart.vue'
import SPLineProgress from './components/chart/SPLineProgress.vue'
import SPCardChart from './components/cards/SPCardChart.vue'
import SPMiniDataTable from './components/datatable/SPMiniDataTable.vue'
import SPBullChat from './components/chat/SPBullChat.vue'

export default {
  name: 'App',
  components: {
    SPSideBar,
    SPCardArchive,
    SPDataTableGrid,
    SPDataTable,
    SPCircleChart,
    SPLineProgress,
    SPCardChart,
    SPMiniDataTable,
    SPBullChat,
    SPCustomSelect,
    SPCardPreviewFile
  },
  data() {
    return {
      isFourColumns: 'sp-col-2',
      activeIndex: null,
      selectOptions: [
        { title: 'Present', status: 'green', id: 1 },
        { title: 'Absent', status: 'red', id: 0 }
      ],
      miniRows: [
        {
          id: 1,
          classe: '6ème Scientifique',
          cours: [{ name: 'français' }, { name: 'math' }],
          action: 'Voir'
        },
        {
          id: 2,
          classe: '5ème Scientifique',
          cours: [{ name: 'français' }, { name: 'mathematique' }, { name: 'physique' }],
          action: 'Voir'
        },
        {
          id: 3,
          classe: '4ème Scientifique',
          cours: [{ name: 'français' }, { name: 'mathematique' }],
          action: 'Voir'
        },
        {
          id: 4,
          classe: '3ème Scientifique',
          cours: [{ name: 'français' }, { name: 'mathematique' }],
          action: 'Voir'
        },
        {
          id: 5,
          classe: '2ème Scientifique',
          cours: [{ name: 'français' }, { name: 'mathematique' }],
          action: 'Voir'
        },
        {
          id: 6,
          classe: '1ère Scientifique',
          cours: [{ name: 'français' }, { name: 'mathematique' }],
          action: 'Voir'
        }
      ],
      miniDataTable: [
        { label: 'Classe', sortable: true, field: 'classe' },
        { label: 'Cours assignés', sortable: false, field: 'cours assignés' },
        { label: 'Action', sortable: false, field: 'action' }
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
      suivieFinances: [
        {
          id: 1,
          name: 'Mogolo',
          classe: '6eme Scientifique',
          parent: 'Mogolo',
          contact: '+243 8256789723',
          type: 'Paiement',
          status: 'pending'
        },
        {
          id: 2,
          name: 'Mogolo',
          classe: '6eme Scientifique',
          parent: 'Mogolo',
          contact: '+243 8256789723',
          type: 'Paiement',
          status: 'collect'
        },
        {
          id: 3,
          name: 'Mogolo',
          classe: '6eme Scientifique',
          parent: 'Mogolo',
          contact: '+243 8256789723',
          type: 'Paiement',
          status: 'late'
        },
        {
          id: 4,
          name: 'Mogolo',
          classe: '6eme Scientifique',
          parent: 'Mogolo',
          contact: '+243 8256789723',
          type: 'Paiement',
          status: 'on-hold'
        }
      ],

      finances: [
        { label: 'Date de paiement', field: 'date' },
        { label: 'Personnes concernées', field: 'personnes' },
        { label: 'Envoyé', field: 'envoyé' },
        { label: 'Montant', field: 'montant' },
        { label: 'Status', field: 'status' },
        { label: 'Action', field: 'action' }
      ],
      chartData: [25, 25, 25, 25],
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
  },
  mounted() {
    document.body.addEventListener('click', () => {
      // this.activeIndex = null
    })
  },
  methods: {
    handleSelectChange(value) {
      // console.log('moi', value)
    },
    handleToggle(index) {
      if (this.activeIndex !== null && this.activeIndex !== index) {
        this.dataList[this.activeIndex].active = false
      }
      this.dataList[index].active = true
      this.activeIndex = index
    },
    handleEditClick() {
      console.log('edit')
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
