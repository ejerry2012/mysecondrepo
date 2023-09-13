let result = document.getElementById("result");
      let buttons = document.getElementById("btns");
      let number;
      let sum = 0;
      console.log("this is our value: ", result);

      function getnumber(num) {
        number = num;
        showResult();

        changestyle(number);
      }

      function showResult() {
        result.innerHTML = ` <div> you click ${number}
  </div>`;
      }

      function changestyle(num) {
        result.style.padding = "20px";
        result.style.borderRadius = "8px";
        if (num == 1) {
          result.style.backgroundColor = "#005500";

          result.style.color = "white";
          buttons.ClassList.remove();
        } else if (num == 2) {
          result.style.backgroundColor = "#000055";
          result.style.color = "white";
        } else if (num == 3) {
          result.style.backgroundColor = "#550000";
          result.style.color = "white";
        } else if (num == 4) {
          result.style.backgroundColor = "#007755";
          result.style.color = "white";
        } else {
          result.style.backgroundColor = "#609";
          result.style.color = "white";
        }

        sum = sum + num;
        resul.append("this is the sum so far", sum);
      }