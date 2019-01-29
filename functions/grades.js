const gradeCalc = function (studentScore, possibleScore) {
  const grade = (studentScore / possibleScore) * 100 ;
  letterGrade = ''

  if (grade < 60){
   letterGrade = 'F'
  } else if (grade < 70 && grade > 59) {
    letterGrade = 'D'
  } else if ( grade < 80 && grade > 69) {
    letterGrade = 'C'
  } else if ( grade < 90 && grade > 79) {
    letterGrade = 'B'
  } else  {
    letterGrade = 'A'
  }
  return `You got a ${letterGrade} (${grade}%)!`
}
const result = gradeCalc(15, 20)
console.log(result)