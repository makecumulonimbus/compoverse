<template>
  <div class="signin-container">
    <div class="d-flex align-center justify-center w-100">
      <c-card class="card-signIn-left" :elevation="0">
        <div class="logo-text">C</div>
        <div class="logo-text">O</div>
        <div class="logo-text">M</div>
        <div class="logo-text">P</div>
        <div class="logo-text">O</div>
        <div class="logo-text">V</div>
        <div class="logo-text">E</div>
        <div class="logo-text">R</div>
        <div class="logo-text">S</div>
        <div class="logo-text">E</div>
      </c-card>
      <v-card class="card-signIn" :elevation="0">
        <div>
          <img src="logo.png" width="200" class="img-logo" />
        </div>
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
            @click:append="show1 = !show1"
          ></v-text-field>
        </div>
        <div class="btn-signin">
          <v-btn @click="submit" large color="#40b388" dark rounded
            >SIGN IN</v-btn
          >
        </div>
      </v-card>
    </div>
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
        required: (value) => !!value || 'Required',
        min: (v) => v?.length >= 8 || 'Min 8 characters',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail'
        },
      },
    }
  },

  methods: {
    submit() {},
  },
}
</script>

<style lang="scss">
.container {
  height: 100%;
}
.signin-container {
  display: grid;
  place-items: center;
  height: 100%;
  padding: 12px;
}
.card-signIn-left {
  padding: 20px;
  max-height: 435px;
  max-width: 70px;
  background-color: $color-2 !important;
  height: 100%;
  width: 100%;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  text-align: center;
}
.card-signIn {
  padding: 20px 28px;
  height: 100%;
  width: 100%;
  max-height: 500px;
  max-width: 400px;
  background-color: $color-5 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.btn-signin {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding-bottom: 20px;
  button {
    width: 100%;
    span {
      color: white;
      font-weight: 600;
    }
  }
}
.input-signin {
  width: 100%;
}
::v-deep div.input-signin div.v-input__slot {
  background: $color-5 !important;
}
button::before,
i::before {
  color: white;
}

.logo-text {
  font-weight: 600;
  line-height: 1;
  font-size: 40px;
  color: white;
  transition: 0.3s;
  &:hover {
    color: $color-4;
    transition: 0.3s;
    cursor: default;
  }
}
.img-logo {
  padding: 16px;
  animation: rotation 10s infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(90deg);
  }
  37.5% {
    transform: rotate(135deg);
  }
  50% {
    transform: rotate(180deg);
  }
  62.5% {
    transform: rotate(225deg);
  }
  75% {
    transform: rotate(270deg);
  }
  87.5% {
    transform: rotate(315deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
