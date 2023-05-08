<template>
  <div class="tabs is-boxed is-centered">
    <ul>
      <li
        :key="tab.name"
        v-for="tab in tabs.filter((c) => !c.hide)"
        :class="{ 'is-active': selected === tab }"
        style="margin-top: 0.5em"
      >
        <a @click="callback(tab)"
          >{{ tab.name }} ({{ tab.signposts.length }})</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Tab } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Tabs",
  props: {
    selected: {
      type: Object as PropType<Tab>,
      required: true,
    },
    tabs: {
      type: Array as PropType<Tab[]>,
      required: true,
    },
    callback: {
      type: Function as PropType<(tab) => void>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
