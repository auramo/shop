(function() {
    function initFilter() {
        $('#search').throttledInput(200, function(val) {
            if (val.length === 0) {
                $( ".product-row").show()
                return
            } else {
                $( ".product-row").hide()
            }
            $( '.product-name[data-name*="'+val.toLowerCase()+'"]').parent().show()
        })
    }

    function fetchProducts() {
        $.get( "/productData.json", function(productData) {
            var tableRows = _.map(
                productData.products,
                function(product) {
                    return '<tr class="product-row">' +
                        '<td class="product-name" data-name="' +
                        product.name.toLowerCase() +
                        '">' +
                        product.name +
                        '</td>' +
                        '<td>' +
                        product.price +
                        '</td>' +
                        '<td>' +
                        product.availability +
                        '</td>' +
                        '</tr>'
                })
            $('.product-table-body').html(tableRows.join(""))
        }).fail(function(req, statusStr) {
            alert("Fetching products failed " + statusStr)
        })
    }

    $(function() {
        fetchProducts()
        initFilter()
    })
})();
