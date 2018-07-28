<template>
  <div id='locationAlert'>
    <p><label id='center_label' class="mdl-textfield__label">このサイトは位置情報をONにし、指定の緯度経度と現在地の距離を測ります。<br>現在地が指定の位置の半径5km以内であればスマートフォンを扱いの場合バイブレーションが鳴ります</label></p>
    <p><label id='center_label' class="mdl-textfield__label">Location is: {{ latitude }} {{ longitude }}</label></p>
    <p><label id='center_label' class="mdl-textfield__label">Location distance is: {{ distance }} km</label></p>
    <p><label id='field_label'  class="mdl-textfield__label">latitude</label></p>
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" v-model="inputLat" type='text'>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
    </form>
    <form action="#">
  </form>
  <p><label id='field_label' class="mdl-textfield__label">longitude</label></p>
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield">
        <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" v-model="inputLon" type='text'>
        <span class="mdl-textfield__error">Input is not a number!</span>
      </div>
    </form>
    <p/>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click='updateLocation()'>Settings and start </button>
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
#locationAlert {
  padding: 0px 100px 100px 100px;
  position: relative;
  text-align: center;
}
#center_label {
  padding: 0px 10px 5px 0px;
  position: relative;
  text-align: center;
}
#field_label {
  margin-left: -120px;
  position: relative;
  text-align: center;
}
</style>
