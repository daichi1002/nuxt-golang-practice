<template>
  <v-container>
    <v-main>
      <v-row>
        <div style="display: flex">
          <v-col cols="8">
            <ArticleList :articles="articles" />
          </v-col>
          <v-col cols="4">
            <SelfIntroduction />
          </v-col>
        </div>
      </v-row>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
import ArticleList from "~/components/organisms/ArticleList.vue";
import SelfIntroduction from "~/components/molecules/SelfIntroduction.vue";
import { sdk } from "~/gqls/graphqlClient";

const articles = await sdk.getArticle().then((res) => {
  return res.getArticle;
});
console.log(articles);
</script>
