
<template>
    <div class="sp-bread-title"> 
        <h4 class="sp-title-bleu text-dark">
            <router :to="{ name: firstRoute.name }">
                {{ firstRoute.title }}
            </router>
        </h4>
        <img class="sp-img" height="20" src="../../assets/img/icons/arrow_left.svg">
        <h4 class="sp-title-bleu">
            <router :to="{ name: secondeRoute.name }">
                {{ secondeRoute.title }}
            </router>
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