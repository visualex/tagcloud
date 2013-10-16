tagcloud
========

jQuery plugin for making an easy multiple select html element.

*TAG CLOUD 

by Aleksandr tresorg, use and abuse :)
use over a multiple <select> element like so:
$('select.tags').tagcloud();    

css styles for your tagcloud

.tagcloud.cloud{padding:5px; background:black; overflow:hidden;}
    .tagcloud.cloud h5{font:normal 16px Arial;}
        .tagcloud.cloud a{display:block; float:left; margin: 5px 5px 0 0; padding:5px; background-color:#333; color:white; cursor:pointer;}
        .tagcloud.cloud a:hover{background-color:#444; }
    .tagcloud.selected{ margin:10px 0; padding:5px; background:#111; overflow:hidden;}
    .tagcloud.selected h5{}
         .tagcloud.selected a{display:block; float:left; margin: 5px 5px 0 0;  padding:5px; background-color:#555; color:white; cursor:pointer;}
         .tagcloud.selected a:hover{background-color:#444; }
         .tagcloud.selected a:after{content:" x ";  vertical-align: super; color:#0096C1;}
