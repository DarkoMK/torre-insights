<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <q-drawer v-model="rightDrawer" bordered show-if-above side="right">
      <q-list separator>
        <q-expansion-item
          default-opened
          expand-separator
          icon="folder_shared"
          label="Developer Statistics"
        >
          <q-item v-ripple :inset-level="1" clickable>
            <q-item-section avatar>
              <q-icon name="map"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Map</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple :inset-level="1" clickable>
            <q-item-section avatar>
              <q-icon name="recent_actors"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Developer Roles</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple :inset-level="1" clickable>
            <q-item-section avatar>
              <q-icon name="military_tech"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Experience</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Header from "components/Header";

export default {
  name: 'InsightsLayout',
  components: {
    Header
  },
  data() {
    return {
      rightDrawer: true
    }
  }
}
</script>
