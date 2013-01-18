//***********************************
//  * createRequest -- SPANISH
//  ***********************************
poppie.createRequest = function(searchVal){
	var scriptString = '';
	var scriptRegex = /\b([1-4]\s?Ne(\.|f)?(i)?|Jacob|Enós|Jarom|Omni|P(alabras)?\sde\sM(ormón)?|Mosíah|Alma|Hel(\.|amán)?|Morm(\.|ón)?|Éter|Moro(\.|ni)?|D(octrina)?\s?(y|\&)\s?\C(onvenios)?|Moisés|Abr(\.|aham)?|J(osé)?\s?S(mith)?(\s|--|-)?H(istoria)?|J(osé)?\s?S(mith)?(\s|--|-)?M(ateo)?|A(rtículos)?\sde\sF(e)?|Gén(\.|esis)?|Éx(\.|odo)?|Lev(\.|ítico)?|Núm(\.|eros)?|Deut(\.|eronomio)?|Jos(\.|ué)?|Juec(\.|es)?|Rut|[1-2]\s?Sam(\.|uel)?|[1-2]\s?Reyes|[1-2]\s?Cr(\.|ónicas)?|Esdras|Neh(\.|emías)?|Est(\.|er)?|Job|Salm(\.|os)?|Prov(\.|erbios)?|Ecl(\.|esiastés)?|Cantares|Isa(\.|ías)?|Jer(\.|emías)?|Lam(\.|entaciones)?|Ezeq(\.|uiel)?|Dan(\.|iel)?|Oseas|Joel|Amós|Abd(\.|ías)?|Jonás|Miqueas|Nahúm|Hab(\.|acuc)?|Sofo(\.|nías)?|Hag(\.|eo)?|Zac(\.|arías)?|Mal(\.|aquías)?|Mat(eo)?|Marcos|Lucas|Juan|Hechos|Rom(\.|anos)?|[1-2]\s?Cor(\.|intios)?|Gál(\.|atas)?|Ef(\.|esios)?|Filip(\.|penses)?|Col(\.|osenses)?|[1-2]\s?Tes(\.|alonicenses)?|[1-2]\s?Tim(\.|oteo)?|Tito|Filem(\.|ón)?|Heb(\.|reos)?|Santiago|[1-2]\s?Ped(\.|ro)?|[1-3]\s?J(ua)?n(\.)?|Judas|Apoc(\.|alipsis)?)\s?(\d?\d\d?):?(\d?\d?\d?)/gi;
	var refRegex = /\b(\d?\s?\w)\s(\d?\d):?(\d?\d?)/gi;
	var scriptMatch = null;
	var scriptRef = '';
	var book = '';
	var chapter = '';
	var verse = '';
	var lang = chrome.i18n.getMessage("language");
	
	scriptMatch = scriptRegex.exec(searchVal);
	
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
//************************************* SPANISH ***********************************************
		// ********************* Book of Mormon ********************
		if(book.match(/\b1\s?Ne(\.|f)?(i)?/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("bofm", "1-ne", chapter, verse, lang);
			else
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Ne(\.|f)?(i)?/i)){
			if(chapter <= 33)
				scriptString = getScriptureLink("bofm", "2-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJacob/i)){
			if(chapter <= 7)
				scriptString = getScriptureLink("bofm", "jacob", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEnós/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "enos", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJarom/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "jarom", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bOmni/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "omni", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bP(alabras)?\sde\sM(ormón)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "w-of-m", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMosiah/i)){
			if(chapter <= 29)
				scriptString = getScriptureLink("bofm", "mosiah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bAlma/i)){
			if(chapter <= 63)
				scriptString = getScriptureLink("bofm", "alma", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHel(\.|amán)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("bofm", "hel", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b3\s?Ne(\.|f)?(i)?/i)){
			if(chapter <= 30)
				scriptString = getScriptureLink("bofm", "3-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b4\s?Ne(\.|f)?(i)?/i)){
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
		} else if(book.match(/\bMoro(\.|ni)?/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("bofm", "moro", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

		// ********************** DOCTRINE AND COVENANTS ***********
		} else if(book.match(/\bD(octrina)?\s?(y|\&)\s?\C(onvenios)?/i)){
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
		} else if(book.match(/\bAbr(\.|aham)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("pgp", "abr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(osé)?\s?S(mith)?(\s|--|-)?H(istoria)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-h", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(osé)?\s?S(mith)?(\s|--|-)?M(ateo)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-m", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bA(rtículos)?\sde\sF(e)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "a-of-f", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

	//********************* OLD TESTAMENT **********************				
		} else if(book.match(/\bGén(\.|esis)?/i)){
			if(chapter <= 50)
				scriptString = getScriptureLink("ot", "gen", chapter, verse, lang);
			else
				scriptString = getTopicSearchLin(searchVal, lang);
		} else if(book.match(/\bÉx(\.|odo)?/i)){
			if(chapter <= 40)
				scriptString = getScriptureLink("ot", "ex", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLev(\.|itico)?/i)){
			if(chapter <= 27)
				scriptString = getScriptureLink("ot", "lev", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNúm(\.|eros)?/i)){
			if(chapter <= 37)
				scriptString = getScriptureLink("ot", "num", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bDeut(\.|eronomio)?/i)){
			if(chapter <= 34)
				scriptString = getScriptureLink("ot", "deut", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJos(\.|ué)?/i)){
			if(chapter <= 24)
				scriptString = getScriptureLink("ot", "josh", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJuec(\.|es)?/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("ot", "judg", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bRut/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("ot", "ruth", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Sam(\.|uel)?/i)){
			if(chapter <= 31)
				scriptString = getScriptureLink("ot", "1-sam", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Sam(\.|uel)?/i)){
			if(chapter <= 24)
				scriptString = getScriptureLink("ot", "2-sam", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Reyes/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("ot", "1-kgs", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Reyes/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("ot", "2-kgs", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Crón(\.|icas)?/i)){
			if(chapter <= 29)
				scriptString = getScriptureLink("ot", "1-chr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Crón(\.|icas)?/i)){
			if(chapter <= 36)
				scriptString = getScriptureLink("ot", "2-chr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEsdras/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("ot", "ezra", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNeh(\.|emías)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("ot", "neh", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEst(\.|er)?/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("ot", "esth", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJob/i)){
			if(chapter <= 42)
				scriptString = getScriptureLink("ot", "job", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bSal(\.|mos)?/i)){
			if(chapter <= 150)
				scriptString = getScriptureLink("ot", "ps", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bProv(\.|erbios)?/i)){
			if(chapter <= 31)
				scriptString = getScriptureLink("ot", "prov", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEclesiastés/i)){
			if(chapter <= 12)
				scriptString = getScriptureLink("ot", "ecc", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bCantares/i)){
			if(chapter <= 8)
				scriptString = getScriptureLink("ot", "song", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bIsa(\.|ías)?/i)){
			if(chapter <= 66)
				scriptString = getScriptureLink("ot", "isa", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJer(\.|emías)?/i)){
			if(chapter <= 52)
				scriptString = getScriptureLink("ot", "jer", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLam(\.|entaciones)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("ot", "lam", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEzeq(\.|uiel)?/i)){
			if(chapter <= 48)
				scriptString = getScriptureLink("ot", "ezek", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);							
		} else if(book.match(/\bDan(\.|iel)?/i)){
			if(chapter <= 12)
				scriptString = getScriptureLink("ot", "dan", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bOseas/i)){
			if(chapter <= 14)
				scriptString = getScriptureLink("ot", "hosea", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJoel/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "joel", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bAmós/i)){
			if(chapter <= 9)
				scriptString = getScriptureLink("ot", "amos", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bAbdías/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("ot", "obad", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJonás/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("ot", "jonah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMiqueas/i)){
			if(chapter <= 7)
				scriptString = getScriptureLink("ot", "micah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNahúm/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "nahum", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bHab(\.|acuc)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "hab", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bSofonías/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "zeph", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHag(\.|eo)?/i)){
			if(chapter <= 2)
				scriptString = getScriptureLink("ot", "hag", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bZac(\.|arías)?/i)){
			if(chapter <= 14)
				scriptString = getScriptureLink("ot", "zech", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMal(\.|aquías)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("ot", "mal", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);				

		// ************ NEW TESTAMENT ******************************
		} else if(book.match(/\bMat(eo)?/i)){
			if(chapter <= 28)
				scriptString = getScriptureLink("nt", "matt", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMarcos/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "mark", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLucas/i)){
			if(chapter <= 24)
				scriptString = getScriptureLink("nt", "luke", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?J(ua)?n(\.)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?J(ua)?n(\.)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "2-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b3\s?J(ua)?n(\.)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "3-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);							
		} else if(book.match(/\bJuan/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("nt", "john", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHechos/i)){
			if(chapter <= 28)
				scriptString = getScriptureLink("nt", "acts", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bRom(\.|anos)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "rom", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Cor(\.|intios)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "1-cor", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Cor(\.|intions)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("nt", "2-cor", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bGál(\.|atas)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "gal", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEf(\.|esios)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "eph", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bFilip(\.|enses)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "philip", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bCol(\.|osenses)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "col", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Tes(\.|salonicenses)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-thes", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Tes(\.|salonicenses)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "2-thes", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Tim(\.|oteo)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "1-tim", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Tim(\.|oteo)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "2-tim", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bTito/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "titus", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bFilem(\.|ón)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "philem", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHeb(\.|reos)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("nt", "heb", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bSantiago/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "james", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Ped(\.|ro)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-pet", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\sPed(\.|ro)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "2-pet", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJudas/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "jude", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bApoc(\.|alipsis)?/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("nt", "rev", chapter, verse, lang);
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
	return scriptString;
}