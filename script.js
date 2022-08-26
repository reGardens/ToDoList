const getAPI = async () => {
  await fetch(
    "https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io"
  ).then(function (res) {
    console.log(res);
  });
};

getAPI();
