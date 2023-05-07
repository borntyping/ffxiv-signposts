<script lang="ts">
import {defineComponent} from "vue";
import {Category, Signpost, Tag} from "@/types";
import SignpostCard from "@/components/SignpostCard.vue";
import CATEGORIES from "@/categories";
import SIGNPOSTS from "@/signposts";

export default defineComponent({
  data() {
    return {
      signposts: SIGNPOSTS.sort(),
      categories: CATEGORIES,
      tags: CATEGORIES.map((c) => c.tags).flat(),
      selectedCategory: CATEGORIES[0],
      selectedTag: null as Tag | null,
    };
  },
  components: {
    SignpostCard,
  },
  methods: {
    selectCategory(category: Category): void {
      console.debug("Selected category", category);
      this.selectedCategory = category;
      this.selectedTag = null;
    },
    selectTag(tag: Tag): void {
      console.debug("Selected tag", tag);
      this.selectedTag = tag;
    },
    selectSignposts(): Signpost[] {
      if (this.selectedCategory.all) {
        return this.signposts;
      }

      console.debug(
          "Selecting signposts in category",
          this.selectedCategory!.name
      );
      let inCategory = this.signposts.filter((s) =>
          s.hasAnyTag(this.selectedCategory!.tags)
      );

      if (this.selectedTag === null) {
        return inCategory;
      }
      console.debug(
          "Selecting signposts in category and tag",
          this.selectedCategory!.name,
          this.selectedTag!.name
      );
      return inCategory.filter((s) => s.hasTag(this.selectedTag!));
    },
  },
});
</script>

<template>
  <header class="hero is-link">
    <div class="hero-body">
      <h1 class="title is-1">FFXIV Signposts</h1>
      <p class="subtitle is-5">
        A list of helpful Final Fantasy 14 sites organised by activity. </p>
    </div>
    <div class="hero-foot">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li v-for="category in categories.filter((c) => c.display)" :class="{ 'is-active': selectedCategory === category }">
            <a @click="selectCategory(category)">{{ category.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <header class="hero is-info">
    <div class="hero-foot">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li :key="tag.name" v-for="tag in selectedCategory?.tags" :class="{ 'is-active': selectedTag === tag }" style="margin-top: 0.5em">
            <a @click="selectTag(tag)">{{ tag.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main class="section">
    <div class="columns is-multiline is-centered">
      <TransitionGroup name="list">
        <div :key="signpost.name" class="column is-6-desktop is-4-widescreen is-2-fullhd" v-for="signpost in selectSignposts()">
          <SignpostCard :signpost="signpost" :categories="categories"/>
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
