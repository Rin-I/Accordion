(()=>{

    console.log("うんこ");
    const $Accor = document.querySelector("#js-accordion");
    const $trigger = $Accor.getElementsByTagName("a");

    let index = 0;
    let AccorLen = $trigger.length;
    console.log($trigger)
    while (index <= AccorLen) {
        $trigger[index].addEventListener("click", (e)=> clickHandeler(e))        
        index++;
    };

    // $trigger[0].addEventListener("click", (e)=> clickHandeler(e))
    // $trigger[1].addEventListener("click", (e)=> clickHandeler(e))

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