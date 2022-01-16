<template>
  <v-card>
    <v-card-title class="px-6 pb-0 pt-8">
      <p class="headline">{{ data.name }}</p>
    </v-card-title>
    <v-card-subtitle class="px-6">
      <p class="subtitle-1">{{ data.type | capitalize }}</p>
    </v-card-subtitle>
    <v-card-text class="px-6 mb-10">
      <p class="body-1 mb-6">
        {{ data.description }}
      </p>

      <div>
        <template v-for="(user, i) of data.users">
          <v-avatar v-if="i <= 5" class="mr-1" size="32" :key="user.id">
            <img
              :src="user.photo_url"
              :alt="user.first_name + ' ' + user.last_name"
              :title="user.first_name + ' ' + user.last_name"
            />
          </v-avatar>
        </template>
        <v-avatar v-if="data.users.length > 6" color="grey lighten-1" size="32">
          <span class="white--text body-1">+{{ data.users.length - 6 }}</span>
        </v-avatar>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="grey lighten-2 px-6">
      <p class="body-2 text--secondary my-auto">
        Date Created: {{ new Date(data.created_on).toLocaleDateString() }}
      </p>
      <v-spacer></v-spacer>

      <template v-if="data.editable">
        <v-btn text>Edit</v-btn>
        <v-btn color="red lighten-2" text> Delete </v-btn>
      </template>
      <template v-else>
        <v-icon>mdi-lock</v-icon>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card__actions {
  min-height: 55px;
}
</style>
