<script lang="ts">
import { defineComponent } from "vue";

import signposts from "@/assets/signposts.json";
import Signpost from "@/components/Signpost.vue";
import Tag from "@/components/Tag.vue";
import { SignpostData } from "@/types";

export default defineComponent({
  data() {
    return {
      signposts: signposts as SignpostData[],
      tags: new Array(...new Set(signposts.map((s) => s.tags).flat())).sort(),
    };
  },
  components: {
    Tag,
    Signpost,
  },
});
</script>

<template>
  <div class="grid">
    <div class="g-col-4" v-for="signpost in signposts">
      <Signpost :signpost="signpost" />
    </div>
  </div>
</template>
