<script setup lang="ts">
import { SweetAlertResult } from "sweetalert2";
import { done, error_register, loading } from "~~/constants/swalConfiguration";
import { sdk } from "~~/gqls/graphqlClient";
import {
  ArticleInput,
  RegisterArticleMutationVariables,
} from "~~/lib/generated/client";

const route = useRoute();
const id = route.params.id;

const titleRules = [
  (v: string) => !!v || "Title is required",
  (v: string) =>
    (v && v.length <= 10) || "Title must be less than 10 characters",
];

// data
const newArticle = reactive<ArticleInput>({
  title: "",
  content: "",
});

const switch1 = ref(true);

const save = () => {
  const fn = useNuxtApp().vueApp.config.globalProperties;
  fn.$swal.fire(confirm).then((result: SweetAlertResult) => {
    if (result.isConfirmed) {
      fixInputDetail(fn);
      fn.$swal.fire(loading);
    }
  });
};

const fixInputDetail = async (fn: Record<string, any>) => {
  try {
    const data: RegisterArticleMutationVariables = {
      input: newArticle,
    };

    await sdk.registerArticle(data);
  } catch (error) {
    fn.$swal.fire(error_register);
    return false;
  }
  await fn.$swal.fire(done);
  reset();
  return true;
};

// reset
const reset = () => {
  newArticle.title = "";
  newArticle.content = "";
};
</script>

<template>
  <v-form>
    <v-container>
      <v-switch
        v-model="switch1"
        label="edit"
        color="orange"
        value="orange"
        hide-details
      ></v-switch>
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
    <v-row justify="center">
      <v-btn
        class="btn-interval"
        color="primary"
        variant="outlined"
        @click="reset()"
        >edit</v-btn
      >
      <v-btn
        class="btn-interval"
        color="primary"
        variant="outlined"
        @click="reset()"
        >delete</v-btn
      >
    </v-row>
  </v-form>
</template>
