<template>
  <v-app style="background-color: #f5f5f5">
    <v-app-bar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Nuxt3-Blog-App</v-app-bar-title>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <nuxt-link to="/articles/new">
        <v-btn icon>
          <v-icon>mdi-pencil-plus-outline</v-icon>
        </v-btn>
      </nuxt-link>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-main>
      <nuxt-page></nuxt-page>
    </v-main>
  </v-app>
</template>
