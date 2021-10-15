<template>
  <div class="home">
    <div class="container-drawing">
      <div class="paper">
        <div class="folded-paper"></div>
        <div class="container-tic">
          <div class="tic check">
            <i class="fas fa-check"></i>
          </div>
          <div class="container-bar">
            <div class="bar"></div>
            <div class="bar-long"></div>
          </div>
        </div>
        <div class="container-tic">
          <div class="tic"></div>
          <div class="container-bar">
            <div class="bar"></div>
            <div class="bar-long"></div>
          </div>
        </div>
        <div class="container-tic">
          <div class="tic"></div>
          <div class="container-bar">
            <div class="bar"></div>
            <div class="bar-long"></div>
          </div>
        </div>
      </div>
      <div class="boy-cartoon">
        <img src="../assets/images/boy-check.jpg" alt="">
      </div>
    </div>
    <div class="introduccion">
      <h3>Haga las cosas a tiempo</h3>
      <h4>El día tiene 24 horas, es el momento de llevar un control de las cosas que no debes olvidar hacer en él. Da click en "Empezar"</h4>
    </div>
    <div class="container-button">
      <button @click="routerRegistration()">Empezar</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    routerRegistration(){
      this.$router.push({ name: 'registration' });
    }
  }

}
</script>

<style scoped>

.container-drawing {
  width: max-content;
  height: 200px;
  margin: auto;
}

.paper {
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 4px solid #E6E6E6;
  width: 90px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}


.folded-paper {
  background: linear-gradient(225deg, #F5F5F5 45%, #E6E6E6 45%);
  border-bottom-left-radius: 2px;
  width: 14px;
  height: 10px;
  margin-left: 90%;
  transform: translateY(-4px);
}


.tic {
  background-color: #CCCCCC;
  width: 10px;
  height: 10px;
  border-radius: 100%;
}

.check {
  background-color: #6C63FF;
}

.tic i {
  color: #FFF;
  position: relative;
  font-size: 5px;
  bottom: 2em;
  left: .5em;
}
.container-tic {
  display: flex;
  gap: .5em;
  justify-content: center;
  align-items: center;
  position: relative;
}

.bar,
.bar-long {
  background-color: #CCCCCC;
  border-radius: 10px;
  width: 50px;
  height: 3px;
  margin-bottom: .1em;
}

.bar {
  width: 40px;
}

.boy-cartoon {
  width: 100px;
  position: relative;
  bottom: 4.5em;
  right: 2em;
}

.introduccion {
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  width: 210px;
}

.introduccion h3 {
  font-size: 1em;
  
}

.introduccion h4 {
  font-size: .7em;
  font-weight: 500;
}

.container-button {
  text-align: center;
  margin: 1.5em 0;
}

.container-button button {
  width: 200px;
  height: 40px;
  background-color: #FFD615;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}

.container-button button:active {
  background-color: #FAE78C;
}


</style>
