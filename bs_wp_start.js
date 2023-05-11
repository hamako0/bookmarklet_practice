login_url1 = 'https://hamako0.github.io/login_test/';

window.open(login_url1);

user = login_url1.document.querySelector("#user");
user.value = gmo_user.value;




password = login_url1.document.querySelector("#password");
password.value = gmo_password.value;

btn = login_url1.document.querySelector("#btn");
btn.click();

login_url2 = 'https://hamako0.github.io/login_test/userpassword.html'
function customer_login() {
  gmologin_domain = login_url2.document.querySelector("#gmologin_domain");
  gmologin_domain.value = gmo_domain.value;

  gmologin_btn = login_url2.document.querySelector("#gmologin_btn");
  gmologin_btn.click();
}

setTimeout(customer_login(), 1000);

login_url3 = 'https://hamako0.github.io/login_test/gmopassword.html';

const number = login_url3.document.querySelector("#number");
const customer_password = login_url3.document.querySelector("#customer_password");

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
