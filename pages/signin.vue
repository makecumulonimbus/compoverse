<template>
  <div class="signin-container">
    <div class="d-flex align-center justify-center w-100">
      <v-card class="card-signIn-left" :elevation="0">
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
      </v-card>
      <v-card class="card-signIn" :elevation="0">
        <div>
          <img src="logo.png" width="200" class="img-logo" />
        </div>
        <v-form @submit.prevent="signIn" ref="formSignIn" class="form-signin">
          <div class="input-signin">
            <v-text-field
              placeholder="Email"
              solo
              type="email"
              class="input-bg"
              v-model="email"
              :prepend-inner-icon="mdiEmail"
              :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
              v-model="password"
              placeholder="Password"
              solo
              class="input-bg"
              :prepend-inner-icon="mdiKey"
              :append-icon="showPassword ? mdiEye : mdiEyeOff"
              :rules="[rules.required, rules.min]"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </div>

          <v-checkbox
            class="mt-0 pt-0 remember-input"
            v-model="remember"
            hide-details
            label="Remember me"
            color="primary"
            :class="remember ? 'checked' : ''"
          ></v-checkbox>

          <div class="btn-signin">
            <v-btn
              type="submit"
              large
              color="#40b388"
              dark
              rounded
              :loading="loading"
              >SIGN IN</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mdiEmail, mdiKey, mdiEye, mdiEyeOff } from '@mdi/js'
export default {
  name: 'SignIn',
  layout: 'auth',
  data() {
    return {
      mdiEmail,
      mdiKey,
      mdiEye,
      mdiEyeOff,
      email: '',
      password: '',
      loading: false,
      showPassword: false,
      remember: false,
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

  mounted() {
    if (
      localStorage.getItem('rememberEmail') &&
      localStorage.getItem('rememberEmail') !== ''
    ) {
      this.email = localStorage.getItem('rememberEmail')
      this.remember = true
    }
  },

  methods: {
    async signIn() {
      const validateForm = this.$refs.formSignIn.validate()
      if (!validateForm) return

      try {
        this.loading = true
        if (this.remember) {
          localStorage.setItem('rememberEmail', this.email)
        } else {
          localStorage.setItem('rememberEmail', '')
        }

        const data = await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )

        if (data.user) {
          const userProfile = {
            email: data.user.email,
            uid: data.user.uid,
            photoURL: data.user.photoURL,
            displayName: data.user.displayName,
            phoneNumber: data.user.phoneNumber,
          }

          await this.$store
            .dispatch('onAuthStateChangedAction', {
              userProfile,
            })
            .then(() => {
              setTimeout(() => {
                this.$router.replace('/')
                this.loading = false
              }, 1000)
            })
            .catch((error) => {
              console.log('User State error', error)
              this.loading = false
              this.showNotification('ERROR', 'error', 'Set store error!!')
            })
        }
      } catch (error) {
        console.log('Login error', error)
        this.loading = false
        this.showNotification('ERROR', 'error', error.message)
      }
    },

    showNotification(titleNoti, typeNoti, textNoti) {
      this.$notify({
        title: titleNoti,
        text: textNoti,
        type: typeNoti,
      })
    },
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
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
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
  padding-top: 20px;
  button {
    width: 100%;
    span {
      color: white;
      font-weight: 600;
    }
  }
}

.form-signin {
  width: 100%;
}
.input-signin {
  width: 100%;
}
::v-deep div.input-signin div.v-input__slot {
  background: $color-5 !important;
}
// button::before,
// i::before {
//   color: white;
// }

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
.remember-input .v-label {
  color: $color-1 !important;
  font-size: 14px;
}
.remember-input .v-icon {
  color: $color-1 !important;
  opacity: 0.6;
}
.remember-input.checked .v-icon {
  color: $color-2 !important;
  opacity: 1;
}

.input-signin .v-icon svg {
  color: white;
}
</style>
