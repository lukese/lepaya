<template>
  <div>
    <service-provider
      v-on:nextStage="nextStage"
    />
  </div>
</template>

<script>
import ServiceProvider from '@/components/ServiceProvider';

export default {
  name: 'App',
  components: {
    ServiceProvider,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
