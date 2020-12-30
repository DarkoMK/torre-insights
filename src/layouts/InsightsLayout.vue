<template>
  <q-layout view="hHh lpR fFf">
    <t-header></t-header>
    <q-drawer v-model="rightDrawer" bordered show-if-above side="right">
      <q-list>
        <q-item v-ripple :to="{name: 'home'}" clickable exact>
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Main Page</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item
          default-opened
          expand-separator
          icon="folder_shared"
          label="Developer Statistics"
        >
          <q-item v-ripple :inset-level="1" clickable @click="scrollTo('map')">
            <q-item-section avatar>
              <q-icon name="map"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Map</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple :inset-level="1" clickable @click="scrollTo('remoter')">
            <q-item-section avatar>
              <q-icon name="work"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Remote work</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple :inset-level="1" clickable @click="scrollTo('compensations')">
            <q-item-section avatar>
              <q-icon name="attach_money"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Compensation Range</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-ripple :inset-level="1" clickable @click="scrollTo('skills')">
            <q-item-section avatar>
              <q-icon name="military_tech"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Skills</q-item-label>
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
import {scroll} from 'quasar'

const {setScrollPosition, getScrollPosition} = scroll

export default {
  name: 'InsightsLayout',
  components: {
    't-header': Header
  },
  data() {
    return {
      rightDrawer: true
    }
  },
  methods: {
    scrollTo(id) {
      let el = document.getElementById(id)
      const {top} = el.getBoundingClientRect()
      const offset = Math.max(0, getScrollPosition(window) + top - 66)
      setScrollPosition(window, offset, 300)
    }
  },
  created() {
    this.$root.$on('toggle_right_drawer', () => {
      this.rightDrawer = !this.rightDrawer
    })
  }
}
</script>
