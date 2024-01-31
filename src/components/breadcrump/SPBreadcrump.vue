
<template>
    <div class="sp-bread-title"> 
        <img class="sp-img" src="../../assets/img/icons/arrow_left.svg">
        <h4 class="sp-title-bleu">{{ title }}</h4>
    </div>
</template>

<script>

export default {
    name: 'SPBreadTitle',

    props: {
        src: String,
        title: String
    }
}

</script>