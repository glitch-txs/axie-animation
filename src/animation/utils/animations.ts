import animations from "@axieinfinity/mixer/dist/data/axie-2d-v3-stuff-animations.json";

export const animationList: string[] = animations.items.header
  .map((obj: any) => obj.name)
  .filter((obj: any) => obj.substring(0, 10) !== "action/mix");

  export const animationListData: string[] = [
    "activity/appear",
    "activity/bath",
    "attack/ranged/cast-fly",
    "attack/ranged/cast-high",
    "attack/ranged/cast-low",
    "attack/ranged/cast-multi",
    "attack/ranged/cast-tail",
    "activity/eat-bite",
    "activity/eat-chew",
    "activity/entrance",
    "defense/evade",
    "activity/evolve",
    "battle/get-buff",
    "battle/get-debuff",
    "defense/hit-by-normal",
    "defense/hit-by-normal-crit",
    "defense/hit-by-normal-dramatic",
    "defense/hit-by-ranged-attack",
    "defense/hit-with-shield",
    "attack/melee/horn-gore",
    "attack/melee/mouth-bite",
    "action/move-back",
    "action/move-forward",
    "attack/melee/multi-attack",
    "action/idle/normal",
    "attack/melee/normal-attack",
    "activity/prepare",
    "action/idle/random-01",
    "action/idle/random-02",
    "action/idle/random-03",
    "action/idle/random-04",
    "action/idle/random-05",
    "action/run",
    "draft/run-origin",
    "attack/melee/shrimp",
    "activity/sleep",
    "attack/melee/tail-multi-slap",
    "attack/melee/tail-roll",
    "attack/melee/tail-smash",
    "attack/melee/tail-thrash",
    "activity/victory-pose-back-flip"
]  