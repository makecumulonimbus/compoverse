<template>
  <div class="signin-container">
    <v-card class="card-signIn" :elevation="0">
      <div>
        <v-text-field  placeholder="Email" solo></v-text-field>
        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          
          solo

        ></v-text-field>
      </div>
      <div>
        <v-btn @click="$router.replace('/')">SIGN IN</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  layout: 'auth',
}
</script>

<style lang="scss">
.signin-container {
  height: 100vh;
  display: grid;
  place-items: center;
}
.card-signIn {
  margin: 12px;
  padding: 12px;
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  background-color: $color-2 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
