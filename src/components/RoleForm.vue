<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col>
        <v-text-field
          v-model="name"
          :rules="rules.name"
          label="Name"
          color="cyan"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="type"
          :rules="rules.type"
          label="Type"
          color="cyan"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-textarea
      name="description"
      v-model="description"
      label="Description"
      color="cyan"
      :counter="130"
      :rules="rules.description"
    ></v-textarea>

    <div class="d-flex">
      <v-checkbox v-model="editable" class="mr-4" label="Editable"></v-checkbox>
      <v-checkbox v-model="active" label="Active"></v-checkbox>
    </div>

    <v-btn :disabled="!valid" color="cyan" class="mr-4" @click="save">
      Save
    </v-btn>

    <v-btn text class="mr-4" @click="reset"> Reset Form </v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    edit: Object,
  },
  data: function () {
    return {
      valid: true,
      name: "",
      type: "",
      description: "",
      editable: false,
      active: true,
      users: [],
      rules: {
        name: [(v) => !!v || "Name is required"],
        type: [(v) => !!v || "E-mail is required"],
        description: [
          (v) => !!v || "Description is required",
          (v) =>
            (!!v && v.length < 130) ||
            "Description length must be lower than 130 characters",
        ],
      },
      ...this.edit,
    };
  },

  methods: {
    save() {
      if (this.$refs.form.validate()) {
        let data = {
          id: this.id,
          name: this.name,
          type: this.type,
          description: this.description,
          editable: this.editable,
          active: this.active,
          users: this.users,
          created_on: this.created_on,
          modified_on: this.modified_on,
        };

        if (this.edit) {
          data.modified_on = new Date();
          this.$store.dispatch("roles/updateRole", [data.id, data]);
        } else {
          this.$store.dispatch("roles/addRole", data);
        }

        this.$router.push("/");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
