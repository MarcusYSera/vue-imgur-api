<template>
  <div>
    <img
      v-for="image in allImages"
      v-bind:src="image.link"
      v-bind:key="image.id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  // life cycle method
  created() {
    this.fetchImages();
  },
};
</script>

<style></style>
