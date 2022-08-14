/** 參考資料：
 * https://tw.valutafx.com/TWD-JPY.htm
 */

console.clear();
const { useState, useEffect } = React;
function App() {
  const [newCurrencyName, setNewCurrencyName] = useState('');
  const [newCurrencyRate, setNewCurrencyRate] = useState("");
  const fixedCurrency = [
    { name: '日幣', rate: 4.3764 },
    { name: '美金', rate: 0.0331 },
    { name: '澳幣', rate: 0.046 },
    { name: '韓幣', rate: 39.7298 },
    { name: '印尼幣', rate: 411.5226 },
  ];
  const [currencyList, setCurrencyList] = useState(fixedCurrency);
  const [totalMoney, setTotalMoney] = useState(5000);
  const [changTWD, setChangTWD] = useState(100);
  const [changMoney, setChangMoney] = useState(Number);
  const [logList, setLogList] = useState([]);

  const inputNewCurrency = (e) => {
    if (e.target.value == '') {
      alert('幣種名稱未輸入資料');
    } else {
      setNewCurrencyName(e.target.value);
    }
  };
  const inputNewCurrencyRate = (e) => {
    if (isNaN(e.target.value)) {
      // isNaN() true 非數值
      alert('請正確輸入數值');
      e.target.value = '';
    } else if (e.target.value == '00') {
      // 判斷輸入的數值是否是到小數點第二位
      alert('輸入數值與大於 0');
      e.target.value = '';
    } else {
      setNewCurrencyRate(e.target.value);
    }
  };
  const addCurrencyList = () => {
    if (newCurrencyName && newCurrencyRate) {
      setCurrencyList([...currencyList, {
        name: newCurrencyName,
        rate: newCurrencyRate,
      }]);
      setNewCurrencyName('');
      setNewCurrencyRate('');
    } else {
      alert('請完整輸入新增幣種內容');
    }
  };
  const inputChangTWD = (e) => {
    if (isNaN(e.target.value)) {
      alert('請輸入請正確輸入數值');
      e.target.value = '';
    } else if (totalMoney < e.target.value) {
      alert('錢包錢不夠無法換幣');
      e.target.value = '';
      setChangTWD('');
    } else {
      setChangTWD(Number(e.target.value));
    }
  };
  const calcChangMoney = (e) => {
    if (changTWD) {
      setChangMoney(Number(changTWD));
    } else {
      alert('請輸入要換的台幣數值');
    }
  };

  return (
    <>
      <h3>新增幣種</h3>
      <div className="d-inline-block">
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="幣種名稱"
            className="form-control"
            value={newCurrencyName}
            onChange={inputNewCurrency}
          />
          <input
            className="form-control"
            type="text"
            placeholder="匯率"
            value={newCurrencyRate}
            onChange={inputNewCurrencyRate}
          />
          <input
            className="btn btn-outline-secondary"
            type="button"
            value="新增幣種"
            onClick={addCurrencyList}
          />
        </div>
      </div>

      <hr className="my-4" />
      <h3>您錢包還有 {totalMoney} 元</h3>
      <div className="d-inline-block">
        <div className="input-group mb-3">
          <span className="input-group-text">請輸入您要換的台幣</span>
          <input
            type="text" placeholder="台幣"
            className="form-control"
            value={changTWD}
            onChange={inputChangTWD}
          />
          <input type="button" value="計算"
            className="btn btn-outline-secondary"
            onClick={calcChangMoney}
          />
        </div>
      </div>
      <p>可以換算</p>
      <ul className="list-unstyled row">
        { 
          currencyList.map((currency, index) => {
            return (
              <li className="col-6 col-lg-4 mb-2" key={index}>
                {currency.name}：
                {changMoney ? (currency.rate * changMoney).toFixed(3) : ''}{' '}
                <input
                  type="button"
                  value="兌換"
                  className={
                    (!changMoney ? 'd-none' : 'btn btn-sm btn-outline-secondary')
                  }
                  onClick={() => {
                    if (changMoney) {
                      setTotalMoney(totalMoney - changTWD);
                      const newLog = {
                        changTWD,
                        name: currency.name,
                        rate: (currency.rate * changMoney).toFixed(3),
                      };
                      // console.log('newLog', newLog);
                      setLogList([...logList, newLog]);
                      setChangTWD(0);
                      setChangMoney(0);
                    } else {
                      alert('沒有設定要換的台幣或未完成計算');
                    }
                  }}
                />
              </li>
            );
          })
        }
      </ul>

      <hr className="my-4" />
      <h3>您的兌換記錄</h3>
      <ul className="list-group">
        {logList.map((logItem, index) => {
          return (
            <li key={index} className="list-group-item">
              您用 {logItem.changTWD} 元台幣，兌換了 {logItem.rate}{' '}
              {logItem.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
