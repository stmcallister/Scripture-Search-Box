Scripture-Search-Box
====================
Scripture Search Box is a Google Chrome Extension that provides a search box in your browser to easily search the 
scriptures of The Church of Jesus Christ of Latter-day Saints found on scriptures.lds.org. You can enter a scripture 
reference, such as John 3:16, or a topic, such as love, into the search box and the extension will open the search 
results in a new tab.

v. 0.3.16 -- This version will search the King James Version of the Bible, including the Old Testament and New Testament, 
            The Book of Mormon, Doctrine & Covenants, and The Pearl of Great Price.

v. 0.4.3 -- Now supporting searches in Spanish! If you are running Chrome in a Spanish speaking locale then Scripture 
          Search Box will also run in Spanish, and search the Spanish version of the LDS Scriptures site! Support for 
          other languages are planned in future releases.

LOCALIZATION
The localization of this extension is handled through chrome.i18n. To add support for a new language, you will need to
do the following:

1.) Create a new language directory in the _locales directory of the extension. The name of that directory must
correspond with its locale. For example the Spanish laguange locale is 'es', so there is a directory called 'es' in the
locales directory.

2.) Copy the messages.json file from another local directory and then translate the values for each element's message into the language of the locale. 

3.) Create a copy of the createRequest.js file and append the name of the language in the file name. For example, the spanish version of the createRequest.js file is called createRequestSpanish.js. Make sure that the file name matches the one inserted in the CreateRquest element in the messages.json file.

4.) Modify the regex in your new createRequest<language>.js file to provide patterns that match book names in the language you're providing a translation for.

