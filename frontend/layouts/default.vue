<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
<template>
  <div>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title> <a href="/">Nuxt3-Blog-App</a></v-app-bar-title>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <a href="/articles/new">
        <v-btn icon>
          <v-icon>mdi-pencil-plus-outline</v-icon>
        </v-btn>
      </a>

      <a href="/users/signUp">
        <v-btn icon>
          <v-icon>mdi-account-lock-open-outline</v-icon>
        </v-btn>
      </a>
    </v-app-bar>
  </div>
</template>

<style type="text/css">
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
