

<template>
      
  <!-- <SPBannerLogin 
    :title="'Une plateforme de service éducative complète pour l\'administration et la pédagogie.'">
  </SPBannerLogin>

  <br><br>
  <SPButtonPrimary 
    :title="'Suivant'">
  </SPButtonPrimary>
  <br>

  <SPButtonBack
    :title="'Retour'">
  </SPButtonBack>
  <br>

  <SPButtonGoogle
    :title="'Se connecter avec google'">
  </SPButtonGoogle>
  <br>

  <SPButtonIcon
    :title="'Suivant'" :position="'left'">
  </SPButtonIcon>
  <br>
  <br>
  <br>
  <br>

  <SPTextField
    :label="'Nom de l\'élève'"
    :placeholder="'Nom de l\'élève'">
  </SPTextField>
  <br>
  <br>
  <br>
  <br>
  
  <SPTextFieldIcon
      :icon="'fa fa-user'"
      :placeholder="'User name'"
      :label="'Username'">
  </SPTextFieldIcon>
  
  <br>

  <SPSearchBar 
    :placeholder="'Faites votre recherche rapide'">
  </SPSearchBar>

  <br>

  <SPRadio :label="'Femme'"></SPRadio>

  <SPCheckBox :label="'Une école'">
  </SPCheckBox>

  <br>

  <SPTextarea :label="'Commentaire'" :placeholder="'Ajouter une commentaire par rapport à l’absence de votre apprenants '">
  </SPTextarea>

  <br> -->
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
import SPBannerLogin from './components/banners/SPBannerLogin.vue'
import SPPasswordField from './components/forms/inputs/SPPasswordField.vue'

export default {

  components: {
    HelloWorld,
    TheWelcome,
    SPButtonPrimary,
    SPButtonBack,
    SPButtonIcon,
    SPTextField,
    SPSearchBar,
    SPRadio,
    SPCheckBox,
    SPTextFieldIcon,
    SPTextarea,
    SPButtonGoogle,
    SPBannerLogin,
    SPPasswordField
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
