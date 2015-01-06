(function(){
    var $ = function( obj ){
        return document.querySelector(obj);
    }

    var hamburg = function( action ){

        var _ = this;

        _.o = {
            obj: document.querySelector('.hamburg'),
            toggleAction: action
        }
        var h = _.o.obj;
        h.addEventListener('click', function(){
            this.classList.toggle('close');
            _.o.toggleAction();
        })
    }

    var fuck = new hamburg(function(){
        $('.setting-box').classList.add('setting-box-show');
        $('.untouchable-bg').style.display = 'block';
    });

    $('.untouchable-bg').onclick = function(){
        $('.untouchable-bg').style.display = 'none';
        $('.setting-box').classList.remove('setting-box-show');
    }

    $('.add-btn').onclick = function(){
        $('.table-place').classList.add('table-place-show');
    }

    $('.tabel-close-btn').onclick = function(){
        $('.table-place').classList.remove('table-place-show');
    }

    $('ul').onclick = function(){
        $('.person-other').classList.add('person-other-show');
    }

    $('.person-other-back').onclick = function(){
        $('.person-other').classList.remove('person-other-show');
    }
})()