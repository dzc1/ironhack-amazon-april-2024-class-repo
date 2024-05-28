//function to prevent inspection of page through google inspector

function detectConsoleAccess(event) {
  const isConsoleShortcut =
    event.altKey && event.metaKey && event.code === "KeyJ";
  const isInspectorShortcut =
    event.altKey && event.metaKey && event.code === "KeyI";
  const isRightClick = event.which === 3 || event.button === 2;
  const isControlClick = event.ctrlKey && !event.metaKey && event.button === 0;
  const message = `This function has been disabled to prevent you from looking through the code!`;
  if (isConsoleShortcut) {
    event.preventDefault();
    alert(message);
  } else if (isInspectorShortcut) {
    event.preventDefault();
    alert(message);
  } else if (isRightClick) {
    event.preventDefault();
    alert(message);
  } else if (isControlClick) {
    event.preventDefault();
    alert(message);
  }
}

window.addEventListener("keydown", detectConsoleAccess);

document.addEventListener(
  "keydown",
  function () {
    if (keyCode == 123) {
      alert(
        `This function has been disabled to prevent you from looking through the code!`
      );
      return false;
    } else if (ctrlKey && altKey == 73) {
      alert(
        `This function has been disabled to prevent you from looking through the code!`
      );
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert(
        `This function has been disabled to prevent you from looking through the code!`
      );
      return false;
    }
  },
  false
);

if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      alert(
        `This function has been disabled to prevent you from looking through the code!
  `
      );
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    alert(
      `This function has been disabled to prevent you from looking through the code!`
    );
    window.event.returnValue = false;
  });
}
