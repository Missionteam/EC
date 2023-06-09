window.onload = function() {
    // 商品の表示領域を取得
    var productsDiv = document.getElementById('products');
    
    // localStorageからチェックボックスの状態を取得
    var price1Checked = localStorage.getItem('price1') === 'true';
    var price2Checked = localStorage.getItem('price2') === 'true';
    
    // チェックボックスの状態に基づいて表示する商品を決定
    if (price1Checked) {
        var productA = document.getElementById('productA');
        productA.style.display = "block";  // 商品Aを表示に設定
        productsDiv.appendChild += productA;  // 商品Aを表示
    }
    if (price2Checked) {
        var productB = document.getElementById('productB');
        productB.style.display = "block";  // 商品Bを表示に設定
        productsDiv.appendChild += productB;  // 商品Bを表示
    }
}