<template>
  <q-header>
    <q-toolbar>
      <q-avatar>
        <router-link :to="{name: 'home'}" class="no-decoration">
          <q-img alt="Torre Insights" contain src="~/assets/torre_logo_hero.png" width="36px"></q-img>
        </router-link>
      </q-avatar>
      <q-toolbar-title>
        <router-link :to="{name: 'home'}" class="no-decoration">Torre Insights</router-link>
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
</template>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: inherit;
}
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  }
}
</script>
