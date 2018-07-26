



function GetLookupColumns()
{
$.ajax({
        url: _spPageContextInfo.webAbsoluteUrl +"/_api/Web/Lists/GetByTitle('LookupTest')/Items?$select=Title,FinalLookup1/Title&$expand=FinalLookup1/Title",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose"},
        async:false,
        success: function(data){
        if(data.d.results!= undefined)
        {
            alert(data.d.results.FinalLookup1);
           
        //User is a Member, do something or return true
        }
        else
        {
            status=false;
            
        }
        }
        });
}



