<script lang="ts">
import { Category, Signpost, Tag } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SignpostCard",
  props: {
    signpost: {
      type: Object as PropType<Signpost>,
      required: true,
    },
    categories: {
      type: Array as PropType<Category[]>,
      required: true,
    },
    switchTab: {
      type: Function as PropType<(category: Category, tag: Tag) => void>,
      required: true,
    },
  },
  computed: {
    signpostTags: function () {
      return this.signpost.desc.map(({ tags, text }) => {
        return {
          tags: this.categories
            .map((category) =>
              category.tags
                .filter((tag) => tags.includes(tag.id))
                .map((tag) => ({
                  category: category,
                  tag: tag,
                  title: `${category.name} » ${tag.name}`,
                }))
            )
            .flat(),
          text: text,
        };
      });
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
        <div class="block card-text">
          <p class="app-description" v-for="{ tags, text } in signpostTags">
            <span
              class="tags"
              style="display: inline !important; margin-right: 0.5rem"
            >
              <a
                v-for="{ category, tag, title } in tags"
                :class="[
                  'tag',
                  ...(category.cssClasses ?? []),
                  ...tag.cssClasses,
                ]"
                :title="title"
                @click="switchTab(category, tag)"
                >{{ tag.name }}</a
              >
            </span>
            <span>{{ text }}</span>
          </p>
        </div>
      </div>
      <div class="block field is-grouped is-grouped-multiline">
        <div class="control" v-if="signpost.complexity">
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
        <div class="control" v-if="signpost.official">
          <span class="tags has-addons">
            <span class="tag is-link">Official</span>
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

.app-description:not(:last-child) {
  margin-bottom: 1.5rem;
}

p .tags .tag {
  margin-bottom: unset;
}
</style>
