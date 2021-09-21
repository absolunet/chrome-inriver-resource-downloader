var regexPictureUrl = /url\(\"(.*\/(picture\?id=.+&size=)?)(.*)\"\)/;
var regexSupportedImageConfigs = /.*\.(jpg|jpeg|gif|png|tif|tiff)/i;
  
var resources = [];
var filenames = [];

// Loop all resource cards. Need to update if inRiver changes HTML structure of workareas
$("div[entity-type-id='Resource']"+ (scriptOptions.selectedOnly ? ".card-selected" : "") +" div.card-picture").each(function(){
  var resourceUrl = $(this).css('background-image');
  var parsedUrl = resourceUrl.match(regexPictureUrl);
  var resourceFilename = $(this).attr("title");
  var config = "Original";
  
  if(resourceFilename.match(regexSupportedImageConfigs)) {
    config = scriptOptions.imageConfig;
  }
  
  if (parsedUrl != undefined && parsedUrl.length > 0) {
	  var resource = {
		url: parsedUrl[1] + config,
		filename: resourceFilename
	  };
	  
	  if(!filenames.includes(resource.filename)) {
		filenames.push(resource.filename);
		resources.push(resource);
	  }
  }
  else {
	  console.log("Skipping resource "+ resourceFilename +" ("+ resourceUrl +") because the pattern did not match");
  }
});

resources;