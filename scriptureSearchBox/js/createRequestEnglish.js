poppie.createRequest = function(searchVal){
	var scriptString = '';
	var scriptRegex = /\b([1-4]\s?Ne(\.|ph)?(i)?|Jacob|Enos|Jarom|Omni|W(ords)?\sOf\sM(ormon)?|Mosiah|Alma|Hel(\.|aman)?|Morm(\.|on)?|Ether|Moro(\.|ni)?|D(octrine)?\s?(and|\&)\s?\C(ovenents)?|Moses|Abr(\.|aham)?|J(oseph)?\s?S(mith)?(\s|--|-)?H(istory)?|J(oseph)?\s?S(mith)?(\s|--|-)?M(atthew)?|A(rticles)?\sof\sF(aith)?|Gen(\.|esis)?|Ex(\.|odus)?|Lev(\.|iticus)?|Num(\.|bers)?|Deut(\.|eronomy)?|Josh(\.|ua)?|Judg(\.|es)?|Ruth|[1-2]\s?Sam(\.|uel)?|[1-2]\s?K(ings|gs(.)?)|[1-2]\s?Chr(\.|onicles)?|Ezra|Neh(\.|emiah)?|Esth(\.|er)?|Job|Ps(\.|alms)?|Prov(\.|erbs)?|Eccl(\.|esiastes)?|Song(\.|\sof\sSolomon)?|Isa(\.|iah)?|Jer(\.|emiah)?|Lam(\.|entations)?|Ezek(\.|iel)?|Dan(\.|iel)?|Hosea|Joel|Amos|Obad(\.|iah)?|Jonah|Micah|Nahum|Hab(\.|akkuk)?|Zeph(\.|aniah)?|Hag(\.|gai)?|Zech(\.|ariah)?|Mal(\.|achi)?|Matt(hew)?|Mark|Luke|John|Acts|Rom(\.|ans)?|[1-2]\s?Cor(\.|inthians)?|Gal(\.|atians)?|Eph(\.|esians)?|Philip(\.|pians)?|Col(\.|ossians)?|[1-2]\s?Thes(\.|salonians)?|[1-2]\s?Tim(\.|othy)?|Titus|Philem(\.|on)?|Heb(\.|rews)?|James|[1-2]\s?Pet(\.|er)?|[1-3]\s?J(oh)?n(\.)?|Jude|Rev(\.|elation)?)\s?(\d?\d\d?):?(\d?\d?\d?)/gi;
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
				if(scriptMatch[i].indexOf(' ') == -1)
					verse = scriptMatch[x];
				else
					verse = 0;
				break;
			}
		}
		// ********************* Book of Mormon ********************
		if(book.match(/\b1\s?Ne(\.|ph)?(i)?/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("bofm", "1-ne", chapter, verse, lang);
			else
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Ne(\.|ph)?(i)?/i)){
			if(chapter <= 33)
				scriptString = getScriptureLink("bofm", "2-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJacob/i)){
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
		} else if(book.match(/\bOmni/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "omni", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bW(ords)?\sOf\sM(ormon)?/i)){
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
		} else if(book.match(/\bHel(\.|aman)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("bofm", "hel", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b3\s?Ne(\.|ph)?(i)?/i)){
			if(chapter <= 30)
				scriptString = getScriptureLink("bofm", "3-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b4\s?Ne(\.|ph)?(i)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("bofm", "4-ne", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMorm(\.|on)?/i)){
			if(chapter <= 9)
				scriptString = getScriptureLink("bofm", "morm", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEther/i)){
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
		} else if(book.match(/\bD(octrine)?\s?(and|\&)\s?\C(ovenents)?/i)){
			if(chapter <= 138)
				scriptString = getScriptureLink("dc-testament", "dc", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

		// *********************** PEARL OF GREAT PRICE ************
		} else if(book.match(/\bMoses/i)){
			if(chapter <= 8)
				scriptString = getScriptureLink("pgp", "moses", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bAbr(\.|aham)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("pgp", "abr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(oseph)?\s?S(mith)?(\s|--|-)?H(istory)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-h", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJ(oseph)?\s?S(mith)?(\s|--|-)?M(atthew)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "js-m", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bA(rticles)?\sof\sF(aith)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("pgp", "a-of-f", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);

	//********************* OLD TESTAMENT **********************				
		} else if(book.match(/\bGen(\.|esis)?/i)){
			if(chapter <= 50)
				scriptString = getScriptureLink("ot", "gen", chapter, verse, lang);
			else
				scriptString = getTopicSearchLin(searchVal, lang);
		} else if(book.match(/\bEx(\.|odus)?/i)){
			if(chapter <= 40)
				scriptString = getScriptureLink("ot", "ex", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLev(\.|iticus)?/i)){
			if(chapter <= 27)
				scriptString = getScriptureLink("ot", "lev", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNum(\.|bers)?/i)){
			if(chapter <= 37)
				scriptString = getScriptureLink("ot", "num", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bDeut(\.|eronomy)?/i)){
			if(chapter <= 34)
				scriptString = getScriptureLink("ot", "deut", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJosh(\.|ua)?/i)){
			if(chapter <= 24)
				scriptString = getScriptureLink("ot", "josh", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJudg(\.|es)?/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("ot", "judg", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bRuth/i)){
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
		} else if(book.match(/\b1\s?K(ings|gs(.)?)/i)){
			if(chapter <= 22)
				scriptString = getScriptureLink("ot", "1-kgs", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?K(ings|gs(.)?)/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("ot", "2-kgs", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Chr(\.|onicles)?/i)){
			if(chapter <= 29)
				scriptString = getScriptureLink("ot", "1-chr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Chr(\.|onicles)?/i)){
			if(chapter <= 36)
				scriptString = getScriptureLink("ot", "2-chr", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEzra/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("ot", "ezra", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNeh(\.|emiah)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("ot", "neh", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEsth(\.|er)?/i)){
			if(chapter <= 10)
				scriptString = getScriptureLink("ot", "esth", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJob/i)){
			if(chapter <= 42)
				scriptString = getScriptureLink("ot", "job", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bPs(\.|alms)?/i)){
			if(chapter <= 150)
				scriptString = getScriptureLink("ot", "ps", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bProv(\.|erbs)?/i)){
			if(chapter <= 31)
				scriptString = getScriptureLink("ot", "prov", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEcclesiastes/i)){
			if(chapter <= 12)
				scriptString = getScriptureLink("ot", "ecc", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bSong(\.|\sof\sSolomon)?/i)){
			if(chapter <= 8)
				scriptString = getScriptureLink("ot", "song", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bIsa(\.|iah)?/i)){
			if(chapter <= 66)
				scriptString = getScriptureLink("ot", "isa", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJer(\.|emiah)?/i)){
			if(chapter <= 52)
				scriptString = getScriptureLink("ot", "jer", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLam(\.|entations)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("ot", "lam", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEzek(\.|iel)?/i)){
			if(chapter <= 48)
				scriptString = getScriptureLink("ot", "ezek", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);							
		} else if(book.match(/\bDan(\.|iel)?/i)){
			if(chapter <= 12)
				scriptString = getScriptureLink("ot", "dan", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHosea/i)){
			if(chapter <= 14)
				scriptString = getScriptureLink("ot", "hosea", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJoel/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "joel", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bAmos/i)){
			if(chapter <= 9)
				scriptString = getScriptureLink("ot", "amos", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bObad(\.|iah)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("ot", "obad", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJonah/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("ot", "jonah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMicah/i)){
			if(chapter <= 7)
				scriptString = getScriptureLink("ot", "micah", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bNahum/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "nahum", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bHab(\.|akkuk)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "hab", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bZeph(\.|aniah)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("ot", "zeph", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHag(\.|gai)?/i)){
			if(chapter <= 2)
				scriptString = getScriptureLink("ot", "hag", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bZech(\.|ariah)?/i)){
			if(chapter <= 14)
				scriptString = getScriptureLink("ot", "zech", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMal(\.|achi)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("ot", "mal", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);				

		// ************ NEW TESTAMENT ******************************
		} else if(book.match(/\bMatt(hew)?/i)){
			if(chapter <= 28)
				scriptString = getScriptureLink("nt", "matt", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bMark/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "mark", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bLuke/i)){
			if(chapter <= 24)
				scriptString = getScriptureLink("nt", "luke", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?J(oh)?n(\.)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?J(oh)?n(\.)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "2-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b3\s?J(oh)?n(\.)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "3-jn", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);							
		} else if(book.match(/\bJohn/i)){
			if(chapter <= 21)
				scriptString = getScriptureLink("nt", "john", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bActs/i)){
			if(chapter <= 28)
				scriptString = getScriptureLink("nt", "acts", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);	
		} else if(book.match(/\bRom(\.|ans)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "rom", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Cor(\.|inthians)?/i)){
			if(chapter <= 16)
				scriptString = getScriptureLink("nt", "1-cor", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Cor(\.|inthians)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("nt", "2-cor", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bGal(\.|atia                                    	ns)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "gal", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bEph(\.|esians)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "eph", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bPhilip(\.|pians)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "philip", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bCol(\.|ossians)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "col", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Thes(\.|salonians)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-thes", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Thes(\.|salonians)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "2-thes", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Tim(\.|othy)?/i)){
			if(chapter <= 6)
				scriptString = getScriptureLink("nt", "1-tim", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\s?Tim(\.|othy)?/i)){
			if(chapter <= 4)
				scriptString = getScriptureLink("nt", "2-tim", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bTitus/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "titus", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bPhilem(\.|on)?/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "philem", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bHeb(\.|rews)?/i)){
			if(chapter <= 13)
				scriptString = getScriptureLink("nt", "heb", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJames/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "james", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b1\s?Pet(\.|er)?/i)){
			if(chapter <= 5)
				scriptString = getScriptureLink("nt", "1-pet", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\b2\sPet(\.|er)?/i)){
			if(chapter <= 3)
				scriptString = getScriptureLink("nt", "2-pet", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bJude/i)){
			if(chapter <= 1)
				scriptString = getScriptureLink("nt", "jude", chapter, verse, lang);
			else 
				scriptString = getTopicSearchLink(searchVal, lang);
		} else if(book.match(/\bRev(\.|elation)?/i)){
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
	// FOR DEBUGGING
	return scriptString;
}