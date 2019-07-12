import isEven from '../is-even.js';
const test = QUnit.test;

test('checks if even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 4;
    
    //Act 
    const expected = isEven(x);
    assert.equal(expected, true);

    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(expected, false);
});