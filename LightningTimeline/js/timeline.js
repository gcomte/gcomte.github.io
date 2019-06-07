let dataUrl;
if(window.location.href.includes('gcomte.github.io')) {
    dataUrl = 'https://raw.githubusercontent.com/gcomte/gcomte.github.io/master/LightningTimeline/data.json';
} else {
    dataUrl = window.location.href.split('/')[0] + 'LightningTimeline/data.json';
}

timeline = new TL.Timeline('timeline-embed', dataUrl);