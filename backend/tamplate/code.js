const codeMessage = (params) => `
<html>
<head>
<style>
p {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 15px;
  color: #585c6e;
  text-align: center;
}
div {
  text-align: center;
}
h3,h5{
  font-family: Verdana, Geneva, sans-serif;
  font-size: 25px;
  color: #585c6e;
  text-align: center;
  padding-top: 20px;
}
h5{
  font-size: 20px;                  
}
span{
  color : #e8313d ;
}
a{
  text-decoration: none;
}
h2{
 font-family: Poppins, sans-serif;;
  font-size: 35px;
  padding-top: 75px;
  color: #ffffff;
}
.header{
background-color: #1E293B;
align-items: center;
justify-content: center;
}
.title{
padding-bottom: 70px;
}
</style>
</head>
<body>
<div class="header">
<h2 class="title">Verification code</h2>
</div>
<h3>Hi ${params.firstName}!</h3>
<p>Your verification code is <span>${params.code}</span>.</p>
<p>Enter this code to change your password,If you didn't request this,simply delete it.</p>
<p>If you have any questions,Send us an email at <br> "contact@dev-team.com"</p>
<h5>The geo-nova team.</h5>
</body>
</html>
  `;
module.exports = { codeMessage };