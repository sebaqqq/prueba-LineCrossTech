function createProgressBar(graficoID, progressValue, color) {
  var grafico = document.getElementById(graficoID);

  var bar = new ProgressBar.SemiCircle(grafico, {
    strokeWidth: 10,
    color: color,
    trailColor: "#545454",
    trailWidth: 10,
    easing: "easeInOut",
    duration: 1400,
    svgStyle: null,
    text: {
      value: "0%",
      alignToBottom: false,
    },
    step: (state, bar) => {
      bar.path.setAttribute("color", state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText("");
      } else {
        bar.setText(value + "%");
      }
      bar.text.style.color = "white";
    },
  });

  bar.text.style.fontFamily = '"Open Sans", Helvetica, sans-serif';
  bar.text.style.fontSize = "2rem";

  bar.animate(progressValue);
}

createProgressBar("grafico1", 0.59, "#FFEA59");
createProgressBar("grafico2", 0.17, "#FD0001");
createProgressBar("grafico3", 0.97, "#87CB28");
