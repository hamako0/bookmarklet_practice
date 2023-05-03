
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
    <p style="font-size: 30px;">practice</p>
    <ul id="script_list">
      <li><button id="bookmarklet_hello">hello</button></li>
      <li><button id="bookmarklet_bs>BS</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
      <li><button>hoge</button></li>
    </ul>
    ${style}
  `);

  $(document).delegate('#script_list button', 'click', (e)=>{
    let id = e.target.id;
    $('#modal_wrap').fadeOut(function(){ $(this).remove() });
    if(id === 'bookmarklet_hello') {
      alert('hello');
    }
    (function(){
      var o = {script: id};
      var d = document;
      var s = d.createElement('script');
      s.src = `//cdn.jsdelivr.net/gh/hamako0/bookmarklet_practice@main/${o.script}.js`;
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

})(jQuery);})();}catch(e){alert('ブックマークレット・エラー\n' + e);}
