$(function () {
  /* Set rates + misc */

  const taxRate = 0.05;

  const fadeTime = 300;

  /* Assign actions */
  $(".product-quantity input").change(function () {
    updateQuantity(this);
  });

  const $productRows = $(".product");

  $productRows.on("change", "input[type=number]", recalculateCart);

  /* Recalculate cart */
  function recalculateCart() {
    let subtotal = 0;

    /* Sum up row totals */
    $(".product").each(function () {
      subtotal += parseFloat($(this).children(".product-line-price").text());
    });

    /* Calculate totals */
    let tax = subtotal * taxRate;

    let total = subtotal + tax;

    /* Update totals display */
    $(".totals-value").fadeOut(fadeTime, function () {
      $("#cart-subtotal").html(subtotal.toFixed(2));
      $("#cart-tax").html(tax.toFixed(2));

      $("#cart-total").html(total.toFixed(2));
      if (total == 0) {
        $(".checkout").fadeOut(fadeTime);
      } else {
        $(".checkout").fadeIn(fadeTime);
      }
      $(".totals-value").fadeIn(fadeTime);
    });
  }

  /* Update quantity */
  function updateQuantity(quantityInput) {
    /* Calculate line price */
    let productRow = $(quantityInput).parent().parent();
    let price = parseFloat(productRow.children(".product-price").text());
    let quantity = $(quantityInput).val();
    let linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children(".product-line-price").each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }

  /* Remove item from cart */
  function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    let productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function () {
      productRow.remove();
      recalculateCart();
    });
  }
});
