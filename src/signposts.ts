import { Signpost } from "@/types";

export default [
  new Signpost(
    "Lodestone",
    "https://eu.finalfantasyxiv.com/lodestone/",
    "Official notices and news, play guide, character profile, canonical reference data.",
    ["official", "guides", "database"]
  ),
  new Signpost(
    "Xenoveritas' Timers",
    "https://xenoveritas.org/static/ffxiv/timer.html",
    "Countdown timers for weekly reset, daily reset, patches/maintenance and housing lotteries.",
    ["events", "weekly", "daily", "housing"]
  ),
  new Signpost(
    "Garland Data",
    "https://garlandtools.org/db/",
    "Database of every item in the game. Crafting and gathering lists.",
    ["database", "crafting", "gathering"]
  ),
  new Signpost(
    "Garland Bell",
    "https://garlandtools.org/bell/",
    "Timers for gathering, big fish, GATEs, and hunt targets.",
    ["crafting", "gathering", "fishing", "hunting", "mgp"]
  ),
  new Signpost(
    "FFXIV Fisher",
    "https://garlandtools.org/ffxivfisher/",
    "Weather and time windows for all fish.",
    ["fishing"]
  ),
  new Signpost(
    "FFXIV Squadron",
    "https://ffxivsquadron.com/",
    "Track squadron XP and calculate which recruits can successfully complete a mission.",
    ["squadrons"]
  ),
  new Signpost(
    "FFXIV Fish Tracker",
    "https://ff14fish.carbuncleplushy.com/",
    "See when hard-to-catch big fish are available.",
    ["fishing"]
  ),
  new Signpost(
    "Console Games Wiki",
    "https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki",
    "Comprehensive community wiki covering everything in FF14.",
    ["wiki"]
  ),
  new Signpost(
    "GamerEscape",
    "https://ffxiv.gamerescape.com/wiki/Main_Page",
    "The other community wiki covering everything in FF14.",
    ["wiki"]
  ),
  new Signpost(
    "XIV ToDo",
    "https://xivtodo.com/",
    "Progress dashboards and checklists",
    ["guides", "weekly", "daily", "completion"],
      { Complexity: "low" }
  ),
  new Signpost(
    "Faloop!",
    "https://faloop.app/",
    "Availability windows for Hunts and FATEs",
    ["hunting", "fates"],
      { Complexity: "high" }
  ),
  new Signpost(
    "Eorzea Collection",
    "https://ffxiv.eorzeacollection.com/",
    "Photos of every gearset in the game and community submitted glamour creations.",
    ["database", "glamour"],
    { Complexity: "low" }
  ),
  new Signpost(
    "FFXIV Housing",
    "https://en.ff14housing.com/",
    "Reference for housing, collecting screenshots of exterior and interior housing items.",
    ["database", "housing"],
    {Complexity: "medium"}
  ),
  new Signpost(
    "FFXIV Collect",
    "https://ffxivcollect.com/",
    "Track collections",
    ["completion"],
    {Complexity: "medium"}
  ),
  new Signpost(
    "Teamcraft",
    "https://ffxivteamcraft.com/search",
    "Extensive crafting optimization toolkit.",
    ["crafting", "gathering"],
    {Complexity: "high"}
  ),
];
