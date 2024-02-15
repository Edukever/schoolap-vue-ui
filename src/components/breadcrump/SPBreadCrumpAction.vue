
<template>
    <div class="sp-bread-title"> 
        <h4 class="sp-title-bleu text-dark">
            <router-link class="sp-left-link" :to="{ name: firstRoute.route }">
                {{ firstRoute.title }}
            </router-link>
        </h4>
        <img class="sp-img" height="20" src="../../assets/img/icons/arrow_left.svg">
        <h4 class="sp-title-bleu">
            <router-link class="sp-right-link" :to="{ name: secondeRoute.route }">
                {{ secondeRoute.title }}
            </router-link>
        </h4>
    </div>
</template>

<script lang="ts">

export default {
    name: 'SPBreadCrumbAction',

    props: {
        firstRoute: {
            type: Object,
            default: ''
        },

        secondeRoute: {
            type: Object,
            default: ''
        }
    }
}

</script>