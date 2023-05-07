<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Category, Signpost, Tag } from "@/types";

export default defineComponent({
  name: "SignpostCard",
  props: {
    signpost: Object as PropType<Signpost>,
    categories: Array as PropType<Category[]>,
  },
  computed: {
    tagsWithClasses() {
      return this.categories
        .map((c) =>
          c.tags
            .filter((t) => this.signpost?.hasTag(t))
            .map((t) => ({
              cssClasses: c.cssClasses,
              tagName: t.name,
            }))
        )
        .flat();
    },
  },
});

const tagsWithClasses = computed(() => {});
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="block">
        <h3 class="title is-4">
          <a :href="signpost.link">{{ signpost.name }}</a>
        </h3>
        <h4 class="subtitle is-6">
          <a :href="signpost.link">{{ signpost.domain }}</a>
        </h4>
        <p class="card-text">{{ signpost.desc }}</p>
      </div>
      <div class="block tags">
        <span
          v-for="({ cssClasses, tagName }, index) in tagsWithClasses"
          :class="['tag', cssClasses]"
          >{{ tagName }}</span
        >
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
