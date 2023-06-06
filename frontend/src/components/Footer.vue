<script setup lang="ts">

</script>

<template>
    <v-footer>
        
            <v-row justify="center">
                <v-col class="text-center mt-4" cols="12">
                LOMR {{ new Date().getFullYear() }}<br/>
                Everything on this blog is published under a <a href="https://creativecommons.org/licenses/by/4.0/" nofollow>Attribution 4.0 International (CC BY 4.0)</a>, so do what you want with it as long as you provide appropriate attribution.
                </v-col>
            </v-row>
        
    </v-footer>
</template>

<style scoped>
    footer {
        font-size: x-small;
        max-height: 10vh;
    }
</style>
