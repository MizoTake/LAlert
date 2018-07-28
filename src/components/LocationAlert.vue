<template>
  <div id='locationAlert'>
    <p>Location is: {{ latitude }} {{ longitude }}</p>
    <p>Location distance is: {{ distance }} km</p>
    <p>latitude</p>
    <p><input v-model="inputLat" type='text' placeholder='latitude'></p>
    <p>longitude</p>
    <p><input v-model="inputLon" type='text' placeholder='longitude'></p>
    <button @click='updateLocation()'>Settings and start </button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LocationAlert',
  data: function () {
    return {
      latitude: 0,
      longitude: 0,
      inputLat: 33.794468,
      inputLon: 130.528826,
      onekmIsLongitude: 0.0090133729745762,
      onekmIsLatitude: 0.010966404715491394,
      distance: 0
    }
  },
  methods: {
    updateLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.updatePosition)
        navigator.geolocation.watchPosition(this.updatePosition)
      } else {
        // this.error = 'Geolocation is not supported.'
      }
    },
    updatePosition: function (position) {
      this.latitude = position.coords.latitude
      this.longitude = position.coords.longitude
      var disLat = this.latitude - this.inputLat
      var disLon = this.longitude - this.inputLon
      disLat /= this.onekmIsLatitude
      disLon /= this.onekmIsLongitude
      disLat *= disLat
      disLon *= disLon
      this.distance = Math.sqrt(disLat + disLon)
      if (this.distance < 5.0) {
        navigator.vibrate(3000)
      }
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
