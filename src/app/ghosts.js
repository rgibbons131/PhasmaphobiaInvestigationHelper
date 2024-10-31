// Data from renodesu on public github: https://github.com/renodesu/phasmophobia-ghost-filter/blob/main/src/data/ghostData.ts
// Data modified to work with existing components
export default function ghosts() {
  return [
    {
      name: "Banshee",
      evidence: ["UV", "gorbs", "dots"],
      strengths: ["Will target only one player at a time."],
      weaknesses: ["Has a distinctive wail on the Parabolic Microphone."],
    },
    {
      name: "Demon",
      evidence: ["UV", "ghostWriting", "freeze"],
      strengths: ["Can initiate hunts more often."],
      weaknesses: ["Crucifix effectiveness is increased to 5m against one."],
    },
    {
      name: "Deogen",
      evidence: ["spiritBox", "ghostWriting", "dots"],
      strengths: [
        "Always knows where the player is during a hunt and moves very fast when going to their location.",
      ],
      weaknesses: ["Moves very slowly when it sees its victim."],
    },
    {
      name: "Goryo",
      evidence: ["EMF5", "UV", "dots"],
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
      evidence: ["spiritBox", "gorbs", "ghostWriting"],
      strengths: ["Has an increased chance to attack in the dark."],
      weaknesses: [
        "Turning the lights on will reduce the chance of an attack.",
      ],
    },
    {
      name: "Moroi",
      evidence: ["spiritBox", "ghostWriting", "freeze"],
      strengths: [
        "Moves noticeably faster at low player sanity and can make players lose sanity quicker than usual while investigating.",
      ],
      weaknesses: ["Smudge sticks blind the ghost for longer during hunts."],
    },
    {
      name: "The Mimic",
      evidence: ["spiritBox", "UV", "gorbs", "freeze"],
      strengths: ["Can mimic the abilities and traits of other ghosts."],
      weaknesses: ["Will present Ghost Orbs as a secondary "],
    },
    {
      name: "Myling",
      evidence: ["EMF5", "UV", "ghostWriting"],
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
      evidence: ["EMF5", "freeze", "dots"],
      strengths: ["Increased activity and ghost events."],
      weaknesses: ["An Oni's increased activity makes them easier to find."],
    },
    {
      name: "Onryo",
      evidence: ["spiritBox", "gorbs", "freeze"],
      strengths: ["A flame extinguishing can cause an Onryo to attack."],
      weaknesses: [
        "The presence of flames reduces the Onryo's ability to attack.",
      ],
    },
    {
      name: "Phantom",
      evidence: ["spiritBox", "UV", "dots"],
      strengths: [
        "Looking at a Phantom will lower the player's sanity considerably.",
      ],
      weaknesses: [
        "Taking a photo of the Phantom will cause it to briefly disappear.",
      ],
    },
    {
      name: "Poltergeist",
      evidence: ["spiritBox", "UV", "ghostWriting"],
      strengths: ["Capable of throwing multiple objects at once."],
      weaknesses: ["Becomes powerless with no throwables nearby."],
    },
    {
      name: "Raiju",
      evidence: ["EMF5", "gorbs", "dots"],
      strengths: ["Moves faster near electrical devices."],
      weaknesses: [
        "Disrupts electronic equipment from further away when it hunts.",
      ],
    },
    {
      name: "Revenant",
      evidence: ["gorbs", "ghostWriting", "freeze"],
      strengths: [
        "Can travel significantly faster if a player is spotted during a hunt.",
      ],
      weaknesses: ["Moves very slowly when not chasing a player."],
    },
    {
      name: "Shade",
      evidence: ["EMF5", "ghostWriting", "freeze"],
      strengths: ["Being shy makes it more difficult to locate and obtain "],
      weaknesses: ["Less likely to hunt if multiple people are nearby."],
    },
    {
      name: "Spirit",
      evidence: ["EMF5", "spiritBox", "ghostWriting"],
      strengths: ["None."],
      weaknesses: [
        "Smudge sticks are more effective, preventing a hunt for longer.",
      ],
    },
    {
      name: "The Twins",
      evidence: ["EMF5", "spiritBox", "freeze"],
      strengths: ["Either Twin may start a hunt, though not at the same time."],
      weaknesses: [
        "Will often interact with the environment at the same time.",
      ],
    },
    {
      name: "Wraith",
      evidence: ["EMF5", "spiritBox", "dots"],
      strengths: ["Does not leave UV footprints after stepping in salt."],
      weaknesses: ["Will become more active if it steps in salt."],
    },
    {
      name: "Yokai",
      evidence: ["spiritBox", "gorbs", "dots"],
      strengths: [
        "Talking near the Yokai will anger it, increasing the chance to attack.",
      ],
      weaknesses: ["Can only hear voices close to it during a hunt."],
    },
    {
      name: "Yurei",
      evidence: ["gorbs", "freeze", "dots"],
      strengths: ["Has a stronger effect on sanity."],
      weaknesses: [
        "Smudging the Yurei's ghost room will reduce how often it wanders.",
      ],
    },
    {
      name: "Thaye",
      evidence: ["gorbs", "ghostWriting", "dots"],

      strengths: [
        "Entering the location makes it active, defensive and agile.",
      ],
      weaknesses: ["Becomes slower and less active over time."],
    },
  ];
}
