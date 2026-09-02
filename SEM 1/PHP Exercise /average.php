<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // method 1 (longer)
        function calAverage($arrNum): float {
            $length = count($arrNum);
            $sum = array_sum($arrNum);

            // or 
            $sum = 0;
            
            for($i = 0; $i < $length; $i++) {
                $sum += $arrNum[$i];
            }

            return $sum / $length;
        } 

        // method 2 (shorter) 
        function calculateAverage($arrNum): float {
            return array_sum($arrNum) / count($arrNum);
        }

        $numbers = [10, 20, 30, 40, 50]; 
        echo "The average of the array is: " . calculateAverage($numbers);
    ?>
</body>
</html>