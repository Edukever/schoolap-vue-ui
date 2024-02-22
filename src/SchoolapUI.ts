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
import SPCardOption from './components/cards/SPCardOption.vue'
import SPCardArchive from './components/cards/SPCardArchive.vue'
import SPButtonIconArrowRight from './components/buttons/SPButtonIconArrowRight.vue'
import SPCardVideo from './components/cards/SPCardVideo.vue'
import SPFileUpload from './components/forms/inputs/SPFileUpload.vue'
import SPCardPreviewFile from './components/cards/SPCardPreviewFile.vue'
import SPDataTableGrid from './components/datatable/SPDataTableGrid.vue'
import SPCustomSelect from './components/forms/select/SPCustomSelect.vue'
import SPDateFieldIcon from './components/forms/inputs/SPDateFieldIcon.vue'
import SPDataTable from './components/datatable/SPDataTable.vue'
import SPBreadCrumpAction from './components/breadcrump/SPBreadCrumpAction.vue'
import SPRightSideModal from './components/modal/SPRightSideModal.vue'
import SPCircleChart from './components/chart/SPCircleChart.vue'
import SPLineProgress from './components/chart/SPLineProgress.vue'
import SPCardChart from './components/cards/SPCardChart.vue'
import SPMiniDataTable from './components/datatable/SPMiniDataTable.vue'
import SPBullChat from './components/chat/SPBullChat.vue'
import './assets/scss/main.scss'

interface SchoolapUIPluginOptions {}

const SchoolapUI = {
  install(app: App, options?: SchoolapUIPluginOptions) {

    /**
     * Components registration
     * tags are kebab-case
     */
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
    app.component('sp-card-option', SPCardOption)
    app.component('sp-card-archive', SPCardArchive)
    app.component('sp-card-video', SPCardVideo)
    app.component('sp-file-upload', SPFileUpload)
    app.component('sp-card-preview-file', SPCardPreviewFile)
    app.component('sp-data-table-grid', SPDataTableGrid)
    app.component('sp-custom-select', SPCustomSelect)
    app.component('sp-date-field-icon', SPDateFieldIcon)
    app.component('sp-data-table', SPDataTable)
    app.component('sp-mini-data-table', SPMiniDataTable)
    app.component('sp-bull-chat', SPBullChat)
    app.component('sp-circle-chart', SPCircleChart)
    app.component('sp-line-progress', SPLineProgress)
    app.component('sp-card-chart', SPCardChart)
    app.component('sp-bread-crump-action', SPBreadCrumpAction)
    app.component('sp-right-side-modal', SPRightSideModal)
    /**
     * Components registration
     * tags are pascal-case
     */
    app.component('SPButtonPrimary', SPButtonPrimary)
    app.component('SPButtonGoogle', SPButtonGoogle)
    app.component('SPButtonBack', SPButtonBack)
    app.component('SPButtonIcon', SPButtonIcon)
    app.component('SPBannerLogin', SPBannerLogin)
    app.component('SPCheckBox', SPCheckbox)
    app.component('SPRadio', SPRadio)
    app.component('SPSearchBar', SPSearchBar)
    app.component('SPTextarea', SPTextarea)
    app.component('SPTextField', SPTextField)
    app.component('SPTextField-icon', SPTextFieldIcon)
    app.component('SPPasswordField', SPPasswordField)
    app.component('SPModalRight', SPModalRight)
    app.component('SPBannerWelcome', SPBannerWelcome)
    app.component('SPSelect', SPSelect)
    app.component('SPBreadTitle', SPBreadTitle)
    app.component('SPBreadCrump', SPBreadCrump)
    app.component('SPStat', SPStat)
    app.component('SPCardActivity', SPCardActivity)
    app.component('SPButtonIconArrowRight', SPButtonIconArrowRight)
    app.component('SPSideBar', SPSideBar)
    app.component('SPCardProfileSchool', SPCardProfilSchool)
    app.component('SPCardPricing', SPCardPricing)
    app.component('SPCardOtherAction', SPCardOtherAction)
    app.component('SPCardRapportPresence', SPCardRapportPresence)
    app.component('SPCardRapportPresenceTwo', SPCardRapportPresenceTwo)
    app.component('SPCardPresence', SPCardPresence)
    app.component('SPPagination', SPPagination)
    app.component('SPCardNotification', SPCardNotification)
    app.component('SPCardOption', SPCardOption)
    app.component('SPCardArchive', SPCardArchive)
    app.component('SPCardVideo', SPCardVideo)
    app.component('SPFileUpload', SPFileUpload)
    app.component('SPCardPreviewFile', SPCardPreviewFile)
    app.component('SPDataTableGrid', SPDataTableGrid)
    app.component('SPCustomSelect', SPCustomSelect)
    app.component('SPDateFieldIcon', SPDateFieldIcon)
    app.component('SPDataTable', SPDataTable)
    app.component('SPBreadCrumpAction', SPBreadCrumpAction)
    app.component('SPRightSideModal', SPRightSideModal)
  }
}

export default SchoolapUI
