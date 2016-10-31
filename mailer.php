<?php

$value = explode("&",$_POST['form']);
$arr = [];
        foreach($value as $val){
        	$tmp = explode( '=', $val );
            $arr[ $tmp[0] ] = $tmp[1];
        }


$arr['name'] = str_replace("+"," ",$arr['name']);
$arr['email'] = str_replace("%","@",$arr['email']);
$arr['message'] = str_replace("+"," ",$arr['message']);
require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$body = file_get_contents('email.html');
$body = str_replace('%name%', $arr['name'], $body);
$body = str_replace('%email%', $arr['email'], $body);
$body = str_replace('%message%', $arr['message'], $body);

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.yahoo.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kill3r557';                 // SMTP username
$mail->Password = 'trannhatquang';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('kill3r557@yahoo.com', 'Mailer');
$mail->addAddress('hoangtrungweb@gmail.com', 'Joe User');     // Add a recipient
// $mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('info@example.com', 'Information');
$mail->addCC('cc@example.com');
$mail->addBCC('bcc@example.com');

$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Have contact from DreamTeam';
// $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->MsgHTML($body);

if(!$mail->send()) {
    // echo 'Message could not be sent.';
    // echo 'Mailer Error: ' . $mail->ErrorInfo;
    $result = 0;
} else {
    //echo 'Message has been sent';
    $result = 1;
}

echo $result; die;


