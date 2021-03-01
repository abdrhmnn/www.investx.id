const helper = {
  idr: (value) => {
    if (value !== undefined) {
      var h = [];
      var val = value.toString().split("").reverse();
      val.unshift("n");
      for (var i = 1; i < val.length; i++) {
        h.push(val[i]);

        if (i % 3 === 0) {
          // // ////console.log(i)
          h.push(".");
        }
      }
      var hasRev = h.reverse();
      var has = hasRev.join("");
      if (has.startsWith(".")) {
        var x = has.split("");
        x.shift();
        return x.join("");
      } else {
        return has;
      }
    }
  },
  counter: (time, countdown, reset) => {
    var int = setInterval(() => countdown(), 1000);
    setTimeout(() => {
      clearInterval(int);
      reset(time);
    }, time * 1000);
  },
};

export default helper;
