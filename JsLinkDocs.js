// List view – Files Count 
// Pradeep RN
 
(function () { 
 

    
    // Create object that have the context information about the field that we want to change it's output render 
    var values=[]; 
    var linkFilenameFiledContext = {}; 
    linkFilenameFiledContext.Templates = {}; 
    linkFilenameFiledContext.Templates.Item = ItemTemplate;
    linkFilenameFiledContext.Templates.Fields = { 
        // Apply the new rendering for LinkFilename field on list view 
        "LinkFilename": { "View": linkFilenameFiledTemplate } 
    }; 
 
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(linkFilenameFiledContext); 
 
})(); 

function ItemTemplate(ctx)
{


}
 

// This function provides the rendering logic 
function linkFilenameFiledTemplate(ctx) { 
 
    var confidential = ctx.CurrentItem["Confidential"]; 
    var title = ctx.CurrentItem["FileLeafRef"]; 
 
    // This Regex expression use to delete extension (.docx, .pdf ...) form the file name 
    title = title.replace(/\.[^/.]+$/, "") 
 
    // Check confidential field value 
    if (confidential && confidential.toLowerCase() == 'yes') { 
         
        // Render HTML that contains the file name and the confidential icon 
        return title + "&nbsp;<img src='/Style%20Library/JSLink-Samples/imgs/Confidential.png' alt='Confidential Document' title='Confidential Document'/>"; 
    } 
    else 
    { 
        return title; 
    } 


    

    var restAPIURL =_spPageContextInfo.webAbsoluteUrl+'/_api/web/webinfos/add';
        var newSiteData = JSON.stringify(
        {
        'parameters': {
        '__metadata': {
        'type': 'SP.WebInfoCreationInformation'
        },
        'Url': $(1:{'hellorestapi'}),
        'Description': 'Subsite created from REST API', 
        'Title': 'hellorestapi',
        'Language': 1033,
        'WebTemplate': 'STS#0',
        'UseUniquePermissions': false
        }
        });
        $.ajax
        ({
        url: restAPIURL,
        type: 'POST',
        async: false,
        data: newSiteData,
        headers: {
         'accept': 'application/json;odata=verbose',
         'content-type': 'application/json;odata=verbose',
         'X-RequestDigest': $('#__REQUESTDIGEST').val()
         },
        success: function(data){
        console.log('site created');
        },
        error: function(data){
        console.log('Error creating site');
        }
        }); 