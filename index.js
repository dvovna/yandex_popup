var firstPopupBtn = document.getElementById("firstBtn"),
        secondPopupBtn = document.getElementById("secondBtn"),
        popup1El = document.getElementById("popup1"),
        popup2El = document.getElementById("popup2"),
        popupElts = document.getElementsByClassName('popup');

    Object.prototype.show = function () {
        var el = this,
            classes = el.className.split(' ');

        for (var i = 0; i < classes.length; i++) {
            if (classes[i] === "hidden") {
                classes.splice(i, 1);
                i--;
            }
        }

        el.className = classes.join(' ');
    };

    Object.prototype.hide = function () {
        var elts = this,
            classes;

        function addHiddenClass(el) {
            classes = el.className.split(' ');
            classes.push('hidden');
            el.className = classes.join(' ');
        }

        if (typeof elts !== "object") {
            addHiddenClass(elts);
            return;
        }

        for (var i = 0; i < elts.length; i++) {
            addHiddenClass(elts[i]);
        }
    };

    firstPopupBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        popup2El.hide();
        popup1El.show();
    };

    secondPopupBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        popup1El.hide();
        popup2El.show();
    };

    document.body.onclick = function (e) {
        popupElts.hide();
    };