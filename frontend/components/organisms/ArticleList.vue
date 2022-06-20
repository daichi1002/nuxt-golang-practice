<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(article, i) in articles" :key="i" cols="12">
        <!-- <div v-if="i === 0"> -->
        <v-card
          :title="article.title"
          :subtitle="`Subtitle for Content ${1}`"
          :text="article.content"
          height="250"
        ></v-card>
        <!-- </div> -->
        <!-- <div v-else>
          <v-card
            :title="article.title"
            :subtitle="`Subtitle for Content ${1}`"
            :text="article.content"
          ></v-card>
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  articles: {
    type: Object,
    required: false,
    default: null,
  },
});
</script>
