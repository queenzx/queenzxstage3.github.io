<?php
header('content-type:text/html;charset=utf-8');
$url = "http://www.baidu.com";
$contents = file_get_contents($url);
echo $contents;
var_dump();
?>