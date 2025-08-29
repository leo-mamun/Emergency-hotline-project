// Navbar Counters 
const heartCounter = document.getElementById("heartCount");
const coinCounter  = document.getElementById("coinCount");
const copyCounter  = document.getElementById("copyCount");

// History Section 
const historyList  = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");
const clearHistoryBtn = document.getElementById("clearHistory");

// === Initial Values ===
let hearts = 0;
let coins  = 100;
let copies = 0;

const cards = document.querySelectorAll(".card");



for (const card of cards)
   {
  const serviceName   = card.querySelector(".helpname").innerText;
  const serviceNumber = card.querySelector(".helpnum").innerText;

  const heartBtn = card.querySelector(".heartBtn");
  const copyBtn  = card.querySelector(".copyBtn");
  const callBtn  = card.querySelector(".callBtn");

  //  Heart Button 
  heartBtn.addEventListener("click", () =>
     {
    hearts++;
    heartCounter.innerText = hearts;
  });

  //  Copy Button 
  copyBtn.addEventListener("click", () =>
     {
    navigator.clipboard.writeText(serviceNumber).then(() => {
      copies++;
      copyCounter.innerText = copies;
      alert(`${serviceName} number ${serviceNumber} copied!`);
    });
  });

  // Call Button 
  callBtn.addEventListener("click", () => {
    if (coins < 20) {
      alert("Not enough coins to make a call");
      return;
    }
    coins -= 20;
    coinCounter.innerText = coins;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    alert(`Calling ${serviceName} (${serviceNumber})...`);

    // Add to history
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm";
    li.innerHTML = `
      <span><strong>${serviceName}</strong> - ${serviceNumber}</span>
      <span class="text-xs text-gray-500">${timeString}</span>
    `;
    historyList.appendChild(li);
    historyEmpty.style.display = "none";
  });
}

//  Clear History Button
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
  historyEmpty.style.display = "block";
});
