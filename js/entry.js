function Entry(entry){
  this.entry = entry;
}

Entry.prototype.words = function(){
  return this.entry.split(" ").length;
}

Entry.prototype.vowels = function(){
 return this.entry.toLowerCase().match(/[aeiou]/gi).length;
}

Entry.prototype.consonants = function(){
 return this.entry.toLowerCase().match(/[bcdfghjklmnpqrstvxzwy]/gi).length;
}

Entry.prototype.getTeaser = function(){
	firstSentence = this.entry.split(".")[0];
  if (firstSentence.split(" ").length < 8) {
  	return this.entry;
  } else {
  	return firstSentence.split(" ").slice(0, 8).join(" ");
  }
}

exports.journalModule = Entry;
