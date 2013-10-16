(function( $ ){
  $.fn.tagcloud = function( options ) {  
    
    //settings

    var settings = $.extend( {  
        cloud_title : 'Tags disponibles',
        selected_title : 'Tags seleccionados',
        cloudclass : 'tagcloud cloud',
        selectclass : 'tagcloud selected'
    }, options);

    return this.each(function() {        
        //hide the element
        $(this).css({display:'none'});
        //generate unique id
        var newDate = new Date;
        var uniq_id = newDate.getTime();
        //if the element has an id then we use it, if not we add one
        if($(this).attr('id')!=null||$(this).attr('id')!=undefined){
            var main_id = $(this).attr('id');
        }else{
            $(this).attr('id', 'tagcloud_'+uniq_id);
        }
        var ram = [];
        //the main ids of the elements we will create
        var tagcloud_selector = 'tagcloud_selector' + uniq_id;
        var tagcloud_selected = 'tagcloud_selected' + uniq_id;
        //set the tagcloud selector
        $('<div class="'+settings.cloudclass+'" id="'+tagcloud_selector+'">').html('<h5>'+settings.cloud_title+'</h5>').insertAfter('#'+main_id);
        $('<div class="'+settings.selectclass+'" id="'+tagcloud_selected+'">').html('<h5>'+settings.selected_title+'</h5>').insertAfter('#'+tagcloud_selector);
        
        $.each($(this).children('option'), function(k,v){
            ram[k] = '<a rel="'+$(v).attr('value')+'">' +  $(v).html() + '</a>';
            if($(v).attr('selected')){
                $('#'+tagcloud_selected).append( ram[k] );
            }else{
                $('#'+tagcloud_selector).append( ram[k] );
            }
        });

        // add the add tag event here
        $('#'+tagcloud_selector+' a').live('click', function(){
            $('#'+main_id).children("option[value='"+$(this).attr('rel')+"']").attr('selected','selected');
            $(this).fadeOut(100, function(){
                $(this).appendTo('#'+tagcloud_selected).fadeIn(100);
            })
        });
        // add the remove tag event here
        $('#'+tagcloud_selected+' a').live('click', function(){
            $('#'+main_id).children("option[value='"+$(this).attr('rel')+"']").removeAttr('selected'),
            $(this).fadeOut(100, function(){
                $(this).appendTo('#'+tagcloud_selector).fadeIn(100);
            });
        });
    });
  };
})( jQuery );
