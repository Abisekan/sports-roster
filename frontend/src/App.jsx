import { useState, useEffect } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [sport, setSport] = useState("Kabaddi");

  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    const newPlayer = { name: name, team: team, sport: sport };

    fetch("http://localhost:5000/api/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer),
    })
      .then((response) => response.json())
      .then((savedPlayer) => {
        setPlayers([...players, savedPlayer]);
        setName("");
        setTeam("");
      })
      .catch((error) => console.error("Error saving player:", error));
  };

  const handleDeletePlayer = (id) => {
    fetch(`http://localhost:5000/api/players/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setPlayers(players.filter((player) => player.id !== id));
      })
      .catch((error) => console.error("Error deleting player:", error));
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>🏆 My Sports Roster</h1>

      <div
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginTop: "0", color: "#333" }}>Draft a New Player</h3>
        <form
          onSubmit={handleAddPlayer}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Player Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "8px", flex: 1 }}
          />
          <input
            type="text"
            placeholder="Team Name"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            required
            style={{ padding: "8px", flex: 1 }}
          />
          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            style={{ padding: "8px" }}
          >
            <option value="Kabaddi">Kabaddi</option>
            <option value="Cricket">Cricket</option>
          </select>
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Player
          </button>
        </form>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {players.map((player) => (
          <div
            key={player.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              width: "200px",
              background: "white",
              position: "relative",
            }}
          >
            <h2 style={{ marginTop: "0", fontSize: "1.2rem", color: "#333" }}>
              {player.name}
            </h2>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Team:</strong> {player.team}
            </p>
            <p style={{ margin: "5px 0", color: "#555" }}>
              <strong>Sport:</strong> {player.sport}
            </p>

            {/* The Delete Button */}
            <button
              onClick={() => handleDeletePlayer(player.id)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "8px",
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
