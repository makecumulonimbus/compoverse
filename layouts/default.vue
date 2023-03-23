<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <perfect-scrollbar>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </perfect-scrollbar>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ miniVariant ? mdiChevronRight : mdiChevronLeft }}</v-icon>
      </v-btn>
      <v-toolbar-title class="bold">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar size="36px">
              <v-img alt="Avatar" :src="userProfile.photoURL"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img alt="Avatar" :src="userProfile.photoURL"></v-img>
              </v-avatar>
              <h3 class="pt-3">{{ userProfile.displayName }}</h3>
              <p class="text-caption mt-1 mb-0">{{ userProfile.email }}</p>
              <p class="text-caption mt-1 mb-0">
                {{ userProfile.phoneNumber }}
              </p>
              <v-divider class="my-2"></v-divider>

              <v-btn depressed rounded text small @click="signOut()">
                SIGN OUT
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <notifications position="top right" classes="notification-container" />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  mdiHomeCircle,
  mdiButtonPointer,
  mdiCardText,
  mdiSkipNext,
  mdiChevronRight,
  mdiChevronLeft,
  mdiLogin,
  mdiFormatFloatLeft,
  mdiToggleSwitch,
  mdiCheckboxMarkedOutline,
  mdiFilePresentationBox,
  mdiFormTextbox,
  mdiReload,
  mdiSquareRoundedBadgeOutline,
  mdiFormatText,
  mdiTable,
  mdiAlert,
  mdiMenu,
  mdiImageArea,
  mdiPageLayoutHeader,
  mdiPageLayoutFooter,
} from '@mdi/js'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      mdiHomeCircle,
      mdiButtonPointer,
      mdiCardText,
      mdiSkipNext,
      mdiChevronRight,
      mdiChevronLeft,
      mdiLogin,
      mdiFormatFloatLeft,
      mdiToggleSwitch,
      mdiCheckboxMarkedOutline,
      mdiFilePresentationBox,
      mdiFormTextbox,
      mdiReload,
      mdiSquareRoundedBadgeOutline,
      mdiFormatText,
      mdiTable,
      mdiAlert,
      mdiMenu,
      mdiImageArea,
      mdiPageLayoutHeader,
      mdiPageLayoutFooter,
      userProfile: {},
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: mdiHomeCircle,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiButtonPointer,
          title: 'Buttons',
          to: '/buttons',
        },
        {
          icon: mdiCardText,
          title: 'Cards',
          to: '/cards',
        },
        {
          icon: mdiSkipNext,
          title: 'Paginations',
          to: '/paginations',
        },
        {
          icon: mdiLogin,
          title: 'Logins',
          to: '/logins',
        },
        {
          icon: mdiFormatFloatLeft,
          title: 'Forms',
          to: '/forms',
        },
        {
          icon: mdiToggleSwitch,
          title: 'Switchs',
          to: '/switchs',
        },
        {
          icon: mdiCheckboxMarkedOutline,
          title: 'Checkboxs',
          to: '/checkboxs',
        },
        {
          icon: mdiFilePresentationBox,
          title: 'Modals',
          to: '/modals',
        },
        {
          icon: mdiFormTextbox,
          title: 'Inputs',
          to: '/inputs',
        },
        {
          icon: mdiReload,
          title: 'Loaders',
          to: '/loaders',
        },
        {
          icon: mdiSquareRoundedBadgeOutline,
          title: 'Badges',
          to: '/badges',
        },
        {
          icon: mdiFormatText,
          title: 'Texts',
          to: '/texts',
        },
        {
          icon: mdiTable,
          title: 'Tables',
          to: '/tables',
        },
        {
          icon: mdiAlert,
          title: 'Alerts',
          to: '/alerts',
        },
        {
          icon: mdiMenu,
          title: 'Navigations',
          to: '/navigations',
        },
        {
          icon: mdiImageArea,
          title: 'Images',
          to: '/images',
        },
        {
          icon: mdiPageLayoutHeader,
          title: 'Headers',
          to: '/headers',
        },
        {
          icon: mdiPageLayoutFooter,
          title: 'Footers',
          to: '/footers',
        },
      ],
      miniVariant: true,
      title: 'Compoverse',
      showProfileDialog: false,
    }
  },

  mounted() {
    const userStorage = JSON.parse(localStorage.getItem('userProfile'))
    this.userProfile = {
      displayName: userStorage.displayName
        ? userStorage.displayName
        : userStorage.email.split('@')[0],
      email: userStorage.email,
      phoneNumber: userStorage.phoneNumber,
      photoURL: userStorage.photoURL
        ? userStorage.photoURL
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU',
    }
  },

  methods: {
    async signOut() {
      if (this.$fire.auth.currentUser !== null) {
        try {
          await this.$fire.auth.signOut().then(() => {
            this.$router.replace('/signin')
          })
        } catch (e) {
          console.log(e)
        }
      } else {
        this.$router.replace('/signin')
      }
    },
  },
}
</script>

<style scoped lang="scss">
.v-card {
  background-color: $color-4;
}
.ps {
  height: 100vh;
}
.v-toolbar__title {
  padding-left: 0px !important;
}
</style>
