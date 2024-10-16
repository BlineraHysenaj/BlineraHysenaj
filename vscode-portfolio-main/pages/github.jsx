const GithubPage = ({ repos, user }) => {
  return (
    <>
      <div>
        <h3>{user.login}</h3>
        <h3>{user.public_repos} repos</h3>
        <h3>{user.followers} followers</h3>
      </div>
      <div>
        {repos?.map((repo) => (
          <div key={repo.id}>{repo.name}</div> // Replace RepoCard with a simple div or remove it
        ))}
      </div>
      {/* Remove the GitHubCalendar component if not needed */}
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  let repos = await repoRes.json();
  if (!Array.isArray(repos)) {
    console.error('Expected repos to be an array but got:', repos);
    repos = []; // Handle the case where repos is not an array
  } else {
    repos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  }
  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
