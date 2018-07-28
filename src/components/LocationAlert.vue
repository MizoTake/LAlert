<template>
  <div id='locationAlert'>
    <p><input type='text' placeholder='lat'></p>
    <p><input type='text' placeholder='lon'></p>
    <button @click='updateLocation()'>Settings</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LocationAlert',
  methods: {
    updateLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition()
        navigator.geolocation.watchPosition(this.showPosition)
      } else {
        // this.error = 'Geolocation is not supported.'
      }
    },
    showPosition: function (position) {
      // this.lat = position.coords.latitude
      // this.lon = position.coords.longitude
      console.log(position.coords)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
