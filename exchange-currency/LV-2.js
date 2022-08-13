/** 參考資料：
  * https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react
  * https://codepen.io/lala-lee-jobs/pen/VwXXerb?editors=0011
 */

console.clear();
const { useState, useEffect } = React;
function App() {
  const [rates, setRates] = useState([
    { abbrevia: 'JPN', rate: 0.227, title: '日幣' },
    { abbrevia: 'USD', rate: 30.275, title: '美金' },
    { abbrevia: 'AUD', rate: 21.14, title: '澳幣' },
    { abbrevia: 'KRW', rate: 0.02504, title: '韓幣' },
    { abbrevia: 'IDR', rate: 0.00238, title: '印尼幣' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newRate, setNewRate] = useState(0);
  const addNewRate = () => {
    console.log('newTitle', newTitle);
    console.log('newRate', newRate);
    return (
      setRates([...rates, { title: newTitle, rate: newRate }]),
      setNewTitle(''),
      setNewRate(0)
    );
  };

  // 設定台幣
  const [TWD, setTWD] = useState(100);
  // 台幣 -> 外幣兌換
  const [foreignMoney, setForeignMoney] = useState('');
  const count = () => setForeignMoney(TWD); // 輸出至樣版處理 (台幣值 / 兌換國別值 = 匯率)

  const ratesList = rates.map((value, index) => {
    // console.log('rates.map() value, index', value['rate'], index);
    return (
      <li key={index}>
        {value['title']}：
        {foreignMoney
          ? (foreignMoney / Number(value['rate'])).toFixed(3) +
            ' ' +
            (value['abbrevia'] != undefined ? value['abbrevia'] : '新幣別')
          : ''}
      </li>
    );
  });

  // useEffect(() => {
  //   console.log('Number(newRate) (畫面值變後)', typeof newRate)
  //   // setNewRate(Number(newRate))
  //   // setNewRate(newRate)
  //   return (() => {
  //     console.log('Number(newRate) => return (畫面值變前)', Number(newRate))
  //     // setNewRate(Number(newRate))
  //     return Number(newRate)
  //   })
  // }, [newRate])

  return (
    <>
      <h3>新增幣種</h3>
      <input
        type="text"
        placeholder="幣種名稱"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="匯率"
        value={newRate}
        onChange={(e) => {
          setNewRate(e.target.value);
          // // isNaN() -> String or NaN: true / Number: false
          if(isNaN(Number(e.target.value))) {
            alert(e.target.value + ' 不為 小數的正實數');
            setNewRate(0);
          } else {
            return setNewRate(e.target.value);
          }
        }}
      />
      <input type="button" value="新增幣種" onClick={addNewRate} />

      <hr />
      <span>請輸入您要換的台幣 </span>
      <input
        type="text"
        placeholder="台幣"
        min="0"
        defaultValue={TWD}
        onChange={(e) => setTWD(Number(e.target.value))}
      />
      <input type="button" value="計算" onClick={count} />
      <p>{TWD ? TWD + ' 元台幣' : ''}可以換算</p>
      <ul>{ratesList}</ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
