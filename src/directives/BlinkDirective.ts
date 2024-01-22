import { Directive } from "vue";

const BlinkDirective: Directive = {
  beforeMount(el, binding) {
    if (binding.value) {
      el.classList.add("blink");
    }
  },
  updated(el, binding) {
    if (binding.value) {
      el.classList.add("blink");
    } else {
      el.classList.remove("blink");
    }
  },
};

export default BlinkDirective;
