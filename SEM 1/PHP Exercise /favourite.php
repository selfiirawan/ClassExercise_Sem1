<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $favorites = ["Avengers: End Game", "Harry Potter", "Twilight", "Catch Me If You Can", "Spiderman: No Way Home"];
        $intro = "Here is a list of my favorite movies.";
        $highlight = true;
    ?>

    <h1><?= $intro ?></h1>

    <ol>
        <!-- <?php
            if ($highlight) {
                foreach($favorites as $favorite) {
                    if ($favorite === $favorites[0]) {
                        echo "<li style='color:blue;'>$favorites[0]</li>";
                    } else {
                        echo "<li>$favorite</li>";
                    }
                }
            } else {
                foreach($favorites as $favorite) {
                    echo "<li>$favorite</li>";
                }
            }
        ?> -->

        <!-- teacher's solution -->
        <?php foreach($favorites as $index => $item): ?>
            <?php if ($highlight && $index === 0): ?>
                <li style="color:blue;"><?= $item ?></li>
            <?php else: ?>
                <li><?= $item ?></li>
            <?php endif; ?>
        <?php endforeach; ?>
    </ol>
</body>
</html>