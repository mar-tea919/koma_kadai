window.onload = function () {
  document.querySelector("#credit").onchange = function () {
    let graduation_req = 132
    let acquisition = Number(document.getElementById("credit").value)
    let remaining;
    if (acquisition > 132) {
      remaining = 0;
    } else {
      remaining = graduation_req - acquisition;
    }
    document.getElementById("husoku").innerHTML = remaining
  };

  console.log(document.getElementById("header").innerText)

  document.getElementById("intro").innerHTML = new Date()

  const introduction = document.querySelector("#intro")

  const keyframes = {
    opacity: [0, 1],
    translate: ["0 50px", 0],
  };
  const options = {
    duration: 2000,
    easing: "ease",
  };
  introduction.animate(keyframes, options);


  document.querySelector("#report").onchange=setGrade
  document.querySelector("#exam").onchange=setGrade

  function setGrade(){
      let r_score=document.getElementById("report").value-0
      let e_score=document.getElementById("exam").value-0
      let total=r_score+e_score

      // 合格判定
      let isPassed="合格"
      let grade
  
      if(total>=90){
        grade="S"
      }else if(total>=80){
        grade="A"
      }else if(total>=70){
        grade="B"
      }else if(total>=60){
        grade="C"
      }else{
        grade="F"
        isPassed="不合格"
      }
  
      document.getElementById("total").innerHTML=total
      document.getElementById("grade").innerHTML=`${grade} (${isPassed})`
  }

};

const calcTaxIncludedPrice=function(price, tax){
  let total=Math.floor(price+price*(tax/100))
  return total
}

let price_without_tax=1980, tax_included=calcTaxIncludedPrice(price_without_tax, 10)
console.log("税抜価格: "+price_without_tax)
console.log("税込価格: "+tax_included)

price_without_tax=555
tax_included=calcTaxIncludedPrice(price_without_tax, 10)
console.log("税抜価格: "+price_without_tax)
console.log("税込価格: "+tax_included)

price_without_tax=2500
console.log("税抜価格: "+price_without_tax)
console.log("税込価格: "+calcTaxIncludedPrice(price_without_tax, 10))