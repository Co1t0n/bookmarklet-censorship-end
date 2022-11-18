 (function() {
    let url = prompt("what site do you want to open?");
    if (!url.startsWith("https://")) url = "https://" + url
  window.open(url,'_self');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
 var iframe = win.document.createElement('iframe');
 
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    
    win.document.body.appendChild(iframe);
    
})();
