import React, { Component } from 'react'
import {
    PieChart, Pie, Sector, Cell,
  } from 'recharts';
import './mainpage.css'
import buttonImage from "./img/Tide.png"

const UserFlg = {IsPapa:1, IsMama:2, IsBoth:3}
const UserColor = {IsPapa:"#99FFFF", IsMama:"#FFD5EC", IsBoth:"#00FF99"}
var SelectBoxFlgs = [100];

export default class mainpage extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            papa:[0,0,0],
            mama:[0,0,0],
            both:[0,0,0],
        };
    }

    componentDidMount(){
        console.log("init");
        for(var i=0;i<100;i++){
            SelectBoxFlgs[i] = 0;
        }
    }

    componentWillUnmount() {
        
    }

    CheckResultList = () =>{
        const papa_buf = this.state.papa.slice();
        const mama_buf = this.state.mama.slice();
        const both_buf = this.state.both.slice();
        for(var i=0;i<3;i++){
            papa_buf[i] = 0;
            mama_buf[i] = 0;
            both_buf[i] = 0;
        }

        for(var i=0;i<30;i++){
            switch(SelectBoxFlgs[i]){
                case 1:
                    papa_buf[0]+=1;
                    break;
                case 2:
                    mama_buf[0]+=1;
                    break;
                case 3:
                    both_buf[0]+=1;
                    break;
                default:
                    break;
            }
        }
        for(var i=30;i<60;i++){
            switch(SelectBoxFlgs[i]){
                case 1:
                    papa_buf[1]+=1;
                    break;
                case 2:
                    mama_buf[1]+=1;
                    break;
                case 3:
                    both_buf[1]+=1;
                    break;
                default:
                    break;
            }
        }
        for(var i=60;i<90;i++){
            switch(SelectBoxFlgs[i]){
                case 1:
                    papa_buf[2]+=1;
                    break;
                case 2:
                    mama_buf[2]+=1;
                    break;
                case 3:
                    both_buf[2]+=1;
                    break;
                default:
                    break;
            }
        }
        this.setState({papa:papa_buf})
        this.setState({mama:mama_buf})
        this.setState({both:both_buf})
    }

    BoxColor_PaPaId = (ListBoId,Num) =>{
        SelectBoxFlgs[Num] = UserFlg.IsPapa;
        this.CheckResultList();
        var buf = document.getElementById(ListBoId);
        buf.style.backgroundColor = UserColor.IsPapa;
    }

    BoxColor_MaMaId = (ListBoId, Num) =>{
        SelectBoxFlgs[Num] = UserFlg.IsMama;
        this.CheckResultList();
        var buf = document.getElementById(ListBoId);
        buf.style.backgroundColor = UserColor.IsMama;
    }

    BoxColor_BothId = (ListBoId, Num) =>{
        SelectBoxFlgs[Num] = UserFlg.IsBoth;
        this.CheckResultList();
        var buf = document.getElementById(ListBoId);
        buf.style.backgroundColor = UserColor.IsBoth;
    }

    BoxColor_NoneId = (ListBoId, Num) =>{
        SelectBoxFlgs[Num] = 0;
        this.CheckResultList();
        var buf = document.getElementById(ListBoId);
        buf.style.backgroundColor = "#FFFFFF";
    }

    MakeSelectBox = (LabelName1, Num) =>{
        var NameVal = "couple_" + Num;
        var PaPaId = "papa_" + Num;
        var MaMaId = "mama_" + Num;
        var BothId = "both_" + Num;
        var NoneId = "none_" + Num;
        var ListBoId = "BoxId_" + Num;
        return(
            <div className="ListBox" id={ListBoId}>
            <a className="ListText">{LabelName1}</a>
            <div>
                <input type="radio" name={NameVal} id={PaPaId} value="danan" onClick={ () => this.BoxColor_PaPaId(ListBoId, Num)}></input><label for={PaPaId}>旦那</label>
                <a className="ListSelect" />
                <input type="radio" name={NameVal} id={MaMaId} value="tuma" onClick={ () => this.BoxColor_MaMaId(ListBoId, Num)}></input><label for={MaMaId}>妻</label>
                <br/>
                <input type="radio" name={NameVal} id={BothId} value="both" onClick={ () => this.BoxColor_BothId(ListBoId, Num)}></input><label for={BothId}>両方</label>
                <a className="ListSelect" />
                <input type="radio" name={NameVal} id={NoneId} value="tuma" onClick={ () => this.BoxColor_NoneId(ListBoId, Num)}></input><label for={NoneId}>なし</label>
            </div>
        </div>
        )
    }

    MakeRow = (CellName, LabelName1, LabelName2, LabelName3, LabelName4, 
        LabelName5, LabelName6, LabelName7, LabelName8, LabelName9, LabelName10,Num) =>{
        return(<tr>
            <>{
                (() =>{
                    if(CellName =="Others"){
                        return <td rowspan="4" className="rowName">{CellName}</td>
                    }else if(CellName =="Morning" || CellName=="Afternoon"){
                        return <td rowspan="3" className="rowName">{CellName}</td>
                    }
                })()
            }
            </>
            <td>
                {this.MakeSelectBox(LabelName1, Num)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName2, Num+1)}    
            </td>
            <td>
                {this.MakeSelectBox(LabelName3, Num+2)}    
            </td>
            <td>
                {this.MakeSelectBox(LabelName4, Num+3)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName5, Num+4)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName6, Num+5)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName7, Num+6)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName8, Num+7)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName9, Num+8)}
            </td>
            <td>
                {this.MakeSelectBox(LabelName10, Num+9)}
            </td>
        </tr>)
    }

    render () {
        const papa_buf = this.state.papa.slice();
        const mama_buf = this.state.mama.slice();
        const both_buf = this.state.both.slice();

        const MorningResult = [
            {name:'夫', value:papa_buf[0]},
            {name:'妻', value:mama_buf[0]},
            {name:'両方', value:both_buf[0]},
        ];
        const AfternoonResult = [
            {name:'夫', value:papa_buf[1]},
            {name:'妻', value:mama_buf[1]},
            {name:'両方', value:both_buf[1]},
        ];
        const BothResult = [
            {name:'夫', value:papa_buf[2]},
            {name:'妻', value:mama_buf[2]},
            {name:'両方', value:both_buf[2]},
        ];

        const COLORS = [
            UserColor.IsPapa,
            UserColor.IsMama,
            UserColor.IsBoth,
          ];
        
        var Hello ="AAAAAAAAAAAAAAAAAAAAA"
        var test = "https://twitter.com/intent/tweet?text=" +
                    Hello +
                    "&url=https://qiita.com/&hashtags=qiita&via=hogeUser"
        return(
            <div>
                <p className="AppTitle">家事分担アプリ</p>
                
                <div className="ListPosition">
                <table className="ListTable">
                    {this.MakeRow("Morning", "カーテン開ける", "ベットを整える", "新聞を取る", "コーヒーを入れる", "朝食を作る",
                                "子供に食べさせる", "食器を洗う", "食器をしまう", "テーブルを拭く", "米を研ぐ", 0)}
                    {this.MakeRow("", "お茶を作り置き", "献立を考える", "宅配食材を注文する", "ペット・植物の世話", "洗濯機を回す", 
                                "洗濯物を干す", "部屋を片づける", "掃除機をかける", "トイレ掃除をする", "お風呂掃除" , 10)}
                    {this.MakeRow("", "ゴミ集め&分別", "ゴミ捨て", "哺乳瓶消毒", "子供の歯磨き", "子供の着替え", "連絡帳を書く", 
                                "おむつを記名", "子供の持ち物用意", "子供に靴をはかせる", "保育園に送る", 20)}
                    {this.MakeRow("Afternoon", "保育園に迎えに行く", "連絡帳をチェック", "子供に手を洗わす", "子供と遊ぶ", "夕食をつくる", 
                                "子供に食べさせる", "子供の食べ残しを処理", "食器を洗う", "食器をしまう", "残ったご飯をラップ", 30)}
                    {this.MakeRow("", "テーブルを拭く", "お風呂掃除", "お風呂を入れる", "子供をお風呂に入れる", "子供にパジャマを着せる", 
                                "子供の歯磨き", "子供に絵本を読む", "子供を寝かしつかせる", "洗濯機に入れる", "部屋を片づける", 40)}
                    {this.MakeRow("", "洗濯物を取り込む", "洗濯物をたたむ", "洗濯物をしまう", "アイロンがけ", "靴磨き",
                                "郵便物をチェック", "家計簿を付ける", "加湿器に水入れ", "子供に布団をかけなおす", "夜泣きを対応", 50)}
                    {this.MakeRow("Others", "保育園呼び出し対応", "子供を病院に連れていく", "子供に薬を飲ませる", "日用品購入", "車を運転", 
                                "子供の爪切り", "子供の耳掃除", "子供の靴を洗う", "保育園グッズを縫う", "子供をあやす" ,60)}
                    {this.MakeRow("", "クリーニングに出す", "クリーニングを受け取る", "役所に書類提出", "公共料金を払う", "通帳記帳や資産運用する", 
                                "電球を取り換え", "新聞をまとめて捨てる", "粗大ごみ回収の予約", "シンクを掃除", "窓を拭く", 70)}
                    {this.MakeRow("", "ベランダや庭を掃除", "レンジフードを取り換え", "衣替えする", "子供を習い事に連れる", "レジャーの予定立て", 
                                "保護者会に出席する", "町内会に出席", "家電の修理を依頼する", "予防接種や検診予約", "予防接種や検診に連れる", 80)}
                </table>
                </div>
                <table className="ResultGraph">
                    <tr>
                        <td className="ListResult">
                            <p className="MorningResult">Morning</p>
                            <PieChart  width={500} height={400}>
                                <Pie data={MorningResult} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label startAngle={90} endAngle={450}>
                                {
                                    MorningResult.map((entry, index) =>
                                    <Cell fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                            </PieChart>
                        </td>
                        <td className="ListResult">
                            <p className="MorningResult">Afternoon</p>
                            <PieChart  width={500} height={400}>
                                <Pie data={AfternoonResult} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label startAngle={90} endAngle={450}>
                                {
                                    AfternoonResult.map((entry, index) =>
                                    <Cell fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                            </PieChart>
                        </td>
                        <td className="ListResult">
                            <p className="MorningResult">Others</p>
                            <PieChart  width={500} height={400}>
                                <Pie data={BothResult} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label startAngle={90} endAngle={450}>
                                {
                                    BothResult.map((entry, index) =>
                                    <Cell fill={COLORS[index % COLORS.length]} />)
                                }
                                </Pie>
                            </PieChart>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}