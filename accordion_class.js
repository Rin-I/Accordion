(()=>{

    class Accordion {

        //初期化
        constructor(obj){
            const $Accor = document.querySelector(obj.hookname);
            const $trigger = $Accor.getElementsByTagName(obj.tagName);
        
            //トリガー全てにクリック機能を追加
            let index = 0;
            let AccorLen = $trigger.length;
            while (index < AccorLen) {
                $trigger[index].addEventListener("click", (e)=> this.clickHandeler(e))        
                index++;
            };
        };

            // クリック後の処理。アコーディオンを開く
            clickHandeler = (e) =>{
                e.preventDefault();      
                const $contents = e.target.nextElementSibling;
                if($contents.style.display === "block"){
                    $contents.style.display = "none";
                } else {
                    $contents.style.display = "block"
                };
            };
    }

    const NewAccor = new Accordion({
        hookname: "#js-faq",
        tagName: "p"
    });

})();