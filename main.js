// import './style.css';

const onClickAdd = () => {

  // 入力値の取得
  const inputText = document.getElementById("add-text").value;
  // フォーム初期化
  document.getElementById("add-text").value = "";

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
    alert("かんりょう")
  }
  )

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("さくじょ")
  }
  )

  // 子要素の設定(追加)
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 入力値の要素の追加
  document.getElementById("incomplete-list").appendChild(li);

  
  


  // alert(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
