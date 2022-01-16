<template>
  <v-container class="mt-6">
    <h1 class="display-1 text--secondary mb-16">Users Role Management</h1>

    <v-row justify="space-between" class="mb-10">
      <v-col cols="12" md="6">
        <Filters />
      </v-col>
      <v-col cols="12" md="2" class="d-flex align-center justify-end">
        <v-btn color="cyan" dark>CREATE NEW ROLE</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="roles">
      <v-col cols="12" md="6" lg="4" v-for="role in roles" :key="role.id">
        <RoleCard :data="role" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Filters from "../components/Filters.vue";
import RoleCard from "../components/RoleCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Filters,
    RoleCard,
  },

  mounted() {
    this.$store.dispatch("roles/init");
  },
  computed: {
    ...mapGetters("roles", {
      roles: "roles",
    }),
  },
};
</script>
