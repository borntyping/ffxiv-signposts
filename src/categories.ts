import { Category, Tag } from "./types";

export default [
  new Category("All", [], [], true, true),
  new Category(
    "Meta",
    [new Tag("official", "Official")],
    ["is-info", "is-dark"],
    false
  ),
  new Category(
    "Reference",
    [
      new Tag("all", "All", [], true, true),
      new Tag("guides", "Guides"),
      new Tag("database", "Databases"),
      new Tag("wiki", "Wikis"),
      new Tag("completion", "Completion"),
      new Tag("weather", "Weather"),
    ],
    ["is-link", "is-light"]
  ),
  new Category(
    "Dailies and Weeklies",
    [
      new Tag("all", "All", [], true, true),
      new Tag("events", "Special Events"),
      new Tag("daily", "Daily quests"),
      new Tag("weekly", "Weekly quests"),
      new Tag("squadrons", "Squadrons"),
    ],
    ["is-info", "is-light"]
  ),
  new Category(
    "DoW/DoM",
    [
      new Tag("all", "All", [], true, true),
      new Tag("combat-guides", "Guides"),
      new Tag("hunting", "Hunts"),
    ],
    ["is-danger", "is-light"]
  ),
  new Category(
    "DoH/DoL",
    [
      new Tag("all", "All", [], true, true),
      new Tag("crafting", "Crafting"),
      new Tag("gathering", "Gathering"),
      new Tag("fishing", "Fishing"),
    ],
    ["is-success", "is-light"]
  ),
  new Category("Exploration", [
    new Tag("all", "All", [], true, true),
    new Tag("maps", "Maps"),
    new Tag("aether-currents", "Aether currents"),
    new Tag("treasure-maps", "Treasure Maps"),
  ]),
  new Category("Logs", [
    new Tag("all", "All", [], true, true),
    new Tag("crafting-log", "Crafting Log"),
    new Tag("fishing-log", "Fishing Log"),
    new Tag("hunting-log", "Hunting Log"),
    new Tag("sightseeing-log", "Sightseeing Log"),
  ]),
  new Category("Other activities", [
    new Tag("all", "All", [], true, true),
    new Tag("glamour", "Glamour"),
    new Tag("housing", "Housing"),
    new Tag("golden-saucer", "Golden Saucer", ["is-light", "is-warning"]),
    new Tag("chocobo-raising", "Chocobo Raising"),
  ]),
];
