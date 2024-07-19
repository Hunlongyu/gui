<template>
  <n-config-provider>
    <n-message-provider>
      <Layout></Layout>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import Layout from './components/layout.vue';
</script>

<style lang="scss" scoped>
html,
body,
#app,
.n-config-provider {
  height: 100%;
}

.container {
  height: 100%;

  .n-layout-scroll-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
