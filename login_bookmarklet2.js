
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
  let bookmarklet = $(`
    <p style="font-size: 30px;">practice2</p>
    <ul id="script_list">
      <li><button id="bookmarklet_hello">hello</button></li>
      <li><button id="bookmarklet_bs">winscp BS</button></li>
      <li><button id="bs_wp">BS 物件番号</button></li>
      <li><button id="bookmarklet_customer">顧客付帯</button></li>
      <li><button id="rook_ftp">ROOK FTP情報</button></li>
      <li><button id="rook_wp">ROOK WP</button></li>
      <li><button id="bs_ftp">BS FTP情報</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
    </ul>
    ${style}
  `);

  $(document).delegate('#script_list button', 'click', (e)=>{
    let id = e.target.id;
    $('#modal_wrap').fadeOut(function(){ $(this).remove() });
    if(id === 'bookmarklet_hello') {
      return alert('hello');
    }
    (function(){
      var o = {script: id};
      var d = document;
      var s = d.createElement('script');
      s.src = `https://jade-puffpuff-5ce090.netlify.app/${o.script}.js`;
      d.body.appendChild(s);
      d.body.removeChild(s);
    })();
  });

  modal( bookmarklet, width);


  async function modal( elements, width){
    let elem = $('<div>', {id:'modal_wrap'}).css({
      'z-index': '100', 'position': 'fixed', 'top': '0px', 'left': '0px', 'width': '100%', 'height': '100%', 'background-color': 'hsla(0, 0%, 60%, 0.7)'
    }).append(
      $('<div>', {id:'modal_outer'}).css({
        'box-sizing': 'border-box', 'padding': '20px', 'margin': 'auto', 'background': '#ffffff', 'position': 'absolute', 'top': '0', 'bottom': '0', 'left': '0', 'right': '0', 'height': '80%'
      }).append(
        $('<div>', {id:'modal_inner'}).append(
          $('<p>', {id:'modal_headline'}),
          $('<div>', {id:'modal_body'}) ).css({
            'text-align': 'center', 'height': '700px', 'overflow-y': 'scroll', 'overflow-x': 'hidden'
          })
        )
      ).hide();
    $('body').append(
      elem.click(function(e){
        if( e.target.id === 'modal_wrap' ){
          $('#modal_wrap').fadeOut('fast');
          $('#modal_body').empty();
        }
      })
    );
    $('#modal_body').append( elements );
    $('#modal_wrap').fadeIn('fast');
    $('#modal_outer').width( width + 57 );
  };

  var d = document;
  var s2 = d.createElement('script');
  s2.src = "https://jade-puffpuff-5ce090.netlify.app/brython/brython.js";
  d.head.appendChild(s2);
  var s3 = d.createElement('script');
  s3.src = "https://jade-puffpuff-5ce090.netlify.app/brython/brython_stdlib.js";
  d.head.appendChild(s3);

  var s4 = d.createElement('script');
  s4.src = "https://jade-puffpuff-5ce090.netlify.app/bmi.py";
  s4.type = "text/python";
  d.head.appendChild(s4);

})(jQuery);})();}catch(e){alert('ブックマークレット・エラー\n' + e);}