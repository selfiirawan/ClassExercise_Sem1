<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area of Rectangle</title>
</head>
<body>
    <?php
        function calculateRectangleArea(float $length, float $width): float {
            return $length * $width;
        }

        echo "The area  of a rectangle is: " . calculateRectangleArea(5,10);
    ?>
</body>
</html>