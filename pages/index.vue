<template>
  <v-container>
    <v-main>
      <div style="display: flex">
        <ArticleList />
        <SelfIntroduction />
      </div>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import ArticleList from "~/components/organisms/ArticleList.vue";
import SelfIntroduction from "~/components/molecules/SelfIntroduction.vue";
</script>
