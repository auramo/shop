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

    // Only one of the two following functions (renderTableDataSimple,
    // renderTableDataFancy) is in use.
    // uncomment/comment which is to be used in fetchProducts

    // Simple way to render the product rows
    // Only concatenates a big string which
    // contains all <tr> tags with product data
    function renderTableDataSimple(productData) {
        var tableRows = productData.products.map(productToTableRow)
        $('.product-table-body').html(tableRows.join(""))
        function productToTableRow(product) {
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
        }
    }

    // Fancy way to render the product rows
    // Creates jqery objects of each row as well as
    // the tbody. In the end we replace the existing
    // tbody with the new tbody jquery object in DOM
    function renderTableDataFancy(productData) {
        var newTableBody = $('<tbody class="product-table-body">')
        productData.products.forEach(productToTableRow)
        $('.product-table-body').replaceWith(newTableBody)
        function productToTableRow(product) {
            var tableRow =
            $('<tr class="product-row">' +
              '<td class="product-name"></td><td class="product-price"></td><td class="product-availability"></td>' +
              '</tr>')
                .find('.product-name')
                .attr('data-name', product.name.toLowerCase())
                .text(product.name)
                .end()
                .find('.product-price')
                .text(product.price)
                .end()
                .find('.product-availability')
                .text(product.availability)
                .end()
            newTableBody.append(tableRow)
        }
    }

    function fetchProducts() {
        $.get( "/productData.json", function(productData) {
            // We can use either renderTableDataSimple or renderTableDataFancy
            // Currently we use the fancy version
            //renderTableDataSimple(productData)
            renderTableDataFancy(productData)
            $( ".load-indicator").hide()
        }).fail(function(req, statusStr) {
            alert("Fetching products failed " + statusStr)
        })
    }

    $(function() {
        fetchProducts()
        initFilter()
    })
})();
