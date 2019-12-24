<template>
  <v-layout fill-height>
    <v-card>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="print('goooood')"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ]
    };
  },
  methods: {
    print(val) {
      alert('>>> :::' + val);
    }
  }
};
</script>
