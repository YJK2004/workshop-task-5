let table;
let icon;

function preload(){
  table = loadTable('screenTime.csv', 'csv', 'header');
  icon = loadImage('images/screentime_icon.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function dayLabel(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x)
    let days = row.get("DAYS")
    fill(255);
    textSize(15);
    text(days, 100 + x * 80, 500);
  }
}

function showWeek1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let Week1 = row.get("Week 1");
    for(y = 0; y < Week1; y++){
      image(icon, 100 + x * 80, 450 - y * 20, 20, 20);
    }
  }
}

function totalTime(){
  let xPos = 30;
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let days = row.get("Week 1");
    if(days > 0){
      for(y = 0; y < days; y++){
        image(icon, xPos, 40, 20, 20);
        xPos += 10;
      }
    }
  }
  fill(255, 0, 0);
  textSize(17)
  text("total hours of screen time in Week 1: 71 hrs", 755, 55);

}

function draw() {
  dayLabel();
  showWeek1();
  totalTime();

  textSize();
  fill(0, 255, 0);
  text("DAYS", 350, 550);

  text("SCREEN TIME(h)", 650, 350)
}
