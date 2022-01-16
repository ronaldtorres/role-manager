<template>
  <v-container class="mt-6">
    <div class="d-flex justify-space-between align-center mb-10">
      <div>
        <h1>Create New Role</h1>
      </div>
      <v-btn to="/" depressed>Cancel</v-btn>
    </div>
    <RoleForm />
  </v-container>
</template>

<script>
import RoleForm from "../components/RoleForm.vue";
export default {
  components: { RoleForm },
};
</script>

<style></style>
