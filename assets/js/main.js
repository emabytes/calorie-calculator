// Harris Benedict Formula
//BMR (basal metabolic rate) male = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age)
//BMR female = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
//total in kcal = PAL (Physical Activity Level) factor * BMR

function calculate() {
  let age = Number(document.getElementById("age").value);
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let palFactor = Number(document.getElementById("activity").value);
  let bmrKcal;
  let totalKcal;

  //1. check if male or female (use different formula)
  // 2. calculate bmr in kcal
  // 3. calculate total in kcal
  //4. convert bmr and total to kj
  //show 4 results - bmr kcal, bmr kj, total kcal, total kj

  if (male == true) {
    bmrKcal = 664.7 + 13.7 * weight + 5 * height - 6.8 * age;
    console.log(bmrKcal + "male");
  } else if (female == true) {
    bmrKcal = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
    console.log(bmrKcal + "female");
  }

  if (palFactor == 0.95) {
    totalKcal = palFactor * bmrKcal;
    console.log("pal " + palFactor + " total " + totalKcal);
  } else if (palFactor == 1.2) {
    totalKcal = palFactor * bmrKcal;
  } else if (palFactor == 1.5) {
    totalKcal = palFactor * bmrKcal;
  } else if (palFactor == 1.7) {
    totalKcal = palFactor * bmrKcal;
  } else if (palFactor == 1.9) {
    totalKcal = palFactor * bmrKcal;
  } else if (palFactor == 2.2) {
    totalKcal = palFactor * bmrKcal;
  }

  //convert kcal to kj
  //kj = kcal * 4.184
  let bmrKj = bmrKcal * 4.184;
  let totalKj = totalKcal * 4.184;
  document.getElementById("bmr-kcal").innerHTML = Math.floor(bmrKcal);
  document.getElementById("bmr-kj").innerHTML = Math.floor(bmrKj);
  document.getElementById("total-kcal").innerHTML = Math.floor(totalKcal);
  document.getElementById("total-kj").innerHTML = Math.floor(totalKj);

  // if missing field
  if (age == 0 || height == 0 || weight == 0) {
    document.getElementById("warning").innerHTML = "Try again!";
    document.getElementById("bmr-kcal").innerHTML = "";
    document.getElementById("bmr-kj").innerHTML = "";
    document.getElementById("total-kcal").innerHTML = "";
    document.getElementById("total-kj").innerHTML = "";
  }
}