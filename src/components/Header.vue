<template>
    <v-app-bar
        app
    >
        <div class="d-flex align-center">
            <strong>
                Where in the world
            </strong>
        </div>

        <v-spacer></v-spacer>
        <v-btn text v-if="!$vuetify.theme.dark" @click="toggleTheme()">
            <v-icon class="mr-2" color="blue-grey darken-4">mdi-moon-waning-crescent</v-icon>
            <span>Dark mode</span>
        </v-btn>
        <v-btn text v-if="$vuetify.theme.dark" @click="toggleTheme()">
            <v-icon class="mr-2"  color="yellow darken-3">mdi-moon-waning-crescent</v-icon>
            <span>Light mode</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>