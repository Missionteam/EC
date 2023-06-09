  //絞り込み一覧
document.getElementById('searchBox').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  function search() {
    // チェックボックスの状態を取得
    var price1Checked = document.getElementById('price1').checked;
    var price2Checked = document.getElementById('price2').checked;
    
    // チェックボックスの状態をlocalStorageに保存
    localStorage.setItem('price1', price1Checked);
    localStorage.setItem('price2', price2Checked);
    
    // 検索結果のページに移動
    window.location.href = 'products.html';
}