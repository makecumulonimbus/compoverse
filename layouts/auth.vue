<template>
  <v-app>
    <v-main class="bg-auth">
      <v-container class="pa-0">
        <notifications position="top right" classes="notification-container" />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style scoped lang="scss">
.bg-auth {
  background-color: $color-4;
}
</style>
