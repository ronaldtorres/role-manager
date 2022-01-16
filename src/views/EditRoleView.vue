<template>
  <v-container class="mt-6">
    <div class="d-flex justify-space-between align-center mb-10">
      <div>
        <h1>Editing {{ role.name }}</h1>
      </div>
      <v-btn to="/" depressed>Cancel</v-btn>
    </div>
    <template v-if="role.id">
      <RoleForm :edit="role" />
    </template>
  </v-container>
</template>

<script>
import RoleForm from "../components/RoleForm.vue";
export default {
  components: { RoleForm },
  data: () => ({
    role: {},
  }),
  beforeMount() {
    let id = this.$route.params.id;
    this.role = this.$store.getters["roles/getById"](Number(id));

    // Avoid enter to edit directly
    if (!this.role.editable) this.$router.push("/");
  },
};
</script>

<style></style>
