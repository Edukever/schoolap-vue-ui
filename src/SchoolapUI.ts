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
import SPPasswordField from './components/forms/inputs/SPPasswordField.vue'
import SPModalRight from './components/modal/SPModalRight.vue'
import SPSelect from './components/forms/select/SPSelect.vue'
import SPBannerWelcome from './components/banners/SPBannerWelcome.vue'
import SPBreadTitle from './components/breadcrump/SPBreadTitle.vue'
import SPBreadCrump from './components/breadcrump/SPBreadcrump.vue'
import SPCardActivity from './components/cards/SPCardActivity.vue'
import SPStat from './components/cards/SPStat.vue'
import SPSideBar from './components/navigation/sidebar/SPSideBar.vue'
import SPCardProfilSchool from './components/cards/SPCardProfilSchool.vue'
import SPCardPricing from './components/cards/SPCardPricing.vue'
import SPCardOtherAction from './components/cards/SPCardOtherAction.vue'
import SPCardRapportPresence from './components/cards/SPCardRapportPresence.vue'
import SPCardRapportPresenceTwo from './components/cards/SPCardRapportPresenceTwo.vue'
import SPCardPresence from './components/cards/SPCardPresence.vue'
import SPPagination from './components/navigation/pagination/SPPagination.vue'
import SPCardNotification from './components/cards/SPCardNotification.vue'
import SPButtonIconArrowRight from './components/buttons/SPButtonIconArrowRight.vue'
import SPCardVideo from './components/cards/SPCardVideo.vue'
import SPFileUpload from './components/forms/inputs/SPFileUpload.vue'
import './assets/scss/main.scss'

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
    app.component('sp-text-field', SPTextField)
    app.component('sp-text-field-icon', SPTextFieldIcon)
    app.component('sp-password-field', SPPasswordField)
    app.component('sp-modal-right', SPModalRight)
    app.component('sp-banner-welcome', SPBannerWelcome)
    app.component('sp-select', SPSelect)
    app.component('sp-bread-title', SPBreadTitle)
    app.component('sp-bread-crump', SPBreadCrump)
    app.component('sp-stat', SPStat)
    app.component('sp-card-activity', SPCardActivity)
    app.component('sp-button-icon-arrow-right', SPButtonIconArrowRight)
    app.component('sp-side-bar', SPSideBar)
    app.component('sp-card-profil-school', SPCardProfilSchool)
    app.component('sp-card-pricing', SPCardPricing)
    app.component('sp-card-other-action', SPCardOtherAction)
    app.component('sp-card-rapport-presence', SPCardRapportPresence)
    app.component('sp-card-rapport-presence-two', SPCardRapportPresenceTwo)
    app.component('sp-card-presence', SPCardPresence)
    app.component('sp-pagination', SPPagination)
    app.component('sp-card-notification', SPCardNotification)
    app.component('sp-card-video', SPCardVideo)
    app.component('sp-file-upload', SPFileUpload)
  }
}

export default SchoolapUI
