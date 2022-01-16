<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
        color="cyan"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-select :items="['1', '2']" label="Standard" color="cyan"></v-select>
    </v-col>
  </v-row>
</template>
