<!DOCTYPE html>
<html>
<body>
<h1>The JavaScript <i>this</i> Keyword</h1>
<p id="demo"></p>
<script>
// Create an object:
const person = {
  firstName: "Mega",
  lastName: "Ranjini",
  Empid: 10001,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
</script>

</body>
</html>
