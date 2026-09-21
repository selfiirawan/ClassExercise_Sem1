<?php

$path = trim($_SERVER['REQUEST_URI'], '/');

$path = parse_url($path, PHP_URL_PATH);

switch ($path) {
    case '';

    case 'home':
        include 'home.php';
        break;

    case 'about':
        include 'about.php';
        break;

    default:
        include '404.php';
        break;
}