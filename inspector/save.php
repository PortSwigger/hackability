<?php
require("../inc/inspectorLogger.class.php");
$objName = isset($_POST['objName']) ? $_POST['objName'] : '';
$html = isset($_POST['html']) ? $_POST['html'] : '';
$logger = new InspectorLogger();
$logger->init();
if($logger) {
  $logger->insertData($objName, $html);
  $logger->close();
} else {
  echo 'Unable to open database.';
}
?>
