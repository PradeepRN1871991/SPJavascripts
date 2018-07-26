(function () { 
 
   var status= null;

    // Create object that have the context information about the field that we want to change it's output render  
    var priorityFiledContext = {}; 
    priorityFiledContext.Templates = {}; 
    priorityFiledContext.Templates.Fields = { 
        // Apply the new rendering for Priority field on List View 
        "Priority": { "View": priorityFiledTemplate },
        "IsUserAdmin":{"View":GetAdminStatus},
        "UserGroup":{"View":UpdateUserGroup}
    }; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(priorityFiledContext); 
 
})(); 
 
// This function provides the rendering logic for list view 
function priorityFiledTemplate(ctx) { 
 
    var priority = ctx.CurrentItem[ctx.CurrentFieldSchema.Name]; 
 
    // Return html element with appropriate color based on priority value 
    switch (priority) { 
        case "(1) High": 
            return "<span style='color :Red'>" + priority + "</span>"; 
            break; 
        case "(2) Normal": 
            return "<span style='color :green'>" + priority + "</span>"; 
            break; 
        case "(3) Low": 
            return "<span style='color :orange'>" + priority + "</span>"; 
    } 
}

function GetAdminStatus(ctx)
{
    if(_spPageContextInfo.isSiteAdmin)
    {
        return "<span style='color:green'>The Current User is a site admin</span> "
    }
    else
    {
        return "<span style='color:red'>The Current User is not a site admin</span>"
    }
}
function UpdateUserGroup(ctx)
{
    
        status=GetLoggedinUser();


        if(status)
        {
            return "<span style='color:red'>The Current logged in User '"+_spPageContextInfo.userId+"' is not part of the Owners Group</span>"
            
        }
        else if(!status)
        {
            return "<span style='color:green'>The Current logged in User '"+_spPageContextInfo.userId+"' is part of the Owners Group</span>";
        }
        else
        {
            return "<span style='color:Blue'>No Reply</span>"
        }
        }


function GetLoggedinUser()
{
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('NetWikiVM Owners')/Users?$filter=Id eq '"+ _spPageContextInfo.userId+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose"},
        async:false,
        success: function(data){
        if(data.d.results[0] != undefined)
        {
            status=true;
           
        //User is a Member, do something or return true
        }
        else
        {
            status=false;
            
        }
        }
        });
        return status;
}