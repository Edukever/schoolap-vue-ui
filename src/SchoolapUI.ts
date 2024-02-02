import type { App } from 'vue'
import glob from 'glob'
import path from 'path'
import _ from 'lodash'

import './assets/scss/main.scss'

interface SchoolapUIPluginOptions {}

const SchoolapUI = {
  install(app: App, options?: SchoolapUIPluginOptions) {
    
    const components = glob.sync(path.resolve(__dirname, './components/**/SP*.vue'))

    components.forEach((componentPath) => {
      const component = require(componentPath).default
      const componentName = _.upperFirst(
        _.camelCase(
          path.basename(componentPath, '.vue')
        )
      )

      app.component(componentName, component)

      const element = document.createElement(componentName)
      document.body.appendChild(element)
      app.mount(element)
    })
  }
}

export default SchoolapUI
