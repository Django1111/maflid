let adjective1 = prompt("Enter an adjective.");
let fname1 = prompt('Enter a First Name.')
let lname1 = prompt('Enter a Last Name.')
let adjective3 = prompt('Enter an adjective.')
let friend = prompt('Enter the name of a friend.')
let emotion = prompt('Enter an emotion.')
let actioned1 = prompt('Enter an action that you would use in a fight ending in -ed')
let bodypart1 = prompt('Enter a bodypart')
let actioned2 = prompt('Enter an action that you would use in a fight ending in -ed')
let bodypart2 = prompt('Enter a bodypart')
let emotioned = prompt('Enter an emotion ending in -ed')
let resteraunt = prompt('Enter a resteraunt')
let advjective5 = prompt('Enter an adjective')
let food = prompt('Enter a type of food')

let story = 
`Twas a ${adjective1} night in Halloween town, and all spooksters were wandering.
 Jack was wandering about, talking with his friend ${fname1} ${lname1} who was quite ${adjective3}. 
 
 Then, jack saw Sally May holding hands with ${friend}, his friend! Jack was very ${emotion}, so he ${actioned1} his ${bodypart1}!
  
  Sally was obviously very ${emotioned} by this, and ${actioned2} Jack in his ${bodypart2}! After the dust settled, Sally simply explained that ${friend} was just there to set up halloween decorations!
  
  After this, they all went to ${resteraunt} and got some ${advjective5} ${food}`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;