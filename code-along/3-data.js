// Goal: Store my social media profile in memory. Display it in the 
// JavaScript console in Chrome, in a human-readable format.

// A social media profile is a more complex thing – it's not simply
// a String or a Number. It's got many attributes, like a name, location,
// and a timeline.

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a simple social media profile in memory
let profile = {
    name: `Edward`,
    location: {
        city: `Chicago`,
        state: `Illinois`
    },
    timeline: [
        `I have been working`,
        `I have been schooling`,
        `I have been sleeping`
    ]
}
console.log(profile)

// Retrieve the name from the profile, store it in memory
let profileName = profile.name

// Display the name in the console
console.log(`name is ${profileName}`)

profileLocation = profile.location
console.log(profile.location)
// Retrieve the location, store it in a memory

// Use the location to write the city and state, in a human-readable
// format, to the JavaScript console
console.log(`location is ${profileLocation.city}, ${profileLocation.state}`)

// Write the 3 statuses from the "timeline" to the JavaScript console

let shoppingList = [
    `ice cream`,
    `chocolate`,
    `orange juice`
]
console.log(shoppingList)
console.log(profile.timeline)
profile.timeline = profile.timeline.sort()
console.log(profile.timeline)