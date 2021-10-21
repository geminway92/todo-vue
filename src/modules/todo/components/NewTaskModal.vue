<template>
    <div
        @click.self="this.$emit('openModal')" 
        class="container-modal">
        <div class="container-form">
        <form @submit.prevent="this.$emit('createTask')">
                <input 
                @submit="this.$emit('createTask')"
                type="text"
                keyup.enter="submit"
                v-model="newTask.text"
                placeholder="Escribe tu tarea">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['openModal','createTask'],
    props: {
        newTask: {
            type: Object
        },
        showIconPlus: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
input {
  width: 84%;
  height: 30px;
  padding-left: .5em;
  border-radius: 5px;
  border: 1px solid #C2C2C2;
  margin: 1em;
  font-weight: 500;
  font-size: .9em;
}

.container-modal {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.384);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}

.container-form {
    position: relative;
    width: 90%;
    background-color: #FFEA8A;
    border-radius: 5px;
    height: min-content;
    top: 17em;
    left: .9em;
}
.container-form input {
    padding: 1em;
}

.container-form input:focus{
    border: 1px solid #FFD615;
    outline: 0 none;
}

@media screen and (max-width: 320px) {
  input {
    width: 230px;
  }

  .container-form {
    top: 6em;
    left: 0em;
    margin: auto;
  }
}

@media screen and (min-width: 700px){
    .container-form{
        left: 0;
        margin: auto;
    }
    
    input{
        width: 630px;
    }
}

@media screen and (min-width: 800px){
    
    input{
        min-width: 92%;
    }
}

@media screen and (min-width: 1200px) {
    input{
        min-width: 95%;
    }
    
    

   

}

@media screen and (min-width: 1300px) {
    input{
        min-width: 95%;
        position: relative;
        left: .2em;
    }
   

}

@media screen and (min-width: 1700px) {
    
    .container-form{
        width: 90%;
    }

}
</style>