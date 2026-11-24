
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

function App() {
  const matches = [
    {
      id: 1,
      team1: "CSK",
      team2: "MI",
      date: "25 November 2026",
      time: "7:30 PM",
      venue: "Mumbai",
      price: 1500
    },
    {
      id: 2,
      team1: "RCB",
      team2: "KKR",
      date: "27 November 2026",
      time: "7:30 PM",
      venue: "Bengaluru",
      price: 1200
    },
    {
      id: 3,
      team1: "SRH",
      team2: "RR",
      date: "29 November 2026",
      time: "3:30 PM",
      venue: "Hyderabad",
      price: 1000
    },
    {
      id: 4,
      team1: "DC",
      team2: "PBKS",
      date: "30 November 2026",
      time: "7:30 PM",
      venue: "Delhi",
      price: 1300
    }
  ];

  return (
    <div className="app">

      <Navbar />

      <Hero />

      <section id="matches" className="matches">

        <h1>Upcoming IPL Matches</h1>

        <p className="match-subtitle">
          Book your favourite IPL match tickets now!
        </p>

        <div className="match-container">

          {matches.map((match) => (
            <MatchCard
              key={match.id}
              team1={match.team1}
              team2={match.team2}
              date={match.date}
              time={match.time}
              venue={match.venue}
              price={match.price}
            />
          ))}

        </div>

      </section>

      <footer>
        <p>© 2026 IPL Ticket Booking. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
