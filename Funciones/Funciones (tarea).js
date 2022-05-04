let calcular = (nombre, respuestasPositivas, respuestasNegativas) => {
  if (respuestasPositivas > 90) {
    return nombre + " A";
  } else if (respuestasPositivas > 70 && respuestasPositivas < 89) {
    return nombre + " B";
  } else if (respuestasPositivas > 45 && respuestasPositivas < 69) {
    return nombre + " C";
  } else {
    return nombre + " D";
  }
};

let res = calcular("Pedro", 75, 25);
console.log(res);
