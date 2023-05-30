<script setup lang="ts">
    import Auth from '@/router/auth'
    import { ref, type Ref } from 'vue'
    import Editor from '@/components/Editor/Editor.vue'

    const content = ref('Write that cool stuff in here!')

</script>

<template>
    <v-card id="editor_container" variant="tonal"> 
        <editor v-model="content"/>
    </v-card>

    <div class="content">
        <h3>Content</h3>
        <pre><code>{{ content }}</code></pre>
        </div>
</template>

<style scoped>
    #editor_container {
        height: 50%;
        border: 10px black;
        margin: 5px;
    }
</style>
