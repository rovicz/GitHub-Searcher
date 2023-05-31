export async function fetchDados(id: string) {
  const url = "https://api.github.com/users/";
  const r = await fetch(url + id);
  const json = await r.json();
  handleDadosGit(json);
}

interface Dados {
  login: string;
  name: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: string;
  avatar_url: string;
}

function isDados(dados: unknown): dados is Dados {
  if (
    dados &&
    typeof dados === "object" &&
    "login" in dados &&
    "name" in dados &&
    "location" in dados &&
    "bio" in dados &&
    "followers" in dados &&
    "following" in dados &&
    "public_repos" in dados &&
    "avatar_url" in dados
  ) {
    return true;
  } else {
    return false;
  }
}

export default function handleDadosGit(data: Dados) {
  const areaContent = document.getElementById("content");

  if (isDados(data) && areaContent) {
    areaContent.innerHTML += `
    <div class="imgAvatar">
      <img src="${data.avatar_url}" alt="Foto de Perfil">
      <p>Login: ${data.login}</p>
      <p>Nome: ${data.name}</p>
      <p>Localidade: ${data.location}</p>
      <p>Seguidores: ${data.followers}</p>
      <p>Seguindo: ${data.following}</p>
      <p>Repositórios: ${data.public_repos}</p>
      <p>Biografia: ${data.bio}</p>
    </div>
    `;
  }
}
