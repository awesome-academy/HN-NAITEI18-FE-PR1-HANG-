function mediaBreakPointDown(x) {
  const sidebarLists = Array.from(
    document.getElementsByClassName("sidebar-list"),
  );
  if (x.matches) {
    sidebarLists.forEach((sidebarList) => {
      sidebarList.classList.add("collapse");
    });
  } else {
    sidebarLists.forEach((sidebarList) => {
      sidebarList.classList.remove("collapse");
    });
  }
}

const sm = window.matchMedia("(max-width: 577.9px)");
mediaBreakPointDown(sm);
sm.addListener(mediaBreakPointDown);
