<?php
// session_start();
require_once __DIR__ . '/auth/roles.php';

// STEP 1: If the user is NOT logged in, redirect to /login.php
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Dashboard</h1>
    <p>Welcome, <?= htmlspecialchars($_SESSION['user']['email'] ?? 'Guest') ?>!</p>
    <p>Your role: <strong><?= htmlspecialchars($_SESSION['user']['role'] ?? 'none') ?></strong></p>

    <nav>
        <a href="/dashboard.php">Dashboard</a>
        <a href="/editor.php">Editor Panel</a>
        <a href="/admin.php">Admin Panel</a>
        <a href="/logout.php">Log Out</a>
    </nav>
</body>
</html>
