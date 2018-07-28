<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Lat = {{lat}} Lon ={{lon}}</p>
    <p>{{error}}</p>
    <button @click="myFunction()">Click Me</button>
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
    myFunction() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
      // this.$getLocation(options).then(coordinates => {
      //   console.log(coordinates);
      // });
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
