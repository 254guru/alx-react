import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

// Append elements to the body
$('body').append("<div id='logo'> </div>");
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Define updateCounter function
const updateCounter = () => {
  let count = parseInt($('#count').html()) || 0; // Initialize count

  // Increment count
  count++;

  // Update count display
  $('#count').html(`${count} clicks on the button`);
};

// Debounce the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Event binding for button click
$('button').on('click', debouncedUpdateCounter);

// Call the updateCounter function
updateCounter();
