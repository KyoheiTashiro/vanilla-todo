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

  // 完了ボタンの押下時
  completeButton.addEventListener("click", () => {
    // 削除ボタンの削除
    const moveTarget =  completeButton.closest("li");;
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    // 戻すボタンの生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻る";

    // 戻すボタンの押下時
    returnButton.addEventListener("click", () => {      
      const inputTextForReturn = returnButton.previousElementSibling.innerText;      
      
      createIncompleteTodo(inputTextForReturn);
      returnButton.closest("li").remove();
    })

    // TODOを完了から未完了エリアに戻す
    moveTarget.firstElementChild.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(createDeleteButton());
  li.appendChild(div);

  // TODOを未完了エリアに追加
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
