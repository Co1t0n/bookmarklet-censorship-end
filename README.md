# bookmarklet-censorship-end
bookmarklet:
''' javascript:(function(){let a=prompt("what site do you want to open?");a.startsWith("https://")||(a="https://"+a),window.open(a,"_self"),win.document.body.style.margin="0",win.document.body.style.height="100vh";var b=win.document.createElement("iframe");b.style.border="none",b.style.width="100%",b.style.height="100%",b.style.margin="0",b.src=a,win.document.body.appendChild(b)})(); '''
