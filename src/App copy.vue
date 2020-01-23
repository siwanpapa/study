<template>
  <v-app>
    <!-- <v-app-bar clipped-left app color="primary" dark>
      <v-toolbar-title>vuetify study</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/" text lowercasecase>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to="/about" text lowercasecase>
        <span class="mr-2">about</span>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-navigation-drawer app clipped permanent>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-content>
      <v-container fill-height fluid style="background:gray">
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
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' }
    ]
  })
};
</script>
