<template>
       <v-toolbar color="green" dark fixed>
   
    <v-toolbar-title class="mr-4">Vue ToDo</v-toolbar-title>
     <v-toolbar-items >
      <v-btn flat><v-icon>playlist_add_check</v-icon> Projects</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!isLoggedIn" flat to="/register"><v-icon class="mr-2">account_box</v-icon>Register</v-btn>
      <v-btn  v-if="!isLoggedIn" flat><v-icon class="mr-2">fingerprint</v-icon>Login</v-btn>
      <v-btn v-if="isLoggedIn" flat><v-icon class="mr-2">exit_to_app</v-icon>Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

  import { mapGetters } from 'vuex';
export default {
  computed: {
       ...mapGetters('authentication', [
    'isLoggedIn'
    ]),
  },


};


</script>

<style>

</style>
