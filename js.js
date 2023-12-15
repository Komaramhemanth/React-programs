<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Functions Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }

    #myParagraph {
      color: blue;
    }

    #myButton {
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>JavaScript Functions Example</h1>

  <p id="myParagraph">This is a paragraph with an initial color.</p>

  <button id="myButton" onclick="changeColor()">Change Color</button>

  <script>
    // JavaScript function to change the color of the paragraph
    function changeColor() {
      var paragraph = document.getElementById("myParagraph");
      paragraph.style.color = getRandomColor();
    }

    // JavaScript function to generate a random color
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  </script>

</body>
</html>
