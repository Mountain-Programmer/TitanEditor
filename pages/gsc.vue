<template>
    <v-container>
        <nuxt-content :document="doc" />
    </v-container>
</template>

<script>


export default {
    async asyncData({ $content, params }) {
        const doc = await $content('test').fetch()

        return { doc }
    },

    mounted() {
        
    }
}
</script>

<style lang="scss">
.nuxt-content h1 {
    color: white;
}

.nuxt-content pre {
    background-color: rgb(15, 15, 15) !important;
    
}

.nuxt-content code {
    background-color: rgb(15, 15, 15) !important;
    
    
}


</style>