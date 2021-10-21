<template>
  <div 
    v-if="!showIconPlus"
    class="container-modal">

      <NewTaskModal  
        @createTask="createTask"
        @openModal="openModal"
        :newTask="newTask"
        :showIconPlus="showIconPlus"
      />
  </div>
  <div 
    v-if="openPhoto"
    class="container-modal--photo">
      <InputPhotoModal
        @openModalPhoto="openModalPhoto"
        @updatePhoto="updatePhoto"
        :openPhoto="openPhoto"/>
  </div>
  <div class="todo-layout">
    <div class="container-circle">
      <div class="circle-left"></div>
      <div class="circle-right"></div>
    </div>
    <div @click="onLogout()" class="container-icon-logout">
      <i class="fas fa-sign-out-alt"></i>
    </div>
    <div class="container-photo">
      <img @click="openModalPhoto()" :src="currentUser.photoProfile" alt="photoProfile">
      <h1>¡Bienvenido/a <span>{{currentUser.name}}!</span></h1>
    </div>
    <div class="container-clock">
      <h1><span>{{hours}}</span>: <span>{{minAddCero}}</span>: <span>{{secondAddCero}}</span></h1>
    </div>
    <h1 class="title-list">Lista de Tareas</h1>
    <div class="container-task-list">
      <div class="container-title-icon-plus">
      <h5 class="title-daily-tasks">Tareas Diarias</h5>
      <div  class="container-icon-plus-dash">
        <i @click="showIconPlus = !showIconPlus" class="far fa-plus-square"></i>
        <i @click="deleteTask()" class="fas fa-trash icon-delete"></i>
      </div>

      </div>
      
      <div class="container-ul">

        <ul class="task-list">
          <div v-for="task in tasks" :key="task.id" 
            class="container-list"
            @click="updateTask()">
            <div
              @click="task.completed = !task.completed"
              class="squareCheck"
              :class="{'completed-square' : task.completed }">
              </div>
            <li
              @click="task.completed = !task.completed"
              :class="{'completed': task.completed }">
              {{task.text}}
              </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
import NewTaskModal from '../components/NewTaskModal.vue'
import InputPhotoModal from '../components/InputPhotoModal.vue'


export default {
    name: 'todolayaout',
    components: {
      NewTaskModal,
      InputPhotoModal,
    },

    data(){
      return{
        date: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
        minAddCero: 0,
        secondAddCero: 0,
        showIconPlus: true,
        openPhoto: false,
        picture: '',
        newTask: {
          id: '',
          text: '',
          completed: false,
        }
      }
    },
    methods: {
      ...mapActions('todo',['createTaskAction','loadLocalStorage','updateTaskLocalStorage','deleteTaskAction','updateNewPhotoProfile']),
      ...mapMutations('auth', ['logout']),

      openModal(){
        this.showIconPlus = !this.showIconPlus
      },

      openModalPhoto(){
        this.openPhoto = !this.openPhoto
      },

      currentDate(){
        this.date = new Date(Date.now())
        
        this.hours = this.date.getHours()
        this.minutes = this.date.getMinutes()
        this.seconds = this.date.getSeconds()

        /*Se añade un 0 si el número es menor de 9, quedando este formato
        00:00.00 */

        if(this.minutes <= 9 ){
          this.minAddCero = '0' + this.minutes
        } else {
          this.minAddCero = this.minutes
        }

        if(this.seconds <= 9) {
          this.secondAddCero = '0' + this.seconds
        } else {
          this.secondAddCero = this.seconds
        }

      },

      createTask(){
        if(this.newTask.text.length <= 0) {
          return
        } else {
          console.log('he llegado')
          this.newTask.id = this.date.getTime()

          this.createTaskAction(this.newTask)
          this.resetNewTask()
          this.showIconPlus = true

        }
        console.log(this.newTask)
        console.log(this.showIconPlus)

      },

     async updateTask(){

        this.updateTaskLocalStorage( this.tasks)
    },

      deleteTask(){
        this.deleteTaskAction(this.tasks)
          console.log(this.tasks)
        console.log(this.$refs)
        return
      },

      resetNewTask(){
        this.newTask = {
          id: '',
          text: '',
          completed: false,
        }
      },

      onLogout(){
        this.$router.push({name: 'login'})
        this.logout()
      },

      updatePhoto(picture){
        const newPhoto = picture
        const data = this.user
        data.photoProfile = newPhoto
        data.idToken = this.currentUser.id
        console.log(data)
        this.updateNewPhotoProfile(data)  
      },

      

    },


    computed: {
      ...mapGetters('auth', ['currentUser']),
      ...mapState('todo',['tasks']),//He borrado el user puede ser que falle algo
      ...mapState('auth',['user'])
      
    },
    created(){
      this.loadLocalStorage()
      /*Se ejecuta para que no aparezca en 0 */
      this.currentDate()

      /*Se ejecuta cada segundo para actualizar la información */
      setInterval(() => {
        this.currentDate()
        
      }, 1000);

    }
   
    
}
</script>

<style scoped>
button {
  width: 200px;
  height: 20px;
}

ul {
  width: 90%;
  min-height: 200px;
  position: relative;
  bottom: .7em;
}


.todo-layout {
  background-color: var(--color-primary);
  width: 100%;
  height: 240px;
  
}
.container-circle {
  display: flex;
}

.circle-left,
.circle-right {
  background-color: white;
  opacity: .5;
  border-radius: 100%;
  width: 173px;
  height: 173px;
  position: relative;
  right: 5em;
  bottom: 2em;
}

.circle-right {
  right: 10.8em;
  bottom: 6em;
}

.container-icon-logout {
  display: inline-block;
  position: relative;
  bottom: 60%;
  left: 90%;
}

.container-icon-logout i {
  font-size: 20px;
}

.container-photo {
  display: flex;
  width: 360px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
  bottom: 7em;
  margin: auto;
}

.container-photo img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
}

.container-photo h1 {
  font-size: 1.2em;
  font-weight: 500;
}

.container-photo span {
  text-transform: capitalize;
}

.container-clock {
  text-align: center;
  font-size: 1.5em;
  position: relative;
  bottom: 4em;
}

.container-clock span {
  background: linear-gradient(0deg,#FEE15B  40%, #FAE68C 60%);
  border-radius: 10px;
  padding: 0 .1em;
}

.title-list {
  font-size: 1.1em;
  margin-left: 7%;
  text-align: start;
  position: relative;
  bottom: 5em;
}

.container-icon-plus-dash {
  display: flex;
  gap: 1em;
  position: absolute;
  width: min-content;
  bottom: 1em;
  right: 1em;
  font-size: 1.3em;
  color: #FFE04F;
  cursor: pointer;
}

.container-task-list {
  width: 90%;
  background-color: #FFFFFF;
  position: relative;
  border-radius: 10px;
  max-height: 240px;
  margin: auto;
  bottom: 5.5em;
  box-shadow: #d2d2d2 1px 3px 5px;
  overflow: scroll;
  overflow-x: hidden;
}

.container-title-icon-plus{
  position: sticky;
  top: 0;
  background-color: #FFFFFF;
  z-index: 1;
  height: 50px;

}

.icon-delete {
  width: min-content;
  color: red;
}

.title-daily-tasks {
  margin: 0;
  font-weight: 600;
  font-size: 1em;
  padding: 1em 0em .3em 1em;
}

.container-list {
  display: flex;
  position: relative;
  right: 1em;
  padding: .4em 0;
}

.task-list li {
  font-size: .9em;
  font-weight: 500;
  list-style: none;
  position: relative;
  bottom: .2em;
  cursor: pointer;
}


.squareCheck {
  min-width: 10px;
  max-height: 10px;
  border: 2px solid black;
  margin-right: .8em;
  cursor: pointer;
}

.completed {
  position: relative;
  text-decoration: line-through #FFD615;
  text-decoration-thickness: 3px;
}

.completed-square {
  background-color: #FFD615;
}

.container-task-list::-webkit-scrollbar{
  width: 10px;

}

.container-task-list::-webkit-scrollbar-thumb{
  border-radius: 10px;
  border: 5px solid #E9E9E9;
}


@media screen and (min-width: 700px) {

  .container-modal{
    margin: auto;
  }

  .container-icon-plus-dash{
    gap: 1.5em;
  }


  .container-task-list{
    min-height: 350px;
    margin-bottom: 1em;
  }


}

@media screen and (min-width:800px) {
  .title-list{
    transform: translateY(50px);
  }

  .container-task-list{
    transform: translateY(20%);
  }
}

@media screen and (min-width: 1280px) {

  .container-ul{
    margin-bottom: 1em;
  }
  .title-list{
    transform: translateY(0px);
  }

  .container-task-list{
    transform: translateY(0%);
    
  }

}
</style>