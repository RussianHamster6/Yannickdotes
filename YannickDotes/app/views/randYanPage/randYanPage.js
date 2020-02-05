var LoadingIndicatior = require("@nstudio/nativescript-loading-indicator").LoadingIndicator;

exports.pageLoaded = function (args) {
    var loader = new LoadingIndicatior();
    page = args.object;

    loader.show();
    
    var http = new XMLHttpRequest();
    var url = "https://0kqdvmlx81.execute-api.eu-west-2.amazonaws.com/test/randYan";
    http.open('get',url,true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        loader.hide();
        page.getViewById("randYanTxt").text = http.response.body;
    };
    http.send();

};
