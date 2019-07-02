var main=function () {
    var url="http://api.flickr.com/services/feeds/photos_public.gne?"+
        "tags=dogs&format=json";

    $.getJSON(url, function (flickResponse) {
        console.log(flickResponse);

    })
}

$(document).ready(main);