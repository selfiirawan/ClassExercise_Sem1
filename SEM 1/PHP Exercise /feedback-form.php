<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
</head>
<body>
    <h1>Feedback Form</h1>

	<form action="feedback-form.php" method="post">
	  <label for="name">Name (optional):</label>
	  <input type="text" id="name" name="name"><br><br>
	
	  <label for="email">Email (optional):</label>
	  <input type="email" id="email" name="email"><br><br>
	
	  <label for="comments">Comments (required):</label>
	  <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>
	
	  <input type="submit" value="Submit">
	</form>

    <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $name = $_POST["name"];
            $email = $_POST["email"];
            $comment = $_POST["comments"];

            if (!$comment) {
                echo "<h1 style='color:red;'>Please write a comment!!!</h1>";
            } else {
                echo "</p>Thank you for your feedback! Here is the submitted data:</p>";
                echo "<p>Name: " . htmlspecialchars($name) . "</p>";
                echo "<p>Email: " . htmlspecialchars($email) . "</p>";
                echo "<p>Comments: " . htmlspecialchars($comment) . "</p>";
            }
        } else {
            echo "<p><em>Submit to see the POST results here.</em></p>";
        }
    ?>
</body>
</html>