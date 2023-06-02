<script setup lang="ts">
    import { mdiMenu } from '@mdi/js';
    import { useDisplay } from 'vuetify';

    const { mdAndUp } = useDisplay();

    const menuItems: Array<any> = [
        { title: 'HOME', url: '/'},
        { title: 'ARTICLES', url: '/articles'},
        { title: 'TUTORIALS', url: '/tutorials' },
        { title: 'ABOUT HERE', url: '/about' },
      ];
</script>

<template>
      <v-app-bar
        density="compact"
      >
        <template v-slot:prepend>
          <v-img
            src="/public/lomrlogo_blank.png"           
            width="48px" 
            :aspect-ratio="1"
          >
          </v-img>
        </template>

        <v-app-bar-title>LOMR: A personnal tech blog</v-app-bar-title>

        <template v-slot:append>
          <span v-if="mdAndUp">
            <v-btn variant="text"
              v-for="(item, i) in menuItems"
              :key="i"
              :to="item.url"
            >{{ item.title }}</v-btn>
          </span>
          <span v-else>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn :icon="mdiMenu" v-bind="props"></v-btn>
              </template>
              <v-list>
              <v-list-item
                  v-for="(item, i) in menuItems"
                  :key="i"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </template>
      </v-app-bar>
</template>

<style scoped>

</style>
