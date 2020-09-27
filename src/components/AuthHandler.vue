<template>
  <div>
    Please wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    // Suggested Life Cycle method for data loading
    this.finalizeLogin(window.location.hash);
  },
};
</script>

<style></style>
