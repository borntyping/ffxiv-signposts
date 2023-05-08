<script lang="ts">
import { defineComponent, PropType } from "vue";
import { OldCategory, Signpost } from "@/types";

export default defineComponent({
  name: "SignpostCard",
  props: {
    signpost: Object as PropType<Signpost>,
    categories: Array as PropType<OldCategory[]>,
  },
  computed: {
    tagsWithClasses() {
      return this.categories
        .map((c) =>
          c.tags
            .filter((t) => this.signpost?.hasTag(t))
            .map((t) => ({
              category: c,
              tag: t,
              title: `${c.name} » ${t.name}`,
            }))
        )
        .flat();
    },
  },
});
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
        <p class="block card-text" v-for="paragraph in signpost.desc">
          {{ paragraph }}
        </p>
      </div>
      <div class="block field is-grouped is-grouped-multiline">
        <div
          class="control"
          v-for="{ category, tag, title } in tagsWithClasses"
        >
          <span class="tags has-addons">
            <span
              :class="['tag', ...category.cssClasses, ...tag.cssClasses]"
              :title="title"
              >{{ tag.name }}</span
            >
          </span>
        </div>
        <div class="control" v-if="signpost.complexity !== null">
          <span class="tags has-addons">
            <span class="tag is-dark">Complexity</span>
            <span
              :class="[
                'tag',
                {
                  'is-success': signpost.complexity === 'low',
                  'is-warning': signpost.complexity === 'medium',
                  'is-danger': signpost.complexity === 'high',
                },
              ]"
              >{{ signpost.complexity }}</span
            >
          </span>
        </div>
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
