async function getData() {
  let api = await fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5463d922acb744429addc82e9720702a"
  );
  let data = await api.json();
  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let number = document.getElementById("number");
  let moneyUser = document.querySelector(".money-user");
  let moneyTransfer = document.getElementsByClassName("money-transfer")[0];
  let currency1 = document.getElementsByClassName("currency1")[0];
  let currency2 = document.getElementsByClassName("currency2")[0];
  let btn = document.getElementById("btn");
  let none = document.querySelector(".none");

  for (let i = 0; i < Object.keys(data.rates).length; i++) {
    let option1 = document.createElement("option");
    option1.setAttribute("vlaue", Object.keys(data.rates).sort()[i]);
    option1.innerHTML = Object.keys(data.rates).sort()[i];
    let option2 = document.createElement("option");
    option2.setAttribute("vlaue", Object.keys(data.rates).sort()[i]);
    option2.innerHTML = Object.keys(data.rates).sort()[i];
    from.append(option1);
    to.append(option2);
  }

  number.focus();
  btn.addEventListener("click", function () {
    moneyUser.innerHTML = Number(number.value).toFixed(3);
    currency1.innerHTML = from.value;
    currency2.innerHTML = to.value;
    let rate1 = data.rates[from.value];
    let rate2 = data.rates[to.value];
    let result = ((number.value * rate2) / rate1).toFixed(3);
    moneyTransfer.innerHTML = result;
    none.style.display = "inline-block";
  });
}
getData();

function date() {
  let now = new Date();
  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let year = document.querySelector(".year");
  let hour = document.querySelector(".hour");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12,
  ];
  day.innerHTML = now.getDate();
  month.innerHTML = months[now.getMonth()];
  year.innerHTML = now.getFullYear();
  hour.innerHTML = hours[now.getHours()];
  min.innerHTML = now.getMinutes();
  sec.innerHTML = now.getSeconds();
}

setInterval(date, 1000);
