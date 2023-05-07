<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tag",
  props: ["value"],
});
</script>

<template>
  <span class="badge rounded-pill text-bg-light">{{ value }}</span>
</template>

<style scoped></style>
