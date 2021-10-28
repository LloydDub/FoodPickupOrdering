$(() => {
  $.ajax({
    method: "GET",
    url: "/api/tickets",
  }).done(function (tickets) {
    console.log("!!!!", tickets.tickets);
    $("#order").append(`<p>Ticket Num: ${tickets.tickets.ticket_num}</p>

    <p> Order Created: ${tickets.tickets.created_at}</p>
    <p>Order Completed: ${tickets.tickets.finished_at}</p>
    `);
  });

  $.ajax({
    method: "GET",
    url: "/api/customers",
  }).done(function (response) {
    for (customer of response.customers) {
      console.log("AAAA!", customer);

      $("#order").append(`<p>Customer Name: ${customer.name}</p>
      Tel: ${customer.phone}</p>`);
    }
  });
});
