import { Signpost } from "./types";
import type { PartialCategory, PartialTag, Category, Tag } from "./types";

import SIGNPOSTS from "@/signposts";

class Factory {
  constructor(readonly signposts: Signpost[]) {}

  category(category: PartialCategory): Category {
    let signposts = this.signposts.filter(
      (s) => category.all || s.hasAnyTag(category.tags ?? [])
    );
    let tags: Tag[] = (category.tags ?? []).map((tag) => {
      return this.tag(tag, signposts);
    });

    return {
      name: category.name,
      cssClasses: category.cssClasses ?? [],
      all: category.all ?? false,
      hide: category.hide ?? false,
      tags: [this.all(signposts), ...tags],
      signposts: signposts.sort(),
    };
  }

  tag(tag: PartialTag, signposts: Signpost[]): Tag {
    return {
      id: tag.id,
      name: tag.name,
      cssClasses: tag.cssClasses ?? [],
      all: tag.all ?? false,
      hide: tag.hide ?? false,
      signposts: signposts.filter((s) => s.hasTag(tag)).sort(),
    };
  }

  all(signposts: Signpost[]): Tag {
    return {
      id: "all",
      name: "All",
      cssClasses: [],
      all: true,
      hide: false,
      signposts: signposts,
    };
  }
}

const factory = new Factory(SIGNPOSTS);

export default [
  factory.category({ name: "All", all: true, tags: [] }),
  factory.category({
    name: "Meta",
    tags: [{ id: "official", name: "Official" }],
    hide: true,
  }),
  factory.category({
    name: "Reference",
    tags: [
      { id: "guide", name: "Guides" },
      { id: "database", name: "Database" },
      { id: "wiki", name: "Wiki" },
      { id: "weather", name: "Weather" },
    ],
    cssClasses: ["is-link", "is-light"],
  }),
  factory.category({
    name: "Dailies and Weeklies",
    tags: [
      { id: "events", name: "Special Events" },
      { id: "daily", name: "Daily quests" },
      { id: "weekly", name: "Weekly quests" },
      { id: "levequests", name: "Levequests" },
      { id: "squadrons", name: "Squadrons" },
    ],
    cssClasses: ["is-info", "is-light"],
  }),
  factory.category({
    name: "Disciples of War and Magic",
    tags: [
      { id: "hunts", name: "Hunts" },
      { id: "hunting-log", name: "Hunting Log" },
      { id: "fates", name: "FATEs" },
      { id: "pve-guide", name: "PvE Guides" },
      { id: "pvp-guide", name: "PvP Guides" },
    ],
    cssClasses: ["is-danger", "is-light"],
  }),
  factory.category({
    name: "Disciples of the Hand and Land",
    tags: [
      { id: "crafting", name: "Crafting" },
      { id: "gathering", name: "Gathering" },
      { id: "fishing", name: "Fishing" },
      { id: "crafting-log", name: "Crafting Log" },
      { id: "fishing-log", name: "Fishing Log" },
    ],
    cssClasses: ["is-success", "is-light"],
  }),
  factory.category({
    name: "Exploration",
    tags: [
      { id: "maps", name: "Maps" },
      { id: "aether-currents", name: "Aether currents" },
      { id: "treasure-maps", name: "Treasure Maps" },
      { id: "sightseeing-log", name: "Sightseeing Log" },
    ],
  }),
  factory.category({
    name: "Golden Saucer",
    tags: [
      { id: "chocobo-racing", name: "Chocobo Racing" },
      { id: "fashion-report", name: "Fashion Report" },
      { id: "gates", name: "GATEs" },
      { id: "lord-of-verminion", name: "Lord of Verminion" },
      { id: "triple-triad", name: "Triple Triad" },
    ],
    cssClasses: ["is-light", "is-warning"],
  }),
  factory.category({
    name: "Other activities",
    tags: [
      { id: "glamour", name: "Glamour" },
      { id: "housing", name: "Housing" },
      { id: "chocobo-raising", name: "Chocobo Raising" },
      { id: "island-sanctuary", name: "Island Sanctuary" },
      { id: "marketboard", name: "Marketboard" },
      { id: "relics", name: "Relics" },
    ],
  }),
];
