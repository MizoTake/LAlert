<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><input type="text" placeholder="lat"></p>
    <p><input type="text" placeholder="lon"></p>
    <button @click="updateLocation()">Settings</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data: {
    error: "",
    lat: "",
    lon: ""
  },
  methods: {
    updateLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
        var watchID = navigator.geolocation.watchPosition(function(position) {
          do_something(position.coords.latitude, position.coords.longitude);
        });
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      console.log(position.coords);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
