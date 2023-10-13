async function getTicket(id) {
  const res = await fetch('http://localhost:40000/tickets', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })
  const tickets = await res.json()
  const ticket = tickets.find((ticket) => ticket.id === id)
 
  return (ticket)
    
}


export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id) 

  const details = ticket && (
    <div>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        
      </div>
    </div>
  )

  return (
    <main> 
      {/* {params.id} */}
      {details}
    </main>
  )
}