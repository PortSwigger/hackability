<?php
class InspectorLogger extends SQLite3 {
  function __construct() {
    $this->open('data/inspectorLogger.db');
  }
  function init() {
      $this->createTable();
  }
  function createTable() {
    $sql = "CREATE TABLE IF NOT EXISTS inspection_log (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          object_name TEXT,
          user_agent TEXT,
          html TEXT,
          ip VARCHAR(50),
          date_of_request DATETIME
    )";
    $result = $this->exec($sql);
    if(!$result) {
      die('Unable to create table.');
    }
  }
  function insertData($objName, $html) {
    $objName = (string) $objName;
    $html = (string) $html;
    if(!strlen($objName) || !strlen($html)) {
      die("Object name or html not supplied");
    }
    $sql = "INSERT INTO inspection_log (object_name, user_agent, html, ip, date_of_request) VALUES(:objectName, :userAgent, :html, :ip, DATETIME('now','localtime'))";
    $prepareStatement = $this->prepare($sql);
    $prepareStatement->bindParam(':objectName', $objName);
    $prepareStatement->bindParam(':userAgent', $_SERVER['HTTP_USER_AGENT']);
    $prepareStatement->bindParam(':html', $html);
    $prepareStatement->bindParam(':ip', $_SERVER['REMOTE_ADDR']);
    $result = $prepareStatement->execute();
    if(!$result) {
      die('Unable to store data');
    }
  }
}
?>
