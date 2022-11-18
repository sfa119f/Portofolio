const api_githubData = "https://api.github.com/repos/sfa119f/Portofolio";

async function getApiGithubData(url) {
  const resp = await fetch(url);
  var data = await resp.json();
  if (resp.status == 200) {
    document.getElementById("starGithub").innerHTML = data.stargazers_count;
    document.getElementById("forkGithub").innerHTML = data.forks_count;
  }
}

getApiGithubData(api_githubData);
