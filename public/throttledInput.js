(function() {
    // Below throttledInput JQuery plugin Stolen from here:
    // http://jsfiddle.net/mtkopone/AxbHC/5/
    // Thanks Mikko Koponen!
    $.fn.throttledInput = function(ms, fn) {
        return $(this).each(function() {
            var prev = undefined
            var timeout = null
            var $input = $(this).on('keyup', function() {
                var txt = $input.val()
                if (timeout) clearTimeout(timeout)
                timeout = setTimeout(function() {
                    if (prev == txt) return
                    prev = txt
                    fn.call($input, txt)
                }, ms)
            }).on('reset', function() {
                if (timeout) clearTimeout(timeout)
                prev = $input.val()
            })
        })
    }
})();
