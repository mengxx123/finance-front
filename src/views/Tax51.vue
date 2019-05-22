<template>
    <my-page title="五险一金计算器" :page="page">
        <div class="common-container container">
            <ui-article>
                <div id="calc">
                    <table>
                        <tr>
                            <td class="column1" style="width: 120px;">基本工资
                            </td>
                            <td colspan="3">
                                <input id="txtBasicIncome" class="itxt" type="text" value="" onkeydown="enterToCalc()" />
                                <span class="unit">元</span><label id="lblMsgBasicIncome" class="warning"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="column1">社保基数
                            </td>
                            <td colspan="3">
                                <input id="txtSocialBase" name="txtSocialBase" class="itxt" type="text" value="" style="background-color: lightgray" readonly />
                                <span class="unit">元</span>
                                <label for="chbSocialBase">
                                    <input id="chbSocialBase" type="checkbox" onclick="chbSocialBase_onClick();" />自定义</label>
                                <label id="lblMsgSocialBase" class="warning"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="column1">住房公积金基数
                            </td>
                            <td colspan="3">
                                <input id="txtFundBase" class="itxt" type="text" style="background-color: lightgray" readonly />
                                <span class="unit">元</span>
                                <label for="chbFundBase">
                                    <input id="chbFundBase" type="checkbox" onclick="chbFundBase_onClick();" />自定义</label>
                                <label id="lblMsgFundBase" class="warning"></label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="9">
                                <input type="button" class="changebutton" id="btnCalc" onclick="btnCalc_onClick()" value="计 算" />
                                <input type="button" class="changebutton" id="btnReset" onclick="btnReset_onClick()" value="重 置" />
                            </td>
                        </tr>
                    </table>
                    <table id="insure_detail" class="insure_detail">
                        <tr>
                            <th colspan="3">个人缴纳部分</th>
                            <th colspan="3">单位缴纳部分</th>
                        </tr>
                        <tr>
                            <td class="tdA">养老保险金
                            </td>
                            <td class="tdB">
                                <input id="txtP_Pension_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdC">
                                <label id="lblP_Pension"></label>
                            </td>
                            <td class="tdD">养老保险金
                            </td>
                            <td class="tdE">
                                <input id="txtU_Pension_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_Pension"></label>
                            </td>
                        </tr>

                        <tr>
                            <td class="tdA">医疗保险金
                            </td>
                            <td class="tdB">
                                <input id="txtP_Medical_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdC">
                                <label id="lblP_Medical"></label>
                            </td>

                            <td class="tdD">医疗保险金
                            </td>
                            <td class="tdE">
                                <input id="txtU_Medical_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_Medical"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="tdA">失业保险金
                            </td>
                            <td class="tdB">
                                <input id="txtP_LoseJob_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdC">
                                <label id="lblP_LoseJob"></label>
                            </td>
                            <td class="tdD">失业保险金
                            </td>
                            <td class="tdE">
                                <input id="txtU_LoseJob_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>

                            <td class="tdF">
                                <label id="lblU_LoseJob"></label>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="tdD">工伤保险金
                            </td>
                            <td class="tdE">
                                <input id="txtU_Injury_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_Injury"></label>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="tdD">生育保险金
                            </td>
                            <td class="tdE">
                                <input id="txtU_Birth_Percent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_Birth"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="tdA">住房公积金</td>
                            <td class="tdB">
                                <input id="txtP_HouseFund_Pencent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>

                            <td class="tdC">
                                <label id="lblP_HouseFund"></label>
                            </td>
                            <td class="tdD">住房公积金
                            </td>
                            <td class="tdE">
                                <input id="txtU_HouseFund_Pencent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_HouseFund"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="tdA">补充住房公积金</td>
                            <td class="tdB">
                                <input id="txtP_AddHouseFund_Pencent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>

                            <td class="tdC">
                                <label id="lblP_AddHouseFund"></label>
                            </td>
                            <td class="tdD">补充住房公积金
                            </td>
                            <td class="tdE">
                                <input id="txtU_AddHouseFund_Pencent" class="itxt rightblue" type="text" style="width: 60px; text-align: center;" />
                                <span class="unit">%</span>
                            </td>
                            <td class="tdF">
                                <label id="lblU_AddHouseFund"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="tdA" style="color: red;">共计支出</td>
                            <td class="tdB"></td>

                            <td class="tdC">
                                <label id="lblP_Total"></label>
                            </td>
                            <td class="tdD" style="color: red;">共计支出
                            </td>
                            <td class="tdE"></td>
                            <td class="tdF">
                                <label id="lblU_Total"></label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6" class="empty_row"></td>
                        </tr>
                        <tr>
                            <td colspan="6" class="empty_row"></td>
                        </tr>
                    </table>
                </div>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
            }
        },
        mounted () {
            function zyyAlert(section, textBoxID, lblMsgID, id) {
                var lblMsg = document.getElementById(lblMsgID);
                if (id == -1) lblMsg.innerHTML = section + " 不能为空";
                else if (id == -2) lblMsg.innerHTML = section + " 数据无效";
                else if (id == -3) lblMsg.innerHTML = section + " 不能小于零";

                var textBox = document.getElementById(textBoxID);
                textBox.focus();
                textBox.select();
            }

            function enterToCalc(evt) {
                evt = (evt) ? evt : ((window.event) ? window.event : "") //兼容IE和Firefox获得keyBoardEvent对象
                var key = evt.keyCode ? evt.keyCode : evt.which; //兼容IE和Firefox获得keyBoardEvent对象的键值
                if (key == 13) { //判断是否是回车事件。
                    $("#btnCalc").click();
                    return false;   //return false是为了停止表单提交，如果return true或者不写的话，表单照样是会提交的。
                }
            }
            window.enterToCalc = enterToCalc

            function JTrim(s) {
                return s.replace(/(^\s*)|(\s*$)/g, "");
            }

            /**
             * 将数值四舍五入(保留2位小数)后格式化成金额形式
             *
             * @param num 数值(Number或者String)
             * @return 金额格式的字符串,如'1,234,567.45'
             * @type String
             */
            function fc(num) {
                num = num.toString().replace(/\$|\,/g, '');
                if (isNaN(num))
                    num = "0";
                let sign = (num == (num = Math.abs(num)));
                num = Math.floor(num * 100 + 0.50000000001);
                let cents = num % 100;
                num = Math.floor(num / 100).toString();
                if (cents < 10)
                    cents = "0" + cents;
                for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
                    num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                    num.substring(num.length - (4 * i + 3));
                return (((sign) ? '' : '-') + num + '.' + cents);
            }

            function getTextBoxValue(textBoxID) {

                var result = 0;
                var textBox = document.getElementById(textBoxID);
                var strIncome = textBox.value;

                if (JTrim(strIncome) == "") {
                    return -1;//-1表示为空
                }
                strIncome = strIncome.replace(",", "");

                let income = parseFloat(strIncome);
                if (isNaN(income)) {
                    return -2;//-2表示数据无效
                }

                //数据可以为0，但不能小于0
                if (income < 0) {
                    return -3;//-3表示不能小于0
                }
                return income;
            }

            var _BasicIncome = 0;
                        var _SocialBase = 0;
                        var _FundBase = 0;

                        var _P_Pension_Percent = 8;
                        var _U_Pension_Percent = 20;

                        var _P_Medical_Percent = 2;
                        var _U_Medical_Percent = 11;

                        var _P_LoseJob_Percent = 0.5;
                        var _U_LoseJob_Percent = 1.5;

                        var _U_Injury_Percent = 0.5;
                        var _U_Birth_Percent = 1;

                        var _P_HouseFund_Pencent = 7;
                        var _U_HouseFund_Pencent = 7;

                        var _P_AddHouseFund_Pencent = 0;
                        var _U_AddHouseFund_Pencent = 0;

                        $(document).ready(function () {
                            $("#txtBasicIncome").focus();

                            $("#txtP_Pension_Percent").val(_P_Pension_Percent);
                            $("#txtU_Pension_Percent").val(_U_Pension_Percent);

                            $("#txtP_Medical_Percent").val(_P_Medical_Percent);
                            $("#txtU_Medical_Percent").val(_U_Medical_Percent);

                            $("#txtP_LoseJob_Percent").val(_P_LoseJob_Percent);
                            $("#txtU_LoseJob_Percent").val(_U_LoseJob_Percent);

                            $("#txtU_Injury_Percent").val(_U_Injury_Percent);

                            $("#txtU_Birth_Percent").val(_U_Birth_Percent);

                            $("#txtP_HouseFund_Pencent").val(_P_HouseFund_Pencent);
                            $("#txtU_HouseFund_Pencent").val(_U_HouseFund_Pencent);

                            $("#txtP_AddHouseFund_Pencent").val(_P_AddHouseFund_Pencent);
                            $("#txtU_AddHouseFund_Pencent").val(_U_AddHouseFund_Pencent);
                        });
                        function clearMessages() {
                            $("#lblMsgBasicIncome")[0].innerHTML = "";
                            $("#lblMsgSocialBase")[0].innerHTML = "";
                            $("#lblMsgFundBase")[0].innerHTML = "";
                        }
                        function chbSocialBase_onClick() {
                            clearMessages();
                            var txtObj = document.getElementById("txtSocialBase");
                            if (document.getElementById("chbSocialBase").checked) {
                                txtObj.readOnly = ""; //可读
                                txtObj.style.backgroundColor = "#ffffff";
                                txtObj.focus();
                            } else {
                                txtObj.readOnly = "readonly"; //可读
                                txtObj.style.backgroundColor = "lightgray";
                            }
                            var txtObjBasicIncome = document.getElementById("txtBasicIncome");
                            if (document.getElementById("chbSocialBase").checked && document.getElementById("chbFundBase").checked) {
                                txtObjBasicIncome.readOnly = "readonly";
                                txtObjBasicIncome.style.backgroundColor = "lightgray";
                            }
                            else {
                                txtObjBasicIncome.readOnly = ""; //可读
                                txtObjBasicIncome.style.backgroundColor = "#ffffff";
                            }
                        }
                        window.chbSocialBase_onClick = chbSocialBase_onClick
                        function chbFundBase_onClick() {
                            clearMessages();
                            var txtObj = document.getElementById("txtFundBase");
                            if (document.getElementById("chbFundBase").checked) {
                                txtObj.readOnly = ""; //可读
                                txtObj.style.backgroundColor = "#ffffff";
                                txtObj.focus();
                            } else {
                                txtObj.readOnly = "readonly"; //可读
                                txtObj.style.backgroundColor = "lightgray";
                            }

                            var txtObjBasicIncome = document.getElementById("txtBasicIncome");
                            if (document.getElementById("chbSocialBase").checked && document.getElementById("chbFundBase").checked) {
                                txtObjBasicIncome.readOnly = "readonly";
                                txtObjBasicIncome.style.backgroundColor = "lightgray";
                            }
                            else {
                                txtObjBasicIncome.readOnly = ""; //可读
                                txtObjBasicIncome.style.backgroundColor = "#ffffff";
                            }
                        }
                        window.chbFundBase_onClick = chbFundBase_onClick
                        function btnReset_onClick() {
                            clearMessages();

                            var txtObj = document.getElementById("txtSocialBase");
                            txtObj.readOnly = "readonly"; //只读
                            txtObj.style.backgroundColor = "lightgray";

                            txtObj = document.getElementById("txtFundBase");
                            txtObj.readOnly = "readonly"; //只读
                            txtObj.style.backgroundColor = "lightgray";

                            txtObj = document.getElementById("txtBasicIncome");
                            txtObj.readOnly = ""; //可读
                            txtObj.style.backgroundColor = "#ffffff";

                            $("#chbSocialBase").prop("checked", false);
                            $("#chbFundBase").prop("checked", false);

                            $("#txtSocialBase").val("");
                            $("#txtFundBase").val("");


                            $("#txtP_Pension_Percent").val("");
                            $("#lblP_Pension")[0].innerHTML = "";
                            $("#txtU_Pension_Percent").val("");
                            $("#lblU_Pension")[0].innerHTML = "";

                            $("#txtP_Medical_Percent").val("");
                            $("#lblP_Medical")[0].innerHTML = "";
                            $("#txtU_Medical_Percent").val("");
                            $("#lblU_Medical")[0].innerHTML = "";

                            $("#txtP_LoseJob_Percent").val("");
                            $("#lblP_LoseJob")[0].innerHTML = "";
                            $("#txtU_LoseJob_Percent").val("");
                            $("#lblU_LoseJob")[0].innerHTML = "";

                            $("#txtU_Injury_Percent").val("");
                            $("#lblU_Injury")[0].innerHTML = "";

                            $("#txtU_Birth_Percent").val("");
                            $("#lblU_Birth")[0].innerHTML = "";

                            $("#txtP_HouseFund_Pencent").val("");
                            $("#lblP_HouseFund")[0].innerHTML = "";
                            $("#txtU_HouseFund_Pencent").val("");
                            $("#lblU_HouseFund")[0].innerHTML = "";

                            $("#txtP_AddHouseFund_Pencent").val("");
                            $("#lblP_AddHouseFund")[0].innerHTML = "";
                            $("#txtU_AddHouseFund_Pencent").val("");
                            $("#lblU_AddHouseFund")[0].innerHTML = "";

                            $("#txtP_Pension_Percent").val(_P_Pension_Percent);
                            $("#txtU_Pension_Percent").val(_U_Pension_Percent);

                            $("#txtP_Medical_Percent").val(_P_Medical_Percent);
                            $("#txtU_Medical_Percent").val(_U_Medical_Percent);

                            $("#txtP_LoseJob_Percent").val(_P_LoseJob_Percent);
                            $("#txtU_LoseJob_Percent").val(_U_LoseJob_Percent);

                            $("#txtU_Injury_Percent").val(_U_Injury_Percent);

                            $("#txtU_Birth_Percent").val(_U_Birth_Percent);

                            $("#txtP_HouseFund_Pencent").val(_P_HouseFund_Pencent);
                            $("#txtU_HouseFund_Pencent").val(_U_HouseFund_Pencent);

                            $("#txtP_AddHouseFund_Pencent").val(_P_AddHouseFund_Pencent);
                            $("#txtU_AddHouseFund_Pencent").val(_U_AddHouseFund_Pencent);

                            $("#lblP_Total")[0].innerHTML = "";
                            $("#lblU_Total")[0].innerHTML = "";


                            $("#txtBasicIncome").val("");
                            $("#txtBasicIncome").focus();
                        }
                        window.btnReset_onClick = btnReset_onClick
                        function btnCalc_onClick() {
                            var pTotal = 0, uTotal = 0;
                            clearMessages();

                            _BasicIncome = 0;
                            _SocialBase = 0;
                            _FundBase = 0;

                            if (!document.getElementById("txtBasicIncome").readOnly) {
                                var basicIncome = getTextBoxValue("txtBasicIncome");
                                if (basicIncome < 0) { zyyAlert("基本工资", "txtBasicIncome", "lblMsgBasicIncome", basicIncome); return; }
                                _BasicIncome = basicIncome;
                            }
                            if (!document.getElementById("txtSocialBase").readOnly) {
                                var socialBase = getTextBoxValue("txtSocialBase");
                                if (socialBase < 0) { zyyAlert("社保基数", "txtSocialBase", "lblMsgSocialBase", socialBase); return; }
                                _SocialBase = socialBase;
                            }
                            if (!document.getElementById("txtFundBase").readOnly) {
                                var fundBase = getTextBoxValue("txtFundBase");
                                if (fundBase < 0) { zyyAlert("住房公积金基数", "txtFundBase", "lblMsgFundBase", fundBase); return; }
                                _FundBase = fundBase;
                            }

                            //这儿先简单获取基本工资做为值，下次改版要根据上下限来计算的
                            if (_SocialBase == 0) _SocialBase = _BasicIncome;
                            if (_FundBase == 0) _FundBase = _BasicIncome;

                            var p_Pension_Percent = getInputTextValue("txtP_Pension_Percent");
                            var p_Pension = _SocialBase * p_Pension_Percent * 0.01;
                            $("#lblP_Pension")[0].innerHTML = fc(p_Pension) + " 元";
                            pTotal = pTotal + p_Pension;

                            var u_Pension_Percent = getInputTextValue("txtU_Pension_Percent");
                            var u_Pension = _SocialBase * u_Pension_Percent * 0.01;
                            $("#lblU_Pension")[0].innerHTML = fc(u_Pension) + " 元";
                            uTotal = uTotal + u_Pension;

                            var p_Medical_Percent = getInputTextValue("txtP_Medical_Percent");
                            var p_Medical = _SocialBase * p_Medical_Percent * 0.01;
                            $("#lblP_Medical")[0].innerHTML = fc(p_Medical) + " 元";
                            pTotal = pTotal + p_Medical;

                            var u_Medical_Percent = getInputTextValue("txtU_Medical_Percent");
                            var u_Medical = _SocialBase * u_Medical_Percent * 0.01;
                            $("#lblU_Medical")[0].innerHTML = fc(u_Medical) + " 元";
                            uTotal = uTotal + u_Medical;

                            var p_LoseJob_Percent = getInputTextValue("txtP_LoseJob_Percent");
                            var p_LoseJob = _SocialBase * p_LoseJob_Percent * 0.01;
                            $("#lblP_LoseJob")[0].innerHTML = fc(p_LoseJob) + " 元";
                            pTotal = pTotal + p_LoseJob;

                            var u_LoseJob_Percent = getInputTextValue("txtU_LoseJob_Percent");
                            var u_LoseJob = _SocialBase * u_LoseJob_Percent * 0.01;
                            $("#lblU_LoseJob")[0].innerHTML = fc(u_LoseJob) + " 元";
                            uTotal = uTotal + u_LoseJob;

                            var u_Injury_Percent = getInputTextValue("txtU_Injury_Percent");
                            var u_Injury = _SocialBase * u_Injury_Percent * 0.01;
                            $("#lblU_Injury")[0].innerHTML = fc(u_Injury) + " 元";
                            uTotal = uTotal + u_Injury;

                            var u_Birth_Percent = getInputTextValue("txtU_Birth_Percent");
                            var u_Birth = _SocialBase * u_Birth_Percent * 0.01;
                            $("#lblU_Birth")[0].innerHTML = fc(u_Birth) + " 元";
                            uTotal = uTotal + u_Birth;


                            var p_HouseFund_Pencent = getInputTextValue("txtP_HouseFund_Pencent");
                            var p_HouseFund = _FundBase * p_HouseFund_Pencent * 0.01;
                            $("#lblP_HouseFund")[0].innerHTML = fc(p_HouseFund) + " 元";
                            pTotal = pTotal + p_HouseFund;

                            var u_HouseFund_Pencent = getInputTextValue("txtU_HouseFund_Pencent");
                            var u_HouseFund = _FundBase * u_HouseFund_Pencent * 0.01;
                            $("#lblU_HouseFund")[0].innerHTML = fc(u_HouseFund) + " 元";
                            uTotal = uTotal + u_HouseFund;

                            var p_AddHouseFund_Pencent = getInputTextValue("txtP_AddHouseFund_Pencent");
                            var p_AddHouseFund = _FundBase * p_AddHouseFund_Pencent * 0.01;
                            $("#lblP_AddHouseFund")[0].innerHTML = fc(p_AddHouseFund) + " 元";
                            pTotal = pTotal + p_AddHouseFund;

                            var u_AddHouseFund_Pencent = getInputTextValue("txtU_AddHouseFund_Pencent");
                            var u_AddHouseFund = _FundBase * u_AddHouseFund_Pencent * 0.01;
                            $("#lblU_AddHouseFund")[0].innerHTML = fc(u_AddHouseFund) + " 元";
                            uTotal = uTotal + u_AddHouseFund;

                            $("#lblP_Total")[0].innerHTML = fc(pTotal) + " 元";
                            $("#lblU_Total")[0].innerHTML = fc(uTotal) + " 元";
                        }
                        window.btnCalc_onClick = btnCalc_onClick
                        function getInputTextValue(textBoxID) {
                            var textBox = document.getElementById(textBoxID);
                            var strIncome = textBox.value;

                            if (JTrim(strIncome) == "") {
                                textBox.value = "0";
                                return 0;
                            }
                            let income = parseFloat(strIncome);
                            if (isNaN(income)) {
                                textBox.value = "0";
                                return 0
                            }

                            //数据可以为0，但不能小于0
                            if (income < 0) {
                                textBox.value = "0";
                                return 0;//-3表示不能小于0
                            }
                            return income;
                        }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
</style>
