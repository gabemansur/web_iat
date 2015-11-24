<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>WEB-IAT</title>

    <!-- Latest compiled and minified Bootstrap CSS -->
    <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
      integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ=="
      crossorigin="anonymous"
    >

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

    <!-- Latest compiled and minified Bootstrap JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
      integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ=="
      crossorigin="anonymous">
    </script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

		<link type="text/css" rel="stylesheet" media="all" href="css/style.css" />

		<script src="js/scripts.js"></script>

  </head>
  <body>
    <div class="container">
			<div class="row">

				<div class="col-lg-6">
					<h1 id="category_left"></h1>
          <h1 id="subcategory_left"></h1>
				</div>

				<div class="col-lg-6">
					<h1 id="category_right"></h1>
          <h1 id="subcategory_right"></h1>
				</div>

			</div>
      <div class="row">
        <div class="col-lg-12">
          <h1 id="word"></h1>
        </div>
      </div>
		</div>

    <div class="row">
      <div id="timer" class="col-lg-6 col-lg-offset-4">
        <h1>Time:</h1>
        <h1 id="time"></h1>
      </div>
    </div>
  </div>

  </body>
</html>
