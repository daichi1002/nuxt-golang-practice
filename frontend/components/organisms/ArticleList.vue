<script setup lang="ts">
defineProps({
  articles: {
    type: Object,
    required: false,
    default: null,
  },
});
const router = useRouter();

const showArticle = (id: number) => {
  router.push(`/articles/${id}`);
};
</script>

<template>
  <v-col v-if="articles.length > 0" cols="8">
    <div v-for="(article, i) in articles" :key="i">
      <v-card
        :title="article.title"
        :text="article.content"
        height="200"
        width="700"
        @click="showArticle(article.id)"
      ></v-card>
    </div>
  </v-col>
  <v-col v-else cols="8" style="width: 700px">
    記事が作成されていません。
  </v-col>
</template>
