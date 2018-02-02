var notifyYearDate1 = 0.95;
var notifyYearDate7 = 1.49;
var interestRate = 0;
var currentRate = 0.50;
var lumpRate90 = 3.10;
var lumpRate180 = 3.30;
var lumpRate360 = 3.50;
var lumpRate720 = 4.40;
var lumpRate1080 = 5.00;
var lumpRate1800 = 5.50;
var smallRate360 = 3.10;
var smallRate1080 = 3.30;
var smallRate1800 = 3.50;
var slRate360 = 3.10;
var slRate1080 = 3.30;
var slRate1800 = 3.50;
var idRate360 = 3.10;
var idRate1080 = 3.30;
var idRate1800 = 3.50;
var loadRate = 7.05;
var fundRate1 = 1.5;
var fundRate2 = 0.5;
var fundRate3 = 1.2;
var personUnexpectedRate = 0.2;
var personPaperRate = 0.3;
var personTaxBase = 3500;
var fxRateFee = 0;
var fxRateArray = [[0.1000, 0.1000, 0.2500, 0.4000, 0.7500, 1.0000, 1.2000], [0.1250, 0.1750, 0.2500, 0.3500, 0.6000, 0.7500, 0.7500], [0.1000, 0.3750, 0.4500, 0.6500, 0.9550, 1.1000, 1.1500], [0.0001, 0.0005, 0.0100, 0.0100, 0.0100, 0.0100, 0.0100], [0.0200, 0.0200, 0.1000, 0.2500, 0.5000, 0.7000, 0.7500], [0.0100, 0.0500, 0.0500, 0.0500, 0.3000, 0.4000, 0.4000], [0.0001, 0.0005, 0.0100, 0.0100, 0.0100, 0.0100, 0.0100], [0.2375, 0.2625, 1.2400, 1.3875, 1.5075, 1.5750, 1.5750], [0.0001, 0.0005, 0.0100, 0.0100, 0.0100, 0.0100, 0.0100]];
var houseLoanBuzzRate = {
    1: {title: "08年11月27日利率下限", rate: [0.0416, 0.0428]},
    2: {title: "08年11月27日利率上限", rate: [0.0653, 0.0673]},
    3: {title: "08年11月27日基准利率", rate: [0.0594, 0.0673]},
    4: {title: "08年11月27日第二套房", rate: [0.0653, 0.0673]},
    5: {title: "08年12月23日利率下限(7折)", rate: [0.0403, 0.0416]},
    6: {title: "08年12月23日利率下限(8折)", rate: [0.0461, 0.0475]},
    7: {title: "08年12月23日利率下限(85折)", rate: [0.0490, 0.0505]},
    8: {title: "08年12月23日利率上限(1.1倍)", rate: [0.0634, 0.0653]},
    9: {title: "08年12月23日基准利率", rate: [0.0576, 0.0594]},
    10: {title: "08年12月23日第二套房(1.1倍)", rate: [0.0634, 0.0653]},
    11: {title: "10年10月20日基准利率", rate: [0.0596, 0.0614]},
    12: {title: "10年12月26日基准利率", rate: [0.0614, 0.0640]},
    13: {title: "11年02月09日基准利率", rate: [0.0645, 0.066]},
    14: {title: "11年04月06日基准利率", rate: [0.0665, 0.068]},
    15: {isdefault: true, title: "11年07月07日基准利率", rate: [0.0690, 0.0705]}
};
var houseLoanCounRate = {
    1: {title: "08年11月27日后", rate: [0.0351, 0.0405]},
    2: {title: "08年12月23日后", rate: [0.0333, 0.0387]},
    3: {title: "10年10月20日后", rate: [0.0350, 0.0405]},
    4: {title: "10年12月26日后", rate: [0.0375, 0.0430]},
    5: {title: "11年02月09日后", rate: [0.04, 0.045]},
    6: {title: "11年04月06日后", rate: [0.042, 0.047]},
    7: {isdefault: true, title: "11年07月07日后", rate: [0.0445, 0.049]}
};
var houseLoanRateRight = [["11.07.07后商贷基准", 6.90, 7.05], ["11.07.07后公积金贷", 4.45, 4.90], ["11.04.06后商贷基准", 6.65, 6.80], ["11.04.06后公积金贷", 4.20, 4.70], ["11.02.09后商贷基准", 6.45, 6.60], ["11.02.09后公积金贷", 4.00, 4.50], ["10.12.26后商贷基准", 6.22, 6.40], ["10.12.26后公积金贷", 3.75, 4.30], ["10.10.20后商贷基准", 5.96, 6.14], ["10.10.20后公积金贷", 3.50, 4.05], ["08.12.23后商贷基准", 5.76, 5.94], ["08.12.23后商贷8折", 4.61, 4.75], ["08.12.23后商贷7折", 4.03, 4.16], ["08.12.23后公积金贷", 3.33, 3.87], ["08.11.27后公积金贷", 3.51, 4.05]];
function warnInvalid(theField, s) {
    alert(s);
    theField.focus();
    theField.select();
    return false;
}
function isNumber(s) {
    var digits = "0123456789";
    var i = 0;
    var sLength = s.length;
    while ((i < sLength)) {
        var c = s.charAt(i);
        if (digits.indexOf(c) === -1) {
            return false;
        }
        i++;
    }
    return true;
}
function CheckNumeric(theField, s) {
    var ret = true;
    var i;
    var str = theField.value;
    var Temp = new Number(str);
    if (str.length === 0) {
        return warnInvalid(theField, s);
        ret = false;
    }
    if (ret) {
        if (Temp.valueOf() != Temp.valueOf()) {
            return warnInvalid(theField, s);
        }
    }
    return ret;
}
function validateFormInfo(form) {
    var str;
    var SumTo;
    var srSum;
    var qzSum, InsuSum, TSum, yzSum, fySum;
    s = document.form1.select.selectedIndex + 1;
    srSum = document.form1.textfield.value;
    if (s.length < 1) {
        s = 1;
    }
    qzSum = document.form1.textfield3.value;
    InsuSum = document.form1.textfield2.value;
    yzSum = document.form1.textfield22.value;
    fySum = document.form1.textfield32.value;
    TSum = srSum - qzSum - InsuSum;
    if (form === null) {
        return true;
    }
    str = "请正确输入收入金额！";
    if (!CheckNumeric(form.elements["textfield"], str)) {
        return false;
    }
    if (document.all.select.selectedIndex === 0) {
        str = "请正确输入社会保险费！";
        if (!CheckNumeric(form.elements["textfield2"], str)) {
            return false;
        }
        str = "请正确输入起征额！";
        if (!CheckNumeric(form.elements["textfield3"], str)) {
            return false;
        }
    }
    if (document.all.select.selectedIndex === 8) {
        str = "请正确输入财产原值！";
        if (!CheckNumeric(form.elements["textfield22"], str)) {
            return false;
        }
        str = "请正确输入合理交易费用！";
        if (!CheckNumeric(form.elements["textfield32"], str)) {
            return false;
        }
    }
    switch (s) {
        case 1:
            document.form1.textfield4.value = Rate1(TSum);
            break;
        case 2:
            document.form1.textfield4.value = Rate2(srSum);
            break;
        case 3:
            document.form1.textfield4.value = Rate2(srSum);
            break;
        case 4:
            document.form1.textfield4.value = Rate3(srSum);
            break;
        case 5:
            document.form1.textfield4.value = R4568(srSum) * 70 / 100;
            break;
        case 6:
            document.form1.textfield4.value = R4568(srSum);
            break;
        case 7:
            document.form1.textfield4.value = srSum * 20 / 100;
            break;
        case 8:
            document.form1.textfield4.value = R4568(srSum);
            break;
        case 9:
            if (srSum - yzSum - fySum < 0) {
                alert("都亏了！不用交税了！");
                document.form1.textfield4.value = 0;
            }
            if (srSum - yzSum - fySum > 0) {
                document.form1.textfield4.value = (srSum - yzSum - fySum) * 20 / 100;
            }
            break;
        case 10:
            document.form1.textfield4.value = srSum * 20 / 100;
            break;
        case 11:
            document.form1.textfield4.value = srSum * 20 / 100;
            break;
    }
}
function Rate1(XSum) {
    var Rate;
    var Balan;
    var TSum;
    if (XSum <= 500) {
        Rate = 5;
        Balan = 0;
    }
    if ((500 < XSum) && (XSum <= 2000)) {
        Rate = 10;
        Balan = 25;
    }
    if ((2000 < XSum) && (XSum <= 5000)) {
        Rate = 15;
        Balan = 125;
    }
    if ((5000 < XSum) && (XSum <= 20000)) {
        Rate = 20;
        Balan = 375;
    }
    if ((20000 < XSum) && (XSum <= 40000)) {
        Rate = 25;
        Balan = 1375;
    }
    if ((40000 < XSum) && (XSum <= 60000)) {
        Rate = 30;
        Balan = 3375;
    }
    if ((60000 < XSum) && (XSum <= 80000)) {
        Rate = 35;
        Balan = 6375;
    }
    if ((80000 < XSum) && (XSum <= 100000)) {
        Rate = 40;
        Balan = 10375;
    }
    if (XSum > 100000) {
        Rate = 45;
        Balan = 15375;
    }
    TSum = (XSum * Rate) / 100 - Balan;
    if (TSum < 0) {
        TSum = 0;
    }
    return TSum;
}
function Rate2(XSum) {
    var Rate;
    var Balan;
    var TSum;
    if (XSum <= 5000) {
        Rate = 5;
        Balan = 0;
    }
    if ((5000 < XSum) && (XSum <= 10000)) {
        Rate = 10;
        Balan = 250;
    }
    if ((10000 < XSum) && (XSum <= 30000)) {
        Rate = 20;
        Balan = 1250;
    }
    if ((30000 < XSum) && (XSum <= 50000)) {
        Rate = 30;
        Balan = 4250;
    }
    if (50000 < XSum) {
        Rate = 35;
        Balan = 6750;
    }
    TSum = (XSum * Rate) / 100 - Balan;
    if (TSum < 0) {
        TSum = 0;
    }
    return TSum;
}
function R4568(XSum) {
    var TSum;
    if (XSum <= 4000) {
        TSum = (XSum - 2000) * 20 / 100;
    }
    if (XSum > 4000) {
        TSum = (XSum - (XSum * 20 / 100)) * 20 / 100;
    }
    if (TSum < 0) {
        TSum = 0;
    }
    return TSum;
}
function gong() {
    var qznum;
    var ff;
    qznum = document.form1.textfield3.value;
    ff = document.all.checkbox.checked;
    if (ff) {
        document.form1.textfield3.value = 4000;
    }
    if (!ff) {
        document.form1.textfield3.value = 2000;
    }
}
function Rate3(XSum) {
    var TSum;
    var Rate;
    var Balan;
    if (XSum <= 20000) {
        Rate = 20;
        Balan = 0;
    }
    if ((XSum > 20000) && (XSum <= 50000)) {
        Rate = 30;
        Balan = 2000;
    }
    if (XSum > 50000) {
        Rate = 40;
        Balan = 7000;
    }
    if (XSum <= 4000) {
        XSum = XSum - 800;
    }
    if (XSum > 4000) {
        XSum = XSum - (XSum * 20 / 100);
    }
    TSum = XSum * Rate / 100 - Balan;
    if (TSum < 0) {
        TSum = 0;
    }
    return TSum;
}
function CHan() {
    if (document.form1.select.selectedIndex === 0) {
        document.all.gongzi1.style.display = "block";
        document.all.gongzi2.style.display = "block";
        document.all.fei1.style.display = "block";
        document.all.fei2.style.display = "block";
    }
    if (document.form1.select.selectedIndex !== 0) {
        document.all.gongzi1.style.display = "none";
        document.all.gongzi2.style.display = "none";
        document.all.fei1.style.display = "none";
        document.all.fei2.style.display = "none";
    }
    if (document.form1.select.selectedIndex + 1 !== 9) {
        document.all.fei1.style.display = "none";
        document.all.fei2.style.display = "none";
    }
    if (document.form1.select.selectedIndex + 1 === 9) {
        document.all.fei1.style.display = "block";
        document.all.fei2.style.display = "block";
    }
}