<template>
  <v-main>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="Title"
          color="purple lighten-3"
          required
        ></v-text-field>

        <v-textarea
          label="Content"
          value=""
          rows="16"
          color="purple lighten-3"
        ></v-textarea>
      </v-container>
    </v-form>
  </v-main>
</template>
