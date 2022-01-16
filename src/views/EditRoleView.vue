<template>
  <v-container class="mt-6">
    <h1>Editing {{ role.name }}</h1>
    <RoleForm :edit="role" />
  </v-container>
</template>

<script>
import RoleForm from "../components/RoleForm.vue";
export default {
  components: { RoleForm },
  data: () => ({
    role: {},
  }),
  mounted() {
    let id = this.$route.params.id;
    this.role = this.$store.getters["roles/getById"](Number(id));
  },
};
</script>

<style></style>
