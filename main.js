const onClickAdd = () => {
  // 入力値の取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
};

// 未完了リストへの追加
const createIncompleteTodo = (inputText) => {

  const {li, div, p} = createTags(inputText);

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
  const deleteButton = createDeleteButton();

  // 子要素の設定(追加)
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 入力値の要素の追加
  document.getElementById("incomplete-list").appendChild(li);
};

// TODOの要素の生成
const createTags = (inputText) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";
  
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  return {li, div, p};
};

// 削除ボタンの生成
const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    
    deleteButton.addEventListener("click", () => {
      // 削除したい要素を取得
      const deleteTarget = deleteButton.closest("li");
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
    
    return deleteButton;
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
