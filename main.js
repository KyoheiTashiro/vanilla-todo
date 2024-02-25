// import './style.css';

const onClickAdd = () => {

  // 入力値の取得
  const inputText = document.getElementById("add-text").value;
  // フォーム初期化
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);

};


const createIncompleteTodo = (inputText) => {

  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // 入力値をpで生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
   
    const moveTarget =  completeButton.closest("li");;
    // 次の(下の)要素の取得して、削除
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンの生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";

    returnButton.addEventListener("click", () => {
      
      
      const inputTextForReturn = returnButton.previousElementSibling.innerText;      
      createIncompleteTodo(inputTextForReturn);

      returnButton.closest("li").remove();

    })
    

    // li配下を取得(div)
    moveTarget.firstElementChild.appendChild(returnButton);
    // 完了えりあに移動
    document.getElementById("complete-list").appendChild(moveTarget);
  }
  )


  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタン押下時の動作
  deleteButton.addEventListener("click", () => {

    // 対象のdomの親要素で、指定された一番近いタグを取得
    const deleteTarget = deleteButton.closest("li");
    // 要素を削除
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });


  // 子要素の設定(追加)
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);




  // 入力値の要素の追加
  document.getElementById("incomplete-list").appendChild(li);


};

document.getElementById("add-button").addEventListener("click", onClickAdd);
