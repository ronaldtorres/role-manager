<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
        color="cyan"
        label="Search"
        @input="handleSearch"
      >
      </v-text-field>
    </v-col>

    <v-col cols="12" md="6">
      <v-select
        :items="statuses"
        label="Role Status"
        color="cyan"
        :value="select"
        @change="handleSelectStatus"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    search: "",
    select: null,
    statuses: [
      { text: "Active and Inactive", value: null },
      { text: "Active", value: true },
      { text: "Inactive", value: false },
    ],
  }),
  methods: {
    handleSearch(value) {
      this.search = value;
      // Clear timeout
      if (this.timeout) clearTimeout(this.timeout);

      // Debounce search
      this.timeout = setTimeout(() => {
        // Filter role items by name
        this.handleFilter();
      }, 400);
    },

    handleSelectStatus(value) {
      this.select = value;

      this.handleFilter();
    },

    handleFilter() {
      let filtered = this.originalRolesState.filter((r) => {
        const select = this.select === null ? true : this.select == r.active;
        const search = r.name.toLowerCase().includes(this.search.toLowerCase());
        return select && search;
      });

      this.setRoles(filtered);
    },

    setRoles(value) {
      // if (!this.search && this.select === undefined) {
      //   value = undefined;
      // }

      this.$store.dispatch("roles/filterRoles", value);
    },
  },
  computed: {
    ...mapGetters("roles", {
      roles: "roles",
    }),

    originalRolesState() {
      return this.$store.state.roles.roles;
    },
  },
};
</script>
