function get_department(sel) {
    let department = sel.value;
    if (department === "it") {
        let Catalog = '<label for="Catalog">Catalog</label><br><select name="catalog" id="Catalog" onchange="get_Catalog(this);"><option value="" disabled selected>Please Select Catalog</option><option value="zajel_website">ZAJEL Website</option><option value="cargo">Cargo</option><option value="courier_mobile_app">Courier Mobile App</option><option value="ryse">Ryse</option><option value="z360">Z360</option><option value="zlite">Zlite</option><option value="zfze">ZFZE</option><option value="zhrms">ZHRMS</option><option value="call_center_solution">Call Center Solution</option></select><br></br>';
        $('#Department').nextAll().remove();
        $("#zajel_ticket").append(Catalog)
    } else if (department === "operation") {
        let operation = '<label for="operation_team">Operation Team</label><br><select name="operation_team" id="operation_team"><option disabled selected>Please Select Operation Team</option><option value="emirates_id">Emirates ID</option><option value="mofaic___others">MOFAIC & Others</option><option value="e-commerce">E-commerce</option><option value="maraseem">Maraseem</option><option value="utl">UTL</option></select><br></br>';
        $('#Department').nextAll().remove();
        $("#zajel_ticket").append(operation);
    } else {
        $('#Department').nextAll().remove();
    }
}

function get_Catalog(sel) {
    let catalog = sel.value;
    $("#Catalog").nextAll().remove();
    if (catalog === "zajel_website") {
        let sub_catalog = '<label for="Sub-Catalog">Sub-Catalog</label><br><select name="sub_catalog" id="Sub_Catalog" onchange="get_Sub_Catalog(this);"><option disabled selected>Please Select Sub-Catalog</option><option value="change_website_content">Change Website Content</option><option value="website_error">Website Error</option></select><br></br>';
        $("#zajel_ticket").append(sub_catalog)
    } else if (catalog === "cargo") {
        let sub_catalog = '<label for="Sub-Catalog">Sub-Catalog</label><br><select name="sub_catalog" id="Sub_Catalog" onchange="get_Sub_Catalog(this);"><option disabled selected>Please Select Sub-Catalog</option><option value="add_access">Add Access</option><option value="remove_access">Remove Access</option><option value="system_issue">System Issue</option></select><br></br>';
        $("#zajel_ticket").append(sub_catalog)
    } else if (catalog === "courier_mobile_app") {
        let sub_catalog = '<label for="Sub-Catalog">Sub-Catalog</label><br><select name="sub_catalog" id="Sub_Catalog" onchange="get_Sub_Catalog(this);"><option disabled selected>Please Select Sub-Catalog</option><option value="login_issue">Login Issue</option><option value="application_crash">Application Crash</option></select><br></br>';
        $("#zajel_ticket").append(sub_catalog)
    }
}