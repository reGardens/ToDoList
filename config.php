<?php
if(isset($_GET['method'])) {
    $cb = curl_init();
    curl_setopt($cb, CURLOPT_URL, "https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io");
    curl_setopt($cb, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($cb);
    echo $output;
    curl_close($ch);
}