<template>
  <div class="sp-bull-chat">
    <div class="sp-bull-head">
      <div class="sp-bull-left-icon">
        <div class="sp-svg">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6626 10.8984V17.2475C23.6626 18.2097 23.2834 19.1325 22.6082 19.8129C21.9331 20.4933 21.0175 20.8755 20.0627 20.8755H13.0879C13.0879 21.8378 13.4672 22.7606 14.1423 23.441C14.8174 24.1213 15.733 24.5036 16.6878 24.5036H23.6626L26.8126 28.1316H27.2626V14.5265C27.2626 13.5643 26.8833 12.6415 26.2082 11.9611C25.533 11.2807 24.6174 10.8984 23.6626 10.8984Z"
              fill="#FFB391"
            />
            <path
              d="M16.6863 10.899H23.6612V4.54991C23.6612 3.5877 23.2819 2.66489 22.6068 1.9845C21.9317 1.30411 21.016 0.921875 20.0613 0.921875H3.86163C2.90688 0.921875 1.99122 1.30411 1.31611 1.9845C0.640995 2.66489 0.261719 3.5877 0.261719 4.54991V24.5041H0.711708L3.86163 20.8761H13.0864V14.527C13.0864 13.5648 13.4657 12.642 14.1408 11.9616C14.8159 11.2812 15.7316 10.899 16.6863 10.899Z"
              fill="#F68C2C"
            />
          </svg>
        </div>
        <div class="sp-content">
          <h2 class="sp-title">{{ communicateTitle }}</h2>
          <p>{{ communicateDate }}</p>
        </div>
      </div>
      <div class="sp-bull-action">
        <svg
          @click="toggleShow"
          width="6"
          height="20"
          viewBox="0 0 6 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="2.64357"
            cy="2.43498"
            rx="2.43498"
            ry="2.38182"
            transform="rotate(90 2.64357 2.43498)"
            fill="#292D32"
          />
          <ellipse
            cx="2.64357"
            cy="9.73967"
            rx="2.43498"
            ry="2.38182"
            transform="rotate(90 2.64357 9.73967)"
            fill="#292D32"
          />
          <ellipse
            cx="2.64357"
            cy="17.0453"
            rx="2.43498"
            ry="2.38182"
            transform="rotate(90 2.64357 17.0453)"
            fill="#292D32"
          />
        </svg>
      </div>
    </div>
    <div class="sp-bull-content">
      <div class="sp-content">
        <slot name="content"></slot>
      </div>
      <hr class="sp-hr-color" />
      <slot name="footer"></slot>
    </div>
    <SPCardOption
      :class="indexValue ? 'active' : ''"
      :editText="'Supprimer'"
      :archiveText="'Transférer'"
      @edit="handleEditClick"
      @detail="handleDetailClick"
      @archive="handleArchiveClick"
      :withShow="'true'"
    > 
      <template #edit-icon>
        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.26175 1.75C8.28326 1.75 7.44882 2.37503 7.13959 3.24993C7.00155 3.64047 6.57306 3.84517 6.18252 3.70713C5.79198 3.56909 5.58729 3.1406 5.72533 2.75007C6.23976 1.29459 7.6278 0.25 9.26175 0.25C10.8957 0.25 12.2837 1.29459 12.7982 2.75007C12.9362 3.1406 12.7315 3.56909 12.341 3.70713C11.9504 3.84517 11.5219 3.64047 11.3839 3.24993C11.0747 2.37503 10.2402 1.75 9.26175 1.75Z" fill="#4E4E4E"/>
          <path d="M0.0117188 5C0.0117188 4.58579 0.347505 4.25 0.761719 4.25H17.7618C18.176 4.25 18.5118 4.58579 18.5118 5C18.5118 5.41421 18.176 5.75 17.7618 5.75H0.761719C0.347505 5.75 0.0117188 5.41421 0.0117188 5Z" fill="#4E4E4E"/>
          <path d="M3.1768 7.45011C3.14925 7.03681 2.79187 6.72411 2.37858 6.75166C1.96528 6.77921 1.65257 7.13659 1.68013 7.54989L2.14357 14.5016C2.22907 15.7844 2.29813 16.8205 2.4601 17.6336C2.6285 18.4789 2.91492 19.185 3.50652 19.7384C4.09811 20.2919 4.82166 20.5307 5.67631 20.6425C6.49835 20.75 7.53679 20.75 8.82238 20.75H9.70121C10.9868 20.75 12.0252 20.75 12.8473 20.6425C13.7019 20.5307 14.4255 20.2919 15.0171 19.7384C15.6087 19.185 15.8951 18.4789 16.0635 17.6336C16.2255 16.8205 16.2945 15.7844 16.38 14.5016L16.8435 7.54989C16.871 7.13659 16.5583 6.77921 16.145 6.75166C15.7317 6.72411 15.3743 7.03681 15.3468 7.45011L14.8869 14.3492C14.797 15.6971 14.733 16.6349 14.5924 17.3405C14.456 18.025 14.2657 18.3873 13.9923 18.6431C13.7189 18.8988 13.3447 19.0647 12.6527 19.1552C11.9393 19.2485 10.9993 19.25 9.64848 19.25H8.87512C7.52427 19.25 6.58427 19.2485 5.87087 19.1552C5.17886 19.0647 4.80471 18.8988 4.53129 18.6431C4.25788 18.3873 4.06755 18.025 3.9312 17.3405C3.79063 16.6349 3.7266 15.6971 3.63674 14.3492L3.1768 7.45011Z" fill="#4E4E4E"/>
          <path d="M6.68718 9.25372C7.09934 9.21251 7.46687 9.51321 7.50808 9.92537L8.00808 14.9254C8.0493 15.3375 7.74859 15.7051 7.33643 15.7463C6.92428 15.7875 6.55674 15.4868 6.51553 15.0746L6.01553 10.0746C5.97431 9.66247 6.27502 9.29494 6.68718 9.25372Z" fill="#4E4E4E"/>
          <path d="M12.5081 10.0746C12.5493 9.66247 12.2486 9.29494 11.8364 9.25372C11.4243 9.21251 11.0567 9.51321 11.0155 9.92537L10.5155 14.9254C10.4743 15.3375 10.775 15.7051 11.1872 15.7463C11.5993 15.7875 11.9669 15.4868 12.0081 15.0746L12.5081 10.0746Z" fill="#4E4E4E"/>
        </svg>
      </template>
      <template #archive-icon>
        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0957 8.70846L17.929 2.2168" stroke="#4E4E4E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5957 5.38301V1.58301H14.5957" stroke="#4E4E4E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.42773 1.58301H7.76107C3.5944 1.58301 1.92773 3.16634 1.92773 7.12467V11.8747C1.92773 15.833 3.5944 17.4163 7.76107 17.4163H12.7611C16.9277 17.4163 18.5944 15.833 18.5944 11.8747V10.2913" stroke="#4E4E4E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
    </SPCardOption>
  </div>
</template>

<script>
import SPCardOption from '../cards/SPCardOption.vue'
export default {
  components: {
    SPCardOption
  },
  props: {
    communicateTitle: {
      type: String,
      default: 'Title communique'
    },
    communicateDate: {
      type: String,
      default: '11 décembre 2023 à 09:22'
    },
    indexValue: {
      type: Number,
      required: true
    }
  },

  mounted() {
    document.body.addEventListener('click', () => {
      this.indexValue == null
    })
  },
  methods: {
    handleEditClick() {
      this.$emit('edit')
    },
    handleDetailClick() {
      this.$emit('detail')
    },
    handleArchiveClick() {
      this.$emit('archive')
    },
    toggleShow() {
      event.stopPropagation();
      this.$emit('toggle', this.indexValue)
    }
  }
}
</script>
