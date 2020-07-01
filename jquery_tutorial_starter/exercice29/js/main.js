$(function() {
    $('button').click(function() {
        if($('input.length' > 5)) {
            $('input').addClass('is-valid');
        }
        else{
            $('input').addClass('is-invalid');
        }
    });
});

//if text > 5 || is invalid dans le cas contraire

//maxlength

