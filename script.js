var shoutouts = [
"You are so funny and you make everyone laugh.",
"You make every brain break so much fun and make us all excited + competitive",
"you have so much energy during brain breaks!",
"Your amazing pterodactyl squawk! Your personality is so fun and you are a joy to be around.",
"How you're so good at the games!! I love watching you play.",
"how fun and open-minded you are! I loved working with you!",
"Your personality cracks me up and lifts the atmosphere at any point.",
"how loud your voice can be during our games!",
"that you always bring so much energy to camp and that you are always so well dressed-- it inspires me to put in more effort.",
"How good you are at making people laugh and your sense of fashion!",
"You kindness and humor. I love how determined and enthusiastic you are when problem-solving and also in general.",
"How quirky you are!",
"how funny and kind you are. You are really easy to approach and start a conversation with.",
]

var images = [
  "./assets/adidas.jpg"
]

for (x of shoutouts) {
  $("#shoutout-container").append("<p>" + x + "</p> <br>");
}
