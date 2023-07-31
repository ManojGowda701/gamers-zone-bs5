$(document).ready(function () {
    $('#login').on('click', function () {
        const username = $('#username').val();
        localStorage.setItem('uname', username);
        console.log('Username saved to local storage.');
        const password = $('#password').val();
        localStorage.setItem('pword', password);
        console.log('Password saved to local storage.');
        window.location.href='./product_page.html';
    });
});

$(document).ready(function () {
    $('#signup').on('click', function () {
        const username = $('#username').val();
        localStorage.setItem('uname', username);
        console.log('Username saved to local storage.');
        const password = $('#password').val();
        localStorage.setItem('pword', password);
        console.log('Password saved to local storage.');
    });
});
