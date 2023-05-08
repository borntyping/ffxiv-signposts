<script lang="ts">
import { defineComponent } from "vue";
import { Category, Tag, Signpost } from "@/types";
import SignpostCard from "@/components/SignpostCard.vue";
import categories from "@/definitions";
import signposts from "@/signposts";

// TODO: Make tags clickable by passing tag() to SignPostCard.
// TODO: More ideas: per tag comment explaining what the site can do for that tag, more info drop-down on long text

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
      signposts: signposts.sort(),
      categories: categories,
      selectedCategory: category,
      selectedTag: tag,
    };
  },
  watch: {
    selectedCategory(value: Category, oldValue) {
      window.sessionStorage.setItem(CATEGORY, value.name);
    },
    selectedTag(value: Tag, oldValue) {
      window.sessionStorage.setItem(TAG, value.name);
    },
  },
  components: {
    SignpostCard,
  },
  methods: {
    tab(category: Category, tag: Tag) {
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
      <div class="tabs is-boxed is-centered">
        <ul>
          <li
            v-for="category in categories.filter((c) => !c.hide)"
            :class="{ 'is-active': selectedCategory === category }"
          >
            <a @click="tab(category, category.tags[0])"
              >{{ category.name }} ({{ category.signposts.length }})</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <header class="hero is-info" v-if="!selectedCategory.all">
    <div class="hero-foot">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li
            :key="tag.name"
            v-for="tag in selectedCategory.tags.filter((c) => !c.hide)"
            :class="{ 'is-active': selectedTag === tag }"
            style="margin-top: 0.5em"
          >
            <a @click="tab(selectedCategory, tag)"
              >{{ tag.name }} ({{ tag.signposts.length }})</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main class="section">
    <div class="columns is-multiline is-centered">
      <TransitionGroup name="list">
        <div
          :key="signpost.name"
          class="column is-6-desktop is-4-widescreen is-2-fullhd"
          v-for="signpost in selectedTag.signposts"
        >
          <SignpostCard :signpost="signpost" :categories="categories" />
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
