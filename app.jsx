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

const products = [
  { id: 1, name: "Chou", isFruit: false },
  { id: 2, name: "Pomme", isFruit: true },
  { id: 3, name: "Banane", isFruit: true },
];

function listFruits(params) {
  return (
    <ul>
      {products
        .filter((produit) => produit.isFruit)
        .map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
    </ul>
  );
}

const produits = [];

function name() {
  return produits.length === 0 ? (
    <p>Aucun produit disponible.</p>
  ) : (
    <ul>
      {produits.map((produit) => (
        <li key={produit.id}>{produit.name}</li>
      ))}
    </ul>
  );
}

const users = [
  { id: 1, name: "Hermès", online: true },
  { id: 2, name: "Alice", online: false },
];

function userState() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} est {user.online ? "en ligne" : "hors ligne"}
        </li>
      ))}
    </ul>
  );
}

function MyButton() {
  function handleClick() {
    alert("Bouton cliqué !");
  }

  return;
  <button onClick={handleClick}>Cliquez-moi</button>;
}
