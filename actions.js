function checkLocalStorage() {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}
var localStorageAvailable = checkLocalStorage();

function storeActionDone(event) {
    if (event.target.checked) {
        localStorage.setItem(event.target.name, 'done');
    } else {
        localStorage.removeItem(event.target.name);
    }
}

if (localStorageAvailable) {
    var actions = window.checkableActions;
    for (var i = 0; i < actions.length; ++i) {
        var check_id = actions[i] + '/check';
        var checkboxes = document.getElementsByName(check_id);
        for (var j = 0; j < checkboxes.length; ++j) {
            var checkbox = checkboxes[j];
            if (localStorage.getItem(check_id)) {
                checkbox.checked = true;
            }
            checkbox.addEventListener('change', storeActionDone);
        }
    }
}
