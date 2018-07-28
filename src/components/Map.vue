<template>
  <div
      id="map">
    <GmapMap
        :center="{lat:33.794605, lng:130.528584}"
        :zoom="17"
        map-type-id="terrain"
        :style="{width: mapWidth + 'px',height: mapHeight + 'px'}">
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
    </GmapMap>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      mapHeight: window.innerHeight,
      mapWidth: window.innerWidth
    };
  },
  created() {
    this.mapWidth = window.innerWidth;
    this.mapHeight = window.innerHeight;
  }
};
</script>

<style>
#map {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
