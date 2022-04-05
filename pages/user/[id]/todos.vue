<script setup>
const { data } = await useFetch('/api/todos');
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="task in data" :key="task" cols="12">
        <v-card
          :title="`${task.title}`"
          :subtitle="`${task.description}`"
          :text="`Priority: ${task.priority}`"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
