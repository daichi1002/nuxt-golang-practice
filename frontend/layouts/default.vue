<script setup lang="ts">
import { useRouter } from "vue-router";

definePageMeta({
  layout: false,
});

const router = useRouter();

const changeHomePage = () => {
  router.push("/");
};
// const changeNewPage = () => {
//   router.push("/articles/new");
// };
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

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
  </div>
</template>

<style type="text/css">
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
