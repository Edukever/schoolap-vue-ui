<template>
  <div class="sp-container-sidebar" :class="{ 'is-collapsed': isOpenSide }">
    <iconVector @click="toggleSide" />
    <aside>
      <div class="sp-sidebar-header">
        <logoWhite class="logo-white" />
        <SPButtonToggleSideBar width="40" class="sp-toggle-btn" @click="toggleSide" />
        <div class="sp-toggle-open" v-if="isOpenSide">
          <iconBar />
        </div>
      </div>
      <div class="sp-profil-user">
        <div class="sp-profil-user-avatar">
          <img :src="profileUrl" alt="" />
        </div>
        <div class="sp-profil-user-info">
          <h2 class="sp-text-welcome">{{ welcomeMessage }}</h2>
          <div class="sp-profil-user-name">
            <h3>{{ userName }}</h3>
            <iconUnderline />
          </div>
        </div>
      </div>
      <ul class="sp-sidebar-menu">
        <li v-for="(item, index) in sidebarItems" :key="index" :class="isToggle === index ? 'isToggle' : ''">
          <div v-if="item.type === 'link'" class="sp-icon-link">
            <a :href="item.linkUrl" :class="{ active: item.current }">
              <component :is="item.iconComponent" />
              <div class="sp-link-name">{{ item.name }}</div>
              <svg
                v-if="item.subMenu"
                class="sp-svg-right"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
                @click="toogleBar(index)"
              >
                <path
                  d="M14.9578 5.54636L10.3306 9.34243C9.78415 9.79074 8.88994 9.79074 8.34348 9.34243L3.71631 5.54636"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <ul
            v-if="item.subMenu && isOpen"
            class="sp-sub-menu"
            :class="isToggle === index ? 'isToggle' : ''"
          >
            <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
              <a :href="subItem.url">{{ subItem.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts">
import iconVector from '../../icons/iconVector.vue'
import logoWhite from '../../icons/logoWhite.vue'
import SPButtonToggleSideBar from '../../buttons/SPButtonSideBar.vue'
import iconUnderline from '../../icons/iconUnderline.vue'
import iconDashboard from '../../icons/iconDashboard.vue'
import iconBar from '../../icons/iconBar.vue'
import iconBell from '../../icons/iconBell.vue'
import iconBag from '../../icons/iconBag.vue'
import iconDialog from '../../icons/iconDialog.vue'
import iconUser from '../../icons/iconUsers.vue'
import IconCommunity from '../../icons/IconCommunity.vue'
import IconDiploma from '../../icons/iconDiploma.vue'

export default {
  name: 'SPSideBar',
  components: {
    iconVector,
    logoWhite,
    SPButtonToggleSideBar,
    iconUnderline,
    iconDashboard,
    iconBar,
    iconBell,
    iconBag,
    iconDialog,
    iconUser,
    IconDiploma,
    IconCommunity
  },

  props: {
    profileUrl: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1706354924659-582cec69ce3b?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    welcomeMessage: {
      type: String,
      default: 'Bienvenue'
    },
    userName: {
      type: String,
      default: 'Callie!'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    sidebarItems: {
      type: Array,
      default: () => [
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconDashboard',
          current: true
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconBell',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconDialog',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconBag',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'IconDiploma',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconBell',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconBell',
          current: false
        },
        {
          type: 'link',
          name: 'Mon espace',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconBell',
          current: false
        },
        {
          type: 'link',
          name: 'Dropdown',
          linkUrl: 'javascript:void(0)',
          iconComponent: 'iconDashboard',
          subMenu: [
            { name: 'Sub Link', url: '#' },
            { name: 'Sub Link', url: '#' },
            { name: 'Sub Link', url: '#' }
          ]
        },
      ]
    }
  },
  data() {
    return {
      isOpen: false,
      isOpenSide: false,
      isToggle: null
    }
  },

  methods: {
    toogleBar(val) {
      this.isOpen = !this.isOpen
      this.isToggle = this.isToggle === val ? null : val
    },
    toggleSide() {
      this.isOpenSide = !this.isOpenSide
    }
  },

  mounted() {
    this.isToggle == null
  },
  watch: {}
}
</script>

<style></style>
