(()=>{

    const $Accor = document.querySelector("#js-accordion");
    const $trigger = $Accor.getElementsByTagName("a");

    //トリガー全てにクリック機能を追加
    let index = 0;
    let AccorLen = $trigger.length;
    while (index < AccorLen) {
        $trigger[index].addEventListener("click", (e)=> clickHandeler(e))        
        index++;
    };

    // クリック後の処理。アコーディオンを開く
    const clickHandeler = (e) =>{
        e.preventDefault();      
        const $contents = e.target.nextElementSibling;
        if($contents.style.display === "block"){
            $contents.style.display = "none";
        } else {
            $contents.style.display = "block"
        }
    }
})();