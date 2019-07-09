// Mad Lib Assignment

'use strict';

// Event Listeners
document.getElementById('results-btn').addEventListener('click', showResults);

// Event Functions
function showResults() {
  // Input

  let verb = document.getElementById('verb').value;
  let pluralNoun = document.getElementById('plural-noun').value;
  let adjective = document.getElementById('adjective').value;
  let presentTenseVerb = document.getElementById('present-tense-verb').value;
  let noun = document.getElementById('noun').value;

  // Message

  let message =
    '"There are too many ' + verb + ' ' + pluralNoun + ' on this '  + adjective + ' airplane!", I screamed. "Somebody has to ' +  presentTenseVerb + ' on the ' +  noun + ' to solve this problem!"';

  // Output
  document.getElementById('para2').innerHTML = message;
  document.getElementById('para2').style.visibility = "visible";
}