import { Signpost } from "@/types";

export default [
  Signpost.create({
    name: "Lodestone",
    link: "https://eu.finalfantasyxiv.com/lodestone/",
    desc: [
      { tags: ["events"], text: "News and announcements." },
      { tags: ["guide"], text: "Official play guide." },
      { tags: ["database"], text: "Database of all in-game items." },
    ],
    official: true,
  }),
  Signpost.create({
    name: "Starter Guide Series",
    link: "https://starter-guide.finalfantasyxiv.com/na",
    desc: [{ tags: ["guide"], text: "Video series teaching you how to play." }],
    official: true,
  }),
  Signpost.create({
    name: "Job Guide",
    link: "https://eu.finalfantasyxiv.com/jobguide/battle/",
    desc: [{ tags: ["guide"], text: "PvE and PVP actions reference." }],
    official: true,
  }),
  Signpost.create({
    name: "Crafting and Gathering Guide",
    link: "https://eu.finalfantasyxiv.com/crafting_gathering_guide/",
    desc: [
      {
        tags: ["guide", "crafting", "gathering"],
        text: "Disciples of the Hand and Disciples of the Land actions overview and getting started guide.",
      },
    ],
    official: true,
  }),
  Signpost.create({
    name: "User interface guide",
    link: "https://eu.finalfantasyxiv.com/uiguide/",
    desc: [
      {
        tags: ["guide"],
        text: "User interface guide and frequently-asked-questions.",
      },
    ],
    official: true,
  }),
  Signpost.create({
    name: "Xenoveritas' Timers",
    link: "https://xenoveritas.org/static/ffxiv/timer.html",
    desc: [
      {
        tags: ["events"],
        text: "Countdown to next event, patch, or service maintenance.",
      },
      { tags: ["weekly", "daily"], text: "Timer to next reset." },
      { tags: ["housing"], text: "Timer for next housing lottery period." },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Garland Data",
    link: "https://garlandtools.org/db/",
    desc: [
      {
        tags: ["database"],
        text: "Database of every item in the game, with a model viewer.",
      },
      { tags: ["crafting"], text: "Crafting material acquisition lists." },
      { tags: ["weather"], text: "Weather forecasts." },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "Garland Bell",
    link: "https://garlandtools.org/bell/",
    desc: [
      {
        tags: ["gathering"],
        text: "Timers for gathering nodes.",
      },
      { tags: ["fishing", "fishing-log"], text: "Timers for big fish." },
      { tags: ["the-hunt"], text: "Timers for hunt targets." },
      { tags: ["gates"], text: "Timers for upcoming GATEs." },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Fisher",
    link: "https://garlandtools.org/ffxivfisher/",
    desc: [
      {
        tags: ["fishing", "fishing-log"],
        text: "Weather and time windows for all fish.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Cat became hungry",
    link: "https://en.ff14angler.com/",
    desc: [
      {
        tags: ["fishing", "fishing-log"],
        text: "The most detailed fishing information available.",
      },
      { tags: ["sightseeing-log"], text: "Sightseeing log checklist." },
      { tags: ["island-sanctuary"], text: "Workshop schedule planeer." },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Ocean Fishing",
    link: "https://ffxiv.pf-n.co/ocean-fishing",
    desc: [
      {
        tags: ["ocean-fishing"],
        text: "Upcoming ocean fishing voyages and information about fish, bonuses and achievements.",
      },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "FFXIV Squadron",
    link: "https://ffxivsquadron.com/",
    desc: [
      {
        tags: ["squadrons"],
        text: "Track squadron XP, and calculate which recruits can successfully complete a mission.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Fish Tracker",
    link: "https://ff14fish.carbuncleplushy.com/",
    desc: [
      {
        tags: ["fishing", "fishing-log"],
        text: "See when hard-to-catch big fish are available.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Console Games Wiki",
    link: "https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki",
    desc: [
      {
        tags: ["wiki"],
        text: "Comprehensive community wiki covering everything in FF14.",
      },
    ],
    complexity: null,
  }),
  Signpost.create({
    name: "GamerEscape",
    link: "https://ffxiv.gamerescape.com/wiki/Main_Page",
    desc: [
      {
        tags: ["wiki"],
        text: "The other community wiki covering everything in FF14.",
      },
    ],
    complexity: null,
  }),
  Signpost.create({
    name: "XIV ToDo",
    link: "https://xivtodo.com/",
    desc: [
      {
        tags: ["daily", "weekly", "completion"],
        text: "Progress dashboards and checklists",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Faloop!",
    link: "https://faloop.app/",
    desc: [
      { tags: ["the-hunt"], text: "Availability windows for hunting targets." },
      { tags: ["fates"], text: "Availability windows for FATES." },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "Eorzea Collection",
    link: "https://ffxiv.eorzeacollection.com/",
    desc: [
      {
        tags: ["database", "glamour"],
        text: "Photos of every gearset in the game.",
      },
      { tags: ["glamour"], text: "Community submitted glamour creations." },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Housing",
    link: "https://en.ff14housing.com/",
    desc: [
      {
        tags: ["database", "housing"],
        text: "Reference for housing, collecting screenshots of exterior and interior housing items.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Collect",
    link: "https://ffxivcollect.com/",
    desc: [
      {
        tags: ["database", "completion"],
        text: "Track almost anything you can collect in the game.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Teamcraft",
    link: "https://ffxivteamcraft.com/search",
    desc: [
      {
        tags: ["crafting"],
        text: "Extensive crafting optimization toolkit. Simulate crafting, build crafting rotations and macros. Can do almost anything any other tools can do.",
      },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "FFXIV Crafting",
    link: "https://ffxivcrafting.com/",
    desc: [
      { tags: ["crafting"], text: "Equipment and recipe lookup." },
      {
        tags: ["crafting-log"],
        text: "List materials needed to complete levels of your crafting log.",
      },
      { tags: ["hunting-log"], text: "Hunting log checklist." },
      {
        tags: ["levequests"],
        text: "Find the crafting levequests with the best XP.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Macro",
    link: "https://www.ffxivmacro.com/",
    desc: [
      {
        tags: ["crafting", "gathering"],
        text: "Community submitted macros for crafting, gathering, trials, and raids.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Eorzea Weather",
    link: "https://eorzea-weather.info/en",
    desc: [
      { tags: ["weather"], text: "Weather forecasts for anywhere in Eorzea." },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Armoury Collection",
    link: "https://www.ffxivcollection.com/",
    desc: [
      {
        tags: ["database", "glamour"],
        text: "Photos of every gearset in the game, with extensive filtering options. You might need to switch from Japanese to English by clicking the flag in the top right.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Heavenswhere",
    link: "http://heavenswhere.com/",
    desc: [
      { tags: ["maps"], text: "Maps for every zone from Heavensward onwards." },
      { tags: ["the-hunt"], text: "Hunt target map markers." },
      { tags: ["sightseeing-log"], text: "Sightseeing log map markers." },
      { tags: ["aether-currents"], text: "Aether currents map markers." },
      { tags: ["treasure-maps"], text: "Treasure map markers." },
      { tags: ["hunting-log"], text: "Hunting log map markers." },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Salted XIV",
    link: "https://saltedxiv.com/pld",
    desc: [
      {
        tags: ["guide", "pve-guide"],
        text: "Guides for Savage/Extreme/Unreal/Ultimate content.",
      },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "ARR Triple Triad",
    link: "https://arrtripletriad.com/",
    desc: [
      {
        tags: ["golden-saucer", "triple-triad"],
        text: "Index of all Triple Triad cards, with comments and drop rates.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Lord of Verminion",
    link: "http://ffxiverminion.com/",
    desc: [{ tags: ["lord-of-verminion"], text: "..." }],
    complexity: "unknown",
  }),
  Signpost.create({
    name: "Late to the Party Finder",
    link: "https://latetothepartyfinder.com/",
    desc: [
      {
        tags: ["guide"],
        text: "Blog with guides to playing FFXIV for new and returning players.",
      },
    ],
    complexity: null,
  }),
  Signpost.create({
    name: "eureka tracker",
    link: "https://ffxiv-eureka.com/",
    desc: [{ tags: ["guide", "eureka"], text: "..." }],
    complexity: "unknown",
  }),
  Signpost.create({
    name: "XIV Resource Masterlist",
    link: "https://xiv.sleepyshiba.com/masterlist/",
    desc: [
      {
        tags: ["guide", "database"],
        text: "Far more comprehensive than this site.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV World Map",
    link: "https://xiv.sleepyshiba.com/world/",
    desc: [
      {
        tags: ["guide", "maps"],
        text: "An extremely high quality, high resolution, and translated world map.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Chocobo Colour Calculator",
    link: "https://ffxivchocobo.com/",
    desc: [
      {
        tags: ["chocobo-raising"],
        text: "Calculate what chocobo feed you will need to get to a desired colour.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Relic Tracker",
    link: "https://ffxivrelictracker.com/",
    desc: [
      {
        tags: ["relics"],
        text: "Track progress towards collecting relics.",
      },
      {
        tags: ["crafting"],
        text: "Links to Teamcraft lists for all crafted relics.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIVHunt",
    link: "https://ffxivhunt.com/index.php",
    desc: [
      {
        tags: ["the-hunt"],
        text: "Detailed information about all hunt marks.",
      },
      {
        tags: ["the-hunt"],
        text: "Find the quickest path between daily hunt marks.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Sightseeing Log Helper",
    link: "https://tylian.net/sslog/",
    desc: [
      {
        tags: ["sightseeing-log"],
        text: "Displays when sightseeing locations will be active.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Universalis",
    link: "https://universalis.app/",
    desc: [
      {
        tags: ["marketboard"],
        text: "Crowdsourced marketboard prices.",
      },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "FFXIV Hunts Path Finder",
    link: "https://www.xivdaily.com/en/hunts/shb",
    desc: [
      {
        tags: ["the-hunt"],
        text: "Find the quickest path between daily hunt marks.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "u/kaiyoko",
    link: "https://www.reddit.com/user/kaiyoko/",
    desc: [
      {
        tags: ["fashion-report"],
        text: "Weekly guides on getting 100pts or 80pts in Fashion Report.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Cactpot Solver",
    link: "https://super-aardvark.github.io/yuryu/",
    desc: [
      {
        tags: ["mini-cactpot"],
        text: "Solver for Mini Cactpot.",
      },
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Cactpot Solver",
    link: "https://www.thewordfinder.com/cactpot-solver/",
    desc: [
      {
        tags: ["mini-cactpot"],
        text: "Solver for Mini Cactpot.",
      },
    ],
    complexity: "low",
  }),

  Signpost.create({
    name: "FFXIV Clock",
    link: "https://www.ffxivclock.com/",
    desc: [
      {
        tags: ["gathering"],
        text: "Timers for gathering nodes.",
      },
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Gardening",
    link: "https://ffxivgardening.com/",
    desc: [
      {
        tags: ["guide", "housing", "gardening"],
        text: "Gardening theory-crafting and guides including crossbreeding diagrams.",
      },
      {
        tags: ["database", "housing", "gardening"],
        text: "Database of seeds.",
      },
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "XIV Status",
    link: "https://xivstatus.com/",
    desc: [
      {
        tags: ["events"],
        text: "Third-party server status page.",
      },
    ],
  }),
  Signpost.create({
    name: "Lulu's Tools",
    link: "https://ffxiv.pf-n.co",
    desc: [
      {
        tags: ["chocobo-raising"],
        text: "Calculator for Chocobo colours.",
      },
      {
        tags: ["mini-cactpot"],
        text: "Solver for Mini Cactpot.",
      },
      {
        tags: ["ocean-fishing"],
        text: "Schedule for upcoming ocean fishing voyages.",
      },
      {
        tags: ["weather"],
        text: "Schedule and predictions for weather in Eorzea.",
      },
      {
        tags: ["wondrous-tails"],
        text: "Calculator for Wondrous Tails.",
      },
    ],
    complexity: "low",
  }),
];
