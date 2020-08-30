const captcha = new Captcha($('#canvas'), {
    length: 4
});

$('#valid').on('click', function() {
    const ans = captcha.valid($('input[name="code"]').val());
    ans ? window.location.href = 'https://www.google.com/' : captcha.refresh();
})