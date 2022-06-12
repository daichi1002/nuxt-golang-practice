<template>
  <v-app style="background-color: #f5f5f5">
    <v-app-bar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Nuxt3-Blog-App</v-app-bar-title>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-main>
      <nuxt-page></nuxt-page>
    </v-main>
  </v-app>
</template>
