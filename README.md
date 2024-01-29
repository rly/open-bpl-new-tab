# Open BPL Catalog in New Tab

This Chrome Extension adds "Open in New Tab" buttons to [Berkeley Public Library (Berkeley, CA, USA) Catalog](https://catalog.berkeleypubliclibrary.org) search results.

The BPL Catalog does not allow you to open search results in new tabs (or windows) by right-clicking and selecting "Open link in new tab." This is frustrating when trying to open multiple search results in separate tabs in order to browse and compare them. 

Using this extension adds an "Open in New Tab" button to each search result. You can then click the button to open the search result in a new tab, or you can right click the button and select "Open link in new window" to open the search result in a new window.

Note: When using this button, on the opened book/resource page, the left and right arrows on the top-left and top-right will be disabled. These normally allow you to navigate to the previous and next search result, respectively. There will also not be a "Back to Results" link at the top.

The extension runs only on `https://catalog.berkeleypubliclibrary.org/*` URLs.

## Example

![screenshot](https://github.com/rly/open-bpl-new-tab/assets/310197/a0b213c2-cce9-43bf-8a8d-3c4c09e723af)

## Implementation

The extension is very simple; it consists of about [60 lines of pure Javascript](https://github.com/rly/open-bpl-new-tab/blob/main/scripts/content.js) that iterates through the search result elements after the search results are observed and appends a new "Open in New Tab" button to the list of buttons at the bottom of each search result element.
