<template>
  <v-app >
    <v-main class="bg-auth">
      <v-container class="pa-0">
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
/* .bg-auth{
    background-image: url(/background/bg-signin.svg);
    height: 100%;
    width: 100%;
    background-repeat: repeat;
} */
</style>
