<template>
  <v-app>
    <v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("roles/init");
  },
};
</script>
