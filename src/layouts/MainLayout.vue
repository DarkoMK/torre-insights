<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <q-img contain src="~/assets/torre_logo_small.png"></q-img>
        </q-avatar>
        <q-toolbar-title>
          Torre Insights
        </q-toolbar-title>
        <q-btn dense flat href="https://github.com/DarkoMK/torre-insights" icon="fab fa-github" round target="_blank" type="a">
          <q-tooltip>
            View on GitHub
          </q-tooltip>
        </q-btn>
        <q-btn :icon="$q.dark.mode ? 'brightness_7' : 'brightness_4'" dense flat @click="$q.dark.toggle()">
          <q-tooltip>
            Toggle Dark Mode
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data() {
    return {}
  }
}
</script>
