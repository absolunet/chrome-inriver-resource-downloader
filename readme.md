# Chrome extension: inRiver Resource Downloader

## Installation
To install, download the source folder on your local drive. Then, add the extension to Chrome [chrome://extensions/](chrome://extensions/):
1. Activate the developer mode checkbox.
2. Load the unpacked extension from the source folder. 

The extension needs to stay in the folder. It will stop working if it's moved or deleted.

After installing the extension, you will have a new button in your Chrome toolbar. Click on it and choose the image configuration to start a download.

## Prerequisite
The extension uses the title attribute of the entity card as the filename for the download. This is the Display Name of the entity. So, you will get better results if you set the ResourceFilename field as the Display Name.

## How to Use
To download resources, there must be resource entities in the workarea (it won't download main pictures for Products, Items, Tasks or other entities).

Only the resources that are loaded in the page (visible) will be downloaded. You can scroll to the end of the results to make sure that all the resources you want to download have been loaded on the page.

It can take a little while for Chrome to start the download of all the resources.

The downloaded resource will be of the selected image configuration unless it is not one of these file types: jpg, jpeg, gif, png, tif, tiff. Then, the original image configuration will be downloaded (i.e.: a PDF file).

## Notes
The extension is sort of a workaround and could stop working after an update if inRiver makes modifications that change the HTML markup of the workarea page.

You can add image configurations to download by adding options to the select element of the popup.html file.