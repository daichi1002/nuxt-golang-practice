<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="12">
        <div v-if="n === 1">
          <v-card
            :title="`Content ${n}`"
            :subtitle="`Subtitle for Content ${n}`"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
            height="250"
          ></v-card>
        </div>
        <div v-else>
          <v-card
            :title="`Content ${n}`"
            :subtitle="`Subtitle for Content ${n}`"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
          ></v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>
