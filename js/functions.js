

$(document).ready(function(){

// Typescript
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };


	//***********************SCROLLTOTOP*********************//
	// inica a pagina escondido
	$('.botaoTopo').hide(); 
	//Função que carrega o site e verifica se a posicao é maior q 50px
	$(window).scroll(function(){ 
		if ($(this).scrollTop()>400) {
			$('.botaoTopo').fadeIn();
		}else{
			$('.botaoTopo').fadeOut();
		}
	});

	// Função que faz retornar para o topo ao clickar
	$('.botaoTopo').click(function(){
		$('html,body').animate({scrollTop:0});
		return false;
	});


 	// BOTOES COM ALERTAS DO SWEET ALERT2

	$('.btnSucess').click(function(){
		swal({
			type: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500
		})
	});

	$('.btnError').click(function(){
		swal(
			'Oops...',
			'Something went wrong!',
			'error'
			)
	});

	$('.btnConfirm').click(function(){
		swal({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, cancel!',
		  confirmButtonClass: 'botao',
		  cancelButtonClass: 'botao',
		  buttonsStyling: false
		}).then(function () {
		  swal(
		    'Deleted!',
		    'Your file has been deleted.',
		    'success'
		  )
		}, function (dismiss) {
		  // dismiss can be 'cancel', 'overlay',
		  // 'close', and 'timer'
		  if (dismiss === 'cancel') {
		  	swal(
		  		'Cancelled',
		  		'Your imaginary file is safe :)',
		  		'error'
		  		)
		  }
  		})
	});

	

	// $('.imgModal').click(function(){
	// 	swal({
	// 		title: 'Imagem no modal do Sweet Alert',
	// 		text: 'Modal with a custom image.',
	// 		imageUrl: 'img/portfolio-1.jpg',
	// 		imageWidth: 600,
	// 		imageHeight: 300,
	// 		imageAlt: 'teste',
	// 		animation: false
	// 	})
	// });

	// $('.imgModal2').click(function(){
	// 	swal({
	// 		title: 'Imagem no modal do Sweet Alert2',
	// 		text: 'Modal with a custom image.',
	// 		imageUrl: 'img/portfolio-1.jpg',
	// 		imageWidth: 600,
	// 		imageHeight: 300,
	// 		imageAlt: 'teste',
	// 		animation: false
	// 	})
	// });


	// EFEITO ANCORA SUAVE
	var $doc = $('html, body');
	$('.scrollSuave').click(function() {
		$doc.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});



	//EFEITO PARALAX

	$('.bgParallax').each(function(){
		var $obj = $(this);

		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $obj.data('speed')); 

			var bgpos = '50% '+ yPos + 'px';

			$obj.css('background-position', bgpos );

		}); 
	});
	









}); // </FUNCAO PRINCIPAl>