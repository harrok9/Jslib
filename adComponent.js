function reloadAd() {
    const adContainer = document.getElementById('adContainer');
    // Clear the ad container
    adContainer.innerHTML = '';
    // Create new ad script element
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4650758374838832';
    // Create new ins element
    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.setAttribute('data-ad-client', 'ca-pub-4650758374838832');
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-ad-slot', '1151282562');
    ins.setAttribute('data-full-width-responsive', 'true');
    ins.style.display = 'block';
    // Append new elements to the ad container
    adContainer.appendChild(script);
    adContainer.appendChild(ins);
    // Initialize the ad
    (adsbygoogle = window.adsbygoogle || []).push({});
}

// Optional: Reload the ad every 20 seconds (20000 milliseconds)
setInterval(reloadAd, 20000);
