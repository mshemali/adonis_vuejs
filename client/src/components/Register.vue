<template>
       
           
       
           <v-layout row wrap>
               <v-flex xs6 offset-xs3 >
                   
      
        <h1> Register </h1>
        <v-text-field
            name="Email"
            label="Email"
            :value="registerEmail"
            @input="setRegisterEmail"
          
        ></v-text-field> 
        <v-text-field
            name="Password"
            label="Password"
            :value="registerPassword"
            @input="setRegisterPassword"
          
        ></v-text-field>

        <v-alert type="error" :value="registerError">
          {{registerError}}
        </v-alert>
        <v-btn color="green" dark @click="register"><v-icon>account_circle</v-icon> Register</v-btn>
                 </v-flex>
           </v-layout>
      
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
       ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError'
    ]),
  },
  methods: {
    ...mapMutations('authentication', ['setRegisterEmail', 'setRegisterPassword']),
    ...mapActions('authentication', ['register'])
  },

};
</script>

<style>
</style>
