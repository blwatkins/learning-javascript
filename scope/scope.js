// Scope Notes

// scope with var

function testScopeWithVar() {
    const myColor = 'purple';
    var myValue = 75;

    console.log(`myValue=${myValue}`);

    if (myColor === 'purple') {
        var myValue = 17;
        console.log(`purple color and myValue=${myValue}`);
    }

    console.log(`myValue=${myValue}`); // myValue = 17
}

testScopeWithVar();

// scope with let

function testScopeWithLet() {
    const myColor = 'blue';
    let yourValue = 25;

    console.log(`yourValue=${yourValue}`);

    if (myColor === 'blue') {
        let yourValue = 34;
        console.log(`blue color and yourValue=${yourValue}`);
    }

    console.log(`yourValue=${yourValue}`); // yourValue = 25
}

testScopeWithLet();

// scope with const

function testScopeWithConst() {
    const myColor = 'red';
    const theirValue = 100;

    console.log(`theirValue=${theirValue}`);

    if (myColor === 'red') {
        const theirValue = 2;
        console.log(`red color and theirValue=${theirValue}`);
    }

    console.log(`theirValue=${theirValue}`); // theirValue = 100
}

testScopeWithConst();
