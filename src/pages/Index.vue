<template>
  <q-page class="flex flex-center">
    <q-btn :loading="loading" color="secondary" icon="settings" style="min-width: 150px" label="Generate" text-color="dark" @click="loading = !loading">
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
