let currentTabId = null;
let lastVisitTime = Date.now();

chrome.tabs.onActivated.addListener(activeInfo => {
  handleTabSwitch(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === 'complete') {
    handleTabSwitch(tabId);
  }
});

function handleTabSwitch(newTabId) {
  const now = Date.now();
  const timeSpent = now - lastVisitTime;

  if (currentTabId !== null && currentTabId !== newTabId) {
    chrome.tabs.get(currentTabId, tab => {
      const domain = new URL(tab.url).hostname;
      sendData(domain, timeSpent);
    });
  }

  currentTabId = newTabId;
  lastVisitTime = now;
}

function sendData(domain, timeSpent) {
  fetch('http://localhost:3000/log', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ domain, timeSpent, userId: "user123" })
  });
}
