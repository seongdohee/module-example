<template>
  <div id="app">
      {{$store.state}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  created() {
    console.log(this.$store);
    this.$store.dispatch('moduleA/setData', 'test');
  }
}
</script>

