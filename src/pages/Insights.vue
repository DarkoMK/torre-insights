<template>
  <div>
    <q-page padding>
      <q-card bordered>
        <q-card-section>
          <div class="text-h5">Developer Statistics</div>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          Get familiar with the type of developers that are using Torre for their professional growth. Check out which developer roles are most present and their most loved technologies.
        </q-card-section>
        <q-separator inset/>
        <q-card-section class="q-gutter-x-md">
          <q-btn :label="$store.state.insights.data.total + ' profile(s) analysed'" no-caps outline size="lg"/>
          <q-btn :label="$store.state.insights.data.map.length + ' have known location'" no-caps outline size="lg"/>
        </q-card-section>
        <q-separator inset/>
        <q-card-section>
          <div class="text-h6">Map</div>
          <t-map></t-map>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import Map from "components/Map";

export default {
  name: 'Insights',
  components: {
    't-map': Map
  },
  data() {
    return {}
  }
}
</script>
