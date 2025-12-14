export async function getPinnedRepos() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "khandelwal-dev") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  homepageUrl
                  repositoryTopics(first: 3) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  return json.data.user.pinnedItems.nodes;
}

export async function getAllPublicRepos() {
  const res = await fetch(
    "https://api.github.com/users/khandelwal-dev/repos?per_page=100&sort=updated",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: 3600, // cache for 1 hour
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  return res.json();
}
