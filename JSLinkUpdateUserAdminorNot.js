(function () { 
 
    // Create object that have the context information about the field that we want to change it's output render  
    var priorityFiledContext = {}; 
    priorityFiledContext.Templates = {}; 
    priorityFiledContext.Templates.Fields = { 
        // Apply the new rendering for Priority field on List View 
        "Priority": { "View": priorityFiledTemplate },
        "IsUserAdmin":{"View":GetAdminStatus}
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
        return "<span style='color:red'>The Current User is not a site admin</span> "
    }
}