<template>
  <div>
    <template v-for="(avatar, i) of avatars">
      <v-avatar
        v-if="i <= limit - 1"
        class="mr-1"
        size="32"
        :key="`${avatars.id}_${avatar.id}`"
      >
        <img
          :src="avatar.photo_url"
          :alt="avatar.first_name + ' ' + avatar.last_name"
          :title="avatar.first_name + ' ' + avatar.last_name"
        />
      </v-avatar>
    </template>
    <v-avatar v-if="avatars.length > limit" color="grey lighten-1" size="32">
      <span class="white--text body-1">+{{ avatars.length - limit }}</span>
    </v-avatar>
  </div>
</template>

<script>
export default {
  props: {
    avatars: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      default: 5,
    },
  },
};
</script>
