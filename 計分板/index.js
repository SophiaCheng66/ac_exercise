let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]
// write your code here
const dataPanel = document.querySelector('#data-panel')
let icon = `
  <i class ="fa fa-plus-circle up"></i>
  <i class ="fa fa-minus-circle down"></i>`
function displayPlayerList(data) {
  let htmlContent = ''
  players.forEach(data1 => {
    htmlContent += `
      <tr>
        <td>${data1.name}</td>
        <td>
          <span>${data1.pts}</span>
          ${icon}  
        </td>
        <td>
          <span>${data1.reb}</span>
          ${icon}
         </td>
        <td>
          <span> ${data1.ast}</span>
          ${icon}
        </td>
        <td>
            <span>${data1.stl} </span>
            ${icon}
        </td>
        <td>
           <span> ${data1.blk} </span>
           ${icon}
        </td>
       </tr>
`
  })

  dataPanel.innerHTML = htmlContent
}
displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {
  // console.log(event) 用此檢查是否有將target透過監聽綁上dataPanel
  if (event.target.matches('.fa-plus-circle') || event.target.matches('.fa-minus-circle')) {
    // console.log(event) 用此檢查只有加或減的時候才會觸發
    const scoreBox = event.target.parentElement.children[0]
    // console.log(scordBox)
    let score = Number(scoreBox.innerText)
    if (event.target.matches('.fa-plus-circle')) {
      score += 1
    } else {
      score -= 1
      if (score < 0) score = 0
      //如果score<0就讓score=0，就不會減到變成負數
    }
    console.log(score)
    //把計算結果放回scoreBox，用 scoreBox.innerText= score顯示到網頁上 
    scoreBox.innerText = score

  }
})