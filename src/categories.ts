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
    "Guides",
    [new Tag("guides", "Guides")],
    ["is-link", "is-light"]
  ),
  new Category(
    "Dailies and Weeklies",
    [
      new Tag("events", "Special Events"),
      new Tag("daily", "Daily quests"),
      new Tag("weekly", "Weekly quests"),
      new Tag("squadrons", "Squadrons"),
    ],
    ["is-info", "is-light"]
  ),
  new Category(
    "DoW/DoM",
    [new Tag("hunting", "Hunts")],
    ["is-danger", "is-light"]
  ),
  new Category(
    "DoH/DoL",
    [
      new Tag("crafting", "Crafting"),
      new Tag("gathering", "Gathering"),
      new Tag("fishing", "Fishing"),
    ],
    ["is-success", "is-light"]
  ),
  new Category("Other activities", [
    new Tag("housing", "Housing"),
    new Tag("mgp", "Golden Saucer"),
  ]),
];
