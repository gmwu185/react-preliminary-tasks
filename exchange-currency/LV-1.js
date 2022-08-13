/** 參考資料
 * https://discord.com/channels/801807326054055996/999482545567707136/1004232680969338900
 * https://rate.bot.com.tw/xrt?Lang=zh-TW
 * https://codepen.io/nekorice/pen/qBooOPG?editors=1010
 */
console.clear();
const { useState, useEffect } = React;
function App() {
  const rates = {
    JPN: 0.227,
    USD: 30.275,
    AUD: 21.14,
    KRW: 0.02504,
    IDR: 0.00238,
  };
  const { JPN, USD, AUD, KRW, IDR } = rates;

  // 設定台幣
  const [TWD, setTWD] = useState();

  // 台幣 -> 外幣兌換
  const [foreignMoney, setForeignMoney] = useState('');
  const count = () => setForeignMoney(TWD); // 輸出至樣版處理 (台幣值 / 兌換國別值 = 匯率)

  return (
    <>
      <span>請輸入您要換的台幣 </span>
      <input
        type="text"
        placeholder="台幣"
        min="0"
        defaultValue=""
        onChange={(e) => setTWD(Number(e.target.value))}
      />
      <input type="button" value="計算" onClick={count} />
      <p>{TWD ? TWD + ' 元台幣' : ''}可以換算</p>
      <ul>
        <li>
          日幣：{foreignMoney ? (foreignMoney / JPN).toFixed(3) + ' JPN' : ''}
        </li>
        <li>
          美金：{foreignMoney ? (foreignMoney / USD).toFixed(3) + ' USD' : ''}
        </li>
        <li>
          澳幣：{foreignMoney ? (foreignMoney / AUD).toFixed(3) + ' AUD' : ''}
        </li>
        <li>
          韓幣：{foreignMoney ? (foreignMoney / KRW).toFixed(3) + ' KRW' : ''}
        </li>
        <li>
          印尼幣：{foreignMoney ? (foreignMoney / IDR).toFixed(3) + ' IDR' : ''}
        </li>
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
