<template>

  <div>
    <l-map
      :center="center"
      :zoom="zoom"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :attribution="attribution"
        :url="$q.dark.mode ? darkLayerUrl : lightLayerUrl"
      />
      <l-circle
        :lat-lng="circle.center"
        :radius="circle.radius"
      >
        <l-popup content="Circle"/>
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
import {latLng} from "leaflet";
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
      center: [47.31322, -1.319482],
      circle: {
        center: latLng(47.41322, -1.0482),
        radius: 4500
      },
      lightLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      darkLayerUrl: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; Torre Insights'
    };
  }
};
</script>
