const button = document.querySelector("#submit");
const textarea = document.querySelector("#text");
const tasklist = document.querySelector("#tasklist");
textarea.addEventListener("keyup", () => {
  //parse string here
  const text = textarea.value; //insert your string here
  const re = /[>]/;
  const numOfSentences = text.split(re);

  // console.log(numOfSentences);
  tasklist.innerHTML = "";
  numOfSentences.forEach((element) => {
    let datefound = "";
    if (element !== "") {
      const regex = /[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}/gm;
      const str = element;
      let m;

      while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
          console.log(`Found match, group ${groupIndex}: ${match}`);
          datefound = match;
        });
      }
      const re1 = /#[A-Za-z0-9]*/g;
      let result = element.match(re1);
      // const numOfTags = element.split(re1);
      tasklist.innerHTML +=
        "Task: " +
        element +
        ", Tag: " +
        result +
        " Date : " +
        datefound +
        "<br>";
      console.log(element, result);
    }
  });
});

button.addEventListener("click", () => {
  console.log("Cliked");
  //save task to mongoose/mongodb
});

// > update document
// > work with people #hobby
// > complete the code #work
