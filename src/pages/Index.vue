<template>
  <q-page class="flex flex-center no-wrap column q-gutter-md">
    <q-img contain src="~/assets/torre_logo_small.png" style="width: 67px"></q-img>
    <div class="text-h5 text-center">Get insights on demographics, technologies, salaries directly from Torre's diverse database</div>
    <div class="text-h6 text-center">Press on "Generate" to get the latest Torre insights</div>
    <q-select
      v-model="org"
      :color="$q.dark.mode ? 'white':'dark'"
      :disable="loading"
      :loading="loadingOrgResults"
      :options="options"
      clearable
      input-debounce="1000"
      label="Select Organization"
      option-label="name"
      outlined
      use-input
      @filter="filterFn"
    >
      <template v-slot:prepend>
        <q-icon name="business" @click.stop/>
      </template>
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            No results
          </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-btn :disable="!org" :loading="loading" color="secondary" icon="settings" label="Generate" style="min-width: 150px" text-color="dark" @click="generateData">
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
      loading: false,
      org: {name: 'Torre Labs'},
      options: [{name: 'Torre Labs'}],
      loadingOrgResults: false
    }
  },
  methods: {
    generateData() {
      this.loading = true
      this.$axios.get('insights/' + this.org.name)
        .then(r => {
          this.$store.commit("insights/updateInsightsState", r.data)
          this.$router.push({name: 'insights'})
        })
        .catch(e => {
          // error handling
          this.$q.notify({
            type: 'negative',
            message: 'An error occurred. Please try again later.'
          })
          this.loading = false
        })
    },
    filterFn(val, update) {
      if (val === '') {
        update(() => {
        })
        return
      }
      update(() => {
        this.loadingOrgResults = true
        const needle = val.toLowerCase()
        this.$axios.get('organizations/' + needle)
          .then(r => {
            this.options = r.data
            this.loadingOrgResults = false
          })
          .catch(e => {
            // error handling
            this.$q.notify({
              type: 'negative',
              message: 'An error occurred. Please try again later.'
            })
            this.loadingOrgResults = false
          })
        // get from api
      })
    }
  }
}
</script>
