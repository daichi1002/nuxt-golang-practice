<script setup lang="ts">
import ArticleList from "~/components/organisms/ArticleList.vue";
import SelfIntroduction from "~/components/molecules/SelfIntroduction.vue";
import { ArticleClass } from "~~/models/articleClass";

const articles = await ArticleClass.getAllArticles();
const { state, setArticle } = useArticle();
</script>

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
