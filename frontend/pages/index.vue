<script setup lang="ts">
import ArticleList from "~/components/organisms/ArticleList.vue";
import SelfIntroduction from "~/components/molecules/SelfIntroduction.vue";
import { ArticleClass } from "~~/models/articleClass";

const articles = await ArticleClass.getAllArticles();

const setState = () => {
  const { state, setArticle } = useArticle();
  setArticle(articles);
  const articleState = state.value.article;

  return articleState;
};
</script>

<template>
  <v-container>
    <v-main>
      <v-row>
        <div style="display: flex">
          <ArticleList :articles="setState()" />
          <SelfIntroduction />
        </div>
      </v-row>
    </v-main>
  </v-container>
</template>
