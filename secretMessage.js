

let secretMessage = ['Learning', 'is', 'not', 'about',
 'what', 'you', 'get', 'easily', 'the', 'first',
 'time,', 'it', 'is', 'about', 'what', 'you', 'can',
 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn',
 'JavaScript'];
//console.log(secretMessage.length);// 24

secretMessage.pop();

//console.log(secretMessage.length); // 23
secretMessage.push('love','care!');
//console.log(secretMessage);
//console.log(secretMessage.length); // 25
secretMessage[7] = 'right';
//console.log(secretMessage);
secretMessage.shift(); // remove first el
//console.log(secretMessage);
secretMessage.unshift('Programming');
//console.log(secretMessage);
secretMessage.splice(6,5,'know,');
//console.log(secretMessage);

console.log(secretMessage.join(' '));
