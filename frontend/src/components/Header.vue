<script setup lang="ts">
    
    import { useDisplay } from 'vuetify';

    const { mdAndUp } = useDisplay();

    const menuItems: Array<any> = [
        { title: 'HOME' },
        { title: 'BLOG' },
        { title: 'TUTORIALS' },
        { title: 'ABOUT HERE' },
      ];
</script>

<template>
      <v-app-bar
        density="compact"
      >
        <template v-slot:prepend>
          
        </template>

        <v-app-bar-title>LOMR</v-app-bar-title>

        <template v-slot:append>
          <span v-if="mdAndUp">
            <v-btn variant="text"
              v-for="(item, i) in menuItems"
              :key="i"
            >{{ item.title }}</v-btn>
          </span>
          <span v-else>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
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
