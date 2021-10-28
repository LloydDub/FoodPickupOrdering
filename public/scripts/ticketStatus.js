$(() => {
  $.ajax({
    method: "GET",
    url: "/api/tickets",
  }).done(function (tickets) {
    // console.log("!!!!", tickets.tickets);
    for (const ticket in tickets.tickets) {
      console.log(tickets.tickets[ticket])
      $("#order").append(`
      <div id="your-orders">
        <p>Ticket Num: ${tickets.tickets[ticket].ticket_num}</p>
        <p> Order Created: ${tickets.tickets[ticket].created_at}</p>
        <p>Order Completed: ${tickets.tickets[ticket].finished_at}</p>
        <p>Customer Name: ${tickets.tickets[ticket].name}</p>
        <p>Tel: ${tickets.tickets[ticket].phone}</p>
      </div>
      `);
    }
  });
});
