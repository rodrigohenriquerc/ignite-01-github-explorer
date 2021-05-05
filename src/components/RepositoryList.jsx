import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const URL = "https://api.github.com/orgs/rocketseat/repos";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    console.log("repositories: ", repositories);
  }, [repositories]);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
