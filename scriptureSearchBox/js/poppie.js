var poppie = {};

(function() {
    var cr = document.createElement('script'); 
    cr.type = 'text/javascript';
    cr.src = chrome.i18n.getMessage("createRequest");
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(cr, s);
  })()

window.onload = function() {
	document.getElementById('title').innerText = chrome.i18n.getMessage("formTitle");
	document.getElementById('searchButton').value = chrome.i18n.getMessage("formButton");

	// put focus on search text box
    document.getElementById('searchBox').focus();
}

function searchScriptures(){
	var formVal = document.getElementById('searchBox').value;
	var searchString = poppie.createRequest(formVal);
	var scriptureUrl = 'https://www.churchofjesuschrist.org/' + searchString;
	
	// open a new tab and call the scripture search page
	chrome.tabs.create({"url":scriptureUrl,"selected":true});
}

function searchByEnter(event){
	console.log('searchByEvent');
	if(event.keyCode == 13)
		searchScriptures();
}

function getScriptureLink(vol, book, chap, verse, lang){
	var id = 'primary';
	
	if(verse > 1)
		id = verse-1;

	return "study/scriptures/"+vol+"/"+book+"/"+chap+"."+verse+"?lang="+lang+"#p"+id;
}

function getTopicSearchLink(searchString, lang){
	// search?lang=eng&query=peacemaker&facet=scriptures
	searchString = searchString.replace(/\s/, '+');
	return "search?lang="+lang+"&query="+ searchString + "&facet=scriptures";
}


// remove multiple, leading or trailing spaces
function trim(s) {
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");

	return s;
}

function clickHandler(e) {
	searchScriptures();
}	

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('searchButton').addEventListener('click', clickHandler);
});