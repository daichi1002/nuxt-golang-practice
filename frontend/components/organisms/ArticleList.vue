<script setup lang="ts">
defineProps({
  articles: {
    type: Object,
    required: false,
    default: null,
  },
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(article, i) in articles" :key="i" cols="12">
        <v-card
          :title="article.title"
          :text="article.content"
          height="200"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
