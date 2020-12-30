<template>
  <div>
    <q-page padding>
      <q-card bordered>
        <q-card-section>
          <div class="text-h5">Organizational Statistics</div>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          Get familiar with the type of developers that are using Torre for their professional growth. Check out which developer roles are most present and their most loved technologies.
        </q-card-section>

        <q-separator inset/>

        <q-card-section class="q-gutter-x-md q-gutter-y-sm">
          <q-btn :label="$store.state.insights.data.total + ' profile(s) analysed'" no-caps outline size="lg" style="width: 250px"/>
          <q-btn :label="$store.state.insights.data.map.length + ' locations found'" color="secondary" no-caps outline size="lg" style="width: 250px"/>
        </q-card-section>

        <q-separator inset/>
        <q-card-section>

          <div class="text-h6">Map</div>
          <t-map></t-map>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h6">People willing to work remotely</div>
          <pie-chart :data="$store.state.insights.data.remoter.data" :labels="$store.state.insights.data.remoter.labels"></pie-chart>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h6">Stated compensations statistics</div>
          <horizontal-bar-chart :data="$store.state.insights.data.compensationrange.data" :labels="$store.state.insights.data.compensationrange.labels"></horizontal-bar-chart>
        </q-card-section>

        <q-separator inset/>

        <q-card-section>
          <div class="text-h6">Skills available in the organization</div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import Map from "components/Map";
import PieChart from "components/Charts/PieChart";
import HorizontalBarChart from "components/Charts/HorizontalBarChart";

export default {
  name: 'Insights',
  components: {
    't-map': Map,
    PieChart,
    HorizontalBarChart
  },
  data() {
    return {}
  }
}
</script>
