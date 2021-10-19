<template>
    <h1 v-if="currentState === 'authenticating'">{{currentState}}</h1>
    <router-view v-else />
</template>

<script>
import { mapGetters, mapActions } from "vuex"


export default ({
  data(){
    return{

    }
  },
  methods: {
    ...mapActions('auth', ['checkAuth']),

    async checkAuthStatus(){
      const resp = await this.checkAuth()
      console.log(resp)
      return resp
    }
  },
  computed: {
    ...mapGetters('auth' ,['currentState'])
  }
  
})
</script>

<style>
#app {
  
  margin: 0;
}


</style>

