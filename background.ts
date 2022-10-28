chrome.runtime.onInstalled.addListener(() => {
  chrome.windows.create({
    type: 'popup',
    focused: true,
    url: './tabs/sandbox.html',
    width: 600,
    height: 500,
  })
  // ,
  //   "sandbox": {
  //     "pages": ["../src/tabs/sandbox.tsx"]
  //   }
});

export {}