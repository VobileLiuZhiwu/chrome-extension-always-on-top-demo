chrome.runtime.onInstalled.addListener(() => {
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.windows.create({
      type: 'popup',
      focused: true,
      url: './sandboxes/test.html',
      width: 600,
      height: 500,
    })
    sendResponse('');
  })
});

export {}