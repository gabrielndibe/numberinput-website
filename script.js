function calculateGrade() {
 const input = document.getElementById("score-input");
   const score = parseFloat(input.value);
    const errorMessage = document.getElementById("errorMessage");
    const resultDiv = document.getElementById('result');

errorMessage.textContent= "";
resultDiv.textContent= "";

 if (isNaN(score) || score < 0 || score > 100 ) {
    errorMessage.textContent = "Please enter a valid score between 0 and 100";
   setTimeout(() => {
    errorMessage.textContent= "";
   }, 3000);
    return;
}
 
 if (score >= 90) {
    grade = "A";
 } else if (score >= 75) {
   grade = "B";
 } else if (score >= 50) {
  grade = "C"
} else if (score >= 40) {
  grade ="D"
} else {
    grade = "E";
}
alert(`You got ${grade}`);
input.value = "";
}
