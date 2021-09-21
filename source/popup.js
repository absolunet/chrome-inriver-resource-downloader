function onPageDetailsReceived(results) {
  document.getElementById('results').innerText = results;
}

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

/**
 * Download resources of the current tab.
 *
 * @param {string} config The configurations to download the resources.
 */
 
function downloadResources(config) {
  chrome.runtime.getBackgroundPage(function(eventPage) {
	eventPage.downloadImages(config, function (results) { 
		document.getElementById('results').innerHTML = results;
	});
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var selectedOnly = document.getElementById('selected-only');
    var dropdown = document.getElementById('dropdown');
    var downloadButton = document.getElementById('download-button');
  
    downloadButton.addEventListener('click', () => {
      downloadButton.disabled = true;
      downloadResources({imageConfig:dropdown.value, selectedOnly:selectedOnly.checked});
    });
  });
});
