$(function() {
    $('#search').throttledInput(200, function(val) {
        if (val.length === 0) {
            $( ".product-row").show()
            return
        } else {
            $( ".product-row").hide()
        }
        $( '.product-name[data-name*="'+val.toLowerCase()+'"]').parent().show()
    })
})
