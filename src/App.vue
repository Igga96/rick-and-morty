<template>
  <vHomePage />
</template>

<script>
import vHomePage from './components/v-home-page.vue'

export default {
  name: 'App',
  components: {
    vHomePage
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 18px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
h2{
  font-size: 27px;
  margin: 0;
  line-height: 1.1;
}
</style>
