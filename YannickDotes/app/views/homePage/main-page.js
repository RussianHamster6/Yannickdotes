const createViewModel = require("./main-view-model").createViewModel;
const routes = require("~/routes.json");
var dialogs = require("tns-core-modules/ui/dialogs");

function onNavigatingTo(args) {
    
    const page = args.object;

    page.bindingContext = createViewModel();
}

function toRandYan(args){
    const page = args.object.page;

    page.frame.navigate(routes.randYan);
}

function toAddYan(args){
    const page = args.object.page;

    page.frame.navigate(routes.addYan);
}

function displayPopup(){
    dialogs.alert("Hello").then(function(){
        console.log("dialog closed");
    });
}

exports.displayPopup = displayPopup;
exports.toAddYan = toAddYan;
exports.toRandYan = toRandYan;
exports.onNavigatingTo = onNavigatingTo;
