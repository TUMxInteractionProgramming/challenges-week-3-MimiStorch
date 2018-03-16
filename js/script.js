function switchChannel(channelName){
    console.log("Tuning in to channel", channelName);
    document.getElementById('channel-name').innerHTML =  channelName;
    document.getElementById('channel-location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank" style="color:white">upgrading.never.helps</a>';
}

function unlikingChannel(star){
    console.log("I like it");
    document.getElementById('app-bar-star').setAttribute('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

function likingChannel(star){
    document.getElementById('app-bar-star').setAttribute('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId){
    $('#tab-bar button').removeClass('selected');
    console.log('Changing to tab', tabId);
    $(tabId).addClass('selected');
}

function toggleEmojis() {
 $('#emojis').toggle();
}