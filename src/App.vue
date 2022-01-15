<template>
  <v-app>
    <v-container>
      <h1 class="display-1 text--secondary">Users Role Management</h1>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
