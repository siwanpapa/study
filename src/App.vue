<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>vuetify study</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" text lowercasecase>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to="/about" text lowercasecase>
        <span class="mr-2">about</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
};
</script>
