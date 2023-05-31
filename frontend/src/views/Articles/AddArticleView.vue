<script setup lang="ts">
    import Auth from '@/services/authService'
    import { ref, type Ref } from 'vue'
    import Editor from '@/components/Editor/Editor.vue'
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    const content = ref('Write that cool stuff in here!')
    const title: Ref<string> = ref("");
    const date: Ref<Date> = ref(new Date());

    function addArticle() {
        console.log(title.value);
        console.log(date.value);
        console.log(content.value);
    }
</script>

<template>
    <v-container class="fill-height">
        <v-form @submit.prevent="addArticle" class="v-col-12">
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn type="submit" block class="mt-2">Add article</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="title" label="Title" required/>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-row>
                <v-col cols="12" sm="6">
                    <v-input 
                        hint="Article will not be public before this date and time"
                        persistent-hint
                    >
                        <VueDatePicker v-model="date"></VueDatePicker>
                    </v-input>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <v-card variant="tonal"> 
                        <editor v-model="content"/>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-form>
        <div class="content">
            <h3>Content</h3>
            <pre><code>{{ content }}</code></pre>
        </div>
    </v-container>
</template>

<style scoped>

</style>
