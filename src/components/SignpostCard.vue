<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Signpost} from "@/types";

export default defineComponent({
  name: "SignpostCard",
  props: {
    signpost: Object as PropType<Signpost>,
  },
  errorCaptured(err, vm, info) {
    console.error(err)
  }
});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="block">
        <h3 class="title is-5">
          <a :href="signpost.link">{{ signpost.name }}</a>
        </h3>
        <h4 class="subtitle is-5">
          <a :href="signpost.link">{{ signpost.domain }}</a>
        </h4>
        <p class="card-text">{{ signpost.desc }}</p>
      </div>
      <div class="block tags">
        <span v-for="tag in signpost.tags" :class="['tag', tag.cssClasses]">{{ tag.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 100%;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
