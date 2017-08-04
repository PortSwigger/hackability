<?php
require('../inc/functions.inc.php');
$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
header("Content-Security-Policy: sandbox; default-src 'none';style-src 'self'");
?>
<!doctype HTML>
<html>
<head>
<meta charset="UTF-8" />
<meta name="robots" content="noindex" />
<title>Inspector</title>
<link href="<?php echo htmlentities(getUrl(), ENT_QUOTES)?>styles.css" rel="stylesheet" />
<body>
<?php
require("../inc/inspectorLogger.class.php");
$logger = new InspectorLogger();
$logger->init();
if($logger) {
  if(!$id) {
    $sql = "SELECT * FROM inspection_log ORDER BY date_of_request DESC";
    $result = $logger->query($sql);
    echo '<table class="displayTable">';
    echo '<tr>';
    echo '<th>Date of request</th>';
    echo '<th>Object name</th>';
    echo '<th>User agent</th>';
    echo '<th>IP</th>';
    echo '</tr>';
    while($row = $result->fetchArray(SQLITE3_ASSOC) ) {
      echo '<tr>';
      echo '<td>'.htmlentities($row['date_of_request'], ENT_QUOTES).'</td>';
      echo '<td><a href="display.php?id='.((int) $row['ID']).'">'.htmlentities($row['object_name'], ENT_QUOTES).'</a></td>';
      echo '<td>'.htmlentities($row['user_agent'], ENT_QUOTES).'</td>';
      echo '<td>'.htmlentities($row['ip'], ENT_QUOTES).'</td>';
      echo '</tr>';
    }
    echo '</table>';
  } else {
    $sql = "SELECT html FROM inspection_log WHERE ID = :id LIMIT 100";
    $prepareStatement = $logger->prepare($sql);
    $prepareStatement->bindParam(':id', $id);
    $result = $prepareStatement->execute();
    $found = false;
    while($row = $result->fetchArray(SQLITE3_ASSOC) ) {
      echo $row['html'];
      $found = true;
    }
    if(!$found) {
      echo '<b>Unable to find record.</b>';
    }
  }
  $logger->close();
} else {
  echo 'Unable to open database.';
}
?>
</body>
</html>
