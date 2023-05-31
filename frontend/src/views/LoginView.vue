<script setup lang="ts">
    import Auth from '@/services/authService'
    import { ref, type Ref } from 'vue'
    
    let username: Ref<string> = ref("");
    let password: Ref<string> = ref("");

    function login() {
        Auth.login(username.value, password.value, "admin");
    }
</script>

<template>
    <v-container class="fill-height">
    <v-form @submit.prevent="login" class="v-col-12">
        
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="username" label="Username" required/>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="password" label="Password" type="password" required/>
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
    </v-container>
</template>

<style scoped>

</style>
