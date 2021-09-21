// import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了しました");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
