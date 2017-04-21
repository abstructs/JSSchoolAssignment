
// function 1
function random_string(length) {
  const string_length = length;
  var random_string = ''; // placeholder string to append to
  var possible_letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; // all possible letters
  var max_possible_letters = possible_letters.length;

  // get random index of the possible letters array and add it to our string
  for(var i = 0; i < string_length; i++)
    random_string += possible_letters[Math.floor(Math.random() * max_possible_letters) - 1];

  return random_string;
}

// function 2
function uppercase(str) {
  const string_to_convert = str; // read only value
  var new_string = '';

  for(var char of string_to_convert) {
    var ascii_code = char.charCodeAt(0); // get ascii code for current character
    // if character is lowercase
    if(ascii_code >= 97  && ascii_code <= 122 ) {
      ascii_code -= 32; // convert to uppercase
    }

    new_string += String.fromCharCode(ascii_code);
  }

  return new_string;
}

// function 3
function add_whitespace(str, num_space) {
  const amount_of_whitespace = num_space; // no reason to change amount of whitespace
  var new_string = str;

  for(var i = 0; i < amount_of_whitespace; i++) {
    new_string = ' ' + new_string + ' ';
  }

  return new_string;
}

// function 4
function position_to_uppercase(str, pos) {
  const even_or_odd = pos;
  const string_to_change = str;
  var new_string = '';

  if (even_or_odd != 'even' && even_or_odd != 'odd') { // short circuit breaks this check
    return new_string;
  }

  var even = even_or_odd == 'even' ? true : false; // determine whether even or odd

  for (var i in string_to_change) {
    if(even && (parseInt(i) + 1) % 2 == 0 || !even && (parseInt(i) % 2 == 0)) {
       var ascii_code = string_to_change[i].charCodeAt(0);
       if(ascii_code >= 97 && ascii_code <= 122) {// its lowecase
         new_string += String.fromCharCode(ascii_code - 32); // convert
       }
       else if (ascii_code <= 90 && ascii_code >= 65) { // its uppercase
          new_string += String.fromCharCode(ascii_code + 32); // convert
       }
       else {
         new_string += String.fromCharCode(ascii_code); // its not an alphabetical character so we leave it
       }
    }
    else {
      new_string += string_to_change[i];
    }
  }

  return new_string;
}

// function 5
function reverse_string(str) {
  const string_to_change = str;
  const string_length = string_to_change.length;

  var new_string = '';
  for (var i = string_length - 1; i >= 0; i--) {
    new_string += string_to_change[i];
  }

  return new_string;
}

// function 6
function combine_strings(str1, str2) {
  const string1 = str1;
  const string2 = str2;
  var new_string = '';
  var i = 0;
  while(str1[i] != undefined && str2[i] != undefined) {
    new_string += str1[i] + str2[i];
    i++;
  }
  var j = i; // hold value of i since i was where we found an undefined value
  var k = i;
  while(str1[j] != undefined) { // get all values from str1 until undefined, if undefined value was found on first loop doesn't run
    new_string += str1[j++];
  }
  while(str2[k] != undefined) { // same as above
    new_string += str2[k++];
  }

  return new_string;
}

// function 7
function trim_left(str) {
  const ascii_for_newline = '\n'.charCodeAt(0);
  const ascii_for_tab = '\t'.charCodeAt(0);
  const ascii_for_space = ' '.charCodeAt(0);

  const string_to_change = str;

  var i = 0;
  while(string_to_change.charCodeAt(i) == ascii_for_newline || string_to_change.charCodeAt(i) == ascii_for_tab || string_to_change.charCodeAt(i) == ascii_for_space) {
    i++;
  }
  var new_string = '';

  while(string_to_change[i] != undefined) {
    new_string += string_to_change[i++];
  }

  return new_string;
}

// function 8
function trim_left_and_right(str) {
  const ascii_for_newline = '\n'.charCodeAt(0);
  const ascii_for_tab = '\t'.charCodeAt(0);
  const ascii_for_space = ' '.charCodeAt(0);

  const string_to_change = str;

  var i = 0;
  while(string_to_change.charCodeAt(i) == ascii_for_newline || string_to_change.charCodeAt(i) == ascii_for_tab || string_to_change.charCodeAt(i) == ascii_for_space) {
    i++;
  }
  var j = string_to_change.length - 1;

  while(string_to_change.charCodeAt(j) == ascii_for_newline || string_to_change.charCodeAt(j) == ascii_for_tab || string_to_change.charCodeAt(j) == ascii_for_space) {
    j--;
  }

  var new_string = '';
  for (var k = i; k <= j; k++) {
    new_string += string_to_change[k];
  }

  return new_string;
}

// function 9
function concat(arr1, arr2) {
  var new_arr = [];

  var i = 0;
  while(arr1[i] != undefined) {
    new_arr[i] = arr1[i];
    i++;
  }

  var j = 0;
  while(arr2[j] != undefined) {
    new_arr[i++] = arr2[j++];
  }

  return new_arr;
}

// function 10
function is_greater(arr, num) {
  for (var arr_num of arr) {
    if (arr_num > num) {
      return true;
    }
  }

  return false;
}
