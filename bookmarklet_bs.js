
try{(function(){(async $=>{
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
  let bs_winscp_bookmarklet = $(`
  <script src="//cdn.jsdelivr.net/gh/hamako0/bookmarklet_practice@main/brython/brython.js"></script>
  <script src="//cdn.jsdelivr.net/gh/hamako0/bookmarklet_practice@main/brython/brython_stdlib.js"></script>
  <script type="text/python" src="//cdn.jsdelivr.net/gh/hamako0/bookmarklet_practice@main/brython_test/bmi.py"></script>

    <p style="font-size: 30px;">bs_winscp</p>
    <form onload="brython()">
      <p>GMO ユーザー:<input id='gmo_user'></p>
      <p>GMO Password:<input id='gmo_password'></p>
      <p>ドメイン:<input id='gmo_domain'></p>
      <p>身長(メートル) <input type="text" id="height" /></p>
      <p>
      体重(キログラム)
      <input type="text" id="weight" />
      <br /><button id="execute">計算だ!</button>
    </p>
    <div id="result"></div>
    </form>
    <button id='bs_winscp_start'>スタート</button>
    ${style}
  `);

  $(document).delegate('#bs_winscp_start', 'click', (e)=>{
    let id = e.target.id;
    $('#modal_wrap_bs_winscp').fadeOut(function(){ $(this).remove() });
    (function(){
      var o = {script: id};
      var d = document;
      var s = d.createElement('script');
      s.src = `https://jade-puffpuff-5ce090.netlify.app/${o.script}.js`;
      d.body.appendChild(s);
      d.body.removeChild(s);
    })();
  });

  modal( bs_winscp_bookmarklet, width);


  async function modal( elements, width){
    let elem = $('<div>', {id:'bs_winscp_modal_wrap'}).css({
      'z-index': '100', 'position': 'fixed', 'top': '0px', 'left': '0px', 'width': '100%', 'height': '100%', 'background-color': 'hsla(0, 0%, 60%, 0.7)'
    }).append(
      $('<div>', {id:'bs_winscp_modal_outer'}).css({
        'box-sizing': 'border-box', 'padding': '20px', 'margin': 'auto', 'background': '#ffffff', 'position': 'absolute', 'top': '0', 'bottom': '0', 'left': '0', 'right': '0', 'height': '80%'
      }).append(
        $('<div>', {id:'bs_winscp_modal_inner'}).append(
          $('<p>', {id:'bs_winscp_modal_headline'}),
          $('<div>', {id:'bs_winscp_modal_body'}) ).css({
            'text-align': 'center', 'height': '700px', 'overflow-y': 'scroll', 'overflow-x': 'hidden'
          })
        )
      ).hide();
    $('body').append(
      elem.click(function(e){
        if( e.target.id === 'bs_winscp_modal_wrap' ){
          $('#bs_winscp_modal_wrap').fadeOut('fast');
          $('#bs_winscp_modal_body').empty();
        }
      })
    );
    $('#bs_winscp_modal_body').append( elements );
    $('#bs_winscp_modal_wrap').fadeIn('fast');
    $('#bs_winscp_modal_outer').width( width + 57 );
  };

})(jQuery);})();}catch(e){alert('ブックマークレット・エラー\n' + e);}
