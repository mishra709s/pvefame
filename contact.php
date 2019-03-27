<?php
	// config
	$to = "hello@seventhemes.com"; // Plese give your email address here
	$from = $_REQUEST['email']; 
	$name = $_REQUEST['name']; 
  
	// headers
	$headers  = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From:'. $from . "\r\n";
	$subject  = "Message sent from contact form on loyale html demo"; 

	// fields
	$fields = array(); 
	$fields{"name"} = "name"; 
	$fields{"email"} = "email"; 
	$fields{"phone"} = "phone"; 
	$fields{"message"} = "message";

	// mail body
	$body = "Message:\n\n"; foreach($fields as $a => $b){	$body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
	
	// send email
	$send = mail($to, $subject, $body, $headers);
?>