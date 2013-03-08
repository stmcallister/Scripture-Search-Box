//***********************************
//  * createRequest -- PORTUGUESE
//  ***********************************
poppie.createRequest = function(searchVal){
	var scriptString = '';
	var scriptRegex = /\b([1-4]\s?Né(\.|f)?(i)?|Jacó|Enos|Jarom|Ômni|P(alavras)?\sde\sM(órmon)?|Mosias|Alma|Hel(\.|amã)?|Mórm(\.|on)?|Éter|Morô(\.|ni)?|D(outrina)?\s?(e|\&)\s?C(onvênios)?|Moisés|Abr(\.|aão)?|J(oseph)?\s?S(mith)?(\s|--|-)?H(istória)?|J(oseph)?\s?S(mith)?(\s|--|-)?M(ateus)?|R(egras)?\sde\sF(é)?)\s?(\d?\d\d?):?(\d?\d?\d?)/gi;
	var refRegex = /\b(\d?\s?\w)\s(\d?\d):?(\d?\d?)/gi;
	var scriptMatch = null;
	var scriptRef = '';
	var book = '';
	var chapter = '';
	var verse = '';
	var lang = chrome.i18n.getMessage("language");
	
	scriptMatch = scriptRegex.exec(searchVal);
	//console.log(scriptMatch);
	
	if(scriptMatch != null){
		scriptRef = trim(scriptMatch[0]);

		// get book
		book = scriptMatch[1];

		// get chapter
		for(i=2; i < scriptMatch.length; i++){
			if(!isNaN(parseInt(scriptMatch[i]))){
				chapter = scriptMatch[i];
				break;
			}
		}
		
		// get verse
		for(x=i+1; x < scriptMatch.length; x++){
			if(!isNaN(parseInt(scriptMatch[x]))){
				verse = scriptMatch[x];
				break;
			}
		}
//************************************* PORTUGUESE ***********************************************
		// ********************* Book of Mormon ********************
		if(book.match(/\b1\s?Né(\.|f)?(i)?/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("bofm", "1-ne", chapter, verse, lang);
			else
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Né(\.|f)?(i)?/i)){
			if(chapter <= 33)
				scriptString = getScriptureLink("bofm", "2-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJacó/i)){
			if(chapter <= 7)
				scriptString = getScriptureLink("bofm", "jacob", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEnos/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "enos", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJarom/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "jarom", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bÔmni/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "omni", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bP(alavras)?\sde\sM(órmon)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "w-of-m", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMosias/i)){
			if(chapter <= 29)
				scriptString = getScriptureLink("bofm", "mosiah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bAlma/i)){
			if(chapter <= 63)
				scriptString = getScriptureLink("bofm", "alma", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHel(\.|amã)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("bofm", "hel", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b3\s?Né(\.|f)?(i)?/i)){
			if(chapter <= 30)
				scriptString = getScriptureLink("bofm", "3-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b4\s?Né(\.|f)?(i)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "4-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMorm(\.|ón)?/i)){
			if(chapter <= 9)
				scriptString = getScriptureLink("bofm", "morm", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bÉter/i)){
			if(chapter <= 15)
				scriptString = getScriptureLink("bofm", "ether", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMorô(\.|ni)?/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("bofm", "moro", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

		// ********************** DOCTRINE AND COVENANTS ***********
		} else if(book.match(/\bD(outrina)?\s?(e|\&)\s?C(onvênios)?/i)){
			if(chapter <= 138)
				scriptString = getScriptureLink("dc-testament", "dc", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

		// *********************** PEARL OF GREAT PRICE ************
		} else if(book.match(/\bMoisés/i)){
			if(chapter <= 8)
				scriptString = getScriptureLink("pgp", "moses", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bAbr(\.|aão)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("pgp", "abr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(oseph)?\s?S(mith)?(\s|--|-)?H(istória)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-h", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(oseph)?\s?S(mith)?(\s|--|-)?M(ateus)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-m", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bR(egras)?\sde\sF(é)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "a-of-f", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else {
			scriptString = getTopicSearchLink(scriptMatch[0], lang);
		}	
	} else {
		// attach formVal string to search by topic rather than reference
		// http://lds.org/scriptures/search?lang=eng&query=Holy+Ghost
		scriptString = getTopicSearchLink(searchVal, lang);
	}
	// FOR DEBUGGING
	//alert("createRequestPortuguese: " + scriptString);
	return scriptString;
}