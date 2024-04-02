'use strict';
import $ from 'jquery';
import _ from 'lodash';

// Append elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Define updateCounter function
const updateCounter = () => {
  let count = 0; // Initialize count

  // Event binding for button click
  $('button').on('click', () => {
    count++; // Increment count
    $('#count').text(`${count} clicks on the button`); // Update count display
  });
};

// Debounce the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Call the updateCounter function
debouncedUpdateCounter();
