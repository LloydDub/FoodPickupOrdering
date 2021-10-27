$(() => {
  $.ajax({
    method: "GET",
    url: "/api/tickets",
  }).done(function (tickets) {
    console.log("!!!!", tickets.tickets.ticket_num);
    $("#order").append(`<p>Ticket Num: ${tickets.tickets.ticket_num}</p>`);
  });
});
