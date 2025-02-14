const chatbotIcon = document.querySelector(".chatbot-icon");
const communityIcon = document.querySelector(".community-icon");
const chatbotPopup = document.querySelector(".chatbot-popup");
const communityPopup = document.querySelector(".community-popup");
const closeButtons = document.querySelectorAll(".close-btn");
chatbotIcon.addEventListener("click", () => {
    if (chatbotPopup.style.display === "block") {
        chatbotPopup.style.display = "none";
    } else {
        chatbotPopup.style.display = "block";
        communityPopup.style.display = "none";
    }
});
communityIcon.addEventListener("click", () => {
    if (communityPopup.style.display === "block") {
        communityPopup.style.display = "none";
    } else {
        communityPopup.style.display = "block";
        chatbotPopup.style.display = "none";
    }
});
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        chatbotPopup.style.display = "none";
        communityPopup.style.display = "none";
    });
});
