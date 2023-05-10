gmo_user = document.querySelector("#gmo_user");
gmo_password = document.querySelector("#gmo_password");
gmo_domain = document.querySelector("#gmo_domain");
bs_wp_start = document.querySelector("#bs_wp_start");

window.open("https://hamako0.github.io/login_test/");

user = document.querySelector("#user");
user.value = gmo_user;

password = document.querySelector("#password");
password.value = gmo_password;

btn = document.querySelector("#btn");
btn.click();

function customer_login() {
  gmologin_domain = document.querySelector("#gmologin_domain");
  gmologin_domain.value = gmo_domain;

  gmologin_btn = document.querySelector("#gmologin_btn");
  gmologin_btn.click();
}

setTimeout(customer_login(), 1000);

const number = document.querySelector("#number");
const customer_password = document.querySelector("#customer_password");

function copyToClipboard() {
  if (!navigator.clipboard) {
    alert("このブラウザは対応していません");
    return;
  }
  
  navigator.clipboard.writeText(customer_password.textContent);
  navigator.clipboard.writeText(number.textContent).then(
    () => {
      alert("文章をコピーしました。");
    },
    () => {
      alert("コピーに失敗しました。");
    }
  );
}
copyToClipboard();
