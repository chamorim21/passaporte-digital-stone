import Home from './routes/Home.html';
import Tickets from './routes/tickets/Tickets.html';
import Ticket from './routes/tickets/Ticket.html';
import Purchase from './routes/tickets/Purchase.html';

export default {
  '/': Home,
  '/tickets': Tickets,
  '/tickets/:id': Ticket,
  '/tickets/:id/purchase': Purchase,
};
