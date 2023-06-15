<script setup lang="ts">
    import Auth from '@/services/authService';
    import { ref, type Ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();

    let email: Ref<string> = ref("");
    let showForm: Ref<boolean> = ref(true);
    let showError: Ref<boolean> = ref(false);
    let errorMessage: Ref<string> = ref("No error to display yet!");
    let showOkMessage: Ref<boolean> = ref(false);

    async function requestToken() {
        let result:boolean = await Auth.requestToken(email.value);

        if(result) {
            showForm.value = false
            showOkMessage.value = true;
        }
        else{
            showError.value = true;
            errorMessage.value = "Something went wrong on my side. Retry later or send me an email so I can help!";
        }
    }

    onBeforeMount(() => {
        Auth.login(route.params.token as string);
    });
</script>

<template>
    <v-container class="fill-height">
    <v-form v-if="showForm" @submit.prevent="requestToken" class="v-col-12">
        
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="email" label="Email" required/>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row v-if="showError" >
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                    <p>{{ errorMessage }}</p>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="6" sm="2">
                    <v-btn type="submit" block class="mt-2">Login</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            
    </v-form>
    <v-row v-if="showOkMessage" >
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                    <p>If you are a registerd user, an email was sent to your account so you can log in!</p>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
    </v-container>
</template>

<style scoped>

</style>
