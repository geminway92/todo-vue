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
  <div class="todo-layout">
    <div class="container-circle">
      <div class="circle-left"></div>
      <div class="circle-right"></div>
    </div>
    <div class="container-icon-logout">
      <i class="fas fa-sign-out-alt"></i>
    </div>
    <div class="container-photo">
      <img :src="currentUser.photoProfile" alt="">
      <h1>¡Bienvenido/a <span>{{currentUser.name}}!</span></h1>
    </div>
    <div class="container-clock">
      <h1><span>{{hours}}</span>: <span>{{minAddCero}}</span>: <span>{{secondAddCero}}</span></h1>
    </div>
    <h1 class="title-list">Lista de Tareas</h1>
    <div class="container-task-list">
      <h5 class="title-daily-tasks">Tareas Diarias</h5>
      
      <div @click="showIconPlus = !showIconPlus" class="container-icon-plus">
        <i class="far fa-plus-square"></i>
      </div>

      <ul class="task-list">
        <div v-for="task in tasks" :key="task.id" 
          class="container-list"
          @click="task.completed = !task.completed">
          <div 
            class="squareCheck"
            :class="{'completed-square' : task.completed }">
            </div>
          <li
            :class="{'completed': task.completed }">
            {{task.text}}
            </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import NewTaskModal from '../components/NewTaskModal.vue'


export default {
    name: 'todolayaout',
    components: {
      NewTaskModal,
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
        newTask: {
          id: '',
          text: '',
          completed: false,
        }
      }
    },
    methods: {
      ...mapActions('todo',['createTaskAction']),

      openModal(){
        this.showIconPlus = !this.showIconPlus
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

      resetNewTask(){
        this.newTask = {
          id: '',
          text: '',
          completed: false,
        }
      }
    },


    computed: {
      ...mapGetters('auth', ['currentUser']),
      ...mapState('todo',['tasks'])
      
    },
    created(){
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
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
  bottom: 7em;
}

.container-photo img {
  width: 25%;
  border-radius: 100%;

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

.container-icon-plus {
  width: min-content;
  position: absolute;
  bottom: 83%;
  left: 90%;
  font-size: 1.2em;
  color: #FFE04F;
  cursor: pointer;
}

.container-task-list {
  background-color: #FFFFFF;
  position: relative;
  border-radius: 10px;
  width: 90%;
  height: 220px;
  margin: auto;
  bottom: 5.5em;
  box-shadow: #d2d2d2 1px 3px 5px;
  overflow: scroll;
}


.title-daily-tasks {
  position: relative;
  margin: 0;
  font-weight: 600;
  font-size: 1em;
  padding: 1em 0em .3em 1em;
}

.container-list {
  width: max-content;
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
  width: 10px;
  height: 10px;
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

</style>