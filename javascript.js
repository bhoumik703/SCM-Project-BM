// ==========================================================================
//                  🌟 Diet Fitness Tracker - Enhanced Features
//                  Includes: Habit Tracking | Weekly Trends | Notifications
// ==========================================================================

// ---------- GLOBAL VARIABLES & DATA STORAGE ----------
let totalCalories = 0;
let totalWorkoutTime = 0;
let totalWater = 0;
let totalSleep = 0;
let mealHistory = [];
let workoutHistory = [];
let sleepHistory = [];
let goalHistory = [];
let weeklyStats = { calories: [], workout: [], sleep: [], water: [] };

// ---------- UI INTERACTIVITY FUNCTIONS ----------
function displayNotification(message, type = "info") {
    let notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ---------- MEAL TRACKER FUNCTIONS ----------
function addMeal() {
    let mealName = document.getElementById("meal").value.trim();
    let mealCalories = parseInt(document.getElementById("calories").value.trim());

    if (mealName && !isNaN(mealCalories)) {
        totalCalories += mealCalories;
        document.getElementById("total-calories").textContent = totalCalories;
        
        let entry = { name: mealName, calories: mealCalories };
        mealHistory.push(entry);
        updateWeeklyStats("calories", mealCalories);
        displayNotification("✅ Meal Added!");
    }
}

// ---------- WORKOUT TRACKER FUNCTIONS ----------
function addWorkout() {
    let exerciseName = document.getElementById("exercise").value.trim();
    let exerciseDuration = parseInt(document.getElementById("duration").value.trim());

    if (exerciseName && !isNaN(exerciseDuration)) {
        totalWorkoutTime += exerciseDuration;
        document.getElementById("total-duration").textContent = totalWorkoutTime;

        let entry = { name: exerciseName, duration: exerciseDuration };
        workoutHistory.push(entry);
        updateWeeklyStats("workout", exerciseDuration);
        displayNotification("💪 Workout Logged!");
    }
}

// ---------- WEEKLY STATS FUNCTION ----------
function updateWeeklyStats(type, value) {
    if (!weeklyStats[type]) weeklyStats[type] = [];
    if (weeklyStats[type].length >= 7) weeklyStats[type].shift();
    weeklyStats[type].push(value);
}

// ---------- BMI CALCULATOR FUNCTION ----------
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value.trim());
    let heightCm = parseFloat(document.getElementById("height").value.trim());

    if (!isNaN(weight) && !isNaN(heightCm) && heightCm > 0) {
        let heightM = heightCm / 100;
        let bmi = (weight / (heightM * heightM)).toFixed(1);
        let resultText = `Your BMI is ${bmi} - `;

        if (bmi < 18.5) resultText += "Underweight";
        else if (bmi < 25) resultText += "Normal weight";
        else if (bmi < 30) resultText += "Overweight";
        else resultText += "Obese";

        document.getElementById("bmi-result").textContent = resultText;
        updateWeeklyStats("bmi", bmi);
        displayNotification("⚖️ BMI Calculated!");
    }
}

// ---------- WATER INTAKE TRACKER FUNCTION ----------
function addWater() {
    let waterAmount = parseInt(document.getElementById("waterAmount").value.trim());

    if (!isNaN(waterAmount)) {
        totalWater += waterAmount;
        document.getElementById("total-water").textContent = totalWater;
        document.getElementById("water-progress").textContent = `${totalWater} ml`;
        updateWeeklyStats("water", waterAmount);
        displayNotification("💧 Hydration Added!");
    }
}

// ---------- SLEEP TRACKER FUNCTIONS ----------
function addSleep() {
    let sleepHours = parseFloat(document.getElementById("sleepHours").value.trim());

    if (!isNaN(sleepHours)) {
        totalSleep += sleepHours;
        document.getElementById("total-sleep").textContent = totalSleep;
        updateWeeklyStats("sleep", sleepHours);
        displayNotification("😴 Sleep Logged!");
    }
}

// ---------- DAILY GOALS FUNCTIONS ----------
function addGoal() {
    let goalText = document.getElementById("goal-input").value.trim();
    
    if (goalText) {
        goalHistory.push(goalText);
        let goalList = document.getElementById("goal-list");
        let listItem = document.createElement("li");
        listItem.textContent = `🎯 ${goalText}`;
        goalList.appendChild(listItem);
        displayNotification("✅ Goal Set!");
    }
}

// ---------- HABIT TRACKING & REMINDERS ----------
function habitReminder() {
    let habits = ["Drink water 💧", "Stretch for 5 minutes 🏋️‍♂️", "Eat a healthy snack 🍏", "Take deep breaths 🧘‍♂️"];
    let habitIndex = Math.floor(Math.random() * habits.length);
    displayNotification(`🌟 Reminder: ${habits[habitIndex]}`);
}

// ---------- MOTIVATIONAL QUOTES ----------
function getMotivationalQuote() {
    let quotes = [
        "💪 Fitness is not about being better than someone else. It’s about being better than you used to be!",
        "🚀 Every journey starts with a single step. Keep going!",
        "🌱 Small progress is still progress. Keep pushing forward!",
        "🏆 Hard work beats talent when talent doesn’t work hard!"
    ];
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    displayNotification(quotes[quoteIndex]);
}

// ---------- DARK MODE TOGGLE ----------
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    displayNotification("🌙 Dark Mode Toggled!");
}

document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);

// ---------- AUTOMATIC REMINDERS EVERY 10 MINUTES ----------
setInterval(habitReminder, 600000);

// ---------- SHOW MOTIVATIONAL QUOTES EVERY 30 MINUTES ----------
setInterval(getMotivationalQuote, 1800000);

// ==========================================================================
// 🌟 Enjoy tracking your fitness journey! 🏋️‍♂️🚀
// ==========================================================================
