//絞り込み一覧
document.getElementById('searchBox').addEventListener('click', function () {
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
  var price3Checked = document.getElementById('price3').checked;
  var price4Checked = document.getElementById('price4').checked;

  var scene1Checked = document.getElementById('scene1').checked;
  var scene2Checked = document.getElementById('scene2').checked;
  var scene3Checked = document.getElementById('scene3').checked;
  var scene4Checked = document.getElementById('scene4').checked;

  var feature1Checked = document.getElementById('feature1').checked;
  var feature2Checked = document.getElementById('feature2').checked;
  var feature3Checked = document.getElementById('feature3').checked;

  // チェックボックスの状態をlocalStorageに保存
  localStorage.setItem('price1', price1Checked);
  localStorage.setItem('price2', price2Checked);
  localStorage.setItem('price3', price3Checked);
  localStorage.setItem('price4', price4Checked);

  localStorage.setItem('scene1', scene1Checked);
  localStorage.setItem('scene2', scene2Checked);
  localStorage.setItem('scene3', scene3Checked);
  localStorage.setItem('scene4', scene4Checked);

  localStorage.setItem('feature1', feature1Checked);
  localStorage.setItem('feature2', feature2Checked);
  localStorage.setItem('feature3', feature3Checked);

  // 検索結果のページに移動
  window.location.href = 'products.html';
}