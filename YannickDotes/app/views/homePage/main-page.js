const createViewModel = require("./main-view-model").createViewModel;
const routes = require("~/routes.json");

function onNavigatingTo(args) {
    
    const page = args.object;

    page.bindingContext = createViewModel();
}

function toRandYan(args){
    const page = args.object.page;

    page.frame.navigate(routes.randYan);
}

exports.toRandYan = toRandYan;
exports.onNavigatingTo = onNavigatingTo;
