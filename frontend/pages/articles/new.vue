<script setup lang="ts">
import { sdk } from "~/gqls/graphqlClient";
import {
  ArticleInput,
  RegisterArticleMutationVariables,
} from "~~/lib/generated/client";

const valid = true;

const titleRules = [
  (v: string) => !!v || "Title is required",
  (v: string) =>
    (v && v.length <= 10) || "Title must be less than 10 characters",
];

const newArticle = reactive<ArticleInput>({
  title: "",
  content: "",
});

const save = () => {
  const data: RegisterArticleMutationVariables = {
    input: newArticle,
  };

  sdk.registerArticle(data);
};

const reset = () => console.log("reset!");
</script>

<template>
  <v-main>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="newArticle.title"
          :rules="titleRules"
          :counter="10"
          label="Title"
          color="primary"
          required
        ></v-text-field>

        <v-textarea
          v-model="newArticle.content"
          label="Content"
          rows="14"
          color="primary"
        ></v-textarea>
      </v-container>
    </v-form>
    <v-row justify="center">
      <v-btn
        class="btn-interval"
        color="primary"
        variant="outlined"
        @click="reset()"
        >reset</v-btn
      >
      <v-btn
        class="btn-interval"
        color="primary"
        variant="outlined"
        @click="save()"
        >save</v-btn
      >
    </v-row>
  </v-main>
</template>

<style>
.btn-interval {
  margin: 10px;
}
</style>
