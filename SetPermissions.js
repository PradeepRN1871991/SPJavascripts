function setpermission()
{
var items=SP.ListOperation.Selection.getSelectedItems();
alert(SP.ListOperation.Selection.getSelectedItems());
if(items.length>0)
{
    for(var i=0; i<=items.length;i++)
            {
                var itemid=items[i].id;
                var siterestapiurl=_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists(guid'64F4842C-94C4-433F-ACE7-0DC29E35AA90')/items(itemid)/roleassignments/removeroleassignment(principalid=6,roleDefId=1073741829)";
                var headers = {  
                    "Accept": "application/json;odata=verbose",  
                    "content-Type": "application/json;odata=verbose",  
                    "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()  
            };
            var call = jQuery.ajax({  
                url: siterestapiurl,  
                type: "POST",  
                headers: headers,  
                dataType: 'json',success: function (data) 
                    {  
                     alert("Inheritance Broken Successfully !")
                     },
                     error:function(error)
                     {
                     alert(JSON.stringify(error))
                     }
                     
                     });
                     
            }
                     
 }
}

