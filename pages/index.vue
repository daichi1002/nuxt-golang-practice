<template>
  <v-container>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="n in 4" :key="n" cols="8">
            <div v-if="n === 1">
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                height="250"
                elevation="2"
              ></v-card>
            </div>
            <div v-else>
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                elevation="2"
              ></v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-container>
</template>

<script setup lang="ts">
// const ready = ref(false);
</script>
