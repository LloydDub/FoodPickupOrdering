SELECT customers.name, menu_items.name, menu_items.size, menu_items.price, ticket_menu_items.quantity, tickets.ticket_num
FROM ticket_menu_items
JOIN tickets ON tickets.id = ticket_id
JOIN menu_items ON menu_items.id = menu_item_id
JOIN customers ON customers.id = customer_id
GROUP BY customers.name, menu_items.name, menu_items.size, menu_items.price, ticket_menu_items.quantity, tickets.ticket_num
ORDER BY tickets.ticket_num;
