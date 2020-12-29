<template>

  <div>
    <l-map
      :center="center"
      :zoom="zoom"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :attribution="attribution"
        :url="url"
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
  LRectangle,
  LPolygon,
  LPolyline,
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
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; Torre Insights'
    };
  }
};
</script>
