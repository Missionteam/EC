  //絞り込み一覧
document.getElementById('searchBox').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

// 商品データの配列
let products = [
  { name: '商品1', price: 'low', url: 'http://example.com/product1' },
  { name: '商品2', price: 'high', url: 'http://example.com/product2' },
  { name: '商品3', price: 'medium', url: 'https://www.amazon.co.jp/DALLOYAU-%E3%83%80%E3%83%AD%E3%83%AF%E3%82%A4%E3%83%A8-%E3%81%82%E3%81%BE%E3%81%8A%E3%81%86%E3%81%AE%E3%83%9E%E3%82%AB%E3%83%AD%E3%83%B3-%E3%83%90%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%B3-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%87%E3%83%BC/dp/B08Y2LKBCN/ref=pd_vtp_h_pd_vtp_h_sccl_4/356-4393874-7526441?pd_rd_w=Vo3lP&content-id=amzn1.sym.cbe5b1af-8663-4a63-8153-1f9ef8eb65e4&pf_rd_p=cbe5b1af-8663-4a63-8153-1f9ef8eb65e4&pf_rd_r=RN9FQK5S682N1WB8TCB4&pd_rd_wg=xfScD&pd_rd_r=beefe519-254e-441e-bb08-a2d5efc67987&pd_rd_i=B08Y2LKBCN&psc=1' },
  // ...その他の商品
];

document.getElementById('searchButton').addEventListener('click', function() {
  // チェックボックスから選択された価格を取得
  let searchPrices = [];
  let checkboxes = document.querySelectorAll('input[name="price"]:checked');
  checkboxes.forEach(function(checkbox) {
    searchPrices.push(checkbox.value);
  });

  // 選択された価格が商品の価格と一致するかをチェックする関数
  function isPriceIncluded(product) {
    return searchPrices.includes(product.price);
  }

  // 検索結果の配列を生成
  let searchResults = products.filter(isPriceIncluded);

  // 検索結果を表示（ここでは例として最初の1つだけ表示します）
  if (searchResults.length > 0) {
    window.location.href = searchResults[0].url;
  } else {
    alert('該当する商品がありません。');
  }
});