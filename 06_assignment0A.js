function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:

            console.log(`The ${monthNumber}nd month is the : January`);

            break;

        case 2:

            console.log(`The ${monthNumber}nd month is the :February`);

            break;

        case 3:

            console.log(`The ${monthNumber}nd month is the : March`);

            break;

        case 4:

            console.log(`The ${monthNumber}nd month is the : April`);

            break;

        case 5:
            console.log(`The ${monthNumber}th month is the: May `);

            break;

        case 6:

            console.log(`The ${monthNumber}nd month is the : June`);

            break;

        case 7:

            console.log(`The ${monthNumber}nd month is the : July`);

            break;

        case 8:

            console.log(`The ${monthNumber}nd month is the : August`);

            break;

        case 9:

            console.log(`The ${monthNumber}nd month is the : September`);

            break;

        case 10:

            console.log(`The ${monthNumber}nd month is the : Octomber`);

            break;

        case 11:

            console.log(`The ${monthNumber}nd month is the : November`);

            break;

        case 12:
            console.log(`The ${monthNumber}th month is the: December`);

            break;

        default:
            console.log(`Invalid month : ${monthNumber}`);
            break;

    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(0);
monthOfYear(-7);
monthOfYear();
monthOfYear(null);

