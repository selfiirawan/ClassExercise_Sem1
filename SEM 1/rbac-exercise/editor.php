<?php
// session_start();
require_once __DIR__ . '/auth/roles.php';

// STEP 1: If the user is NOT an editor or admin, redirect to /no-access.php
if (!isEditor()) {
    header('Location: no-access.php');
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Editor Panel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Editor Panel</h1>
    <p>You can create and edit posts here.</p>

    <nav>
        <a href="/dashboard.php">Dashboard</a>
        <a href="/admin.php">Admin Panel</a>
        <a href="/logout.php">Log Out</a>
    </nav>
</body>
</html>
