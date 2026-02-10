// Data from renodesu on public github: https://github.com/renodesu/phasmophobia-ghost-filter/blob/main/src/data/ghostData.ts
// Data modified to work with existing components
export default function ghosts() {
  return [
    {
      name: "Banshee",
      evidence: ["UV", "gorbs", "dots"],
      strengths: [
        "Focuses on the same player until that player is killed or has left the game",
      ],
      weaknesses: [
        "Cannot kill players other than the target if the target is inside",
        "Can produce a unique screech on the parabolic microphone",
        "Performs singing ghost events more often than other ghost types",
        "Frequently roams to target player outside of hunts",
      ],
    },
    {
      name: "Dayan",
      evidence: ["EMF5", "gorbs", "spiritBox"],
      strengths: [
        "Moves faster when a player moves near the Dayan when a hunt begins",
      ],
      weaknesses: ["Moves slower when a player stands still near the Dayan", "Can only be female"],
    },
    {
      name: "Demon",
      evidence: ["UV", "ghostWriting", "freeze"],
      strengths: [
        "Lower hunt cooldown than other ghosts",
        "Higher hunt sanity threshold",
        "Smudging prevents hunts for shorter",
        "Rare chance to hunt at any sanity percentage",
      ],
      weaknesses: ["Increased effective crucifix range"],
    },
    {
      name: "Deogen",
      evidence: ["spiritBox", "ghostWriting", "dots"],
      strengths: [
        "Always knows where the player is during a hunt",
        "Moves very fast when not near a player",
      ],
      weaknesses: [
        "Can produce a unique response through the Spirit Box",
        "Lower sanity hunt threshold",
        "Significantly slows when near a player",
      ],
    },
    {
      name: "Gallu",
      evidence: ["EMF5", "UV", "spiritBox"],
      strengths: [
        "Certain actions will enrage the Gallu, causing it to have a higher hunt sanity threshold, increased hunt speed, and shorter blind time",
      ],
      weaknesses: [
        "After a hunt, the Gallu will become weakened with a lower sanity threshold, decreased hunt speed, and longer blind time",
      ],
    },
    {
      name: "Goryo",
      evidence: ["EMF5", "UV", "dots"],
      strengths: [
        "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby",
      ],
      weaknesses: [
        "Less likely to wander away from favorite room",
        "Cannot change favorite room",
      ],
    },
    {
      name: "Hantu",
      evidence: ["UV", "gorbs", "freeze"],
      strengths: ["Lower temperatures allow the Hantu to move faster"],
      weaknesses: [
        "Warmer areas slow the Hantu's movement",
        "If the breaker is off, while have visible breath during hunt",
      ],
    },
    {
      name: "Jinn",
      evidence: ["EMF5", "UV", "freeze"],
      strengths: [
        "Gets a speed boost when chasing a player that is far away",
        "Occasionally attempts to zap the sanity of nearby players",
      ],
      weaknesses: [
        "Cannot use its ability if the site's fuse box is off",
        "Cannot turn off the fuse box",
      ],
    },
    {
      name: "Mare",
      evidence: ["spiritBox", "gorbs", "ghostWriting"],
      strengths: [
        "Hunts at a higher sanity threshold in an unlit room",
        "Turns off lights and breaks lightbulbs more often",
        "May turn off a light immediately after a player turns one on",
      ],
      weaknesses: [
        "Hunts at a lower sanity threshold in a lit room",
        "Chooses unlit rooms to remain in more often",
      ],
    },
    {
      name: "Moroi",
      evidence: ["spiritBox", "ghostWriting", "freeze"],
      strengths: [
        "Hunting speeds depend directly on average team sanity",
        "Can curse players through the spirit box or the parabolic microphone, making them lose sanity faster",
      ],
      weaknesses: ["Smudge sticks blind the ghost for longer during hunts"],
    },
    {
      name: "The Mimic",
      evidence: ["spiritBox", "UV", "gorbs", "freeze"],
      strengths: ["Can mimic the abilities and traits of other ghosts"],
      weaknesses: ["Will always present Ghost Orbs as a fake evidence"],
    },
    {
      name: "Myling",
      evidence: ["EMF5", "UV", "ghostWriting"],
      strengths: ["Has quieter footsteps and vocalizations during hunts"],
      weaknesses: [
        "Produces paranormal sounds (parabolic mic) more frequently",
      ],
    },
    {
      name: "Obake",
      evidence: ["EMF5", "UV", "gorbs"],
      strengths: [
        "Fingerprints can disappear faster than usual",
        "Occasionally fails to leave fingerprints",
      ],
      weaknesses: [
        "Has a chance to blink in a different ghost model when hunting",
        "Can leave a unique 6 finger pattern",
      ],
    },
    {
      name: "Obambo",
      evidence: ["ghostWriting", "UV", "dots"],
      strengths: [
        "Obambo has a calm and an aggressive state",
        "In aggressive state, the obambo is more active and has a 65% sanity threshold",
      ],
      weaknesses: [
        "In calm state, the obambo is less active and has a 10% sanity threshold"
      ],
    },
    {
      name: "Oni",
      evidence: ["EMF5", "freeze", "dots"],
      strengths: ["More active when people are nearby"],
      weaknesses: [
        'Cannot produce "airball" ghost events',
        "Model remains visible for longer periods when hunting",
      ],
    },
    {
      name: "Onryo",
      evidence: ["spiritBox", "gorbs", "freeze"],
      strengths: ["Every third flame extinguish, the onryo tries to hunt"],
      weaknesses: [
        "Presence of flames prevents the ghost from hunting, which blows out the flame",
      ],
    },
    {
      name: "Phantom",
      evidence: ["spiritBox", "UV", "dots"],
      strengths: [
        "Seeing the ghost nearby during manifestations and hunts drains more sanity",
        "Remains invisible for longer periods when hunting",
        "Occasionally roams to a random player",
      ],
      weaknesses: [
        "Taking a photo of the Phantom will cause it to briefly disappear",
      ],
    },
    {
      name: "Poltergeist",
      evidence: ["spiritBox", "UV", "ghostWriting"],
      strengths: [
        "Capable of throwing multiple objects at once",
        "Can throw a single object farther than other types",
      ],
      weaknesses: [""],
    },
    {
      name: "Raiju",
      evidence: ["EMF5", "gorbs", "dots"],
      strengths: ["Moves faster near electrical devices"],
      weaknesses: [
        "Disrupts electronic equipment from further away when it hunts",
      ],
    },
    {
      name: "Revenant",
      evidence: ["gorbs", "ghostWriting", "freeze"],
      strengths: [
        "Significant speed increase when chasing a player during hunts",
      ],
      weaknesses: ["Moves very slowly when not chasing a player"],
    },
    {
      name: "Shade",
      evidence: ["EMF5", "ghostWriting", "freeze"],
      strengths: ["Harder to find"],
      weaknesses: [
        "Has a low hunt sanity threshold",
        "will not perform an action that produces emf lv3 while in the same room as a player",
        "cannot hunt, interact, or event while in the same room as a player",
      ],
    },
    {
      name: "Spirit",
      evidence: ["EMF5", "spiritBox", "ghostWriting"],
      strengths: ["None"],
      weaknesses: ["Incense prevents hunts for longer (double duration)"],
    },
    {
      name: "The Twins",
      evidence: ["EMF5", "spiritBox", "freeze"],
      strengths: [
        "Either Twin may start a hunt, though not both at the same time",
        "One twin is faster than normal",
      ],
      weaknesses: [
        "Can interact with the environment simultaneously",
        "One twin is slower than normal",
      ],
    },
    {
      name: "Wraith",
      evidence: ["EMF5", "spiritBox", "dots"],
      strengths: [
        "Can teleport to a random player, becoming active near them, outside of ghost events and hunt",
      ],
      weaknesses: ["Never disturbs salt"],
    },
    {
      name: "Yokai",
      evidence: ["spiritBox", "gorbs", "dots"],
      strengths: [
        "Talking near it will temporarily increase the hunting threshold and interaction rate",
      ],
      weaknesses: [
        "When hunting, it can only hear voices and detect electronics within a short range",
      ],
    },
    {
      name: "Yurei",
      evidence: ["gorbs", "freeze", "dots"],
      strengths: ["May randomly shut a door and deduct nearby players' sanity"],
      weaknesses: ["Will be temporarily confined to its room after smudging"],
    },
    {
      name: "Thaye",
      evidence: ["gorbs", "ghostWriting", "dots"],

      strengths: ["Becomes very active the first time a player gets nearby"],
      weaknesses: [
        "Becomes slower and less active the longer players are near it",
      ],
    },
  ];
}
