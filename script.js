$.ajax({
  url: 'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io',
  type: 'GET',
  data: {},
  success:function(result){
    console.log(result.data);
  }
})

// const getAPI = async () => {
//   const res = await fetch({
//     method: 'get',
//     url: 'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io',
//     data: {method: 'ajax_request'}
//   })

//   console.log(res);

// //   await fetch({
// //     method: 'get',
// //     url: 'config.php',
// //     data: {method: 'get_request'}
// //   }
// //   ).then(function (res) {
// //     console.log(res);
// //   });
// };

// getAPI();
