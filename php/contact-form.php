<?php
$mailto = "support@bringgrow.com";  //My email address
//getting customer data
$name = $_POST['name'];
$fromEmail = $_POST['email']; //getting customer email
$service = $_POST['service']; //getting customer Phome number
$subject = "User Contact Information"; //getting subject line from client


$subject2 = "Confirmation: Message was submitted successfully to Apps Technology LLC"; // For customer confirmation

//Email body I will receive
$message = "Cleint Name: " . "\n" . $name . "\n\n" .
"Service: " . "\n" . $service . "\n\n" .
"Email: " . "\n" . $fromEmail . "\n\n"
. "Client Message: " . "\n" . $_POST['message'];

//Message for client confirmation
$message2 = "Dear " . $name . "\n"
. "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
. "You submitted the following message: " . "\n" . "'" . $_POST['message'] . "'" . "\n\n"
. "Regards";

//Email headers
$headers = "From: " . $fromEmail; // Client email, I will receive
$headers2 = "From: " . $mailto; // This will receive client

//PHP mailer function

 $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
 $result2 = mail($fromEmail, $subject2, $message2, $headers2); //This confirmation email to client


?>
