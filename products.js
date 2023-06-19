window.onload = function () {
    // 商品の表示領域を取得
    var productsDiv = document.getElementById('products');

    // localStorageからチェックボックスの状態を取得
    var price1Checked = localStorage.getItem('price1') === 'true';
    var price2Checked = localStorage.getItem('price2') === 'true';
    var price3Checked = localStorage.getItem('price3') === 'true';
    var price4Checked = localStorage.getItem('price4') === 'true';

    var scene1Checked = localStorage.getItem('scene1') === 'true';
    var scene2Checked = localStorage.getItem('scene2') === 'true';
    var scene3Checked = localStorage.getItem('scene3') === 'true';
    var scene4Checked = localStorage.getItem('scene4') === 'true';

    var feature1Checked = localStorage.getItem('feature1') === 'true';
    var feature2Checked = localStorage.getItem('feature2') === 'true';
    var feature3Checked = localStorage.getItem('feature3') === 'true';




    // チェックボックスの状態に基づいて表示する商品を決定

    if (price1Checked) {
        var productA = document.getElementById('productA');
        productA.style.display = "block";  // 商品Aを表示に設定

        var productA2 = document.getElementById('productA2');
        productA2.style.display = "block";

        productsDiv.appendChild(productA);  // 商品Aを表示
        productsDiv.appendChild(productA2);
    }

    if (price2Checked) {
        var productB = document.getElementById('productB');
        productB.style.display = "block";  // 商品Bを表示に設定

        var productB_2 = document.getElementById('productB_2');
        productB_2.style.display = "block";  // 商品B-2を表示に設定

        // 仮定：productsDivは既存の親要素を指す
        productsDiv.appendChild(productB);  // 商品Bを表示
        productsDiv.appendChild(productB_2); // 商品B-2を表示
    }

    if (price3Checked) {
        var productC = document.getElementById('productC');
        productC.style.display = "block";
        productsDiv.appendChild(productC);
    }

    if (price4Checked) {
        var productD = document.getElementById('productD');
        productD.style.display = "block";
        productsDiv.appendChild(productD);
    }

    if (scene1Checked) {
        var productE = document.getElementById('productE');
        productE.style.display = "block";
        productsDiv.appendChild(productE);
    }

    if (scene2Checked) {
        var productF = document.getElementById('productF');
        productF.style.display = "block";
        productsDiv.appendChild(productF);
    }

    if (scene3Checked) {
        var productG = document.getElementById('productG');
        productG.style.display = "block";
        productsDiv.appendChild(productG);
    }

    if (scene4Checked) {
        var productH = document.getElementById('productH');
        productH.style.display = "block";
        productsDiv.appendChild(productH);
    }

    if (feature1Checked) {
        var productI = document.getElementById('productI');
        productI.style.display = "block";
        productsDiv.appendChild(productI);
    }

    if (feature2Checked) {
        var productJ = document.getElementById('productJ');
        productJ.style.display = "block";
        productsDiv.appendChild(productJ);
    }

    if (feature3Checked) {
        var productK = document.getElementById('productK');
        productK.style.display = "block";
        productsDiv.appendChild(productK);
    }


    /// price1Checkedなどには、上の式でtrueかfalseが入っている。
    /// trueかfalseを返すものをbooleanという。
    /// booleanの先頭に！をつけると、それと反対を返す。つまり(!false)=trueである。
    /// A&&B&&CはAかつBかつCの意味。

    ///つまり、これは、すべてにcheckが入っていない、という条件を書いている。
    if (!price1Checked && 
        !price2Checked && 
        !price3Checked && 
        !price4Checked && 
        !scene1Checked && 
        !scene2Checked && 
        !scene3Checked && 
        !scene4Checked && 
        !feature1Checked && 
        !feature2Checked && 
        !feature3Checked) {
            ///さらに、その中で、各productを表示させるコードを書いている。
            var productA = document.getElementById('productA');
            productA.style.display = "block";
            productsDiv.appendChild(productA);
            
            ///ただし、この書き方はとても冗長なので、本当はfor文などを用いて、
            ///もっと短く書くべきである。
            ///短く書いた例を、ExampleForStatement-product.jsに記入している。
            var productB = document.getElementById('productB');
            productB.style.display = "block";
            productsDiv.appendChild(productB);
            
            var productB_2 = document.getElementById('productB_2');
            productB_2.style.display = "block";
            productsDiv.appendChild(productB_2);
            
            var productC = document.getElementById('productC');
            productC.style.display = "block";
            productsDiv.appendChild(productC);
            
            var productD = document.getElementById('productD');
            productD.style.display = "block";
            productsDiv.appendChild(productD);
            
            var productE = document.getElementById('productE');
            productE.style.display = "block";
            productsDiv.appendChild(productE);
            
            var productF = document.getElementById('productF');
            productF.style.display = "block";
            productsDiv.appendChild(productF);
            
            var productG = document.getElementById('productG');
            productG.style.display = "block";
            productsDiv.appendChild(productG);
            
            var productH = document.getElementById('productH');
            productH.style.display = "block";
            productsDiv.appendChild(productH);
            
            var productI = document.getElementById('productI');
            productI.style.display = "block";
            productsDiv.appendChild(productI);
            
            var productJ = document.getElementById('productJ');
            productJ.style.display = "block";
            productsDiv.appendChild(productJ);
            
            var productK = document.getElementById('productK');
            productK.style.display = "block";
            productsDiv.appendChild(productK);
    }
}