function check_leao_year(leap_year) {

    if (leap_year <= 0 || leap_year == null || isNaN(leap_year)) {
        console.log(`${leap_year} is not leap year Please enter valid data`);
    }

    else if (leap_year % 4 == 0 && leap_year % 100 != 0 || leap_year % 400 == 0) {

        console.log(`${leap_year} is leap year`);
    }
     else {
        console.log(`${leap_year} is not leap year`);
    }


} check_leao_year(2020);
check_leao_year(1999);
check_leao_year(1600);
check_leao_year(2022);
check_leao_year(1945);
check_leao_year(null);
check_leao_year("Twenty Twenty");
check_leao_year(undefined);
check_leao_year(NaN);
check_leao_year(1750);