document.getElementById("printButton").addEventListener("click", function() {
    const numbers = Array.from({ length: 100 }, (_, index) => {
      const num = index + 1;
      if (num % 3 === 0 && num % 5 === 0) {
        return "BIGBANG";
      } else if (num % 3 === 0) {
        return "BIG";
      } else if (num % 5 === 0) {
        return "BANG";
      } else {
        return num;
      }
    });
  
    const data = JSON.stringify(numbers, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "output.json";
    link.click();
  });
  