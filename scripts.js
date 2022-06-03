const colour = [
  'Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Magenta', 'Purple', 'White', 'Black', 'Grey', 'Silver', 'Pink', 'Maroon', 'Brown', 'Beige', 'Tan',
  'Peach', 'Lime', 'Olive', 'Turquoise', 'Teal', 'Navy', 'Indigo', 'Violet', 'Gold', 'Rainbow'
];

const adj = [
  'Bitter', 'Delicious', 'Fresh', 'Greasy', 'Juicy', 'Hot', 'Icy', 'Loose', 'Melted', 'Nutritious', 'Prickly', 'Rainy', 'Rotten', 'Salty', 'Sticky',
  'Strong', 'Sweet', 'Tart', 'Tasteless', 'Uneven', 'Weak', 'Wet', 'Wooden', 'Yummy', 'Broad', 'Wide', 'Crooked', 'Curved', 'Deep', 'Flat', 'High',
  'Hollow', 'Low', 'Narrow', 'Round', 'Shallow', 'Square', 'Steep', 'Straight', 'Wide'
];

const noun = [
  'Alarm', 'Animal', 'Aunt', 'Bait', 'Balloon', 'Bath', 'Bead', 'Beam', 'Bean', 'Bedroom', 'Boot', 'Bread', 'Brick', 'Brother', 'Camp', 'Chicken',
  'Children', 'Crook', 'Deer', 'Dock', 'Doctor', 'Downtown', 'Drum', 'Dust', 'Eye', 'Family', 'Father', 'Fight', 'Flesh', 'Food', 'Frog', 'Goose',
  'Grade', 'Grandfather', 'Grandmother', 'Grape', 'Grass', 'Hook', 'Horse', 'Jail', 'Jam', 'Kiss', 'Kitten', 'Light', 'Loaf', 'Lock', 'Lunch', 'Lunchroom',
  'Meal', 'Mother', 'Notebook', 'Owl', 'Pail', 'Parent', 'Park', 'Plot', 'Rabbit', 'Rake', 'Robin', 'Sack', 'Sail', 'Scale', 'Sea', 'Sister', 'Soap', 'Song', 'Spark', 'Space', 'Spoon', 'Spot', 'Spy', 'Summer', 'Tiger', 'Toad', 'Town', 'Trail', 'Tray', 'Trick', 'Trip', 'Uncle', 'Vase', 'Winter', 'Water', 'Week', 'Wheel', 'Wish', 'Wool', 'Yard', 'Zebra'
];

const number = [
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'
];

const symbol = [
  '!', '@', '#', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '/', '<', '>', '?'
];

const getColour = function () {
  return colour[Math.floor(Math.random() * colour.length)];
};
const getAdjective = function () {
  return adj[Math.floor(Math.random() * adj.length)];
};
const getNoun = function () {
  return noun[Math.floor(Math.random() * noun.length)];
};
const getNumber = function () {
  return number[Math.floor(Math.random() * number.length)];
}
const getSymbol = function () {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

$('#genPassword').click(function () {
  $('.colour').html(getColour());
  $('.adj').html(getAdjective());
  $('.noun').html(getNoun());
  $('.number').html(getNumber());
  $('.symbol').html(getSymbol());
  document.querySelector(".outputPassword").value = document.querySelector(".password_container").textContent.trim();
});

document.querySelector(".fa-copy").addEventListener("click",()=>{
  let outputPassword = document.querySelector(".outputPassword");
  /* Select the text field */
  outputPassword.select();
  outputPassword.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(outputPassword.value);
});