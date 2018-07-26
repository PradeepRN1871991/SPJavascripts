(function () { 
 
    // Create object that have the context information about the field that we want to change it's output render  
    var hidecontext = {}; 
    var groups=["Architects India","Client India","Developers India"];
    var checkarchitect=null;
    var checkdeveloper=null;
    var checkclient=null;
    var rendercount=0;
    hidecontext.Templates = {}; 

    hidecontext.OnPreRender=function(ctx){

        for(var i=0; i<groups.length;i++)
        {

            if(groups[i].toString()=="Architects India")
            {

                $.ajax({
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('"+ groups[i] +"')/Users?$filter=Id eq "+ _spPageContextInfo.userId,
                    method: "GET",
                    headers: { "Accept": "application/json; odata=verbose" },
                    success: function(data){
                    if(data.d.results[0]!= undefined)
                    {
                        checkarchitect=true;
                        console.log("checkarchitect value "+checkarchitect);
                        console.log(JSON.stringify(data.d.results));
                        console.log("Current user is part of the architects india group");
                        //hidefields();
                    }
                    }
                    });
            }

            else if(groups[i].toString()=="Client India")
            {

                $.ajax({
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('"+ groups[i] +"')/Users?$filter=Id eq "+ _spPageContextInfo.userId,
                    method: "GET",
                    headers: { "Accept": "application/json; odata=verbose" },
                    success: function(data){
                    if(data.d.results[0] != undefined){
                        checkclient=true;
                        console.log("checkclient value "+checkclient);
                        console.log("Current user is part of the Client India group");
                        //hidefields();
                    }
                    }
                    });
            }

            else if(groups[i].toString()=="Developers India")
            {
            
                $.ajax({
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/getByName('"+ groups[i] +"')/Users?$filter=Id eq "+ _spPageContextInfo.userId,
                    method: "GET",
                    headers: { "Accept": "application/json; odata=verbose" },
                    success: function(data){
                    if(data.d.results[0] != undefined)
                    {
                        checkdeveloper=true;
                        console.log("checkdeveloper value "+checkdeveloper);
                        console.log("Current user is part of the Developers India group");
                        //hidefields();
                    }
                    }
                    });
            }
          

        }
       

    };

    hidecontext.OnPostRender=function(Ctx){

        hidefields();
        console.log("post rendering fired"+checkarchitect+"value of architect"+checkclient+"value of thecheckclient"+checkdeveloper+"value of checkdeveloper");
        if(rendercount==0)
        {
           
                $("<div id='UserTitle' style='text-align:center;'>Appropriate Users Click to show the respective Fields</div>").insertBefore(($("input[title='Title Required Field']")).parents("table:first"));
                rendercount++;
            
            
        }
     

        $("#UserTitle").click(function(){

            console.log("UserTitle div click event fired");
    
            if(checkarchitect!=null && checkarchitect==true)
            {
            console.log("architect section should be shown now");
            $("input[title='ClientID']").closest("tr").hide();
            $("input[title='ClientName']").closest("tr").hide();
            $("input[title='DeveloperName']").closest("tr").hide();
            $("input[title='DeveloperID']").closest("tr").hide();
            $("input[title='Title Required Field']").closest("tr").show();
            $("input[title='ArchitectName']").closest("tr").show();
            $("input[title='ArchitectID']").closest("tr").show();         
            }
            else if(checkclient!=null && checkclient==true)
            {
                console.log("client section should be shown now");
                $("input[title='ArchitectName']").closest("tr").hide();
                $("input[title='ArchitectID']").closest("tr").hide();  
                $("input[title='DeveloperName']").closest("tr").hide();
                $("input[title='DeveloperID']").closest("tr").hide();               
                $("input[title='ClientID']").closest("tr").show();
                $("input[title='ClientName']").closest("tr").show();
                $("input[title='Title Required Field']").closest("tr").show();
            }
            else if(checkdeveloper!=null && checkdeveloper==true)
            {
                console.log("developer section should be shown now");
                $("input[title='ArchitectName']").closest("tr").hide();
                $("input[title='ArchitectID']").closest("tr").hide();  
                $("input[title='ClientID']").closest("tr").hide();
                $("input[title='ClientName']").closest("tr").hide();
                $("input[title='DeveloperName']").closest("tr").show();
                $("input[title='DeveloperID']").closest("tr").show();
                $("input[title='Title Required Field']").closest("tr").show();

            }
            else
            {
                console.log("status not showing up");
            }
        });



    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(hidecontext); 

    function hidefields()
    {
        $("input[title='ArchitectName']").closest("tr").hide();
        $("input[title='ArchitectID']").closest("tr").hide();
        $("input[title='ClientID']").closest("tr").hide();
        $("input[title='ClientName']").closest("tr").hide();
        $("input[title='DeveloperName']").closest("tr").hide();
        $("input[title='DeveloperID']").closest("tr").hide();
        $("input[title='Title Required Field']").closest("tr").hide();
        

    }
 
})(); 
 
