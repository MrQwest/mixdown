/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/(function(e){function t(){o.setAttribute("content",f),l=!0}function n(){o.setAttribute("content",a),l=!1}function r(r){d=r.accelerationIncludingGravity,c=Math.abs(d.x),h=Math.abs(d.y),p=Math.abs(d.z),(!e.orientation||e.orientation===180)&&(c>7||(p>6&&h<8||p<8&&h>6)&&c>5)?l&&n():l||t()}var i=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(i)&&i.indexOf("AppleWebKit")>-1))return;var s=e.document;if(!s.querySelector)return;var o=s.querySelector("meta[name=viewport]"),u=o&&o.getAttribute("content"),a=u+",maximum-scale=1",f=u+",maximum-scale=10",l=!0,c,h,p,d;if(!o)return;e.addEventListener("orientationchange",t,!1),e.addEventListener("devicemotion",r,!1)})(this);SC.initialize({client_id:"91bd52531c9b150e11efac29abdb79eb"});$.get("https://api.soundcloud.com/tracks/?client_id=91bd52531c9b150e11efac29abdb79eb&format=json",{q:"dubstep",downloadable:!0,duration:{from:18e5},limit:10},function(e){function t(e){var t,n,r,i;i=Math.floor(e/1e3);r=Math.floor(i/60);i%=60;n=Math.floor(r/60);r%=60;t=Math.floor(n/24);n%=24;return""+n+"hr :"+r+"mins"}console.log(e);var n="";for(var r=0;r<e.length;r++){var i=typeof e[r].artwork_url!="undefined"&&e[r].artwork_url!==null?e[r].artwork_url:"ben",s=i.replace("large","t200x200");n+="<div class=track><a href="+e[r].permalink_url+' alt="Permalink to '+e[r].title+'"><img class=artwork src='+s+" alt="+e[r].title+' /></a><div class="clearfix meta"><h1>'+e[r].title+'</h1><p class="metadata"><span class="ss-icon">Time</span>'+t(e[r].duration)+' | <span class="ss-icon">play</span> '+e[r].playback_count+' | <span class="ss-icon">download</span> '+e[r].download_count+'</p><audio controls="controls" preload="none"><source src='+e[r].stream_url+'?client_id=91bd52531c9b150e11efac29abdb79eb type="audio/mpeg">Your browser does not support the audio element.</audio><!-- download button --><a href='+e[r].download_url+'?client_id=91bd52531c9b150e11efac29abdb79eb class="ss-icon btn">download</a></div></div>'}$("#sc").html(n)});