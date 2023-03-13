<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
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
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar size="36px">
              <v-img
                alt="Avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU"
              ></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img
                  alt="Avatar"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU"
                ></v-img>
              </v-avatar>
              <h3 class="pt-3">Nuttapong.y</h3>
              <p class="text-caption mt-1">Caption.</p>
              <v-divider class="my-2"></v-divider>
              <v-btn depressed rounded text small> Edit Account </v-btn>
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
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-button-pointer',
          title: 'Buttons',
          to: '/buttons',
        },
        {
          icon: 'mdi-card-text ',
          title: 'Cards',
          to: '/cards',
        },
        {
          icon: 'mdi-page-last',
          title: 'Paginations',
          to: '/paginations',
        },
      ],
      miniVariant: true,
      title: 'Compoverse',
    }
  },

  methods: {
    async signOut() {
      if (this.$fire.auth.currentUser !== null) {
        console.log(this.$fire.auth.currentUser)
        try {
          await this.$fire.auth.signOut().then(() => {
            this.$router.replace('/signin')
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.v-card {
  background-color: $color-4;
}
</style>
