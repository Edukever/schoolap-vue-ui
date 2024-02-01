<template>
  <div class="sp-core-container">
    <SPSideBar />
    <main>
      <SPCardProfilSchool />
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
      SPCardProfilSchool 
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
