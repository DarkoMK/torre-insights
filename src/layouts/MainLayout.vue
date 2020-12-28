<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
</style>

<script>
import Header from "components/Header";

export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>
