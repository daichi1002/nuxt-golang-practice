<script setup lang="ts">
import { SweetAlertResult } from "sweetalert2";
import { sdk } from "~/gqls/graphqlClient";
import {
  done,
  loading,
  confirm,
  error_register,
} from "~~/constants/swalConfiguration";
import {
  ArticleInput,
  RegisterArticleMutationVariables,
} from "~~/lib/generated/client";

const router = useRouter();
// data
const newArticle = reactive<ArticleInput>({
  id: 0,
  title: "",
  content: "",
});

// create
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
  router.push("/");
  return true;
};

// reset
const reset = () => {
  newArticle.title = "";
  newArticle.content = "";
};
</script>

<template>
  <v-main>
    <v-form>
      <v-container>
        <v-text-field
          v-model="newArticle.title"
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
