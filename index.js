const func = (nombre) => {
  if (nombre === "fabi") {
    console.log("ok");
  } else {
    throw "error";
  }
};

func("fabi");

try {
  func("fabi");
} catch (e) {
  console.log(e);
}
