<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import { defineComponent } from "vue";
import { Category, Tag } from "@/types";
import SignpostCard from "@/components/SignpostCard.vue";
import categories from "@/definitions";

const CATEGORY = "category";
const TAG = "tag";

export default defineComponent({
  data() {
    const categoryName = window.sessionStorage.getItem(CATEGORY);
    const tagName = window.sessionStorage.getItem(TAG);

    const category: Category =
      categories.filter((c) => c.name === categoryName)[0] ?? categories[0];
    const tag: Tag =
      category.tags.filter((t) => t.name === tagName)[0] ?? category.tags[0];

    return {
      categories: categories,
      selectedCategory: category,
      selectedTag: tag,
    };
  },
  watch: {
    selectedCategory(value: Category, _: Category): void {
      window.sessionStorage.setItem(CATEGORY, value.name);
    },
    selectedTag(value: Tag, _: Tag): void {
      window.sessionStorage.setItem(TAG, value.name);
    },
  },
  components: {
    Tabs,
    SignpostCard,
  },
  methods: {
    switchTab(category: Category, tag: Tag) {
      this.selectedCategory = category;
      this.selectedTag = tag;
    },
  },
});
</script>

<template>
  <header class="hero is-link">
    <div class="hero-body">
      <h1 class="title is-1">FFXIV Signposts</h1>
      <p class="subtitle is-5">
        A list of helpful Final Fantasy 14 sites organised by activity.
      </p>
    </div>
    <div class="hero-foot">
      <Tabs
        :callback="(t) => switchTab(t, t.tags[0])"
        :tabs="categories"
        :selected="selectedCategory"
      />
    </div>
  </header>
  <header class="hero is-info" v-if="!selectedCategory.all">
    <div class="hero-foot">
      <Tabs
        :callback="(t) => switchTab(selectedCategory, t)"
        :tabs="selectedCategory.tags"
        :selected="selectedTag"
      />
    </div>
  </header>
  <main class="section">
    <div class="columns is-multiline is-centered">
      <TransitionGroup name="list">
        <div
          :key="signpost.name"
          v-for="signpost in selectedTag.signposts"
          class="column is-6-desktop is-4-widescreen is-2-fullhd"
        >
          <SignpostCard
            :signpost="signpost"
            :categories="categories"
            :switchTab="switchTab"
          />
        </div>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
/* apply transition to moving elements */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
