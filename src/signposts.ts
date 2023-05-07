import { Signpost } from "@/types";

export default [
  new Signpost(
    "Lodestone",
    "https://eu.finalfantasyxiv.com/lodestone/",
    [
      "Official notices and news, play guide, character profile, canonical reference data.",
    ],
    ["official", "guides", "database"],
    "medium"
  ),
  new Signpost(
    "Xenoveritas' Timers",
    "https://xenoveritas.org/static/ffxiv/timer.html",
    [
      "Countdown timers for weekly reset, daily reset, patches/maintenance and housing lotteries.",
    ],
    ["events", "weekly", "daily", "housing"],
    "low"
  ),
  new Signpost(
    "Garland Data",
    "https://garlandtools.org/db/",
    ["Database of every item in the game. Crafting and gathering lists."],
    ["database", "crafting", "gathering", "weather"],
    "high"
  ),
  new Signpost(
    "Garland Bell",
    "https://garlandtools.org/bell/",
    ["Timers for gathering, big fish, GATEs, and hunt targets."],
    ["crafting", "gathering", "fishing", "hunting", "mgp"],
    "medium"
  ),
  new Signpost(
    "FFXIV Fisher",
    "https://garlandtools.org/ffxivfisher/",
    ["Weather and time windows for all fish."],
    ["fishing", "fishing-log"],
    "medium"
  ),
  new Signpost(
    "Ocean Fishing",
    "https://ffxiv.pf-n.co/ocean-fishing",
    [
      "Upcoming ocean fishing voyages and information about fish, bonuses and achievements.",
    ],
    ["fishing", "fishing-log", "ocean-fishing"],
    "high"
  ),
  new Signpost(
    "FFXIV Squadron",
    "https://ffxivsquadron.com/",
    [
      "Track squadron XP, and calculate which recruits can successfully complete a mission.",
    ],
    ["squadrons"],
    "medium"
  ),
  new Signpost(
    "FFXIV Fish Tracker",
    "https://ff14fish.carbuncleplushy.com/",
    ["See when hard-to-catch big fish are available."],
    ["fishing", "fishing-log"],
    "medium"
  ),
  new Signpost(
    "Console Games Wiki",
    "https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki",
    ["Comprehensive community wiki covering everything in FF14."],
    ["wiki"],
    null
  ),
  new Signpost(
    "GamerEscape",
    "https://ffxiv.gamerescape.com/wiki/Main_Page",
    ["The other community wiki covering everything in FF14."],
    ["wiki"],
    null
  ),
  new Signpost(
    "XIV ToDo",
    "https://xivtodo.com/",
    ["Progress dashboards and checklists"],
    ["weekly", "daily", "completion"],
    "low"
  ),
  new Signpost(
    "Faloop!",
    "https://faloop.app/",
    ["Availability windows for Hunts and FATEs"],
    ["hunting", "fates"],
    "high"
  ),
  new Signpost(
    "Eorzea Collection",
    "https://ffxiv.eorzeacollection.com/",
    [
      "Photos of every gearset in the game and community submitted glamour creations.",
    ],
    ["database", "glamour"],
    "low"
  ),
  new Signpost(
    "FFXIV Housing",
    "https://en.ff14housing.com/",
    [
      "Reference for housing, collecting screenshots of exterior and interior housing items.",
    ],
    ["database", "housing"],
    "medium"
  ),
  new Signpost(
    "FFXIV Collect",
    "https://ffxivcollect.com/",
    ["Track almost anything you can collect in the game."],
    ["database", "completion"],
    "medium"
  ),
  new Signpost(
    "Teamcraft",
    "https://ffxivteamcraft.com/search",
    [
      "Extensive crafting optimization toolkit. Simulate crafting, build crafting rotations and macros. Can do almost anything any other tools can do.",
    ],
    ["crafting", "gathering"],
    "high"
  ),
  new Signpost(
    "FFXIV Crafting",
    "https://ffxivcrafting.com/",
    [
      "Equipment and recipe lookup, Levequest optimization, food reference, Hunting Log checklist, list materials needed to complete levels of your crafting log.",
    ],
    ["crafting", "gathering", "crafting-log", "hunting-log"],
    "medium"
  ),
  new Signpost(
    "FFXIV Macro",
    "https://www.ffxivmacro.com/",
    ["Community submitted macros for crafting, gathering, trials, and raids."],
    ["crafting", "gathering"],
    "medium"
  ),
  new Signpost(
    "Eorzea Weather",
    "https://eorzea-weather.info/en",
    ["Weather forecasts for anywhere in Eorzea."],
    ["weather"],
    "low"
  ),
  new Signpost(
    "FFXIV Armoury Collection",
    "https://www.ffxivcollection.com/",
    [
      "Photos of every gearset in the game, with extensive filtering options.",
      "You might need to switch from Japanese to English by clicking the flag in the top right.",
    ],
    ["database", "glamour"],
    "medium"
  ),
  new Signpost(
    "Heavenswhere",
    "http://heavenswhere.com/",
    ["Maps and map markers for every zone from Heavensward onwards."],
    [
      "hunts",
      "sightseeing-log",
      "aether-currents",
      "treasure-maps",
      "hunting-log",
    ],
    "low"
  ),
  new Signpost(
    "Salted XIV",
    "https://saltedxiv.com/pld",
    ["Guides for Savage/Extreme/Unreal/Ultimate content."],
    ["combat-guides"],
    "high"
  ),
];
