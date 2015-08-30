<?php
require_once("DB.php");
$DB = new Database();
$fieldList = array("firstname", "lastname", "email", "address", "city", "state", "zip", "guests", "Time");
if(isset($_REQUEST)){
	$fields = array();
	$values = array();
	foreach($_REQUEST as $field=>$value){
        if(in_array($field, $fieldList)){
            $fields[] = $field;
            $values[] = addslashes($value);
        }
	}
	$fields = implode(", ", $fields);
	$values = implode("', '", $values);
	$sql = "INSERT INTO RSVP ($fields) VALUES ('$values');";

	$DB->query($sql);
	echo json_encode($DB->Record);
}
?>