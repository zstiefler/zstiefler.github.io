(function($) {
    $.typer.options.tapeColor = 'rgba(0,0,0,.35)';
    $.typer.options.textColor = 'rgb(255,255,255)';
    $.typer.options.highlightSpeed = 40;
    $.typer.options.typeSpeed = 100;
    $.typer.options.typerInterval = 800;
    $.typer.options.initialDelay = 1800;
    $('[data-typer-targets]').typer();
})(jQuery);
