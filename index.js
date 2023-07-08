function downloadimage() {
  var container = document.getElementById("displayImg");
  html2canvas(container, { allowTaint: true }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
}
const sitNumber = [
  "ড্রাইভারের পাশে",
  "১ম সারির A",
  "১ম সারির B",
  "১ম সারির C",
  "১ম সারির D",
  "2য় সারির A",
  "২য় সারির B",
  "২য় সারির C",
  "২য় সারির D",
  "৩য় সারির A",
  "৩য় সারির B",
  "৩য় সারির C",
  "৩য় সারির D",
];
//Sit Position
const sitPosition = document.getElementById("sitPosition");
sitPosition.innerHTML = sitNumber[Math.floor(Math.random() * (12 - 0 + 1)) + 0];
//Money Sender Name
const travellarName = document.getElementById("travellarName");
const adminSenderName = document.getElementById("adminSenderName");
const senderName = document
  .getElementById("senderName")
  .addEventListener("change", (e) => {
    travellarName.innerHTML = e.target.value;
    adminSenderName.innerHTML = e.target.value;
  });

//Tk Receiver Name
const receiverName = document.getElementById("receiverName");
const tkreceiver = document
  .getElementById("tkreceiver")
  .addEventListener("change", (e) => {
    console.log(e.target.value);
    receiverName.innerHTML = e.target.value;
  });

//Selected Amount
const selectedAmount = document.getElementById("selectedAmount");
const SelectAmountInput = document
  .getElementById("SelectAmountInput")
  .addEventListener("change", (e) => {
    selectedAmount.innerHTML = e.target.value;
  });
//Receive amount
const receiveAmount = document.getElementById("receiveAmount");
const receiveAmountUser = document.getElementById("receiveAmountUser");
const receiveAmountInput = document
  .getElementById("receiveAmountInput")
  .addEventListener("change", (e) => {
    receiveAmount.innerHTML = e.target.value;
    receiveAmountUser.innerHTML = e.target.value;
  });
//Due Amount Calculation
function duesValueCalculation() {
  //Due Amount
  const dueAmount = document.getElementById("dueAmount");
  const dueAmountAdmin = document.getElementById("dueAmountAdmin");

  //Select Amount
  var select = document.getElementById("SelectAmountInput").value;

  //Previous Amount
  var prev = document.getElementById("previousAmountInput").value;

  var rec = document.getElementById("receiveAmountInput").value;

  const due = select - rec - prev;
  dueAmount.innerHTML = due;
  dueAmountAdmin.innerHTML = due;
}
//Photo Making
const photoMaking = document
  .getElementById("photoMaking")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    downloadimage();

    //Hide And Display
    const displayImg = document.getElementById("displayImg");
    displayImg.style.display = "block";

    //Form Hide Show
    const formShow = document.getElementById("formShow");
    formShow.style.display = "none";
  });
