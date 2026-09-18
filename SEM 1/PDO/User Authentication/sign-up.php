<?php
    session_start();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirm_password'];

        // if (empty($email) || empty($password) || empty($confirmPassword)) {
        //     echo "All fields are required.";
        // }

        // if ($password !== $confirmPassword) {
        //     echo "Password do not match!";
        // }

        // $db = new PDO("mysql:host=localhost;dbname=auth_lesson", 'root', '');
        // $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // // check if email exist 
        // $emailCheck = $db->prepare("SELECT * FROM users WHERE email = :email");
        // $emailCheck->execute([':email' => $email]);

        // if ($emailCheck->fetch()) {
        //     echo "This email already registered.";
        //     exit;
        // }

        // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        // $statement = $db->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
        // $statement->execute([
        //     ':email' => $email,
        //     ':password' => $hashedPassword
        // ]);
        // echo "User created successfully";

        if (empty($email) || empty($password) || empty($confirmPassword)) {
            echo "All fields are required.";
        } else if ($password !== $confirmPassword) {
            echo "Password does not matched!";
        } else {
            $db = new PDO("mysql:host=localhost;dbname=auth_lesson", 'root', '');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $statement = $db->prepare("INSERT INTO users (email, password) VALUES (:email, :password)");
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // check email 
            $check = $db->prepare("SELECT * FROM users WHERE email = :email");
            $check->execute([':email' => $email]);
            $user = $check->fetch(PDO::FETCH_OBJ);

            if ($user) {
                echo "An account with this email already exist.";
            } else {
                $statement->execute([
                    ':email' => $email,
                    ':password' => $hashedPassword
                ]);

                echo "User created successfully.";
            }
        }
    }
?>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="/sign-up.php">
    <div class="mb-2">
        <label for="email" class="visually-hidden">Email</label>
        <input type="text" class="form-control" id="email" name="email" placeholder="email@example.com">
    </div>
    <div class="mb-2">
        <label for="password" class="visually-hidden">Password</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Password">
    </div>
    <div class="mb-2">
        <label for="confirm_password" class="visually-hidden">Confirm Password</label>
        <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password">
    </div>
    <div class="d-grid">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
</body>
</html>

<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'];
        
        $db = new PDO("mysql:host=localhost;dbname=auth_lesson", 'root', '');
        $statement = $db->prepare("SELECT * FROM users");
        $statement->execute();
        $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

        echo "<h3>Created User:</h3>";
        foreach($rows as $row) {
            echo "<p>" . htmlspecialchars($row['email']) . "</p>";
        }
    }
?>