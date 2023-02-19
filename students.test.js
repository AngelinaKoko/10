const getBestStudentOfCourse = require("./students");
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
const bestStudentExpected = [{ name: "Ivan", score: 35, date: "2022-10-11" }];

describe("Проверка лучшего студента на потоке", () => {
  it("Тест для массива лучшего студента", () => {
    expect(getBestStudentOfCourse(students)).toStrictEqual(bestStudentExpected);
  });
  it("Тест на имя лучшего студента", () => {
    expect(getBestStudentOfCourse(students)[0].name).toBe(
      bestStudentExpected[0].name
    );
  });
  it("Тест на баллы лучщего студента", () => {
    expect(getBestStudentOfCourse(students)[0].score).toBe(
      bestStudentExpected[0].score
    );
  });
});
