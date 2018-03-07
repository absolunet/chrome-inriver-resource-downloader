var regexPictureUrl = /url\(\"(.*\/(picture\?id=.+&size=)?)(.*)\"\)/;
var regexSupportedImageConfigs = /.*\.(jpg|jpeg|gif|png|tif|tiff)/i;
  
var resources = [];
var filenames = [];

// Loop all resource cards. Need to update if inRiver changes HTML structure of workareas
$("div[entity-type-id='Resource'] div.card-picture").each(function(){
  var resourceUrl = $(this).css('background-image').match(regexPictureUrl);
  var resourceFilename = $(this).attr("title");
  var config = "Original";
  
  if(resourceFilename.match(regexSupportedImageConfigs)) {
    config = scriptOptions.config;
  }
  resourceUrl[3] = resourceUrl[3].replace(resourceUrl[3], config);
  
  var resource = {
    url: resourceUrl[1] + resourceUrl[3],
    filename: resourceFilename
  };
  
  if(!filenames.includes(resource.filename)) {
    filenames.push(resource.filename);
    resources.push(resource);
  }
});

resources;