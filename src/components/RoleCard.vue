<template>
  <v-card>
    <div class="pa-6" style="postion: relative">
      <v-chip
        v-if="!data.active"
        text-color="white"
        color="red"
        label
        style="position: absolute; right: 1.6rem"
      >
        INACTIVE
      </v-chip>
    </div>
    <v-card-title class="px-6 pb-0">
      <p class="headline">{{ data.name }}</p>
    </v-card-title>
    <v-card-subtitle class="px-6">
      <p class="subtitle-1">{{ data.type | capitalize }}</p>
    </v-card-subtitle>
    <v-card-text class="px-6 mb-10">
      <p class="body-1 mb-6">
        {{ data.description }}
      </p>

      <AvatarsGroup :avatars="data.users" :limit="6" />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="grey lighten-2 px-6">
      <p class="body-2 text--secondary my-auto">
        Date Created: {{ new Date(data.created_on).toLocaleDateString() }}
      </p>
      <v-spacer></v-spacer>

      <template v-if="data.editable">
        <v-btn :to="'/edit/' + data.id" text>Edit</v-btn>
        <v-btn color="red lighten-2" text @click="deleteRole(data.id)">
          Delete
        </v-btn>
      </template>
      <template v-else>
        <v-icon>mdi-lock</v-icon>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import AvatarsGroup from "./AvatarsGroup.vue";
export default {
  components: { AvatarsGroup },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteRole(id) {
      this.$destroy();
      this.$store.dispatch("roles/deleteRole", id);
    },
  },
};
</script>

<style scoped>
.v-card__actions {
  min-height: 55px;
}
</style>
