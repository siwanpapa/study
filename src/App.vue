<template>
  <router-view />
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
