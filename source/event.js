// This function is called from the popup code
function downloadImages(config, callback) {
  chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"}, function(){
    chrome.tabs.executeScript(null, {code: "var scriptOptions = {config:'"+ config + "'};"}, function(){
      chrome.tabs.executeScript(null, {file: "content_script.js"}, function(results){
      
		var message = '';
		
		if(results[0].length > 0) {
			message =  'Downloading ' + results[0].length + ' resources...';
			for(var i = 0; i < results[0].length; i++) {
				chrome.downloads.download({
					url: results[0][i].url,
					filename: results[0][i].filename
				});
			}
		}
		else {
			message = 'There are no resource entities on this page.';
		}
		callback(message);
      });
    });
  });
};