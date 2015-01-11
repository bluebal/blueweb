
( function( $, ko ){
    
    function BlueBalanceViewModel(){
        var self=this;
        self.flags={
        };
        console.log( "Running Blue Balance App");
    }
    
    $.BlueBalance=function(){
        var vm=new BlueBalanceViewModel();
        ko.applyBindings( vm );
    };
}( jQuery, ko ));