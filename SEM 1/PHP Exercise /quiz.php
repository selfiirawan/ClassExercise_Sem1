<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Quiz Form</title>
</head>
<body>
    <h1>Simple Quiz</h1>

	<form action="quiz.php" method="post">
	  <p>1. What is the capital of France?</p>

	  <input type="radio" name="q1" value="London">
	  <label>London</label><br>
	  <input type="radio" name="q1" value="Paris">
	  <label>Paris</label><br>
	  <input type="radio" name="q1" value="Rome">
	  <label>Rome</label><br>
	
	  <p>2. What is 2 + 2?</p>
	  <input type="radio" name="q2" value="3">
	  <label>3</label><br>
	  <input type="radio" name="q2" value="4">
	  <label>4</label><br>
	  <input type="radio" name="q2" value="5">
	  <label>5</label><br>
	
	  <input type="submit" value="Submit">
	</form>

    <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (empty($_POST["q1"]) || empty($_POST["q2"])) { 
                echo "<p>Please answer both questions!</p>";
            } else {
                $q1 = $_POST["q1"];
                $q2 = $_POST["q2"];
                $count = 0;

                if ($q1 === 'Paris' && $q2 === '4') {
                    $count += 2;
                } elseif ($q1 === 'Paris' || $q2 === '4') {
                    $count += 1;
                }

                echo "<p>Quiz Results: </p>";
                echo "<p>Correct answers: $count out of 2.</p><br>";
                
                echo "<p>1. What is the capital of France?</p>";
                echo "<p>Your answer: " . htmlspecialchars($q1) . "</p>";
                echo "<p>Correct answer: Paris</p><br>";

                echo "<p>2. What is 2 + 2?</p>";
                echo "<p>Your answer: " . htmlspecialchars($q2) . "</p>";
                echo "<p>Correct answer: 4</p>";
            }
        } else {
            echo "<p><em>Submit to see the POST results here.</em></p>";
        }

        // teacher's solution
    ?>
</body>
</html>