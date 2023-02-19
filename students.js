const students = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

function getMinDate(arr) {
  let minMilisec = new Date().getTime();
  for (i = 0; i < arr.length; i++) {
    let miliSec = new Date(arr[i].date).getTime();
    if (minMilisec > miliSec) {
      minMilisec = miliSec;
    }
  }

  let minDate = new Date();
  minDate.setTime(minMilisec);
  let minDateStr = minDate.toISOString().slice(0, 10);
  return minDateStr;
}

function getStudentWithMaxScore(arr) {
  let scorePoints = [];
  for (let el of arr) {
    scorePoints.push(el.score);
  }
  let max = Math.max(...scorePoints);
  let studentsWithMaxScore = [];
  for (let value of arr) {
    if (value.score == max) studentsWithMaxScore.push(value);
  }
  return studentsWithMaxScore;
}

function getSuperStudent(studentsArr, minDate) {
  let superS = {};
  for (let value of studentsArr) {
    if (value.date == minDate) superS = value;
  }
  return superS;
}

let superStudentsArr = [];
for (let i = 0; i < students.length; i++) {
  superStudentsArr.push(
    getSuperStudent(
      getStudentWithMaxScore(students[i]),
      getMinDate(getStudentWithMaxScore(students[i]))
    )
  );
}
superStudentsArr.forEach((element) =>
  console.log(`лучший и быстрый студент в группе ${element.name}`)
);

let bestStudent = getStudentWithMaxScore(superStudentsArr);
console.log(bestStudent);
console.log(`лучший студент на потоке ${bestStudent[0].name}`);

function getBestStudentOfCourse(arr) {
  let superStudentsArr = [];
  for (let i = 0; i < arr.length; i++) {
    superStudentsArr.push(
      getSuperStudent(
        getStudentWithMaxScore(arr[i]),
        getMinDate(getStudentWithMaxScore(arr[i]))
      )
    );
  }
  let bestStudent = getStudentWithMaxScore(superStudentsArr);
  return bestStudent;
}
module.exports = getBestStudentOfCourse;
