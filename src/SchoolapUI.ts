import { App } from 'vue'
import SPButtonPrimary from './components/buttons/SPButtonPrimary.vue'
import SPButtonGoogle from './components/buttons/SPButtonGoogle.vue'
import SPButtonBack from './components/buttons/SPButtonBack.vue'
import SPButtonIcon from './components/buttons/SPButtonIcon.vue'
import SPBannerLogin from './components/banners/SPBannerLogin.vue'
import SPCheckbox from './components/forms/checkBox/SPCheckBox.vue'
import SPRadio from './components/forms/radio/SPRadio.vue'
import SPSearchBar from './components/forms/inputs/SPSearchBar.vue'
import SPTextarea from './components/forms/inputs/SPTextarea.vue'
import SPTextField from './components/forms/inputs/SPTextField.vue'
import SPTextFieldIcon from './components/forms/inputs/SPTextFieldIcon.vue'

interface SchoolapUIPluginOptions {}

const SchoolapUI = {
  install(app: App, options?: SchoolapUIPluginOptions) {
    app.component('sp-button-primary', SPButtonPrimary)
    app.component('sp-button-google', SPButtonGoogle)
    app.component('sp-button-back', SPButtonBack)
    app.component('sp-button-icon', SPButtonIcon)
    app.component('sp-banner-login', SPBannerLogin)
    app.component('sp-check-box', SPCheckbox)
    app.component('sp-radio', SPRadio)
    app.component('sp-search-bar', SPSearchBar)
    app.component('sp-textarea', SPTextarea)
    app.component('sp-textField', SPTextField)
    app.component('sp-textFieldIcon', SPTextFieldIcon)
  }
}

export default SchoolapUI
