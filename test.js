var restAPIURL =_spPageContextInfo.webAbsoluteUrl+'/'+''+'/_api/web/';
    $.ajax
    ({
    url: restAPIURL,
    type: 'POST',
    async: false,
    headers: {
     'accept': 'application/json;odata=verbose',
     'content-type': 'application/json;odata=verbose',
     'X-RequestDigest': $('#__REQUESTDIGEST').val(),
     'X-HTTP-Method': 'DELETE'
     },
    success: function(data){
    console.log('site is deleted');
    },
    error: function(data){
    console.log('Error deleting site');
    }
    });