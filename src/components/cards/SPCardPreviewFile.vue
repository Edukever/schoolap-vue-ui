<template>
  <div class="sp-card-file-formular" :class="{'error': isError}">
    <div class="sp-card-formular-header">
      <div class="sp-icon-file">
        <svg
          width="84"
          height="80"
          viewBox="0 0 84 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="sp-icon-save"
        >
          <path
            d="M50.1647 6.75H33.7512C30.1193 6.75 27.1509 9.53911 27.1509 12.9923V16.1134C27.1509 19.5666 30.0844 22.3557 33.7163 22.3557H50.1647C53.7967 22.3557 56.7301 19.5666 56.7301 16.1134V12.9923C56.7651 9.53911 53.7967 6.75 50.1647 6.75Z"
            fill="#41A3DF"
          />
          <path
            d="M60.257 16.1137C60.257 21.3931 55.7171 25.7096 50.1644 25.7096H33.7509C28.1983 25.7096 23.6584 21.3931 23.6584 16.1137C23.6584 14.2543 21.563 13.0921 19.8169 13.9554C14.8928 16.4457 11.5403 21.3931 11.5403 27.0709V58.3156C11.5403 66.4837 18.5597 73.1577 27.1506 73.1577H56.7648C65.3557 73.1577 72.3751 66.4837 72.3751 58.3156V27.0709C72.3751 21.3931 69.0225 16.4457 64.0985 13.9554C62.3524 13.0921 60.257 14.2543 60.257 16.1137ZM43.2847 56.3898H27.9887C26.5569 56.3898 25.3695 55.2609 25.3695 53.8995C25.3695 52.5382 26.5569 51.4092 27.9887 51.4092H43.2847C44.7166 51.4092 45.9039 52.5382 45.9039 53.8995C45.9039 55.2609 44.7166 56.3898 43.2847 56.3898ZM52.4344 43.1083H27.9887C26.5569 43.1083 25.3695 41.9794 25.3695 40.618C25.3695 39.2567 26.5569 38.1277 27.9887 38.1277H52.4344C53.8662 38.1277 55.0536 39.2567 55.0536 40.618C55.0536 41.9794 53.8662 43.1083 52.4344 43.1083Z"
            fill="#41A3DF"
          />
        </svg>
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.0293 6.83301H32.9709C29.4176 6.83301 26.5134 9.70301 26.5134 13.2563V16.468C26.5134 20.0213 29.3834 22.8913 32.9368 22.8913H49.0293C52.5826 22.8913 55.4526 20.0213 55.4526 16.468V13.2563C55.4868 9.70301 52.5826 6.83301 49.0293 6.83301Z"
            fill="#FF5050"
          />
          <path
            d="M58.9032 16.4679C58.9032 21.9004 54.4616 26.3421 49.0291 26.3421H32.9707C27.5382 26.3421 23.0966 21.9004 23.0966 16.4679C23.0966 14.5546 21.0466 13.3587 19.3382 14.2471C14.5207 16.8096 11.2407 21.9004 11.2407 27.7429V59.8937C11.2407 68.2987 18.1082 75.1662 26.5132 75.1662H55.4866C63.8916 75.1662 70.7591 68.2987 70.7591 59.8937V27.7429C70.7591 21.9004 67.4791 16.8096 62.6616 14.2471C60.9532 13.3587 58.9032 14.5546 58.9032 16.4679ZM42.2982 57.9121H27.3332C25.9324 57.9121 24.7707 56.7504 24.7707 55.3496C24.7707 53.9487 25.9324 52.7871 27.3332 52.7871H42.2982C43.6991 52.7871 44.8607 53.9487 44.8607 55.3496C44.8607 56.7504 43.6991 57.9121 42.2982 57.9121ZM51.2499 44.2454H27.3332C25.9324 44.2454 24.7707 43.0837 24.7707 41.6829C24.7707 40.2821 25.9324 39.1204 27.3332 39.1204H51.2499C52.6507 39.1204 53.8124 40.2821 53.8124 41.6829C53.8124 43.0837 52.6507 44.2454 51.2499 44.2454Z"
            fill="#FF5050"
          />
          <rect x="19.1333" y="36.4443" width="43.7333" height="24.6" fill="#FF5050" />
          <path
            d="M48.3838 58.2172L59.1273 47.4736"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M59.1273 58.2172L48.3838 47.4736"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h2 class="sp-title">{{ title }}</h2>
      <h2 class="sp-subtitle">{{ subtitle }}</h2>
      <div class="sp-content-img">
        <img :src="image" alt="" />
      </div>

      <div class="sp-content-error">
        <template v-for="item in content" :key="item">
          <div class="sp-error-badget">
            <div class="sp-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="sp-text">
                {{ item }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import table_french from '../../assets/img/table.png';
import table_english from '../../assets/img/table_2.png';
import {toRefs, computed} from 'vue';
export default {
    props:{
        title: {
            type: String,
            default: "Procédure pour importer le fichier Exel :"
        },
        subtitle:{
            type: String,
            default: "Ces champs sont obligatoire"
        },
        content: {
            type: Array,
            default: () => [
                "Votre document ne doit pas avoir de caractères spéciaux ( # | ? ; , . ` ' \")"
            ]
        },
        isError: {
            type: Boolean,
            default: false
        },
        isImageLanguage: {
            type: Boolean,
            default: true
        }
    },
    setup(props, {emit}) {
        const { isImageLanguage } = toRefs(props);
        const image = computed(() => {
            return isImageLanguage.value === true ? table_french : table_english;
        });
        return {
            image
        };
    }
}
</script>

<style lang="scss" scoped></style>
