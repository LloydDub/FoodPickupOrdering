SELECT customers.id as customer_id, menu_items.name as menu_item, menu_items.size as size, menu_items.price as price, ticket_menu_items.quantity as quanitity, tickets.ticket_num as ticket_number, tickets.created_at as created_at, tickets.finished_at as finished_at
FROM ticket_menu_items
JOIN tickets ON tickets.id = ticket_id
JOIN menu_items ON menu_items.id = menu_item_id
JOIN customers ON customers.id = customer_id
WHERE tickets.ticket_num = 7
GROUP BY customers.id, menu_items.name, menu_items.size, menu_items.price, ticket_menu_items.quantity, tickets.ticket_num, tickets.created_at, tickets.finished_at
ORDER BY tickets.ticket_num;
