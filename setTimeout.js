for (var i = 1; i <= 10 ; i++) {
    ((index) => {
        setTimeout(function() { alert(index) }, 1000);
    })(i);
}