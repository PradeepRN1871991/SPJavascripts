(function () { 
 
    // Create object that have the context information about the field that we want to change it's output render  
    var EmailContext = {}; 
    var emailfinalbody=null;
    var emailcontent=null;
    EmailContext.Templates = {}; 

    EmailContext.Templates.Item=RenderEmail;

    EmailContext.Templates.Header="<h3>Our Email Header</h3><br/><br/><div><table style='border: 1px solid black'><tr style='background-color: #AEE33B;width: 300px;height: 24px;'><td colspan='3' style='text-align:center'>JSLink Email a Link Option</td></tr>";

    EmailContext.Templates.Footer="</table></div><br/><h3>Our Email Footer</h3>";

    EmailContext.Templates.OnPostRender=SendEmail;

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(EmailContext);

   

    function SendEmail(ctx)
    {
    
    emailfinalbody=EmailContext.Templates.Header+emailcontent+EmailContext.Templates.Footer;
    console.log(emailfinalbody);
    $("#sendemail").click(function(){
      // console.log($("#sendemail").parent().parent().prev().text());
       console.log(emailfinalbody);
      var body=null;
        //var itemurl=String.format('{0}&amp;ID={1}', ctx.displayFormUrl, ctx.CurrentItem.ID);
        var from = 'Testing-donotreply@aig.com';
       var to = $("#sendemail").parent().parent().prev().text();
        if(emailfinalbody!=null)
        {
         body = emailfinalbody;
        }
        var subject = 'sending email from jslink';
        var siteurl = _spPageContextInfo.webServerRelativeUrl;
        var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
        $.ajax({
            contentType: 'application/json',
            url: urlTemplate,
            type: "POST",
            data: JSON.stringify({
                'properties': {
                    '__metadata': {
                        'type': 'SP.Utilities.EmailProperties'
                    },
                    'From': from,
                    'To': {
                        'results': [to],
                    },
                    'Body': body,
                    'Subject': subject
                }
            }),
            headers: {
                "Accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
            },
            success: function(data) {
                alert('Email Sent Successfully');
            },
            error: function(err) {
                alert('Error in sending Email: ' + JSON.stringify(err));
            }
        });

    });
   
}

function RenderEmail(ctx)
{
var content="<tr style='background-color:#AEE33B;width: 300px;height: 24px;'><td>Name</td><td>Employee Email</td><td>Button to send Email</td></tr><tr style='background-color:#AEE33B;width: 300px;height: 24px;'><td>"+ctx.CurrentItem.Title+"</td><td>"+ctx.CurrentItem.UserEmail+"</td>"+"<td><div style='height:100%; width:100%;  position:relative;'><input id='sendemail' type='button' value='Send Current Item to User'/></div></td></tr>";
emailcontent=emailcontent+content;
return content;
}
})(); 
 