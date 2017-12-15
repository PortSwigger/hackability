<?php
require("../inc/inspectorLogger.class.php");
$objName = isset($_POST['objName']) ? $_POST['objName'] : '';
$html = isset($_POST['html']) ? $_POST['html'] : '';
$logger = new InspectorLogger();
$logger->init();
if($logger) {
  $sql = "SELECT COUNT(*) AS count FROM inspection_log WHERE ip = :ip";
  $prepareStatement = $logger->prepare($sql);
  $prepareStatement->bindParam(':ip', $_SERVER['REMOTE_ADDR']);
  $result = $prepareStatement->execute();
  $row = $result->fetchArray(SQLITE3_ASSOC);
  if($row['count'] === 0) {
    $logger->insertData($objName, $html);
  } else {
    $logger->updateData($objName, $html);
  }
  $logger->close();
} else {
  echo 'Unable to open database.';
}
?>
