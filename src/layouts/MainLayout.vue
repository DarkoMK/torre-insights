<template>
  <q-layout view="hHh lpR fFf">
    <t-header></t-header>
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
    't-header': Header
  },
  data() {
    return {}
  }
}
</script>
