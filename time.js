

document.addEventListener("DOMContentLoaded", function() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  let currentBackground = "#FFFFFF"; // Default background color in case none matches
  let currentPrompt = "Time not in range"; // Default prompt in case none matches
  let i;

  const prompts = [
      [0, "Still awake?", "#0D1235"],
      [120, "You were supposed to enjoy your deepest sleep right now. Oh well... ᶠᶸᶜᵏᵧₒᵤ!", "#06000B"],
      [405, "Your body is experiencing the sharpest rise in blood pressure!", "#81AEFD"],
      [450, "Your body just stopped producing melatonin.", "#B7CCFF"],
      [510, "Don't you want to take a shit?", "#E8ECFF"],
      [540, "Highest testosterone secretion", "#C2B5FF"],
      [600, "You probably feel very awake right now. It's the perfect time to go study.", "#C093F2"],
      [720, "You're at peak brain-body coordination. Right now is a great time to sit down and work.", "#F530DA"],
      [930, "If we were in the prehistoric days, you'd be chasing down elks and gathering fruits around this time.", "#A2AC19"],
      [1020, "Greatest cardiovascular efficiency and muscle strength. Low brain efficiency. Go take a walk or hop on the rift.", "#8C8935"],
      [1110, "Your blood pressure is at its peak. Take a deep breath.", "#385222"],
      [1140, "Feeling hot?", "#1A3515"],
      [1260, "If you're a normal person, you'll start feeling sleepy soon.", "#0D2C28"],
      [1350, "No more potties. Yes, go to bed.", "#0B2128"]
  ];

  for (i = 0; i < prompts.length; i++) {
      if (totalMinutes >= prompts[i][0]) {
          currentBackground = prompts[i][2];
          currentPrompt = prompts[i][1];
      } else {
          break;  // Stop the loop once the current time has surpassed a time slot
      }
  }

  // Apply the determined background color to the body
  document.body.style.backgroundColor = currentBackground;
  document.getElementById('promptDisplay').textContent = currentPrompt;
});

// Function to provide accessibility to the prompt globally if needed elsewhere
function showPrompt() {
  return document.getElementById('promptDisplay').textContent;
}

function displayPrompt() {
  document.getElementById('promptDisplay').textContent = showPrompt();
}

window.addEventListener("DOMContentLoaded", displayPrompt);


// Expose showPrompt globally
window.showPrompt = showPrompt;


// const prompts = [
//   [405, "6:45 AM - Sharpest rise in blood pressure", "#81AEFD"],
//   [450, "7:30 AM - Melatonin secretion stops", "#B7CCFF"],
//   [510, "8:30 AM - Bowel movement likely", "#E8ECFF"],
//   [540, "9:00 AM - Highest testosterone secretion", "#C2B5FF"],
//   [600, "10:00 AM - High alertness", "#C093F2"],
//   [720, "12:00 PM - Best coordination", "#F530DA"],
//   [930, "3:30 PM - Fastest reaction time", "#A2AC19"],
//   [1020, "5:00 PM - Greatest cardiovascular efficiency and muscle strength", "#8C8935"],
//   [1110, "6:30 PM - Highest blood pressure", "#385222"],
//   [1140, "7:00 PM - Highest body temperature", "#1A3515"],
//   [1260, "9:00 PM - Melatonin secretion starts", "#0D2C28"],
//   [1350, "10:30 PM - Bowel movements suppressed", "#0B2128"],
//   [0, "12:00 AM Midnight", "#0D1235"],
//   [120, "2:00 AM - Deepest sleep", "#06000B"]
// ];