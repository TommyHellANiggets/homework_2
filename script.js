const student = "Акулов Платон Александрович"; 
document.getElementById("student").innerHTML = student;

const allweeks = [17, 24]; 
  const lessons = [{
   lessons: [4, 1, 2, 5, 2, 2, 0], 
   exams: [0, 2, 0, 2, 0, 0, 0]}, 
  {lessons: [1, 4, 4, 2, 5, 0, 0], 
   exams: [2, 0, 2, 0, 2, 0, 0]}]

// Колличество дней каникул
const freedays = [7*2, 0]

// Колличество семестров
semesters = lessons.length;
travel_cost = prompt('Стоимость проезда', 100); 
travel_mom_gives = prompt('Сумма денег, которую дает мама на проезд', 150); 
meal_cost = prompt('Стоимость обеда', 120);
meal_mama_gives = prompt('Сумма денег, которую дает мама на обед', 250);
console_cost = prompt('Стоимость приставки', 25000);
while (travel_cost > travel_mom_gives) {
  travel_mom_gives = prompt('Введите сумму, превышающую стоимость на проезд (минимум ' + travel_cost + ')')}
while (meal_cost > meal_mama_gives) {
  meal_mama_gives = prompt('Введите сумму, превышающую стоимость обеда (минимум ' + meal_cost + ')')
}

const ride_dif = travel_mom_gives - travel_cost
const dinner_dif = meal_mama_gives - meal_cost

function count_list_sum(list) {
  sum = 0
  for (let week in list) {
    sum = sum + Number(week)
  }
  return sum
}

function money(lessons, semesters, allweeks, dinner_dif, ride_dif) {
  
let money_amount = 0
let days_quantity = 0
let output = {}
  
for (let semester = 0; semester < semesters; ++semester) {
    // Недели
    for (let week = 0; week < allweeks[semester]-1; ++week) {
      lessons_list = lessons[semester].lessons; 
      // Уроки
      for (let lesson = 0; lesson < lessons_list.length; ++lesson) {
        days_quantity = days_quantity + 1;
        lesson_count = lessons_list[lesson];
        if ((lesson_count > 3) || (lesson_count <= 0)) {
          continue
        }
        //Первая проверка
            if (console_cost <= money_amount) {
                output = {semester: semester, days: days_quantity, money: money_amount, week: week}
                return output}
        money_amount = money_amount + dinner_dif + ride_dif
      }
    }
  
lessons_list = lessons[semester].exams;
//Cессии
    for (let lesson = 0; lesson < lessons_list.length; ++lesson) {
      days_quantity = days_quantity + 1
      lesson_count = lessons_list[lesson];
      
      if ((lesson_count > 3) || (lesson_count <= 0)) 
      {continue}
//Вторая проверка
  if (console_cost <= money_amount) {
    output = {semester: semester, days: days_quantity, money: money_amount, week: allweeks[semester]}
    return output}
  
  money_amount = money_amount + dinner_dif + ride_dif;
}
//Каникулы
  days_quantity = days_quantity + freedays[semester]
} 
//Данные
  output = {semester: semesters, days: days_quantity, money: money_amount, week: count_list_sum(allweeks)}
  return output
}
money_data = money(lessons, semesters, allweeks, dinner_dif, ride_dif)

if (money_data.money >= console_cost) {
  alert('Денег на приставку удалось накопить за ' + Number(money_data.days) + ' дней. Это ' + (Number(money_data.week)+1) + " неделя " + (Number(money_data.semester)+1) + " семестра ");
}
else {
  alert('Денег на приставку не удалось накопить, но было накоплено ' + Number(money_data.money) + ' рублей.');
}