<template>
    <my-page title="会计科目汇总表" :page="page">
        <div class="common-container container">
            <ui-article>
                <div class="left-content">
                    <p><strong>　一、资产类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                        <tr>
                            <td>1001</td>
                            <td>库存现金</td>
                            <td>&nbsp;</td>
                            <td>1431</td>
                            <td>周转材料</td>
                            <td>建造承包商专用</td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>银行存款</td>
                            <td>&nbsp;</td>
                            <td>1441</td>
                            <td>贵金属</td>
                            <td>银行专用</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>存放中央银行款项</td>
                            <td>银行专用</td>
                            <td>1442</td>
                            <td>抵债资产</td>
                            <td>金融共用</td>
                        </tr>
                        <tr>
                            <td>1011</td>
                            <td>存放同业</td>
                            <td>银行专用</td>
                            <td>1451</td>
                            <td>损余物资</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>1015</td>
                            <td>其它货币基金</td>
                            <td>&nbsp;</td>
                            <td>1461</td>
                            <td>存货跌价准备</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1021</td>
                            <td>结算备付金</td>
                            <td>证券专用</td>
                            <td>1501</td>
                            <td>待摊费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1031</td>
                            <td>存出保证金</td>
                            <td>金融共用</td>
                            <td>1511</td>
                            <td>独立帐户资产</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>1051</td>
                            <td>拆出资金</td>
                            <td>金融共用</td>
                            <td>1521</td>
                            <td>持有至到期投资</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1101</td>
                            <td>交易性金融资产</td>
                            <td>&nbsp;</td>
                            <td>1522</td>
                            <td>持有至到期投资减值准备</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1111</td>
                            <td>买入返售金融资产</td>
                            <td>金融共用</td>
                            <td>1523</td>
                            <td>可供出售金融资产</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1121</td>
                            <td>应收票据</td>
                            <td>&nbsp;</td>
                            <td>1524</td>
                            <td>长期股权投资</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1122</td>
                            <td>应收帐款</td>
                            <td>&nbsp;</td>
                            <td>1525</td>
                            <td>长期股权投资减值准备</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1123</td>
                            <td>预付帐款</td>
                            <td>&nbsp;</td>
                            <td>1526</td>
                            <td>投资性房地产</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1131</td>
                            <td>应收股利</td>
                            <td>&nbsp;</td>
                            <td>1531</td>
                            <td>长期应收款</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1132</td>
                            <td>应收利息</td>
                            <td>&nbsp;</td>
                            <td>1541</td>
                            <td>未实现融资收益</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1211</td>
                            <td>应收保护储金</td>
                            <td>保险专用</td>
                            <td>1551</td>
                            <td>存出资本保证金</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>1221</td>
                            <td>应收代位追偿款</td>
                            <td>保险专用</td>
                            <td>1601</td>
                            <td>固定资产</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1222</td>
                            <td>应收分保帐款</td>
                            <td>保险专用</td>
                            <td>1602</td>
                            <td>累计折旧</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1223</td>
                            <td>应收分保未到期责任准备金</td>
                            <td>保险专用</td>
                            <td>1603</td>
                            <td>固定资产减值准备</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1224</td>
                            <td>应收分保保险责任准备金</td>
                            <td>保险专用</td>
                            <td>1604</td>
                            <td>在建工程</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1231</td>
                            <td>其它应收款</td>
                            <td>&nbsp;</td>
                            <td>1605</td>
                            <td>工程物资</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>1241</td>
                            <td>坏帐准备</td>
                            <td>&nbsp;</td>
                            <td>1606</td>
                            <td>固定资产清理</td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td>1251</td>
                            <td>贴现资产</td>
                            <td>银行专用</td>
                            <td>1611</td>
                            <td>融资租赁资产</td>
                            <td>租赁专用</td>
                        </tr>

                        <tr>
                            <td>1301</td>
                            <td>贷款</td>
                            <td>银行和保险共用</td>
                            <td>1612</td>
                            <td>未担保余值</td>
                            <td>租赁专用</td>
                        </tr>

                        <tr>
                            <td>1302</td>
                            <td>贷款损失准备</td>
                            <td>银行和保险共用</td>
                            <td>1621</td>
                            <td>生产性生物资产</td>
                            <td>农业专用</td>
                        </tr>

                        <tr>
                            <td>1311</td>
                            <td>代理兑付证券</td>
                            <td>银行和保险共用</td>
                            <td>1622</td>
                            <td>生产性生物资产累计折旧</td>
                            <td>农业专用</td>
                        </tr>
                        <tr>
                            <td>1321</td>
                            <td>代理业务资产</td>
                            <td>&nbsp;</td>
                            <td>1623</td>
                            <td>公益性生物资产</td>
                            <td>农业专用</td>
                        </tr>

                        <tr>
                            <td>1401</td>
                            <td>材料采购</td>
                            <td>&nbsp;</td>
                            <td>1631</td>
                            <td>油气资产</td>
                            <td>石油天然气开采专用</td>
                        </tr>

                        <tr>
                            <td>1402</td>
                            <td>在途物资</td>
                            <td>&nbsp;</td>
                            <td>1632</td>
                            <td>累计折耗</td>
                            <td>石油天然气开采专用</td>
                        </tr>

                        <tr>
                            <td>1403</td>
                            <td>原材料</td>
                            <td>&nbsp;</td>
                            <td>1701</td>
                            <td>无形资产</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1404</td>
                            <td>材料成本差异</td>
                            <td>&nbsp;</td>
                            <td>1702</td>
                            <td>累计摊销</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1406</td>
                            <td>库存商品</td>
                            <td>&nbsp;</td>
                            <td>1703</td>
                            <td>无形资产减值准备</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1407</td>
                            <td>发出商品</td>
                            <td>&nbsp;</td>
                            <td>1711</td>
                            <td>商誉</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1410</td>
                            <td>商品进销差价</td>
                            <td>&nbsp;</td>
                            <td>1801</td>
                            <td>长期待摊费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1411</td>
                            <td>委托加工物资</td>
                            <td>&nbsp;</td>
                            <td>1811</td>
                            <td>递延所得资产</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1412</td>
                            <td>包装物及低值易耗品</td>
                            <td>&nbsp;</td>
                            <td>1901</td>
                            <td>待处理财产损益</td>

                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>1421</td>
                            <td>消耗性物物资产</td>
                            <td>农业专用</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                    <p><strong>　二、负债类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                            <tr>
                                <td>2001</td>
                                <td>短期借款</td>
                                <td>&nbsp;</td>
                                <td>2261</td>
                                <td>应付分保帐款</td>
                                <td>保险专用</td>
                            </tr>
                            <tr>
                                <td>2002</td>
                                <td>存入保证金</td>
                                <td>金融共用</td>
                                <td>2311</td>
                                <td>代理买卖证券款</td>
                                <td>证券专用</td>
                            </tr>
                            <tr>
                                <td>2003</td>
                                <td>拆入资金</td>
                                <td>金融共用</td>
                                <td>2312</td>
                                <td>代理承销证券款</td>
                                <td>证券和银行共用</td>
                            </tr>
                            <tr>
                                <td>2004</td>
                                <td>向中央银行借款</td>
                                <td>银行专用</td>
                                <td>2313</td>
                                <td>代理兑付证券款</td>
                                <td>证券和银行共用</td>
                            </tr>
                            <tr>
                                <td>2011</td>
                                <td>同业存放</td>
                                <td>银行专用</td>
                                <td>2314</td>
                                <td>代理业务负债</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2012</td>
                                <td>吸收存款</td>
                                <td>银行专用</td>
                                <td>2401</td>
                                <td>预提费用</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2021</td>
                                <td>贴现负债</td>
                                <td>银行专用</td>
                                <td>2411</td>
                                <td>预计负债</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2101</td>
                                <td>交易性金融负债</td>
                                <td>&nbsp;</td>
                                <td>2501</td>
                                <td>递延收益</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2111</td>
                                <td>专出回购金融资产款</td>
                                <td>金融共用</td>
                                <td>2601</td>
                                <td>长期借款</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2201</td>
                                <td>应付票据</td>
                                <td>&nbsp;</td>
                                <td>2602</td>
                                <td>长期债券</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2202</td>
                                <td>应付帐款</td>
                                <td>&nbsp;</td>
                                <td>2701</td>
                                <td>到期责任准备金</td>
                                <td>保险专用</td>
                            </tr>
                            <tr>
                                <td>2205</td>
                                <td>预收帐款</td>
                                <td>&nbsp;</td>
                                <td>2702</td>
                                <td>保险责任准备金</td>
                                <td>保险专用</td>
                            </tr>
                            <tr>
                                <td>2211</td>
                                <td>应付职工薪酬</td>
                                <td>&nbsp;</td>
                                <td>2711</td>
                                <td>保户储金</td>
                                <td>保险专用</td>
                            </tr>
                            <tr>
                                <td>2221</td>
                                <td>应交税费</td>
                                <td>&nbsp;</td>
                                <td>2721</td>
                                <td>独立帐户负债</td>
                                <td>保险专用</td>
                            </tr>
                            <tr>
                                <td>2231</td>
                                <td>应付股利</td>
                                <td>&nbsp;</td>
                                <td>2801</td>
                                <td>长期应付款</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2232</td>
                                <td>应付利息</td>
                                <td>&nbsp;</td>
                                <td>2802</td>
                                <td>未确认融资费用</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2241</td>
                                <td>其他应付款</td>
                                <td>&nbsp;</td>
                                <td>2811</td>
                                <td>专项应付款</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>2251</td>
                                <td>应付保户红利</td>
                                <td>保险专用</td>
                                <td>2901</td>
                                <td>递延所得税负债</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong>　三、共同类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                        <tr>
                            <td>3001</td>
                            <td>清算资金往来</td>
                            <td>银行专用</td>
                            <td>3201</td>
                            <td>套期工具</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>3002</td>
                            <td>外汇买卖</td>
                            <td>金融共用</td>
                            <td>3202</td>
                            <td>被套期项目</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>3101</td>
                            <td>衍生工具</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>

                    <p><strong>　四、所有者权益类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                        <tr>
                            <td>4001</td>
                            <td>实收资本</td>
                            <td>银行专用</td>
                            <td>4103</td>
                            <td>套期工具</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>4002</td>
                            <td>资本公积</td>
                            <td>&nbsp;</td>
                            <td>4104</td>
                            <td>利润分配</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>4101</td>
                            <td>盈余公积</td>
                            <td>&nbsp;</td>
                            <td>4201</td>
                            <td>库存股</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>4102</td>
                            <td>一般风险准备</td>
                            <td>金融共用</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                    <p><strong>　五、成本类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                        <tr>
                            <td>5001</td>
                            <td>生产成本</td>
                            <td>&nbsp;</td>
                            <td>5401</td>
                            <td>工程施工</td>
                            <td>建造承包商专用</td>
                        </tr>
                        <tr>
                            <td>5101</td>
                            <td>制造费用</td>
                            <td>&nbsp;</td>
                            <td>5402</td>
                            <td>工程结算</td>
                            <td>建造承包商专用</td>
                        </tr>
                        <tr>
                            <td>5201</td>
                            <td>劳务成本</td>
                            <td>&nbsp;</td>
                            <td>5403</td>
                            <td>机械作业</td>
                            <td>建造承包商专用</td>
                        </tr>
                        <tr>
                            <td>5301</td>
                            <td>研发支出</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                    <p><strong>　六、损益类</strong></p>
                    <table class="t-kuaiji">
                        <tbody>
                        <tr>
                        </tr><tr>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                            <td style="font-weight: bold;width:60px">编号</td>
                            <td style="font-weight: bold;width:200px">会计科目名称</td>
                            <td style="font-weight: bold;width:140px">会计科目适用范围</td>
                        </tr>
                        <tr>
                            <td>6001</td>
                            <td>主营业务收入</td>
                            <td>&nbsp;</td>
                            <td>6411</td>
                            <td>利息支出</td>
                            <td>金融共用</td>
                        </tr>
                        <tr>
                            <td>6011</td>
                            <td>利息收入</td>
                            <td>金融共用</td>
                            <td>6421</td>
                            <td>手续费支出</td>
                            <td>金融共用</td>
                        </tr>
                        <tr>
                            <td>6021</td>
                            <td>手续费收入</td>
                            <td>金融共用</td>
                            <td>6501</td>
                            <td>提取未到期责任准备金</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6031</td>
                            <td>保费收入</td>
                            <td>保险专用</td>
                            <td>6502</td>
                            <td>撮保险责任准备金</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6032</td>
                            <td>分保费收入</td>
                            <td>保险专用</td>
                            <td>6511</td>
                            <td>赔付支出</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6041</td>
                            <td>租赁收入</td>
                            <td>租赁专用</td>
                            <td>6521</td>
                            <td>保户红利支出</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6051</td>
                            <td>其他业务收入</td>
                            <td>&nbsp;</td>
                            <td>6531</td>
                            <td>退保金</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6061</td>
                            <td>汇兑损益</td>
                            <td>金融专用</td>
                            <td>6541</td>
                            <td>分出保费</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6101</td>
                            <td>公允价值变动损益</td>
                            <td>&nbsp;</td>
                            <td>6542</td>
                            <td>分保费用</td>
                            <td>保险专用</td>
                        </tr>
                        <tr>
                            <td>6111</td>
                            <td>投资收益</td>
                            <td>&nbsp;</td>
                            <td>6601</td>
                            <td>销售费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6201</td>
                            <td>摊回保险责任准备金</td>
                            <td>保险专用</td>
                            <td>6602</td>
                            <td>管理费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6202</td>
                            <td>摊回赔付支出</td>
                            <td>保险专用</td>
                            <td>6603</td>
                            <td>财务费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6203</td>
                            <td>摊回分保费用</td>
                            <td>保险专用</td>
                            <td>6604</td>
                            <td>勘探费用</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6301</td>
                            <td>营业外收入</td>
                            <td>&nbsp;</td>
                            <td>6701</td>
                            <td>资产减值损失</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6401</td>
                            <td>主营业务成本</td>
                            <td>&nbsp;</td>
                            <td>6711</td>
                            <td>营业外支出</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6402</td>
                            <td>其它业务成本</td>
                            <td>&nbsp;</td>
                            <td>6801</td>
                            <td>所得税</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>6405</td>
                            <td>营业税金及附加</td>
                            <td>&nbsp;</td>

                            <td>6901</td>
                            <td>以前年度损益调整</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                version: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/7d985310248011eabd7877dfcefc10ef',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
