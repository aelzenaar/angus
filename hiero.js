function getHeiroglyphUrl(gardiner) {
  return "https://en.wikipedia.org/w/extensions/wikihiero/img/hiero_" + gardiner.toUpperCase() + ".png"
}

accentsMap = {
  "h.": "\u1E25",
  "h)": "\u1E2B",
  "h_": "\u1E96",
  "s<": "\u0161",
  "t_": "\u1E6F",
  "d_": "\u1E0F",
  "k.": "\u1E33"
//   "i<": "\u01D0"
}

function standardiseAccents(s) {
  s = s.toLowerCase()

  // Standardise spelling first
  s = s.replace("j","y");
  s = s.replace("z","s");
  s = s.replace("q","k.");

  // Easy swaps
  s = s.replace("a","\uA723");
  s = s.replace("c","\uA725");

  // Note: issue #1.
  //s = s.replace("i","\uA7BD");
  s = s.replace("i","\u1EC9");

  // Accents and decorations
  [".","<",")","_"].forEach( function(accent,_) {
    console.log("check for accent " + accent + " in " + s);
    // Use indexOf() not search() so we don't need to escape special chars like ".". Also start search from previous position +1 to avoid infinite loops.
    for(var pos = s.indexOf(accent); pos != -1; pos = s.indexOf(accent,pos+1)) {
      console.log("found accent " + accent + " at " + pos)
      beginning = s.slice(0,pos - 1);
      toReplace = s.slice(pos - 1, pos + 1);
      end = s.slice(pos + 1);
      if(toReplace in accentsMap) toReplace = accentsMap[toReplace];
      s = beginning + toReplace + end;
    }
  });
  return s;
}
