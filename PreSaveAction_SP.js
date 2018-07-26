<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

<script type="text/javascript">

 var j = jQuery.noConflict(); 

 var Testobject=new Object();

 function PreSaveAction() { 

 var txtTitle = j("#Title").parent().next().find("span input").val();
 var Empdropdown = j("#Employee_x0020_Type").parent().next().find("span").find("[attribute=Employee Type]").find("option:selected").text();

 var companydropdown = j("#Companytype").parent().next().find("span").find("[attribute=Companytype]").find("option:selected").text();

 j("#Multicheck").parent().next().find("span table tbody tr:first").next().find("td span input").attr('checked',true);

 j("#Multicheck").parent().next().find("span table tbody tr:nth-child(2)").next().find("td span input").attr('checked',true);

 j("#Multicheck").parent().next().find("span table tbody tr:nth-child(3)").next().find("td span input").attr('checked',true);
 
 tr:nth-child(2)
 alert(j("#Multicheck").parent().next().find("span table tbody tr:first").next().find("td span input").attr('checked',true));

 if(multichoice==true)
 {

 }


 'Multicheck': { '__metadata': { 'type' : 'Collection(Edm.String)'}, results: ['cricket','football','tennis']}

 var companydropdown = j("DateTime").parent().next().find("span").find("table tr td input").val();
 alert(companydropdown);



alert(Empdropdown);

   if(txtTitle == '')
   {        
   alert("Please enter a title");          
   return false;
  }

else{

  createList();
  return true;
  Testobject.Title=txtTitle;

}
 }

function createList()   
{  
    var siteUrl=_spPageContextInfo.siteAbsoluteUrl 
    var clientContext = new SP.ClientContext(siteUrl);  
    var oWebsite = clientContext.get_web();    
    var listCreationInfo = new SP.ListCreationInformation();  
    listCreationInfo.set_title('CustomListAnnouncement');  
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);  
    this.oList = oWebsite.get_lists().add(listCreationInfo);  
    clientContext.load(oList);  
    clientContext.executeQueryAsync(  
    Function.createDelegate(this, this.onQuerySucceeded),   
    Function.createDelegate(this, this.onQueryFailed)  
);  
}  
  
function onQuerySucceeded()   
{    
    var result = oList.get_title() + ' created.';  
    alert(result);  
}  
  
function onQueryFailed(sender, args)   
{  
    alert('Request failed. ' + args.get_message() +   
    '\n' + args.get_stackTrace());  
}  
   
</script>​<br/>​