try {
  (function () {
    (async ($) => {
      let width = 800;
      let style = `<style>
    #script_list {
      letter-spacing: -.40em;
    }
    #script_list li {
      letter-spacing: normal;
      display: inline-block;
      vertical-align: top;
      width: calc(100% / 3);
      text-align: center;
      margin-bottom: 2%;
    }
    #script_list li button {
      -webkit-appearance: none;
      background: #fff;
      border: 1px solid #ccc;
      display: block;
      width: 90%;
      padding: 5% 0;
      font-size: 18px;
      border-radius: 10px;
      outline: 0;
      margin: 0 5% 0;
      transition: .3s;
    }
    #script_list li button:hover {
      background: #4c4c4c;
      border: 1px solid #4c4c4c;
      color: #fff;
      cursor: pointer;
    }
  </style>`;
      let bs_wp_bookmarklet = $(`
    <p style="font-size: 30px;">bs_wp</p>
    <form>
      <p>GMO ユーザー:<input id='gmo_user'></p>
      <p>GMO Password:<input id='gmo_password'></p>
      <p>ドメイン:<input id='gmo_domain'></p>
    </form>
    <button id='bs_wp_start'>スタート</button>
    ${style}
  `);

      $(document).delegate("#bs_wp_start", "click", (e) => {
        gmo_user = document.querySelector("#gmo_user");
        gmo_password = document.querySelector("#gmo_password");
        gmo_domain = document.querySelector("#gmo_domain");
        let id = e.target.id;
        $("#bs_wp_modal_wrap").fadeOut(function () {
          $(this).remove();
        });
        (function () {
          var o = { script: id };
          var d = document;
          var s = d.createElement("script");
          s.src = `https://jade-puffpuff-5ce090.netlify.app/${o.script}.js`;
          d.body.appendChild(s);
          d.body.removeChild(s);
        })();
      });

      modal(bs_wp_bookmarklet, width);

      async function modal(elements, width) {
        let elem = $("<div>", { id: "bs_wp_modal_wrap" })
          .css({
            "z-index": "100",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            "background-color": "hsla(0, 0%, 60%, 0.7)",
          })
          .append(
            $("<div>", { id: "bs_wp_modal_outer" })
              .css({
                "box-sizing": "border-box",
                padding: "20px",
                margin: "auto",
                background: "#ffffff",
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                height: "80%",
              })
              .append(
                $("<div>", { id: "bs_wp_modal_inner" })
                  .append(
                    $("<p>", { id: "bs_wp_modal_headline" }),
                    $("<div>", { id: "bs_wp_modal_body" })
                  )
                  .css({
                    "text-align": "center",
                    height: "700px",
                    "overflow-y": "scroll",
                    "overflow-x": "hidden",
                  })
              )
          )
          .hide();

        $("body").on("load", brython());
        $("body").append(
          elem.click(function (e) {
            if (e.target.id === "bs_wp_modal_wrap") {
              $("#bs_wp_modal_wrap").fadeOut("fast");
              $("#bs_wp_modal_body").empty();
            }
          })
        );
        $("#bs_wp_modal_body").append(elements);
        $("#bs_wp_modal_wrap").fadeIn("fast");
        $("#bs_wp_modal_outer").width(width + 57);
      }
    })(jQuery);
  })();
} catch (e) {
  alert("ブックマークレット・エラー\n" + e);
}
