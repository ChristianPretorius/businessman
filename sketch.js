let playerAcc = 1.5
let playerFriction = -0.45
let joystickMoved = false
let FFButtonPushed = false
let annualInflasion = 0.2
let inSales = false
let storageFee = 2
let storageCost = 0
let FFSpeed = 1


let days = 0
let startTime = 0
let hours = 0
let empIndex = 0
let income = 0
let balance = 2000
let salesTime = 0
let accountingTime = 0
let qualitycontrolTime = 0
let researchTime = 0
let productionTime = 0
let recruitmentTime = 0
let marketingTime = 0
let adminTime = 0
let drawAdminTime = 0
let drawAccountingTime = 0
let salesCD = 4.5
let accountingCD = 3
let qualitycontrolCD = 20
let researchCD = 30
let productionCD = 3.5
let recruitmentCD = 30
let marketingCD = 30
let adminCD = 2
let employees = []
let numOfEmployees = 1
let inventory = 0
let salesPrice = 450
let employeeSalary = 600
let monthlySalaries = 0
let monthlyRentStart = 1000
let monthlyRent = 0
let billsPayed = false
let totalBills = 0
let productCost = 250
let materialCost = 0
let miscRandom = 0
let printAdmin = false
let printAccounting = false
let feesPayed = false
let waitingTime = 2000

let salesx = 0
let salesy = 0
let accountingx = 0
let accountingy = 0
let qualitycontrolx = 0
let qualitycontroly = 0
let researchx = 0
let researchy = 0
let recruitmentx = 0
let recruitmenty = 0
let productionx = 0
let productiony = 0
let marketingx = 0
let marketingy = 0
let adminx = 0
let adminy = 0
let startHeight = 0
let theBoardHeight = 0

let SScreen = true
let GOScreen = false
let VScreen = false

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER)
  d = sqrt(width ** 2 + height ** 2) / 100
  
  if(width/height > 16/11){
    d = sqrt(width ** 2 + height ** 2) / 130
  }
  
  if(width/height > 16/10){
    d = sqrt(width ** 2 + height ** 2) / 140
  }
  
  if(width/height > 16/9){
    d = sqrt(width ** 2 + height ** 2) / 150
  }
  
  
  playerAcc = d/4
  miscRandom = random(8, 12)

  startHeight = height * 0.16
  theBoardHeight = height * 0.68
  salesx = width * 3.75 / 10
  salesy = startHeight + theBoardHeight * 1.5 / 10
  accountingx = width * 6.25 / 10
  accountingy = startHeight + theBoardHeight * 1.5 / 10
  qualitycontrolx = width * 8 / 10
  qualitycontroly = startHeight + theBoardHeight * 3.9 / 10
  researchx = width * 2 / 10
  researchy = startHeight + theBoardHeight * 3.5 / 10
  recruitmentx = width * 2 / 10
  recruitmenty = startHeight + theBoardHeight * 6.4 / 10
  productionx = width * 8 / 10
  productiony = startHeight + theBoardHeight * 6.4 / 10
  marketingx = width * 3.75 / 10
  marketingy = startHeight + theBoardHeight * 8.5 / 10
  adminx = width * 6.25 / 10
  adminy = startHeight + theBoardHeight * 8.5 / 10
}

function draw() {
  background(170, 150, 110);

  if (SScreen) {
    showSplashScreen()
  }

  if (GOScreen) {
    showGameOverScreen()
  }

  if (VScreen) {
    showVictoryScreen()
  }

  if (!(SScreen || GOScreen || VScreen)) {
    checkNumEmployees()
    checkTouches()
    checkKeys()
    updateBills()
    updateTime()
    updateDepartments()
    checkDepartments()
    payBills()
    drawRibbons()
    drawProfitMargins()
    drawAdmin()
    drawAccounting()
    drawDepartments()
    drawLabels()
    drawJoysticks()
    drawButtons()
    drawTime()
    drawFastForward()
    drawEmployees()
    checkScores()
  }
}

function checkKeys() {
  if (keyIsDown(38)) {
    for (var emp of employees) {
      if (emp.selected == true) {
        emp.up = true
      }
    }
  }
  if (keyIsDown(40)) {
    for (var emp of employees) {
      if (emp.selected == true) {
        emp.down = true
      }
    }
  }
  if (keyIsDown(37)) {
    for (var emp of employees) {
      if (emp.selected == true) {
        emp.left = true
      }
    }
  }
  if (keyIsDown(39)) {
    for (var emp of employees) {
      if (emp.selected == true) {
        emp.right = true
      }
    }
  }
  if (keyIsDown(65)) { // select employee A
    for (var empers of employees) {
      empers.selected = false
    }
    if (numOfEmployees >= 1) {
      employees[0].selected = true
    }
  }
  if (keyIsDown(66)) { // select employee B
    for (var empers of employees) {
      empers.selected = false
    }
    if (numOfEmployees >= 2) {
      employees[1].selected = true
    }
  }
  if (keyIsDown(67)) { // select employee C
    for (var empers of employees) {
      empers.selected = false
    }
    if (numOfEmployees >= 3) {
      employees[2].selected = true
    }
  }
  if (keyIsDown(68)) { // select employee D
    for (var empers of employees) {
      empers.selected = false
    }
    if (numOfEmployees >= 4) {
      employees[3].selected = true
    }
  }
  if (keyIsDown(69)) { // select employee E
    for (var empers of employees) {
      empers.selected = false
    }
    if (numOfEmployees >= 5) {
      employees[4].selected = true
    }
  }
}

function showVictoryScreen() {

  waitingTime += deltaTime

  fill(0)
  textAlign(CENTER)

  textSize(4 * d)
  text("After " + str(days) + " days", width / 2, height / 4 - 4 * d)

  textSize(4 * d)
  text("You are a", width / 2, height / 3)
  textSize(8 * d)
  fill(0, 200, 0)
  text("MILLIONAIRE!", width / 2, height / 2 - 4 * d)
  textSize(2 * d)
  fill(0)
  text("(before paying taxes)", width / 2, height / 2 - 1 * d)
  fill(245)
  text("TAP to try again", width / 2, height / 2 + 6 * d)
  if (waitingTime / 1000 > 2) {
    for (var t of touches) {
      text("a", width / 2, height / 5)
      touches = []
      if (VScreen) {
        VScreen = false
        resetStartStats()
      }
    }
  }
  if (waitingTime / 1000 > 2) {
    if (keyIsDown(13)) { //ENTER
      if (VScreen) {
        VScreen = false
        resetStartStats()
      }
    }
  }
}

function showGameOverScreen() {

  waitingTime += deltaTime

  fill(0)
  textAlign(CENTER)

  textSize(4 * d)
  text("After " + str(days) + " days", width / 2, height / 4 - 4 * d)

  textSize(4 * d)
  text("You are", width / 2, height / 3)
  textSize(8 * d)
  fill(255, 0, 0)
  text("BANKRUPT!", width / 2, height / 2 - 6 * d)
  textSize(2 * d)
  fill(245)
  text("TAP / ENTER to try again", width / 2, height / 2 + 6 * d)
  if (waitingTime / 1000 > 2) {
    for (var t of touches) {
      text("a", width / 2, height / 5)
      touches = []
      if (GOScreen) {
        GOScreen = false
        resetStartStats()
      }
    }
  }
  if (waitingTime / 1000 > 2) {
    if (keyIsDown(13)) { //ENTER
      if (GOScreen) {
        GOScreen = false
        resetStartStats()
      }
    }
  }

}

function showSplashScreen() {
  fill(0)
  textAlign(CENTER)
  textSize(5 * d)
  text("Business man", width / 2, height / 3)
  textSize(3 * d)
  text("How fast can you earn $1 million?", width / 2, height / 2)
  textSize(2 * d)
  fill(245)
  text("TAP / Enter to start", width / 2, height / 2 + 6 * d)


  for (var t of touches) {
    text("a", width / 2, height / 5)
    touches = []
    if (SScreen) {
      SScreen = false
      resetStartStats()
    }
  }
  if (keyIsDown(13)) { //ENTER
    if (SScreen) {
      SScreen = false
      resetStartStats()
    }
  }
}

function checkScores() {
  if (balance < 0) {
    GOScreen = true
  }
  if ((balance + income - totalBills) > (1000000 - 1)) {
    VScreen = true
  }
}

function resetStartStats() {
  days = 0
  startTime = 0
  hours = 0
  empIndex = 0
  income = 0
  balance = 2000
  salesTime = 0
  accountingTime = 0
  qualitycontrolTime = 0
  researchTime = 0
  productionTime = 0
  recruitmentTime = 0
  marketingTime = 0
  adminTime = 0
  drawAdminTime = 0
  drawAccountingTime = 0
  salesCD = 4.5
  accountingCD = 3
  qualitycontrolCD = 20
  researchCD = 30
  productionCD = 3.5
  recruitmentCD = 30
  marketingCD = 30
  adminCD = 2
  employees = []
  numOfEmployees = 1
  inventory = 0
  salesPrice = 450
  employeeSalary = 600
  monthlySalaries = 0
  monthlyRentStart = 1000
  monthlyRent = 0
  billsPayed = false
  totalBills = 0
  productCost = 250
  materialCost = 0
  miscRandom = 0
  printAdmin = false
  printAccounting = false
  feesPayed = false
  waitingTime = 0
}

function drawFastForward() {
  centerX = width * 0.1
  centerY = height * 0.75
    
  fill(230)
  if (!FFButtonPushed) {
    ellipse(centerX, centerY, d * 6, d * 6)
  }

  FFButtonPushed = false

  for (var t of touches) {
    x = int(t.x)
    y = int(t.y)

    distance = dist(centerX, centerY, x, y)

    if (int(distance) <= d * 7) {
      fill(120)
      ellipse(centerX, centerY, d * 8, d * 8)
      FFButtonPushed = true
    }
  }
  
  if (keyIsDown(70)) { // select employee E
      fill(120)
      ellipse(centerX, centerY, d * 8, d * 8)
      FFButtonPushed = true
  }

  if (FFButtonPushed) {
    FFButtonTime += deltaTime * 10
    FFSpeed = min(int(FFButtonTime / 1000) + 1, 50)
  } else {
    FFButtonTime = 0
    FFSpeed = 1
  }
  fill(0)

  triangle(centerX + 1.5 * d, centerY, centerX + 0.5 * d, centerY - d, centerX + 0.5 * d, centerY + d)
  triangle(centerX, centerY, centerX - d, centerY - d, centerX - d, centerY + d)

}

function drawLabels() { //todo - draw hours required inside circles. Remove text below.

  textAlign(CENTER)
  textSize(d * 1.5)
  noStroke()
  
  text("+1 Sale", salesx, salesy + d * 5)
  text("Accounting Info", accountingx, accountingy + d * 5)
  if (numOfEmployees < 5) {
    text("+1 Employee", recruitmentx, recruitmenty + d * 5)
  }
  text("10% Lower Product Cost", researchx, researchy + d * 5)
  text("10% Faster Production", qualitycontrolx, qualitycontroly + d * 5)
  text("+1 Product", productionx, productiony + d * 5)
  text("+10% Sales Price", marketingx, marketingy + d * 5)
  text("Expenses", adminx, adminy + d * 5)
  
  fill(255)
  textSize(2.5*d)
  stroke(255)
  
  if(!FFButtonPushed){
  text("F", width * 0.1 - d * 4, height * 0.75 + d) 
  }
  
  noStroke()
  textSize(2*d)
  
  text(str(int(salesCD * 2)), salesx, salesy)  
  text(str(int(accountingCD * 2)), accountingx, accountingy)
  if (numOfEmployees < 5) {
    text(str(int(recruitmentCD * 2)), recruitmentx, recruitmenty)
  }
  text(str(int(researchCD * 2)), researchx, researchy)
  text(str(int(qualitycontrolCD * 2)), qualitycontrolx, qualitycontroly)
  text(str(int(productionCD * 2)), productionx, productiony)
  text(str(int(marketingCD * 2)), marketingx, marketingy)
  text(str(int(adminCD * 2)), adminx, adminy) 
  
  textSize(1.5*d)
  text("hours", salesx, salesy + d*2)  
  text("hours", accountingx, accountingy + d*2)
  if (numOfEmployees < 5) {
    text("hours", recruitmentx, recruitmenty + d*2)
  }
  text("hours", researchx, researchy + d*2)
  text("hours", qualitycontrolx, qualitycontroly + d*2)
  text("hours", productionx, productiony + d*2)
  text("hours", marketingx, marketingy + d*2)
  text("hours", adminx, adminy + d*2)
  
  fill(0)
  stroke(0)
  
}

function checkDepartments() {
  if (salesTime / 1000 >= salesCD) { //SALES
    if (inventory > 0) {
      inventory -= 1
      income += salesPrice
      salesTime = 0
    }
  }

  if (recruitmentTime / 1000 >= recruitmentCD) { //RECRUITMENT
    recruitmentTime -= recruitmentCD * 1000
    if (numOfEmployees <= 4) {
      numOfEmployees += 1
    }
  }

  if (productionTime / 1000 >= productionCD) { //PRODUCTION
    inventory += 1
    materialCost += productCost
    productionTime = 0
  }

  if (researchTime / 1000 >= researchCD) {
    productCost *= 0.9
    researchCD *= 1.15
    researchTime = 0
  }

  if (adminTime / 1000 >= adminCD) {
    printAdmin = true
    adminTime = 0
  }

  if (marketingTime / 1000 >= marketingCD) {
    salesPrice *= 1.10
    marketingCD *= 1.15
    marketingTime = 0
  }

  if (accountingTime / 1000 >= accountingCD) {
    printAccounting = true
    accountingTime = 0
  }

  if (qualitycontrolTime / 1000 >= qualitycontrolCD) {
    qualitycontrolTime = 0
    productionCD *= 0.9
    qualitycontrolCD *= 1.1
  }

}

function drawProfitMargins() {
  if (printAccounting) {
    textAlign(LEFT)
    textSize(d * 1.5)
    noStroke()
    fill(0)

    text("Sales Price: ", width * 3 / 4 - d * 1.5, height / 8 + d * 7)
    text("Cost Price: ", width * 3 / 4 - d * 1.5, height / 8 + d * 9)
    text("Profit / Unit: ", width * 3 / 4 - d * 1.5, height / 8 + d * 11)
    text("Profit (%): ", width * 3 / 4 - d * 1.5, height / 8 + d * 13)

    text("$ " + str(int(salesPrice)), width * 3 / 4 + d * 7, height / 8 + d * 7)
    text("$ " + str(int(productCost)), width * 3 / 4 + d * 7, height / 8 + d * 9)
    text("$ " + str(int(salesPrice - productCost)), width * 3 / 4 + d * 7, height / 8 + d * 11)
    text(str(round((int(salesPrice - productCost) / salesPrice) * 100)) + " %", width * 3 / 4 + d * 7, height / 8 + d * 13)


    drawAccountingTime += deltaTime * FFSpeed

    if (drawAccountingTime / 1000 >= 15) {
      drawAccountingTime = 0
      printAccounting = false
    }
    stroke(0)
  }
}

function drawAdmin() {
  if (printAdmin) {

    textAlign(LEFT)
    textSize(d * 1.5)
    noStroke()
    fill(0)

    text("Expenses: ", d * 1.5, height / 8 + d * 7)
    text(" Materials: ", d * 1.5, height / 8 + d * 9)
    text(" Salaries: ", d * 1.5, height / 8 + d * 11)
    text(" Rent: ", d * 1.5, height / 8 + d * 13)
    text(" Storage: ", d * 1.5, height / 8 + d * 15)
    text(" Other: ", d * 1.5, height / 8 + d * 17)

    fill(200, 0, 0)
    textSize(d * 2)
    text("$ " + str(int(totalBills)), d * 10, height / 8 + d * 7)
    fill(0)
    textSize(d * 1.65)
    text("$ " + str(int(materialCost)), d * 10, height / 8 + d * 9)
    text("$ " + str(int(monthlySalaries)), d * 10, height / 8 + d * 11)
    text("$ " + str(int(monthlyRent)), d * 10, height / 8 + d * 13)
    text("$ " + str(int(storageCost)), d * 10, height / 8 + d * 15)
    text("$ " + str(int(misc)), d * 10, height / 8 + d * 17)

    fill(0)
    stroke(0)

    textAlign(CENTER)
    textSize(d * 1.5)
    noStroke()
    text("Inventory", productionx + d * 7, productiony - d)
    text(str(inventory), productionx + d * 7, productiony + d)
    drawAdminTime += deltaTime * FFSpeed

    if (drawAdminTime / 1000 >= 20) {
      drawAdminTime = 0
      printAdmin = false
    }
    stroke(0)

  }
}

function payBills() {

  DOM = 1 + (int(startTime / 10000)) % 30

  if (DOM == 30 && !billsPayed) {
    balance += income
    balance -= totalBills

    storageCost = 0
    materialCost = 0
    income = 0

    billsPayed = true
  }

  if (DOM != 30 && billsPayed) {
    billsPayed = false
  }

}

function updateBills() {
  monthlySalaries = employees.length * employeeSalary * (1 + employees.length / 8) * (1 + (annualInflasion / 360)) ** (int(startTime / 10000))
  monthlyRent = monthlyRentStart * (1 + (annualInflasion / 360)) ** (int(startTime / 10000))
  misc = miscRandom * (int(startTime / 10000) % 30)

  HOD = (int(startTime / 1000)) % 10
  if (HOD == 0 && !feesPayed) {
    storageCost += inventory * storageFee
    feesPayed = true
  }
  if (HOD != 0 && feesPayed) {
    feesPayed = false
  }


  totalBills = monthlySalaries + monthlyRent + misc + materialCost + storageCost

}

function checkNumEmployees() {

  if (employees.length < numOfEmployees) {
    if (employees.length == 4) {
      f = new Employee("Square", "E", "black", d)
      employees.push(f)
    }
    if (employees.length == 3) {
      e = new Employee("Square", "D", "purple", d)
      employees.push(e)
    }
    if (employees.length == 2) {
      c = new Employee("Square", "C", "blue", d)
      employees.push(c)
    }
    if (employees.length == 1) {
      b = new Employee("Square", "B", "green", d)
      employees.push(b)
    }
    if (employees.length == 0) {
      a = new Employee("Square", "A", "red", d)
      employees.push(a)
    }
  }
}

function updateDepartments() {

  textSize(d * 2)
  depSize = d * 7

  for (var emps of employees) {
    x = emps.posx
    y = emps.posy

    if (dist(x, y, salesx, salesy) < (d * 5)) { // SALES
      salesTime += deltaTime * FFSpeed
    }
    if (dist(x, y, accountingx, accountingy) < (d * 5)) { //ACCOUNTING
      accountingTime += deltaTime * FFSpeed
    }
    if (dist(x, y, qualitycontrolx, qualitycontroly) < (d * 5)) { //QUALITY CONTROL
      qualitycontrolTime += deltaTime * FFSpeed
    }
    if (dist(x, y, researchx, researchy) < (d * 5)) { //RESEARCH
      researchTime += deltaTime * FFSpeed
    }
    if (dist(x, y, recruitmentx, recruitmenty) < (d * 5)) { //RECRUITMENT
      recruitmentTime += deltaTime * FFSpeed
    }
    if (dist(x, y, productionx, productiony) < (d * 5)) { //PRODUCTION
      productionTime += deltaTime * FFSpeed
    }
    if (dist(x, y, marketingx, marketingy) < (d * 5)) { //MARKETING
      marketingTime += deltaTime * FFSpeed
    }
    if (dist(x, y, adminx, adminy) < (d * 5)) { //ADMIN
      adminTime += deltaTime * FFSpeed
    }
  }
}

function drawAccounting() {
  fill(255)
  textSize(2.5 * d)
  textAlign(LEFT)
  stroke(50)
  text("Income: $ " + str(int(income)), width * 0.05, height * 0.05)
  text("Balance: $ " + str(int(balance)), width * 0.05, height * 0.10)
  textAlign(CENTER)
  stroke(0)
}

function drawEmployees() {
  for (var emps of employees) {
    emps.move()
    emps.draw()
  }
}

function drawTime() {

  textSize(2.5 * d)

  clock = "0" + str(hours) + ":00"
  if (hours >= 10) {
    clock = str(hours) + ":00"
  }

  date = str(days)

  textAlign(LEFT)
  stroke(50)
  text("Day: " + date, width * 10 / 16, height * 0.05)
  text(clock, width * 10 / 16, height * 0.10)
  textAlign(CENTER)
  stroke(0)

}

function updateTime() {
  startTime += deltaTime * 2.5 * FFSpeed
  startMonth = month()
  startYear = year()

  hours = 8 + int(startTime / 1000) % 10
  days = 1 + (int(startTime / 10000))

}

function drawRibbons() {

  rectMode(CORNER)
  fill(120, 180, 255)
  rect(0, 0, width, height * 0.16)
  rect(0, height * 0.84, width, height * 0.16)
  rectMode(CENTER)

}

function drawButtons() {
  h = height * 0.9
  w = width / 10
  size = d * 4

  fill(255, 0, 0)
  ellipse(w * 1, h, size, size)
  fill(150)

  if (employees.length > 1) {
    fill(0, 255, 0)
  }
  ellipse(w * 2, h, size, size)
  fill(150)

  if (employees.length > 2) {
    fill(0, 0, 255)
  }
  ellipse(w * 3, h, size, size)
  fill(150)

  if (employees.length > 3) {
    fill(100, 0, 200)
  }
  ellipse(w * 4, h, size, size)
  fill(150)

  if (employees.length > 4) {
    fill(0)
  }
  ellipse(w * 5, h, size, size)


  fill(0)
  textAlign(CENTER)
  textSize(d * 2.5)
  fill(255)
  stroke(255)
  text("A", w * 1, h + 0.85 * d)
  text("B", w * 2, h + 0.85 * d)
  text("C", w * 3, h + 0.85 * d)
  text("D", w * 4, h + 0.85 * d)
  text("E", w * 5, h + 0.85 * d)
  stroke(0)

}

function drawDepartments() {

  depSize = d * 7
  ySpace = d * 4.5

  fill(255)
  textSize(1.8 * d)
  noStroke()
  text("Sales", salesx, salesy - ySpace)
  text("Accounting", accountingx, accountingy - ySpace)

  text("Research", researchx, researchy - ySpace)
  text("Quality Control", qualitycontrolx, qualitycontroly - ySpace)

  text("Recruitment", recruitmentx, recruitmenty - ySpace)
  text("Production", productionx, productiony - ySpace)

  text("Marketing", marketingx, marketingy - ySpace)
  text("Admin", adminx, adminy - ySpace)
  stroke(0)

  fill(255)
  salesArc = map(int(salesTime / 1000) % salesCD, 0, salesCD, PI * 1.501, PI * 3.5)
  accountingArc = map(int(accountingTime / 1000) % accountingCD, 0, accountingCD, PI * 1.501, PI * 3.5)
  researchArc = map(int(researchTime / 1000) % researchCD, 0, researchCD, PI * 1.501, PI * 3.5)
  qualitycontrolArc = map(int(qualitycontrolTime / 1000) % qualitycontrolCD, 0, qualitycontrolCD, PI * 1.501, PI * 3.5)
  recruitmentArc = map(int(recruitmentTime / 1000) % recruitmentCD, 0, recruitmentCD, PI * 1.501, PI * 3.5)
  productionArc = map(int(productionTime / 1000) % productionCD, 0, productionCD, PI * 1.501, PI * 3.5)
  marketingArc = map(int(marketingTime / 1000) % marketingCD, 0, marketingCD, PI * 1.501, PI * 3.5)
  adminArc = map(int(adminTime / 1000) % adminCD, 0, adminCD, PI * 1.501, PI * 3.5)

  arc(salesx, salesy, depSize * 1.15, depSize * 1.15, PI * 1.5, salesArc)
  arc(accountingx, accountingy, depSize * 1.15, depSize * 1.15, PI * 1.5, accountingArc)
  arc(researchx, researchy, depSize * 1.15, depSize * 1.15, PI * 1.5, researchArc)
  arc(qualitycontrolx, qualitycontroly, depSize * 1.15, depSize * 1.15, PI * 1.5, qualitycontrolArc)
  arc(recruitmentx, recruitmenty, depSize * 1.15, depSize * 1.15, PI * 1.5, recruitmentArc)
  arc(productionx, productiony, depSize * 1.15, depSize * 1.15, PI * 1.5, productionArc)
  arc(marketingx, marketingy, depSize * 1.15, depSize * 1.15, PI * 1.5, marketingArc)
  arc(adminx, adminy, depSize * 1.15, depSize * 1.15, PI * 1.5, adminArc)

  fill(150)
  ellipse(salesx, salesy, depSize, depSize)
  ellipse(accountingx, accountingy, depSize, depSize)

  ellipse(researchx, researchy, depSize, depSize)
  ellipse(qualitycontrolx, qualitycontroly, depSize, depSize)

  ellipse(recruitmentx, recruitmenty, depSize, depSize)
  ellipse(productionx, productiony, depSize, depSize)

  ellipse(marketingx, marketingy, depSize, depSize)
  ellipse(adminx, adminy, depSize, depSize)

  fill(0)
}

function checkTouches() {

  // check joystick touches (dmin < dist < dmax)
  centerX = width * 0.8
  centerY = height * 0.9

  for (var t of touches) {
    x = int(t.x)
    y = int(t.y)

    dx = centerX - x
    dy = centerY - y
    s = int(dist(centerX, centerY, x, y))

    sinX = Math.sin(dx / s) * (0 - 1)
    sinY = Math.sin(dy / s)

    if (s <= d * 7) {
      for (var emp of employees) {
        if (emp.selected == true) {
          if (sinY >= 0.4) {
            emp.up = true
          }
          if (sinY <= -0.4) {
            emp.down = true
          }
          if (sinX >= 0.4) {
            emp.right = true
          }
          if (sinX <= -0.4) {
            emp.left = true
          }
        }
      }
    }

    h = height * 0.9
    w = width / 10
    size = d * 4

    bay = h
    b1x = w
    b2x = w * 2
    b3x = w * 3
    b4x = w * 4
    b5x = w * 5

    if ((y >= h - size / 2) && (y <= h + size / 2)) {
      if ((x >= b1x - size / 2) && (x <= b1x + size / 2)) {
        empIndex = 0
      }
      if ((x >= b2x - size / 2) && (x <= b2x + size / 2) && employees.length > 1) {
        empIndex = 1
      }
      if ((x >= b3x - size / 2) && (x <= b3x + size / 2) && employees.length > 2) {
        empIndex = 2
      }
      if ((x >= b4x - size / 2) && (x <= b4x + size / 2) && employees.length > 3) {
        empIndex = 3
      }
      if ((x >= b5x - size / 2) && (x <= b5x + size / 2) && employees.length > 4) {
        empIndex = 4
      }
    }

    for (empers of employees) {
      empers.selected = false
    }

    if (empIndex <= employees.length) {
      employees[empIndex].selected = true
    }
  }
}

function drawJoysticks() {

  centerX = width * 0.8
  centerY = height * 0.9

  fill(90)
  ellipse(centerX, centerY, d * 12, d * 12)
  fill(120)

  if (!joystickMoved) {
    ellipse(centerX, centerY, d * 7, d * 7)
  }

  joystickMoved = false

  for (var t of touches) {
    x = int(t.x)
    y = int(t.y)

    distance = dist(centerX, centerY, x, y)

    if (int(distance) <= d * 7) {
      ellipse(x, y, d * 9, d * 9)
      joystickMoved = true
    }
  }

  fill(0)
}

class Employee {

  constructor(type, name, colorName, size) {
    this.name = name
    this.colorName = colorName
    this.type = type
    this.size = size * 2.5

    this.posx = width / 2
    this.posy = height / 2
    this.vely = 0
    this.velx = 0
    this.accy = 0
    this.accx = 0

    this.left = false
    this.right = false
    this.up = false
    this.down = false

    this.selected = false
  }

  move() {
    if (this.left) {
      for (var emp of employees) {
        if (emp.selected == true) {
          emp.accx = -playerAcc
          this.left = false
        }
      }
    }
    if (this.up) {
      for (var empo of employees) {
        if (empo.selected == true) {
          empo.accy = -playerAcc
          this.up = false
        }
      }
    }
    if (this.right) {
      for (var empi of employees) {
        if (empi.selected == true) {
          empi.accx = playerAcc
          this.right = false
        }
      }
    }
    if (this.down) {
      for (var empa of employees) {
        if (empa.selected == true) {
          empa.accy = playerAcc
          this.down = false
        }
      }
    }

    this.accx += this.velx * playerFriction
    this.accy += this.vely * playerFriction

    this.velx += this.accx
    this.vely += this.accy

    if (abs(this.velx) < 1) {
      this.velx = 0
    }
    if (abs(this.vely) < 1) {
      this.vely = 0
    }

    this.posx += this.velx + 0.5 * this.accx
    this.posy += this.vely + 0.5 * this.accy

    if (this.posx < this.size / 2) {
      this.posx = this.size / 2
    }

    if (this.posx > width - this.size / 2) {
      this.posx = width - this.size / 2
    }

    if (this.posy < height * 0.16 + this.size / 2) {
      this.posy = height * 0.16 + this.size / 2
    }

    if (this.posy > height * 0.84 - this.size / 2) {
      this.posy = height * 0.84 - this.size / 2
    }

    this.accx = 0
    this.accy = 0
  }

  draw() {

    if (this.selected == true) {
      noFill()
      strokeWeight(3)
      stroke(50, 50, 50, 150)
      ellipse(this.posx, this.posy, this.size * 1.75, this.size * 1.75)
      stroke(100, 100, 100, 125)
      ellipse(this.posx, this.posy, this.size * 2, this.size * 2)
      stroke(150, 150, 150, 100)
      ellipse(this.posx, this.posy, this.size * 2.25, this.size * 2.25)
      stroke(200, 200, 200, 75)
      ellipse(this.posx, this.posy, this.size * 2.5, this.size * 2.5)
      stroke(0)
      strokeWeight(1)
      fill(0)
    }

    if (this.colorName == "blue") {
      fill(0, 0, 200)
    } else if (this.colorName == "red") {
      fill(200, 0, 0)
    } else if (this.colorName == "green") {
      fill(0, 200, 0)
    } else if (this.colorName == "black") {
      fill(0)
    } else {
      fill(100, 0, 200)
    }

    if (this.type == "Square") {
      rect(this.posx, this.posy, this.size, this.size)
    }

    if (this.type == "Circle") {
      ellipse(this.posx, this.posy, this.size, this.size)
    }

    fill(0)
  }
}