<template>
  <q-page class="flex flex-center no-wrap column q-gutter-md">
    <q-img contain src="~/assets/torre_logo_small.png" style="width: 67px"></q-img>
    <div class="text-h5 text-center text-grey-13">Get insights on demographics, technologies, salaries directly from Torre's diverse database</div>
    <div class="text-h6 text-center text-grey-13">Press on "Generate" to get the latest Torre insights</div>
    <q-btn :loading="loading" color="secondary" icon="settings" label="Generate" style="min-width: 150px" text-color="dark" @click="loading = !loading">
      <template v-slot:loading>
        <q-spinner-gears class="on-left"/>
        Processing...
      </template>
    </q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      loading: false
    }
  },
}
</script>
