function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}

let isloggedIn = false;

function Greeting(params) {
  return isloggedIn ? <UserGreeting /> : <GuestGreeting />;
}

const names = ["Hermès", "Alice", "Jean"];

function listeNames() {
  return (
    <ul>
      {names.map((nom, index) => (
        <li key={index}>{nom}</li>
      ))}
    </ul>
  );
}

const students = [
  { id: 1, name: "Hermès" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Jean" },
];

function listeStudents() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>Etudiant : {student.name}</li>
      ))}
    </ul>
  );
}

function ListeStudents() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>Étudiant : {student.name}</li>
      ))}
    </ul>
  );
}

const scores = [
  { id: 1, name: "Hermès", score: 85 },
  { id: 2, name: "Alice", score: 45 },
];

function ListeScores() {
  return (
    <ul>
      {scores.map((student) => (
        <li style={{ color: student.score >= 60 ? "green" : "red" }}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}

function mentionScore() {
  return (
    <ul>
      {scores.map((student) =>
        student.score >= 60 ? (
          <li key={student.id}>
            {student.name} : Félicitations, vous avez réussi !
          </li>
        ) : (
          <li key={student.id}>{student.name} : Désolé, vous avez échoué.</li>
        )
      )}
    </ul>
  );
}
