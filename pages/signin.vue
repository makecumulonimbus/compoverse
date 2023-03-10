<template>
  <div class="signin-container">
    <v-card class="card-signIn" :elevation="0">
      <div class="input-signin">
        <v-text-field
          placeholder="Email"
          solo
          type="email"
          class="input-bg"
          v-model="email"
          prepend-inner-icon="mdi-email"
          :rules="[rules.required, rules.email]"
        ></v-text-field>
        <v-text-field
          placeholder="Password"
          solo
          class="input-bg"
          prepend-inner-icon="mdi-key"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          @click:append="show1 = !show1"
        ></v-text-field>
      </div>
      <div class="btn-signin">
        <v-btn @click="$router.replace('/')" large color="#40b388" dark rounded
          >SIGN IN</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      show1: false,
      rules: {
        required: (value) => !!value || 'Required.',
        // counter: (value) => value.length <= 20 || 'Max 20 characters',
        // min: (v) =>   v.length >= 8 || 'Min 8 characters',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
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
  padding: 20px;
  height: 100%;
  width: 100%;
  max-height: 400px;
  max-width: 400px;
  background-color: $color-5 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn-signin {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  button {
    width: 100%;

    span {
      color: white;
    }
  }
}
.input-signin {
  width: 100%;
}
::v-deep div.input-signin div.v-input__slot {
  background: $color-5 !important;
}
.v-application .primary--text {
  color: white !important;
  caret-color: white !important;
}
</style>
