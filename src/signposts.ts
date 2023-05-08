import { Signpost } from "@/types";

export default [
  Signpost.create({
    name: "Lodestone",
    link: "https://eu.finalfantasyxiv.com/lodestone/",
    tags: [
      [["events"], "News and announcements."],
      [["guide"], "Official play guide."],
      [["database"], "Database of all in-game items."],
    ],
    complexity: "medium",
    official: true,
  }),
  Signpost.create({
    name: "Starter Guide Series",
    link: "https://starter-guide.finalfantasyxiv.com/na",
    tags: [[["guide"], "Video series teaching you how to play."]],
    official: true,
    complexity: "low",
  }),
  Signpost.create({
    name: "Job Guide",
    link: "https://eu.finalfantasyxiv.com/jobguide/battle/",
    tags: [[["guide"], "PvE and PVP actions reference."]],
    official: true,
    complexity: "low",
  }),
  Signpost.create({
    name: "Crafting and Gathering Guide",
    link: "https://eu.finalfantasyxiv.com/crafting_gathering_guide/",
    tags: [
      [
        ["guide", "crafting", "gathering"],
        "Disciples of the Hand and Disciples of the Land actions overview and getting started guide.",
      ],
    ],
    official: true,
    complexity: "low",
  }),
  Signpost.create({
    name: "User interface guide",
    link: "https://eu.finalfantasyxiv.com/uiguide/",
    tags: [[["guide"], "User interface guide and frequently-asked-questions."]],
    official: true,
    complexity: "low",
  }),
  Signpost.create({
    name: "Xenoveritas' Timers",
    link: "https://xenoveritas.org/static/ffxiv/timer.html",
    tags: [
      [["events"], "Countdown to next event, patch, or service maintainance."],
      [["weekly", "daily"], "Timer to next reset."],
      [["housing"], "Timer for next housing lottery period."],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Garland Data",
    link: "https://garlandtools.org/db/",
    tags: [
      [
        ["database"],
        "Database of every item in the game, with a model viewer.",
      ],
      [["crafting"], "Crafting material acquisition lists."],
      [["weather"], "Weather forecasts."],
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "Garland Bell",
    link: "https://garlandtools.org/bell/",
    tags: [
      [["gathering"], "Timers for unspoiled / folklore / ephemeral nodes."],
      [["fishing"], "Timers for big fish availability."],
      [["hunting"], "Timers for hunt targets."],
      [["golden-saucer"], "Timers for upcoming GATEs."],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Fisher",
    link: "https://garlandtools.org/ffxivfisher/",
    tags: [[["fishing"], "Weather and time windows for all fish."]],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Cat became hungry",
    link: "https://en.ff14angler.com/",
    tags: [
      [["fishing"], "The most detailed fishing information available."],
      [["sightseeing-log"], "Sightseeing log checklist."],
      [["island-sanctuary"], "Workshop schedule planeer."],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Ocean Fishing",
    link: "https://ffxiv.pf-n.co/ocean-fishing",
    tags: [
      [
        ["ocean-fishing"],
        "Upcoming ocean fishing voyages and information about fish, bonuses and achievements.",
      ],
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "FFXIV Squadron",
    link: "https://ffxivsquadron.com/",
    tags: [
      [
        ["squadrons"],
        "Track squadron XP, and calculate which recruits can successfully complete a mission.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Fish Tracker",
    link: "https://ff14fish.carbuncleplushy.com/",
    tags: [[["fishing"], "See when hard-to-catch big fish are available."]],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Console Games Wiki",
    link: "https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki",
    tags: [
      [["wiki"], "Comprehensive community wiki covering everything in FF14."],
    ],
    complexity: null,
  }),
  Signpost.create({
    name: "GamerEscape",
    link: "https://ffxiv.gamerescape.com/wiki/Main_Page",
    tags: [[["wiki"], "The other community wiki covering everything in FF14."]],
    complexity: null,
  }),
  Signpost.create({
    name: "XIV ToDo",
    link: "https://xivtodo.com/",
    tags: [
      [["daily", "weekly", "completion"], "Progress dashboards and checklists"],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Faloop!",
    link: "https://faloop.app/",
    tags: [
      [["hunting"], "Availability windows for hunting targets."],
      [["fates"], "Availability windows for FATES."],
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "Eorzea Collection",
    link: "https://ffxiv.eorzeacollection.com/",
    tags: [
      [["database", "glamour"], "Photos of every gearset in the game."],
      [["glamour"], "Community submitted glamour creations."],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Housing",
    link: "https://en.ff14housing.com/",
    tags: [
      [
        ["database", "housing"],
        "Reference for housing, collecting screenshots of exterior and interior housing items.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Collect",
    link: "https://ffxivcollect.com/",
    tags: [
      [
        ["database", "completion"],
        "Track almost anything you can collect in the game.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Teamcraft",
    link: "https://ffxivteamcraft.com/search",
    tags: [
      [
        ["crafting"],
        "Extensive crafting optimization toolkit. Simulate crafting, build crafting rotations and macros. Can do almost anything any other tools can do.",
      ],
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "FFXIV Crafting",
    link: "https://ffxivcrafting.com/",
    tags: [
      [["crafting"], "Equipment and recipe lookup."],
      [
        ["crafting-log"],
        "List materials needed to complete levels of your crafting log.",
      ],
      [["hunting-log"], "Hunting log checklist."],
      [["levequests"], "Find the crafting levequests with the best XP."],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV Macro",
    link: "https://www.ffxivmacro.com/",
    tags: [
      [
        ["crafting", "gathering"],
        "Community submitted macros for crafting, gathering, trials, and raids.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Eorzea Weather",
    link: "https://eorzea-weather.info/en",
    tags: [[["weather"], "Weather forecasts for anywhere in Eorzea."]],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Armoury Collection",
    link: "https://www.ffxivcollection.com/",
    tags: [
      [
        ["database", "glamour"],
        "Photos of every gearset in the game, with extensive filtering options. You might need to switch from Japanese to English by clicking the flag in the top right.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Heavenswhere",
    link: "http://heavenswhere.com/",
    tags: [
      [["maps"], "Maps for every zone from Heavensward onwards."],
      [["hunting"], "Hunt target map markers."],
      [["sightseeing-log"], "Sightseeing log map markers."],
      [["aether-currents"], "Aether currents map markers."],
      [["treasure-maps"], "Treasure map markers."],
      [["hunting-log"], "Hunting log map markers."],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "Salted XIV",
    link: "https://saltedxiv.com/pld",
    tags: [
      [["combat-guides"], "Guides for Savage/Extreme/Unreal/Ultimate content."],
    ],
    complexity: "high",
  }),
  Signpost.create({
    name: "ARR Triple Triad",
    link: "https://arrtripletriad.com/",
    tags: [
      [
        ["golden-saucer", "triple-triad"],
        "Index of all availible Triple Triad cards, with comments and drop rates.",
      ],
    ],
    complexity: "medium",
  }),
  Signpost.create({
    name: "Lord of Verminion",
    link: "http://ffxiverminion.com/",
    tags: [[["lord-of-verminion"], ""]],
    complexity: "unknown",
  }),
  Signpost.create({
    name: "Late to the Party Finder",
    link: "https://latetothepartyfinder.com/",
    tags: [
      [
        ["guide"],
        "Blog with guides to playing FFXIV for new and returning players.",
      ],
    ],
    complexity: null,
  }),
  Signpost.create({
    name: "eureka tracker",
    link: "https://ffxiv-eureka.com/",
    tags: [[["guide", "eureka"], ""]],
    complexity: "unknown",
  }),
  Signpost.create({
    name: "XIV Resource Masterlist",
    link: "https://xiv.sleepyshiba.com/masterlist/",
    tags: [[["guide", "database"], "Far more comprehensive than this site."]],
    complexity: "medium",
  }),
  Signpost.create({
    name: "FFXIV World Map",
    link: "https://xiv.sleepyshiba.com/world/",
    tags: [
      [
        ["guide", "maps"],
        "An extremely high quality, high resolution, and translated world map.",
      ],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Chocobo Colour Calculator",
    link: "https://ffxivchocobo.com/",
    tags: [
      [
        ["chocobo-raising"],
        "Calculate what chocobo feed you will need to get to a desired colour.",
      ],
    ],
    complexity: "low",
  }),
  Signpost.create({
    name: "FFXIV Relic Tracker",
    link: "https://ffxivrelictracker.com/",
  }),
  Signpost.create({
    name: "FFXIVHunt",
    link: "https://ffxivhunt.com/index.php",
  }),
  Signpost.create({
    name: "Sightseeing Log Helper",
    link: "https://tylian.net/sslog/",
  }),
  Signpost.create({ name: "Housing Snap", link: "https://housingsnap.com/" }),
  Signpost.create({ name: "Universalis", link: "https://universalis.app/" }),
  Signpost.create({
    name: "FFXIV Hunts Path Finder",
    link: "https://www.xivdaily.com/en/hunts/shb",
  }),
];
