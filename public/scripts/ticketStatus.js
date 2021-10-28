$(() => {
  $.ajax({
    method: "GET",
    url: "/api/tickets",
  }).done(function (tickets) {
    console.log("!!!!", tickets.tickets);
    $("#order").append(`
    <p>Ticket Num: ${tickets.tickets.ticket_num}</p>
    <p> Order Created: ${tickets.tickets.created_at}</p>
    <p>Order Completed: ${tickets.tickets.finished_at}</p>
    <p>Customer Name: ${tickets.tickets.name}</p>
    Tel: ${tickets.tickets.phone}</p>
    `);
  });
});
