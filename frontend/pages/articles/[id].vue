<script setup lang="ts">
import { SweetAlertResult } from "sweetalert2";
import {
  done,
  loading,
  confirm,
  error_register,
  deleteConfirm,
  deleteDone,
  error_delete,
} from "~~/constants/swalConfiguration";
import { sdk } from "~~/gqls/graphqlClient";
import {
  ArticleInput,
  DeleteArticleMutationVariables,
  RegisterArticleMutationVariables,
} from "~~/lib/generated/client";

const editable = ref(false);
const route = useRoute();
const articleId = Number(route.params.id);
const router = useRouter();

// data
const newArticle = reactive<ArticleInput>({
  id: 0,
  title: "",
  content: "",
});

const labelChange = (editable: boolean) => {
  return editable ? "edit" : "show";
};

// get show article
const { state } = useArticle();
const showArticle = () => {
  state.value.article.forEach((art) => {
    if (art.id === articleId) {
      newArticle.id = art.id;
      newArticle.title = art.title;
      newArticle.content = art.content;
    }
  });
};
showArticle();

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
  return true;
};

// delete
const deleteArticle = () => {
  const fn = useNuxtApp().vueApp.config.globalProperties;
  fn.$swal.fire(deleteConfirm).then((result: SweetAlertResult) => {
    if (result.isConfirmed) {
      fixDeleteData(fn);
      fn.$swal.fire(loading);
    }
  });
};

const fixDeleteData = async (fn: Record<string, any>) => {
  try {
    const data: DeleteArticleMutationVariables = {
      id: articleId,
    };
    await sdk.deleteArticle(data);
  } catch (error) {
    fn.$swal.fire(error_delete);
    return false;
  }
  await fn.$swal.fire(deleteDone);
  router.push("/");
  return true;
};
</script>

<template>
  <v-form>
    <v-container>
      <v-switch
        v-model="editable"
        :label="labelChange(editable)"
        color="orange"
        hide-details
      ></v-switch>
      <div v-if="editable">
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
      </div>
      <div v-else>
        <v-text-field
          v-model="newArticle.title"
          :counter="10"
          label="Title"
          color="primary"
          required
          readonly
        ></v-text-field>

        <v-textarea
          v-model="newArticle.content"
          label="Content"
          rows="14"
          color="primary"
          readonly
        ></v-textarea>
      </div>
    </v-container>
    <v-row justify="center">
      <div v-if="editable">
        <v-btn
          class="btn-interval"
          color="primary"
          variant="outlined"
          @click="deleteArticle()"
          >delete</v-btn
        >
        <v-btn
          class="btn-interval"
          color="primary"
          variant="outlined"
          @click="save()"
          >edit</v-btn
        >
      </div>
      <div v-else>
        <v-btn class="btn-interval" disabled depressed>delete</v-btn>
        <v-btn class="btn-interval" disabled depressed>edit</v-btn>
      </div>
    </v-row>
  </v-form>
</template>
