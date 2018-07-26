(function () { 
 
   var status= null;

    // Create object that have the context information about the field that we want to change it's output render  
    var CompanyFiledContext = {}; 
    CompanyFiledContext.Templates = {}; 
    CompanyFiledContext.Templates.Fields = { 
        // Apply the new rendering for Priority field on List View 
        "CompanyURL": { "View": CompanyURLFill }
    }; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(CompanyFiledContext); 
 
})(); 
 
// This function provides the rendering logic for list view 
function CompanyURLFill(ctx) { 
 
    var CompanyName = ctx.CurrentItem[ctx.CurrentFieldSchema.Title]; 
 
    return "<a href='https://www.'"+CompanyName+".com'></a>"
    // Return URL  with appropriate Title Value
    } 

