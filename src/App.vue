<template>
  <div id="nav">
    <div class="container-circle">
        <div class="circle-left"></div>
        <div class="circle-right"></div>

      </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  
  margin: 0;
}

.container-circle {
  display: flex;
}

.circle-left,
.circle-right {
  background-color: #FCDF54;
  opacity: .6;
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
</style>
