<script setup lang="ts">
    import Auth from '@/router/auth'
    import { ref, type Ref } from 'vue'
    import Editor from '@/components/Editor.vue'

    const content = ref('<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>')

</script>

<template>

    <div>
        
        <editor v-model="content" />

        <div class="content">
        <h3>Content</h3>
        <pre><code>{{ content }}</code></pre>
        </div>
    </div>

</template>

<style scoped>

</style>
