let time = document.getElementById("timer");

setTimeout(() => {
  time.innerText = "10";
  setTimeout(() => {
    time.innerText = "9";
    setTimeout(() => {
      time.innerText = "8";
      setTimeout(() => {
        time.innerText = "7";
        setTimeout(() => {
          time.innerText = "6";
          setTimeout(() => {
            time.innerText = "5";
            setTimeout(() => {
              time.innerText = "4";
              setTimeout(() => {
                time.innerText = "3";
                setTimeout(() => {
                  time.innerText = "2";
                  setTimeout(() => {
                    time.innerText = "1";
                    setTimeout(() => {
                      time.innerText = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
