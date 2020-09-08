if (!window.x) {
    x = {};
}

// http://stackoverflow.com/questions/5669448/get-selected-texts-html-in-div
x.Selector = {};
x.Selector.getSelected = function() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

$(document).ready(function() {
    $(document).bind("mouseup", function() {
        var mytext = x.Selector.getSelected();
      console.log(mytext);
    chrome.storage.local.set({txt: mytext});
    });
});

