const Observable = require("tns-core-modules/data/observable").Observable;

function createViewModel() {
    const viewModel = new Observable();

    viewModel.onTap = () => {
        viewModel.set("message");
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
