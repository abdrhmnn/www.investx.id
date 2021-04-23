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
  getBase64 : (file) => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  }
};

export default helper;
