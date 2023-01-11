const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    "X-CSRF-Token": csrfToken,
    Accept: "application/json"
  };

  const response = fetch(url, options).then(result => result);


  if (response.status === 200) {
    return response.json();
  } else {

    throw response;
  }
}

export const followUser = function (id) {
  return customFetch(`/users/${id}/follow`, {method: "POST", dataType: 'JSON'})
}
export const unfollowUser = function (id) {
  return customFetch(`/users/${id}/follow`, {method: "DELETE", dataType: 'JSON'})
}

// export const foo = "bar";
