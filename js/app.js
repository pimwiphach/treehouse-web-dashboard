// for a line chart
//hourly

var ctx = document.getElementById("trafficChart").getContext("2d");
//select type of time: hourly, daily, weekly and monthly

var ctx = document.getElementById("trafficChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "",
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
      ""
    ],
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(107, 112, 190, 0.2)",
        borderColor: "rgb(107, 112, 190)",
        borderWidth: 2,
        lineTension: 0,
        pointRadius: 5,
        borderCapStyle: "round",
        borderJoinStyle: "bevel",
        pointBorderWidth: 2,
        pointBackgroundColor: "#fff",
        data: [
          0,
          750,
          1250,
          1000,
          1500,
          2000,
          1500,
          1750,
          1250,
          1750,
          2250,
          1750,
          2250
        ]
      }
    ]
  },
  // Configuration options go here
  options: {
    responsive: true,
    maintainAspectRatio: false,
    onResize: null,
    aspectRatio: 2,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawTicks: true,
            offsetGridLines: false
          },
          ticks: {
            padding: 15,
            labelOffset: 30
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            drawTicks: false
          },
          ticks: {
            beginAtZero: true,
            padding: 15,
            labelOffset: 20
          }
        }
      ]
    }
  }
});

var chosenBtn = document.getElementById("chosen");

const hourlyTime = document.querySelectorAll(".frequency-type li")[0];

hourlyTime.addEventListener("click", function() {
  var ctx = document.getElementById("trafficChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "",
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
        ""
      ],
      datasets: [
        {
          label: "",
          backgroundColor: "rgb(107, 112, 190, 0.2)",
          borderColor: "rgb(107, 112, 190)",
          borderWidth: 2,
          lineTension: 0,
          pointRadius: 5,
          borderCapStyle: "round",
          borderJoinStyle: "bevel",
          pointBorderWidth: 2,
          pointBackgroundColor: "#fff",
          data: [
            0,
            750,
            1250,
            1000,
            1500,
            2000,
            1500,
            1750,
            1250,
            1750,
            2250,
            1750,
            2250
          ]
        }
      ]
    },
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              padding: 15,
              labelOffset: 20
            }
          }
        ]
      }
    }
  });
});

//daily

const dailyTime = document.querySelectorAll(".frequency-type li")[1];

dailyTime.addEventListener("click", function() {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "",
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
        ""
      ],
      datasets: [
        {
          label: "",
          backgroundColor: "rgb(107, 112, 190, 0.2)",
          borderColor: "rgb(107, 112, 190)",
          borderWidth: 2,
          lineTension: 0,
          pointRadius: 5,
          borderCapStyle: "round",
          borderJoinStyle: "bevel",
          pointBorderWidth: 2,
          pointBackgroundColor: "#fff",
          data: [
            0,
            750,
            1250,
            100,
            500,
            750,
            3250,
            1750,
            1250,
            750,
            2250,
            1750,
            2250
          ]
        }
      ]
    },
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              padding: 15,
              labelOffset: 20
            }
          }
        ]
      }
    }
  });
});

const weeklyTime = document.querySelectorAll(".frequency-type li")[2];

weeklyTime.addEventListener("click", function() {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "",
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
        ""
      ],
      datasets: [
        {
          label: "",
          backgroundColor: "rgb(107, 112, 190, 0.2)",
          borderColor: "rgb(107, 112, 190)",
          borderWidth: 2,
          lineTension: 0,
          pointRadius: 5,
          borderCapStyle: "round",
          borderJoinStyle: "bevel",
          pointBorderWidth: 2,
          pointBackgroundColor: "#fff",
          data: [
            0,
            350,
            1250,
            1750,
            500,
            750,
            3250,
            750,
            1250,
            1750,
            250,
            2750,
            750
          ]
        }
      ]
    },
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              padding: 15,
              labelOffset: 20
            }
          }
        ]
      }
    }
  });
});

const monthlyTime = document.querySelectorAll(".frequency-type li")[3];

monthlyTime.addEventListener("click", function() {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "",
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31",
        ""
      ],
      datasets: [
        {
          label: "",
          backgroundColor: "rgb(107, 112, 190, 0.2)",
          borderColor: "rgb(107, 112, 190)",
          borderWidth: 2,
          lineTension: 0,
          pointRadius: 5,
          borderCapStyle: "round",
          borderJoinStyle: "bevel",
          pointBorderWidth: 2,
          pointBackgroundColor: "#fff",
          data: [
            0,
            350,
            2250,
            1250,
            500,
            750,
            1250,
            750,
            350,
            1150,
            1750,
            750,
            1750
          ]
        }
      ]
    },
    // Configuration options go here
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              padding: 15,
              labelOffset: 20
            }
          }
        ]
      }
    }
  });
});
// for (let i = 0; i < timeTypes.length; i++) {
//   //alert(timeTypes[i].textContent);
//   timeTypes[0].addClass("hover");
// }

// for a bar chart

var barChart = document.getElementById("dailyChart");
var dailyChart = new Chart(barChart, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "",
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: [
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)"
        ],
        borderColor: [
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)",
          "rgba(107, 112, 190)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  }
});

// for a doughnut chart

var circleChart = document.getElementById("doughnutChart").getContext("2d");

var doughnutChart = new Chart(circleChart, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        data: [15, 15, 70],
        borderColor: ["#6BF6A4", "#46DEC0", "rgba(107, 112, 190)"],
        backgroundColor: ["#6BF6A4", "#46DEC0", "rgba(107, 112, 190)"],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    legend: {
      position: "right",
      labels: {
        boxWidth: 15,
        padding: 30,
        fontSize: 14
      }
    }
  }
});

//close banner here!!

var closeButton = document.querySelector("#IconClose");

closeButton.addEventListener("click", function() {
  var alert = document.getElementById("alertBox");
  var textAlert = document.querySelector("alertMessage");
  alert.style.display = "none";
  textAlert.style.display = "none";
});

var dialogOverlay = document.getElementById("dialogoverlay");
var dialogBox = document.getElementById("dialogbox");
var dialogHead = document.getElementById("dialoghead");
var dialogBody = document.getElementById("dialogbody");
var dialogBtn = document.getElementById("dialogbtn");

dialogBtn.addEventListener("click", function() {
  dialogOverlay.style.display = "none";
  dialogBox.style.display = "none";
  dialogB.style.display = "none";
});

//display error messages if both or either the ​user​ or ​message​ field is empty.

function Validate() {
  var searchContent = document.getElementById("userContent").value;
  var messageContent = document.getElementById("messageContent").value;
  var searchContentBox = document.getElementById("userContent");
  var messageContentBox = document.getElementById("messageContent");
  var submitFormBtn = document.getElementById("SubmitFormBtn");
  var errorMsg = document.getElementById("error");
  var confirmMsg = document.getElementById("confirm");

  var dialogOverlay = document.getElementById("dialogoverlay");
  var dialogBox = document.getElementById("dialogbox");
  var dialogHead = document.getElementById("dialoghead");
  var dialogBody = document.getElementById("dialogbody");
  var dialogFoot = document.getElementById("dialogfoot");

  if ((searchContent == "") & (messageContent == "")) {
    errorMsg.innerHTML =
      "*Please fill out user field and message field before sending";
    searchContentBox.style.borderColor = "#ff0033";
    messageContentBox.style.borderColor = "#ff0033";
    submitFormBtn.disabled = true;
    submitFormBtn.disabled = false;
    dialogBox.style.display = "block";
    dialogOverlay.style.display = "block";
    dialogHead.innerHTML =
      "Please fill out user and message field before sending";
  } else if (searchContent == "") {
    errorMsg.innerHTML = "*Please fill out user field before sending";
    searchContentBox.style.borderColor = "#ff0033";
    submitFormBtn.disabled = true;
    submitFormBtn.disabled = false;
    dialogBox.style.display = "block";
    dialogOverlay.style.display = "block";
    dialogHead.innerHTML = "Please fill out user field before sending";
  } else if (messageContent == "") {
    errorMsg.innerHTML = "*Please fill out message field before sending";
    messageContentBox.style.borderColor = "#ff0033";
    submitFormBtn.disabled = true;
    submitFormBtn.disabled = false;
    dialogBox.style.display = "block";
    dialogOverlay.style.display = "block";
    dialogHead.innerHTML = "Please fill out message field before sending";
  } else {
    confirmMsg.innerHTML = `Message successfully sent to ${searchContent}`;
    searchContentBox.style.borderColor = "rgb(11, 221, 123)";
    messageContentBox.style.borderColor = "rgb(11, 221, 123)";
    // messageUserForm.submit();
    // var confirmMessage;
    // if (confirm("Do you want to submit this message?")) {
    //   // dialogOverlay.style.display = "block";
    //   confirmMessage = `Message successfully sent to ${searchContent}`;
    // } else {
    //   confirmMessage = "";
    // }
    // document.getElementById("confirm").innerHTML = confirmMessage;
    dialogBox.style.display = "block";
    dialogOverlay.style.display = "block";
    dialogHead.innerHTML = `Message successfully sent to ${searchContent}`;
    document.getElementById("error").innerHTML = "";
  }
}

//notification popup

// When the user clicks on div, open the popup

// function {
//   var popup = document.getElementById("myPopup");
//   var bellIcon = document.getElementById("AlertBell");
//   popup.getElementById("myPopup")[0].setAttribute("show");
// }

var popup = document.getElementById("myPopup");
var bellIcon = document.getElementById("AlertBell");

bellIcon.addEventListener("click", function() {
  popup.style.display = "block";
});

var closeNoti = document.getElementById("closeNoti");
var badge = document.getElementById("badge");
// console.log(closeNoti);

closeNoti.addEventListener("click", function() {
  popup.style.display = "none";
  badge.style.display = "none";
});
