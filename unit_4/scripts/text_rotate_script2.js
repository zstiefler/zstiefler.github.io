RR = {
    fn: {}
};
RR.fn.getCookie = function(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};
(function($, RR) {
    "use strict";
    $.typer.options.tapeColor = 'rgba(0,0,0,.35)';
    $.typer.options.textColor = 'rgb(255,255,255)';
    $.typer.options.highlightSpeed = 40;
    $.typer.options.typeSpeed = 100;
    $.typer.options.typerInterval = 800;
    $.typer.options.initialDelay = 1800;
    $('[data-typer-targets]').typer();
    $('.page-id-18 .page-title-button, .page-id-306 .page-title-button, .page-id-1309 .page-title-button, .page-id-1389 .page-title-button').append('   <a href="/demo/" target="_self" class="btn btn-ghost">Request Demo</a>');
    $('.sticky_section').each(function() {
        $(this).closest('.container').attr('id', 'stickycontainer');
        $(this).closest('.widget-inner').pin({
            containerSelector: "#stickycontainer",
            padding: {
                top: 60,
                bottom: 10
            }
        });
    });
    $(".submit_ac_form").each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            var $form = $("#" + $(this).data('form-id'));
            var pass = true;
            $('input[data-required]', $form).each(function() {
                if ($(this).val().length == 0) {
                    pass = false;
                }
            });
            if (pass) {
                $.post($form.attr('action'), $form.serialize());
                $form.fadeOut();
                $("#thanks" + $(this).data('form-id')).fadeIn();
                $this.fadeOut();
            } else {
                alert('Please check the required fields.');
            }
        });
    });
    $("form input[name='field[41]']").val(RR.fn.getCookie('affiliate_source'));
})(jQuery, RR);
(function() {
    var c = encodeURIComponent,
        s = "SCRIPT",
        d = document,
        e = d.createElement(s),
        t = d.getElementsByTagName(s)[0],
        p = "t=" + c(d.title || "") + "&u=" + c(d.location.href || "") + "&r=" + c(d.referrer || "");
    e.src = "https://api.autopilothq.com/anywhere/dc220b01ebc14233a85075ce1fd463d8d33a54349aba42a19fb1be3bb8275649?" + p;
    e.type = "text/javascript";
    e.async = true;
    t.parentNode.insertBefore(e, t);
})();
