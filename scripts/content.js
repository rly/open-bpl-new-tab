// Callback function to execute when mutations to the results list are observed
const editResultsList = (mutationList, observer) => {
  // For each search result, add an "Open in new tab" button
  const resourceContentList = document.querySelectorAll("div.resourceContent");
  resourceContentList.forEach(function(resourceContent) {
    availabilityLink = resourceContent.querySelector("a.availabilityLink");
    resourceId = availabilityLink.id.substring(0, availabilityLink.id.indexOf("_"));

    // Create a new button with the same styling as the "Add to list" button
    // that opens a link to the resource in the catalog with no additional
    // parameters in a new window/tab
    const newLink = document.createElement("a");
    newLink.href = `${window.location.origin}/?section=resource&resourceid=${resourceId}`;
    newLink.target = "_blank";
    newLink.classList.add("lowliteButton");
    newLink.textContent = "Open in new tab";

    // Create a new list item and add the button to the list item
    // like what exists for the other buttons
    const newLinkLI = document.createElement("li");
    newLinkLI.appendChild(newLink);

    // Append the list item with the button to the list of search result actions
    const resultActions = resourceContent.querySelector("ul.resultActions");
    resultActions.appendChild(newLinkLI);
  });
};

// Callback function to execute when mutations to the main loader are observed
// e.g., when the results have been returned
const mainLoaderCallback = (mutationList, observer) => {
  mutationList.forEach(function(mutation) {
    // Check all the mutations to the main loader and if the results content
    // node was added, then create a new mutation observer to take action
    // when the results list has been populated
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      if (mutation.addedNodes[i].id === 'ls2pac_resultsContent') {
        const resultsList = mutation.addedNodes[i].firstElementChild.firstElementChild;
        if (resultsList.id === 'ls2pac_resultsList') {
          const observer = new MutationObserver(editResultsList);
          observer.observe(resultsList, { childList: true });
        }  
      }
    }
  })
};

// Select the node that will be observed for mutations
const targetNode = document.getElementById("mainLoader");

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mainLoaderCallback);

// Start observing the target node for configured mutations
observer.observe(document, config);

// Later, you can stop observing
//observer.disconnect();
