<script language="javascript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script><script language="javascript" type="text/javascript">  
    $(document).ready(function() {  
        SP.SOD.executeOrDelayUntilScriptLoaded(AddCustomUserAction, "sp.js");  
    });  
    var oListItem;  
  
    function AddCustomUserAction() {  
        //Get the client context and list object  
        var context = new SP.ClientContext.get_current();  
        var list = context.get_web().get_lists().getByTitle("Test11");  
        //Get the custom user action collection and add the user action  
        var customUserAction = list.get_userCustomActions().add();  
        //Set the location of the user action  
        customUserAction.set_location('CommandUI.Ribbon.ListView');  
        //Add the properties for the custom action  
        var userActionExtension = '<CommandUIExtension xmlns="http://schemas.microsoft.com/sharepoint/">' + '<CommandUIDefinitions>' + '<CommandUIDefinition Location="Ribbon.Documents.Manage.Controls._children">' + '<Button Id="Ribbon.Documents.Manage.New.RibbonTest" ' + 'Command="Notify" ' + 'Sequence="0" ' + 'Image16by16="/_layouts/images/NoteBoard_16x16.png" ' + 'Image32by32="/_layouts/images/NoteBoard_32x32.png" ' + 'Description="Shows the ID of the current list." ' + 'LabelText="Show List ID" ' + 'TemplateAlias="o1"/>' + '</CommandUIDefinition>' + '</CommandUIDefinitions>' + '<CommandUIHandlers>' + '<CommandUIHandler Command="Notify" ' +   'CommandAction="javascript:var items=SP.ListOperation.Selection.getSelectedItems();if(items.length>0){for(var i=0; i<=items.length;i++)
            {
                var itemid=items[i].id;
                var siterestapiurl=_spPageContextInfo.webAbsoluteUrl+"/_api/web/lists(guid'64F4842C-94C4-433F-ACE7-0DC29E35AA90')/items(1)/roleassignments/removeroleassignment(principalid=6,roleDefId=1073741829)";
                var headers = {  
                    "Accept": "application/json;odata=verbose",  
                    "content-Type": "application/json;odata=verbose",  
                    "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()  
            };

            var call = jQuery.ajax({  
                url: siterestapiurl,  
                type: "POST",  
                headers: headers,  
                dataType: 'json',success: function (data) {  
                     alert("Inheritance Broken Successfully !');  
                      
                  },  
                  error: function (error) {  
                      alert(JSON.stringify(error));  
                  }  
              });  
            }

        } + '</CommandUIHandlers>' + '</CommandUIExtension>';  
        //Add the command UI extension and update the custom user action  
        customUserAction.set_commandUIExtension(userActionExtension)  
        customUserAction.update();  
        //Load the client context and execute the batch  
        context.load(list, 'UserCustomActions');  
        context.executeQueryAsync(function() {  
            console.log("Custom User Action added successfully to ribbon.");  
        }, function(sender, args) {  
            console.log(args.get_message());  
        });  
    }  
</script>​<br/>