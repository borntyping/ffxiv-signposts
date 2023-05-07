<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Signpost",
  props: ["signpost"],
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <a href="{{ signpost.link }}">{{ signpost.name }}</a>
      </h5>
      <p class="card-text">{{ signpost.desc }}</p>
      <div>
        <span
          v-for="tag in signpost.tags"
          class="badge rounded-pill text-bg-light"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>
