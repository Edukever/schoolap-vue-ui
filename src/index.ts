import { App } from "vue";
import BlinkButton from "./components/BlinkButton.vue";
import BlinkDirective from "./directives/BlinkDirective";

const install = (app: App): void => {
  app.component("BlinkButton", BlinkButton);
  app.directive("blink", BlinkDirective);
};

export default { install };
