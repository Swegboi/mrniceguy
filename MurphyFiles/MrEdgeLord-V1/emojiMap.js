/*
 * This file contains the Map of word --> emoji substitutions.
 */

 var testInt = 1;
 /*
document.getElementById("test").innerHTML = testInt + 1;

function myFunc(){
	document.getElementById("test").innerHTML = testInt + 1;
}

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
*/

function saveOptions(e) {
  browser.storage.sync.set({
    colour: document.querySelector("#colour").value
  });    
  e.preventDefault();
}
function restoreOptions() {
  var storageItem = browser.storage.managed.get('colour');
  storageItem.then((res) => {
    document.querySelector("#managed-colour").innerText = res.colour;
  });

  var gettingItem = browser.storage.sync.get('colour');
  gettingItem.then((res) => {
    document.querySelector("#colour").value = res.colour || 'Firefox red';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);





 
/* exported sortedEmojiMap */


//Good to Bad
let dictionary = new Map();


dictionary.set('nice', 'shit');
dictionary.set('great job', 'fuckface');
dictionary.set('penis', 'big willy');
dictionary.set('freedom', 'communism');
dictionary.set('lovely day we\'re having', 'fuck');
dictionary.set('bloody brilliant', 'headass');
dictionary.set('backside of wonder', 'ass');
dictionary.set('dude', 'asshole');
dictionary.set('nice lady', 'damn');
dictionary.set('lady', 'super bitch');
dictionary.set('woman', 'bitch');


dictionary.set('what a saddening misfortunate of events', 'cunt');

dictionary.set('good time', 'assfuck');
dictionary.set('whizkid', 'asshat');
dictionary.set('open-minded', 'bumblefuck');
dictionary.set('genius', 'dickhead');
dictionary.set('liberal', 'treehugger');
dictionary.set('man', 'dickbutt');
dictionary.set('bff', 'cocksucker');
dictionary.set('carry on', 'kys');


dictionary.set(' the ', ' the fucking ');
dictionary.set(' a ', ' a damn ');

/*
//bad to good
dictionary.set('shit', 'nice');
dictionary.set('fuckface', 'great job');

dictionary.set('bitch', 'cool lady');

dictionary.set('dick', 'nice guy');
dictionary.set('communism', 'freedom');
dictionary.set('fuck', 'lovely day we\'re having');
dictionary.set('headass', 'bloody brilliant');
dictionary.set('ass', 'backside of wonder');
dictionary.set('asshole', 'dude');
dictionary.set('cunt', 'nice lady');
dictionary.set('damn', 'what a saddening misfortunate of events');

dictionary.set('assfuck', 'good time');
dictionary.set('asshat', 'whizkid');
dictionary.set('bumblefuck', 'open-minded');
dictionary.set('dickhead', 'genius');
dictionary.set('treehugger', 'liberal');
dictionary.set('dickbutt', 'man');
dictionary.set('cocksucker', 'bff');
dictionary.set('kys', 'carry on');
*/




/*
 * After all the dictionary entries have been set, sort them by length.
 *
 * Because iteration over Maps happens by insertion order, this avoids
 * scenarios where words that are substrings of other words get substituted
 * first, leading to the longer word's substitution never triggering.
 * 
 * For example, the 'woman' substitution would never get triggered
 * if the 'man' substitution happens first because the input term 'woman'
 * would become 'wo👨', and the search for 'woman' would not find any matches.
 */
let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  // Each pair is an array with two entries: a word, and its emoji.
  // Ex: ['woman', '👩']
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    // The first word should come before the second word.
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    // The second word should come before the first word.
    return 1;
  }

  // The words have the same length, it doesn't matter which comes first.
  return 0;
});

// Now that the entries are sorted, put them back into a Map.
let sortedEmojiMap = new Map(tempArray);
