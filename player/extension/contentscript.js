const s = document.createElement('script')
s.src = chrome.runtime.getURL('script.js') // eslint-disable-line no-undef
document.head.appendChild(s)
