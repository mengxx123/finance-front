<template>
    <my-page title="印花税计算器">
        <div class="common-container container">
            <ui-article>
                    <table width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                            <td width="600" valign="top">

                                <form name="yingye" id="yingye" method="post">
                                    <input type="hidden" name="fanwei" value="包括供应、预购、采购、购销结合及协作、调剂、补偿、易货等合同">
                                    <input type="hidden" name="fanwei" value="包括加工、定做、修理、修缮、印刷、广告、测绘、测试等合同">
                                    <input type="hidden" name="fanwei" value="包括勘察设计合同">
                                    <input type="hidden" name="fanwei" value="包括建筑安装工程承包合同">
                                    <input type="hidden" name="fanwei" value="包括租赁房屋、船舶、飞机、机动车辆、机械、器具、设备等合同">
                                    <input type="hidden" name="fanwei" value="包括民用航空、铁路运输、海上运输、内河运输、公路运输和联运合同">
                                    <input type="hidden" name="fanwei" value="包括仓储、保管合同">
                                    <input type="hidden" name="fanwei" value="银行及其它金融组织和借款人（不包括银行同业拆借）所签订的借款合同">
                                    <input type="hidden" name="fanwei" value="包括财产、责任、保证、信用、等保险合同 ">
                                    <input type="hidden" name="fanwei" value="包括技术开发、转让、咨询、服务等合同 ">
                                    <input type="hidden" name="fanwei" value="包括财产所有权和版权、商标专用权、专用权、专有技术使用权等转移书据">
                                    <input type="hidden" name="fanwei" value="生产经营用帐薄：资金">
                                    <input type="hidden" name="fanwei" value="生产经营用帐薄：非资金">
                                    <input type="hidden" name="fanwei" value="包括政府部门发给的房屋产权证、工商营业执照、商标注册证、专利证、土地使用证">

                                    <input type="hidden" name="shuilv" value="0.0003">
                                    <input type="hidden" name="shuilv" value="0.0005">
                                    <input type="hidden" name="shuilv" value="0.0005">
                                    <input type="hidden" name="shuilv" value="0.0003">
                                    <input type="hidden" name="shuilv" value="0.001">
                                    <input type="hidden" name="shuilv" value="0.0005">
                                    <input type="hidden" name="shuilv" value="0.001">
                                    <input type="hidden" name="shuilv" value="0.00005">
                                    <input type="hidden" name="shuilv" value="0.001">
                                    <input type="hidden" name="shuilv" value="0.0003">
                                    <input type="hidden" name="shuilv" value="0.0005">
                                    <input type="hidden" name="shuilv" value="0.0005">
                                    <input type="hidden" name="shuilv" value="5">
                                    <input type="hidden" name="shuilv" value="5">
                                <table>

                                    <tbody><tr>
                                        <td height="38" width="383" colspan="2">
                                            <span>&nbsp; 请选择税目：&nbsp;</span>
                                            <strong><font color="#cc0000">
                                                <select id="showfw" name="selectsm" class="box" style="height:28px">
                                                    <option value="0" selected="">请选择税目</option>
                                                    <option value="1">购销合同 0.03%</option>
                                                    <option value="2">承揽合同 0.05%</option>
                                                    <option value="3">建设工程勘察设计合同 0.05%</option>
                                                    <option value="4">建筑安装工程承包合同 0.03%</option>
                                                    <option value="5">财产租赁合同 0.1%</option>
                                                    <option value="6">货物运输合同 0.05%</option>
                                                    <option value="7">仓储保管合同 0.1%</option>
                                                    <option value="8">借款合同 0.05%</option>
                                                    <option value="9">财产保险合同 0.1%</option>
                                                    <option value="10">技术合同 0.03%</option>
                                                    <option value="11">产权转移书据 0.05%</option>
                                                    <option value="12">营业资金帐薄 0.05%</option>
                                                    <option value="14">权利、许可证照 5元/件</option>
                                                </select>
                                            </font></strong>
                                        </td>
                                    </tr>
                                    <tr height="80px">
                                        <td height="38" width="475" colspan="2">
                                            <span>&nbsp; 请输入金额：&nbsp;</span>
                                            <input name="prereward" class="box">　 </td>
                                    </tr>
                                    <tr height="60px">
                                        <td height="39" width="200" clospan="2"><span style="FONT-SIZE: 9pt">
                                        <input id="accountyy" type="button" value="查看结果" name="Button22" style="margin: 30px 0px 30px 80px" class="changebutton"></span></td>
                                    </tr>
                                    <tr height="40px">
                                        <td height="1" width="580" colspan="2">
                                            <span id="idtitle">征收范围:</span>
                                            <span style=" COLOR: #01aa78" id="idfanwei">包括租赁房屋、船舶、飞机、机动车辆、机械、器具、设备等合同</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                    <tr height="100px">
                                        <td><span>您应交纳的印花税额:</span>
                                            <input readonly="true" type="text" name="taxcal" id="taxcal" style="background:#dcdcdc;"></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </form>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                version: ''
            }
        },
        mounted() {
            var str = "";
            function showfw(){
                document.yingye.prereward.value="";
                document.yingye.taxcal.value="";
                var nVal = document.yingye.selectsm.options[document.yingye.selectsm.selectedIndex].value	;

                if (nVal > 0)
                {
                    if (nVal == 11 || nVal == 13)
                    {
                        str = document.yingye.fanwei[nVal-1].value;
                        document.all.idtitle.innerText  ="征收范围:";
                        document.all.idfanwei.innerText  =str;
                        document.all.idmoneyfile.innerText  ="件数:   ";
                        document.all.idyuanjian.innerText  ="件";
                    }
                    else
                    {
                        str = document.yingye.fanwei[nVal-1].value;
                        document.all.idtitle.innerText  ="征收范围:";
                        document.all.idfanwei.innerText  =str;
                        document.all.idmoneyfile.innerText  ="金额:   ";
                        document.all.idyuanjian.innerText  ="元";
                    }

                }
                else
                {
                    document.all.idmoneyfile.innerText  ="金额或件数:";
                    document.all.idyuanjian.innerText  ="";
                    document.all.idfanwei.innerText  = "";
                    document.all.idtitle.innerText  = "";
                }


            }

            document.getElementById('showfw').addEventListener('change', () => {
                showfw()
            })

            function accountyy(){
                var tax = "";
                var nVal = document.yingye.selectsm.options[document.yingye.selectsm.selectedIndex].value;
                var strtext = document.yingye.selectsm.options[document.yingye.selectsm.selectedIndex].text;

                var paynum=document.yingye.prereward.value;
                var paynum_cc="";

                if (nVal == "0")
                {
                    alert("请选择税目");
                    document.yingye.selectsm.focus();
                    return;
                }
                if(!checkData(document.yingye.prereward,"金额或件数")) return;

                for(i=0;i<=paynum.length;i++){
                    pp=paynum.substring(i,i+1);
                    if(pp!="+"&&pp!="-"&&pp!="*"&&pp!="/"){
                        paynum_cc+=pp;
                    }
                }
                if (nVal == 11 || nVal == 13)
                {
                    if(!isDigit(paynum_cc)){
                        alert("请确定您输入的件数是整数！");
                        document.yingye.prereward.value="";
                        document.yingye.prereward.focus();
                        return false;
                    }
                    else{
                        pp=paynum.substring(paynum.length,paynum.length-1);
                        if(pp=="+"||pp=="-"||pp=="*"||pp=="/"){
                            alert("请确定您输入的件数是整数！");
                            document.yingye.prereward.value="";
                            document.yingye.prereward.focus();
                            return false;
                        }
                        else{
                            paynum=eval(paynum);
                        }
                    }
                }
                else
                {
                    if(isNaN(paynum_cc)){
                        alert("请确定您输入的金额是数字！");
                        document.yingye.prereward.value="";
                        document.yingye.prereward.focus();
                        return false;
                    }
                    else{
                        pp=paynum.substring(paynum.length,paynum.length-1);
                        if(pp=="+"||pp=="-"||pp=="*"||pp=="/"){
                            alert("请确定您输入的金额是数字！");
                            document.yingye.prereward.focus();
                            return false;
                        }
                        else{
                            paynum=eval(paynum);
                        }
                    }
                }

                tax = paynum*document.yingye.shuilv[nVal-1].value;

                tax=Math.round(tax*100)/100;


                //财产租赁合同
                if (nVal == "5")
                {
                    //税额不足一元的按一元贴花
                    if (tax < 1)
                        tax = 1;
                }
                else
                {
                    if (tax < 0.1)
                    {
                        tax = 0;
                    }
                    else
                    {
                        floa = tax * 10 - parseInt(tax * 10);
                        if (floa >= 0.5 )
                        {
                            tax = (parseInt(tax * 10) + 1)/10;
                        }
                        else
                        {
                            tax = parseInt(tax * 10)/10;
                        }
                    }
                }

                //   var  remarks=" 您输入的金额或件数为：" + paynum + "\n 输入的税目为：" +strtext
                //                  + "\n 应纳印花税额为：" + tax;
                //	alert(remarks);
                document.yingye.taxcal.value=tax;
            }
            document.getElementById('accountyy').addEventListener('click', () => {
                accountyy()
            })

            function checkData(Obj,Str){
                if (Obj.value==""){
                    alert("请您输入"+Str+"\n");Obj.focus();
                    return false;
                }else{
                    return true;
                }
            }
            function isDigit(s)
            {
                var patrn=/^[0-9]{1,15}$/;
                if (!patrn.exec(s)) return false
                return true
            }

        }
    }
</script>

<style scoped>
</style>
