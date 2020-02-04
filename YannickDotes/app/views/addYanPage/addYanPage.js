var LoadingIndicatior = require("@nstudio/nativescript-loading-indicator").LoadingIndicator;
var dialogs = require("tns-core-modules/ui/dialogs");
var view = require("tns-core-modules/ui/core/view");

var page;

exports.pageLoaded = function (args) {
    page = args.object;
};

function submitDote(){

    var inpText = page.getViewById("inpText");
    var dote = inpText.text;

    var loader = new LoadingIndicatior();
    loader.show();
    var http = new XMLHttpRequest();
    var url = "https://0kqdvmlx81.execute-api.eu-west-2.amazonaws.com/test/postyan";
    var param = {
        "dote": dote
    };
    param = JSON.stringify(param);
    http.open('POST',url,true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        loader.hide();
        if(http.response.statusCode == 200){
            dialogs.alert(http.response.body);
        }
        else {
            dialogs.alert(error);
        }
    }
    http.send(param);

}

exports.submitDote = submitDote;