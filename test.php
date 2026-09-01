<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Learning PHP</h1>

    <?php
    echo "hello!<br>";
    echo "world!<br>";

    $color = "red";
    echo "today is $color</br>";

    $name = "John";
    $age = 22;
    echo "His name is $name, he is $age years old<br>";

    $is_raining = false;
    if ($is_raining) {
        echo "Bring your umbrella</br>";
    } else {
        echo "Enjoy the sunshine</br>";
    }

    $greeting = "Hello";
    ?>

    <h2><?= $greeting ?> <?= $name ?></h2>
    <p>Name: </p>
</body>
</html>