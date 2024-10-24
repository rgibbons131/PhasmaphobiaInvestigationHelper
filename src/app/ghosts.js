// Data from renodesu on public github: https://github.com/renodesu/phasmophobia-ghost-filter/blob/main/src/data/ghostData.ts
// Data modified to work with existing components
export default function ghosts() {
  return [
    {
      name: "Banshee",
      evidence: ["UV", "gorbs", "Dots"],
      strengths: ["Will target only one player at a time."],
      weaknesses: ["Has a distinctive wail on the Parabolic Microphone."],
    },
    {
      name: "Demon",
      evidence: ["UV", "GhostWriting", "freeze"],
      strengths: ["Can initiate hunts more often."],
      weaknesses: ["Crucifix effectiveness is increased to 5m against one."],
    },
    {
      name: "Deogen",
      evidence: ["SpiritBox", "GhostWriting", "Dots"],
      strengths: [
        "Always knows where the player is during a hunt and moves very fast when going to their location.",
      ],
      weaknesses: ["Moves very slowly when it sees its victim."],
    },
    {
      name: "Goryo",
      evidence: ["EMF5", "UV", "Dots"],
      strengths: [
        "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby.",
      ],
      weaknesses: ["Tends to wander away less from its ghost room."],
    },
    {
      name: "Hantu",
      evidence: ["UV", "gorbs", "freeze"],
      strengths: ["Lower temperatures allow the Hantu to move faster."],
      weaknesses: ["Warmer areas slow the Hantu's movement."],
    },
    {
      name: "Jinn",
      evidence: ["EMF5", "UV", "freeze"],
      strengths: ["Travels at faster speeds if its victim is far away."],
      weaknesses: ["Cannot use its ability if the site's fuse box is off."],
    },
    {
      name: "Mare",
      evidence: ["SpiritBox", "gorbs", "GhostWriting"],
      strengths: ["Has an increased chance to attack in the dark."],
      weaknesses: [
        "Turning the lights on will reduce the chance of an attack.",
      ],
    },
    {
      name: "Moroi",
      evidence: ["SpiritBox", "GhostWriting", "freeze"],
      strengths: [
        "Moves noticeably faster at low player sanity and can make players lose sanity quicker than usual while investigating.",
      ],
      weaknesses: ["Smudge sticks blind the ghost for longer during hunts."],
    },
    {
      name: "The Mimic",
      evidence: ["SpiritBox", "UV", "gorbs", "freeze"],
      strengths: ["Can mimic the abilities and traits of other ghosts."],
      weaknesses: ["Will present Ghost Orbs as a secondary "],
    },
    {
      name: "Myling",
      evidence: ["EMF5", "UV", "GhostWriting"],
      strengths: ["Has quieter footsteps during a hunt."],
      weaknesses: ["Produces paranormal sounds more frequently."],
    },
    {
      name: "Obake",
      evidence: ["EMF5", "UV", "gorbs"],
      strengths: ["May leave fingerprints that disappear quicker."],
      weaknesses: ["Has a small chance of leaving six-fingered handprints."],
    },
    {
      name: "Oni",
      evidence: ["EMF5", "freeze", "Dots"],
      strengths: ["Increased activity and ghost events."],
      weaknesses: ["An Oni's increased activity makes them easier to find."],
    },
    {
      name: "Onryo",
      evidence: ["SpiritBox", "gorbs", "freeze"],
      strengths: ["A flame extinguishing can cause an Onryo to attack."],
      weaknesses: [
        "The presence of flames reduces the Onryo's ability to attack.",
      ],
    },
    {
      name: "Phantom",
      evidence: ["SpiritBox", "UV", "Dots"],
      strengths: [
        "Looking at a Phantom will lower the player's sanity considerably.",
      ],
      weaknesses: [
        "Taking a photo of the Phantom will cause it to briefly disappear.",
      ],
    },
    {
      name: "Poltergeist",
      evidence: ["SpiritBox", "UV", "GhostWriting"],
      strengths: ["Capable of throwing multiple objects at once."],
      weaknesses: ["Becomes powerless with no throwables nearby."],
    },
    {
      name: "Raiju",
      evidence: ["EMF5", "gorbs", "Dots"],
      strengths: ["Moves faster near electrical devices."],
      weaknesses: [
        "Disrupts electronic equipment from further away when it hunts.",
      ],
    },
    {
      name: "Revenant",
      evidence: ["gorbs", "GhostWriting", "freeze"],
      strengths: [
        "Can travel significantly faster if a player is spotted during a hunt.",
      ],
      weaknesses: ["Moves very slowly when not chasing a player."],
    },
    {
      name: "Shade",
      evidence: ["EMF5", "GhostWriting", "freeze"],
      strengths: ["Being shy makes it more difficult to locate and obtain "],
      weaknesses: ["Less likely to hunt if multiple people are nearby."],
    },
    {
      name: "Spirit",
      evidence: ["EMF5", "SpiritBox", "GhostWriting"],
      strengths: ["None."],
      weaknesses: [
        "Smudge sticks are more effective, preventing a hunt for longer.",
      ],
    },
    {
      name: "The Twins",
      evidence: ["EMF5", "SpiritBox", "freeze"],
      strengths: ["Either Twin may start a hunt, though not at the same time."],
      weaknesses: [
        "Will often interact with the environment at the same time.",
      ],
    },
    {
      name: "Wraith",
      evidence: ["EMF5", "SpiritBox", "Dots"],
      strengths: ["Does not leave UV footprints after stepping in salt."],
      weaknesses: ["Will become more active if it steps in salt."],
    },
    {
      name: "Yokai",
      evidence: ["SpiritBox", "gorbs", "Dots"],
      strengths: [
        "Talking near the Yokai will anger it, increasing the chance to attack.",
      ],
      weaknesses: ["Can only hear voices close to it during a hunt."],
    },
    {
      name: "Yurei",
      evidence: ["gorbs", "freeze", "Dots"],
      strengths: ["Has a stronger effect on sanity."],
      weaknesses: [
        "Smudging the Yurei's ghost room will reduce how often it wanders.",
      ],
    },
    {
      name: "Thaye",
      evidence: ["gorbs", "GhostWriting", "Dots"],

      strengths: [
        "Entering the location makes it active, defensive and agile.",
      ],
      weaknesses: ["Becomes slower and less active over time."],
    },
  ];
}
