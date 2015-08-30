<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="shortcut icon" href="img/cube.png">
	<title>Kylie &amp; Trey &ndash; 13 September 2014</title>
	
	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container">
	<h1>Confirmed guests:</h1>
<?php
require_once("DB.php");
$DB = new Database();
$sql = "SELECT firstname, lastname, email, address, city, state, zip, guests, Time FROM RSVP;";
$DB->query($sql);
$guestTotal = 0;
$columns = array();
foreach ($DB->ResultArray[0] as $column=>$value){
	$columns[] = $column;
}
foreach($DB->ResultArray as $key=>$row){
	$values[] = "\t\t<tr>\n\t\t\t<td>" . implode("</td>\n\t\t\t<td>", $row) . "</td>\n\t\t</tr>\n";
	$guestTotal += $row['guests'];
}
$columns = "\t\t<tr>\n\t\t\t<th>" . implode("</th>\n\t\t\t<th>", $columns) . "</th>\n\t\t</tr>\n";
$values = implode("\n", $values);
echo "\t<table class=\"table table-striped table-bordered table-hover table-condensed\">\n";
echo $columns;
echo $values;
echo "\t</table>\n";
echo "\t<p class=\"pull-right\">Total confirmed guests: $guestTotal</p>";
?>
</body>
</html>