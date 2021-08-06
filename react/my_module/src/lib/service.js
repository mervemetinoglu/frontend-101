import axios from "axios";

export default async function getData(userID) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userID
  );

  const { data: userPost } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userID
  );

  return { user, userPost };
}
