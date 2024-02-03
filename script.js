document.addEventListener("DOMContentLoaded", function () {
  const accordionTitles = document.querySelectorAll(".accordion__title");
  const content = document.querySelectorAll(".accordion__content");
  const icons = document.querySelectorAll(".icon");
  let plusIcon = true;

  // Function to close all accordion contents
  function closeAllAccordionContents() {
    content.forEach((item) => {
      item.style.maxHeight = "0px";
      item.style.marginTop = "0rem";
    });
    icons.forEach((item) => {
      item.src = "./assets/images/icon-plus.svg";
    });
  }

  // Open the first accordion content on document load
  if (content.length > 0) {
    content[0].style.maxHeight = content[0].scrollHeight + "px";
    content[0].style.marginTop = "1.5rem";
    icons[0].src = "./assets/images/icon-minus.svg";
  }

  accordionTitles.forEach((accordion, index) => {
    const accordionContent = content[index];
    const icon = icons[index];

    accordion.addEventListener("click", () => {
      // If the clicked accordion is already open, close it
      if (
        accordionContent.style.maxHeight !== "0px" &&
        accordionContent.style.maxHeight !== ""
      ) {
        accordionContent.style.marginTop = "0em";
        accordionContent.style.maxHeight = "0px";

        icon.src = "./assets/images/icon-plus.svg";
      } else {
        // Otherwise, close all accordions and open the clicked one
        closeAllAccordionContents();
        accordionContent.style.marginTop = "1.5rem";
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        icon.src = "./assets/images/icon-minus.svg";
      }
    });
  });
});
