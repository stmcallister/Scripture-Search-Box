// search form event listeners
document.forms['searchForm'].addEventListener('submit', function() {
	searchScriptures();
	// stop submission
	return false;
});