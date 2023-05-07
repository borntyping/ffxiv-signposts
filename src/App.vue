<script lang="ts">
import { defineComponent } from "vue";
import data from "@/assets/signposts.json";
import { Signpost, Tag } from "@/types";
import SignpostCard from "@/components/SignpostCard.vue";

const cssClassesEvents = ['is-info', 'is-light']
const cssClassesCombat = ['is-danger', 'is-light']
const cssClassesCrafting = ['is-success', 'is-light']

const tags = [
  // Meta
  new Tag('all', "All"),
  new Tag('guides', 'Guides', ['is-link', 'is-light']),
  // Events
  new Tag('events', "Events", cssClassesEvents),
  new Tag('daily', "Daily quests", cssClassesEvents),
  new Tag('weekly', "Weekly quests", cssClassesEvents),
  new Tag('squadrons', "Squadrons", cssClassesEvents),
  // DoW/DoM
  new Tag('hunting', "Hunts", cssClassesCombat),
  // DoH/DoL
  new Tag('crafting', "Crafting", cssClassesCrafting),
  new Tag('gathering', "Gathering", cssClassesCrafting),
  new Tag('fishing', "Fishing", cssClassesCrafting),
  // Other activities
  new Tag('housing', "Housing"),
  new Tag('mgp', 'Golden Saucer'),
];

const tagMap = new Map(tags.map(t => [t.id, t]));

const signposts = data.map((obj) => {
  return new Signpost({
    ...obj,
    tags: tags.filter(t => obj.tags.includes(t.id)),
  });
});

export default defineComponent({
  data() {
    return {
      tags: tags,
      selectedTag: 'all',
      signposts: signposts,
    };
  },
  components: {
    SignpostCard,
  },
  methods: {
    selectTag(id) {
      this.selectedTag = id;
      if (id === "all") {
        this.signposts = signposts;
      } else {
        this.signposts = signposts.filter((s) => s.tags.map(t => t.id).includes(id));
      }
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
      <p>Selected tag: <code>{{ JSON.stringify({selectedTag: selectedTag}) }}</code></p>
    </div>
    <div class="hero-foot">
      <div class="tabs is-boxed is-centered">
        <ul>
          <li
            v-for="tag in tags"
            :class="{ 'is-active': selectedTag === tag.id }"
          >
            <a @click="selectTag(tag.id)">{{ tag.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main class="section">
    <div class="columns is-multiline is-centered">
      <div class="column is-one-quarter" v-for="signpost in signposts">
        <SignpostCard :signpost="signpost" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
