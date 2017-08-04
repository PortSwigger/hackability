<?php
function isSecure() {
  return
    (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || $_SERVER['SERVER_PORT'] === 443;
}
function getUrl() {
  $url = '';
  $pathInfo = pathinfo($_SERVER['PHP_SELF']);
  if($pathInfo['dirname'] !== '/') {
    $path = $pathInfo['dirname'] . "/";
  } else {
    $path = '/';
  }
  $url .= isSecure() ? 'https://' : 'http://';
  $url .= $_SERVER['HTTP_HOST'];
  $url .= $path;
  return $url;
}
?>
