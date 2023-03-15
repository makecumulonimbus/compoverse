<template>
  <div class="text-center">
    <v-dialog
      :value="showDialog"
      width="500"
      persistent
      class="profile-container"
    >
      <v-card>
        <v-card-title>Edit Account</v-card-title>
        <div class="pa-4 text-center">
          <v-avatar size="100">
            <v-img
              alt="Avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0mY04NeynM9jLwuxyuvaqyjfwHeBJkPsEwxUO-junn3ptTn8MyFPeTVpa5sppoAu758&usqp=CAU"
            />
          </v-avatar>
        </div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="saveData()"> SAVE </v-btn>
          <v-btn color="error" text @click="$emit('closeDialog')">
            CANCLE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import { mdiAccountEdit } from '@mdi/js';
export default {
  name: 'ProfileDialog',
  props: ['showDialog'],
  data() {
    return {}
  },
  methods: {
    saveData() {
      console.log('save data')
      this.$emit('closeDialog')
    },
  },
}
</script>

<style lang="scss" scoped>
.v-dialog .v-card {
  background-color: $color-4;
}
</style>
