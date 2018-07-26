(function () {

    var itemCtx = {};
    itemCtx.Templates = {};
    
        itemCtx.Templates.Header = "<div><b></b></div><table style='border: 1px solid black'><tr style='background-color: #AEE33B;width: 300px;height: 24px;'><td colspan='3'>JS Link Item Rendering as table</td></td></tr>";
        itemCtx.Templates.Item = ItemOverrideFun;
        itemCtx.Templates.Footer = "</table>";
        itemCtx.ListTemplateType = 107;
    
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(itemCtx);
    
    })();
    
    
    function ItemOverrideFun(ctx) {
    
    var Title = ctx.CurrentItem.Title;
    var AssignedTo = ctx.CurrentItem.AssignedTo[0].email;
    var Status = ctx.CurrentItem.Status;
    
    return "<tr style='border: 1px solid black; '><td style='border: 1px solid black; background-color:Red'>Title :</td><td style='border: 1px solid black'>" + Title + "</td><td style='border: 1px solid black; background-color:Red'>AssignedTo :</td><td style='border: 1px solid black'>" + AssignedTo + "</td><td style='border: 1px solid black; background-color:Red'>Status :</td><td style='border: 1px solid black'>" + Status + "</td></tr>";
    
    }