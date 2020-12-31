<template>
  <div>
    <l-map
      :center="center"
      :maxBounds="maxBounds"
      :maxBoundsViscosity="maxBoundsViscosity"
      :minZoom="minZoom"
      :zoom="zoom"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :attribution="attribution"
        :url="$q.dark.mode ? darkLayerUrl : lightLayerUrl"
      />
      <l-circle
        v-for="c in $store.state.insights.data.map"
        :key="c.name"
        :lat-lng="c.center"
        :radius="c.radius*10000"
      >
        <l-popup :content="c.name"/>
      </l-circle>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LCircle,
  LPopup,
} from "vue2-leaflet";
import {latLng, latLngBounds} from "leaflet";
import 'leaflet/dist/leaflet.css';

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LPopup,
  },
  data() {
    return {
      zoom: 3,
      minZoom: 1,
      maxBounds: latLngBounds(latLng(-89.98155760646617, -180), latLng(89.99346179538875, 180)),
      maxBoundsViscosity: 0,
      center: [47.31322, -1.319482],
      lightLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      darkLayerUrl: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
      attribution: '&copy; Torre Insights'
    };
  }
};
</script>
