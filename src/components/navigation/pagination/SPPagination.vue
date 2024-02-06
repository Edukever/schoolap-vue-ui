<template>
    <div class="sp-pagination">
        <nav>
        <ul class="sp-pagination-content">
            <li class="page-item" :class="{ disabled: isFirstPage }">
            <a class="page-link" href="#" @click.prevent="setPage(currentPage - 1)">
                <svg
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M17.4727 4.25L9.98104 11.0417C9.0963 11.8438 9.0963 13.1562 9.98104 13.9583L17.4727 20.75"
                    stroke="#41A3DF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
            </a>
            </li>
            <li
                class="page-item"
                v-for="page in visiblePages"
                :key="page"
                :class="{ active: currentPage === page }"
            >
                <a class="page-link" href="#" @click.prevent="setPage(page)">
                    {{ page }}
                </a>
            </li>
            <li class="page-item" :class="{ disabled: isLastPage }">
            <a class="page-link" href="#" @click.prevent="setPage(currentPage + 1)">
                <svg
                width="29"
                height="25"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M10.9497 20.75L18.4413 13.9583C19.3261 13.1562 19.3261 11.8438 18.4413 11.0417L10.9497 4.25"
                    stroke="#41A3DF"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
            </a>
            </li>
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    perPage: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.totalItems.slice(start, end)
    },
    visiblePages() {
      const rangeSize = 3 // Nombre de pages à afficher de chaque côté de la page actuelle
      let start = Math.max(this.currentPage - rangeSize, 1)
      let end = Math.min(start + rangeSize * 2, this.totalPages)

      // Ajustement si la plage de pages ne contient pas assez d'éléments
      if (end - start < rangeSize * 2) {
        start = Math.max(end - rangeSize * 2, 1)
      }

      let pages = []
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Gérer les ellipses pour le début
      if (start > 2) {
        pages.unshift('...')
        pages.unshift(1)
      } else if (start === 2) {
        pages.unshift(1)
      }

      // Gérer les ellipses pour la fin
      if (end < this.totalPages - 1) {
        pages.push('...')
        pages.push(this.totalPages)
      } else if (end === this.totalPages - 1) {
        pages.push(this.totalPages)
      }

      return pages
    },
    shouldShowPagination() {
      return this.paginatedData.length != 0 && this.filteredData.length > this.perPage
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.totalPages
    },
    showStartEllipsis() {
      return this.currentPage > 3
    },
    showEndEllipsis() {
      return this.currentPage < this.totalPages - 3
    }
  },
  methods: {
    setPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber
        this.$emit('page-changed', this.currentPage)
      }
    }
  }
}
</script>

