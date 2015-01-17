(function(){
    console.log('loading');
    var $ = function( obj ){
        return document.querySelector( obj );
    }

    var $n = function( obj ){
        return [].slice.call( document.querySelectorAll( obj ) );
    }

    var i = $('.c-window input');
    var outPut = function( number ){
        i.value = number;
    }

    var calculator = {
        A: '',
        EA: function( E ){
            calculator.A += E;
        },
        B: '',
        EB: function( E ){
            calculator.B += E;
        },
        C: '',
        EC: function( E ){
            calculator.C = '';
            calculator.C = E;
        },
        clear: function(){
            calculator.A = calculator.B = calculator.C = '';
            return 0;
        },
        doMath: function(){
            var res = 0,
                A = parseFloat( calculator.A ),
                B = parseFloat( calculator.B );

            switch ( calculator.C ){
                case "+":
                    res = A + B;
                    break;
                case "-":
                    res = A - B;
                    break;
                case "*":
                    res = A * B;
                    break;
                case "/":
                    res = A / B;
                    break;
            }

            calculator.A = res;
            calculator.B = '';

            return res;
        }
    }

    $n('.c-window button').forEach(function(obj, i){
        obj.addEventListener('click', function(){
            var act = this.getAttribute('data-number');
            var n = parseInt( act );
            if(n || n === 0){
                if( calculator.C.length == 0 ){
                    calculator.EA( n );
                    outPut( calculator.A );
                }else{
                    calculator.EB( n );
                    outPut( calculator.B );
                }
            }else{
                if(act == "="){
                    var res = calculator.doMath();
                    outPut( res );
                }else if(act == "C") {
                    calculator.clear();
                    outPut(0);
                }else{
                    calculator.EC( act );
                }
            }
        }, false);
    });
})()