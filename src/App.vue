<script lang="ts">
import Signposts from "./components/Signposts.vue";

export default {
  components: {
    Signposts,
  },
};
</script>

<template>
  <div class="container">
    <header class="px-4 py-5 my-5 text-center text-white">
      <h1 class="display-5 fw-bold text-body-emphasis text-reset">FFXIV Signposts</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          A list of helpful Final Fantasy 14 sites organised by activity.
        </p>
      </div>
    </header>

    <main>
      <Signposts />
    </main>
  </div>
</template>

<style scoped></style>
