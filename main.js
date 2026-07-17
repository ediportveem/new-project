function feed_data(data) {
  const template = `<html xmlns=http://www.w3.org/1999/xhtml><style>@media print { @page { margin: 0; margin-top:10mm; }  html, body { margin: 0; padding: 0; } }</style> <table border=0 cellpadding=0 cellspacing=0 width=90% style="border:1px solid #000;padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:1px;font-size:10pt;font-family:Arial Unicode MS"align=center class=mgn><tr><td align=left colspan=6> ई-डिस्ट्रिक्ट के अन्तर्गत जारी..<tr><td colspan=6><p align=center><img src=./sealofup.jpg height=110 width=110><tr><td colspan=6><p align=center><font size=6 class=style1>उत्तर प्रदेश शासन</font><tr><td colspan=6><p align=center><b><font size=4>कार्यालय उप जिलाधिकारी द्वारा प्रदत्त सामान्य निवास प्रमाण पत्र</font></b><tr><td width=17% nowrap><b>जिला</b><td nowrap><b>${data.district}</b><td width=30% align=right colspan=3> <td width=35% align=left nowrap> <tr><td width=17% nowrap><b>तहसील</b><td nowrap><b>${data.tehsil}</b><td width=30% align=right colspan=3> <td width=35% align=center nowrap><b>जारी दिनांक: <span style=font-size:11px;font-family:verdana>${data.apply_date}</span></b><tr><td width=17% valign=top nowrap><b>आवेदन क्र०</b><td width=30% valign=top nowrap style=font-size:11px;font-family:verdana><b>${data.registration_number}</b><td width=30% align=left valign=top colspan=3> <td width=35% align=right> <tr><td width=17% valign=top nowrap><b>प्रमाणपत्र क्र०</b><td width=30% valign=top nowrap style=font-size:11px;font-family:verdana><b>${data.certificate_number}</b><td width=30% align=left valign=top colspan=3> <td width=35% align=right> <tr><td colspan=6><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-size:10pt><tr><td width=10% align=left valign=top> <td width=32% align=left valign=top> <td width=33% align=left valign=top> <td width=25% align=left valign=top rowspan=6><img src="https://fra.cloud.appwrite.io/v1/storage/buckets/6a4b8e2c00087f9a88c9/files/${data.photo}/view?project=6a4b8d930018695e420b&impersonateuserid=&mode=admin" style=width:96px;height:96px><tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap>संबंधित लेखपाल की जांच संख्या दिनांक<td width=33% align=left valign=middle height=20>${data.apply_date} आधार पर एकत्र द्वारा<tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap>प्रमाणित किया जाता है कि<td width=33% align=left valign=middle height=20 style=font-family:verdana><font size=2pt><b>${data.name_hindi} / ${data.name}</b></font><tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap>${data.relation}<td width=33% align=left valign=middle height=20 style=font-family:verdana><font size=2pt><b>${data.father_husband_name}</b></font><tr><tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap><font size=2pt>माता का नाम</font><td width=33% align=left valign=middle height=20 style=font-family:verdana><font size=2pt><b>${data.mother_name}<tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap><font size=2pt>मकान नंबर</font><td width=33% align=left valign=middle height=20 style=font-family:verdana><font size=2pt><b>${data.house_no}<tr><td width=20% align=left valign=top nowrap> <td width=32% align=left valign=top height=20 nowrap><font size=2pt>मोहल्ला/पोस्ट</font><td width=33% align=left valign=top height=20 style=font-family:verdana><font size=2pt><b>${data.mohalla}</b> </font><tr><td width=20% align=left valign=top nowrap> <td width=32% align=left valign=top height=20 nowrap><font size=2pt>ग्राम</font><td width=33% align=left valign=top height=20 style=font-family:verdana><font size=2pt><b>${data.village}</b> </font><tr><td width=10% align=left valign=top> <td width=32% align=left valign=middle height=20 nowrap><font size=2pt>थाना<font><td width=33% align=left valign=middle height=20 style=font-family:verdana><font size=2pt><b>${data.police_station}<tr><td width=10% align=left valign=top nowrap> <td width=32% align=left valign=top height=20 nowrap><font size=2pt>तहसील</font><td width=33% align=left valign=top height=20 style=font-family:verdana><font size=2pt><b>${data.tehsil}</b></font><tr><td width=10% align=left valign=top nowrap> <td width=32% align=left valign=top height=20 nowrap><font size=2pt>जिला</font><td width=33% align=left valign=top height=20 style=font-family:verdana><font size=2pt><b>${data.district}</b></font></table></tr><td colspan=6><font size=2pt>उत्तर प्रदेश का / की निवासी है व उसका वर्तमान पता मकान नंबर <font size=2pt><b>${data.house_no}</b> ग्राम <font size=2pt><b>${data.village}</b> </font>मोहल्ला <font size=2pt><b>${data.mohalla}</b> तहसील <font size=2pt><b>${data.tehsil}</b>, जनपद <font size=2pt><b>${data.district} </b>, उत्तर प्रदेश है।<br>2. उपर्युक्त की पुष्टि प्रारूप - १ में आवेदन एवं सत्यापनकर्ता द्वारा उपलब्ध कराई गई सूचना तथा इससे संतुष्ट हो जाने के उपरान्त अधोहस्ताक्षरी द्वारा उत्तर प्रदेश के इस जनपद का सामान्य निवासी होने विषयक प्रमाणपत्र निर्गत किया जा रहा है।</font></td><tr><td colspan=6>  <img src="https://quickchart.io/qr?text=https://edistrict-up-gov-in-4c8c.onrender.com/verification.html?id=${data.$id}&meta=gZjaHJvbWUyBggAEEUYOTIKCAEQABiABBjHBTIKCAIQABiABBjHBTIRCAMQABgKGAsYgwEYsQMYgAQyCggEEAAYgAQYxwUyEQgFEA&chld=L|0&chf=bg,s,"style=width:100px;height:100px><tr><td align=center colspan=6><table border=0 cellpadding=0 cellspacing=0 width=100% style=font-size:10pt align=center><tr><td width=17% align=left valign=top nowrap colspan=2><b></b><td width=29% valign=top nowrap rowspan=4><table border=0 cellpadding=0 cellspacing=0 width=100% id=table1><tr><td width=50% align=right valign=top style=font-size:20px;font-family:Arial>${data.certificate_issuer} <td width=50% align=left valign=top style=font-size:8px;font-family:Arial>Digitally Signed by ${data.certificate_issuer} O=Personal, S=Uttar pradesh </table> <td width=20% align=center valign=bottom nowrap><span style=font-size:11px;font-family:verdana><font size=1><b>सक्षम अधिकारी/उप जिलाधिकारी<br>डिजिटल हस्ताक्षरित<br>${data.tehsil}, ${data.district}</b><br>दिनांक: <span style=font-size:11px;font-family:verdana>${data.apply_date}</span><br></font></span></table><tr><td colspan=6><font size=2pt><b>यह प्रमाण पत्र इलेक्ट्रॉनिक डिलिवरी सिस्टम द्वारा तैयार किया गया है तथा डिजिटल सिग्नेचर से हस्ताक्षरित है। सम्बन्धित केन्द्र के अधिकृत कर्मी द्वारा प्रमाणित किया गया है। यह प्रमाण पत्र वेबसाइट http://edistrict.up.gov.in पर इसका पहले आवेदन क्र० फिर प्रमाणपत्र क्र० अंकित कर,सत्यापित किया जा सकता है। हीं है |</b></font><tr><td align=left colspan=6><p style="font-size:10pt;font-family:Arial Unicode MS"> </tr><img src=./GOVERNMENT_MONOGRAM.gif style=Z-INDEX:-10;POSITION:absolute;FLOAT:left;TOP:220;LEFT:130 border=0 height=400 width=400>`;
  const cast_template = `<html xmlns=http://www.w3.org/1999/xhtml>
 <style>@media print { @page { margin: 0; margin-top:10mm; }  html, body { margin: 0; padding: 0; } }</style> 
 

<table border=0 cellpadding=0 cellspacing=0 width=90%
    style="border:1px solid #000;padding-left:4px;padding-right:4px;padding-top:1px;padding-bottom:1px;font-size:10pt;font-family:Arial Unicode MS"
    align=center class=mgn>
    <tr>
        <td align=left colspan=6> ई-डिस्ट्रिक्ट के अन्तर्गत जारी..
    <tr>
        <td colspan=6>
            <p align=center><img src=./sealofup.jpg height=110 width=110>
    <tr>
        <td colspan=6>
            <p align=center>
                <font size=6 class=style1>उत्तर प्रदेश शासन</font>
    <tr>
        <td colspan=6>
            <p align=center><b>
                    <font size=4>उत्तर प्रदेश के पिछड़ा वर्ग के लिए जाती प्रमाण पत्र </font>
                </b>
    <tr>
        <td width=17% nowrap><b>जिला</b>
        <td nowrap><b>${data.district}</b>
        <td width=30% align=right colspan=3> 
        <td width=35% align=left nowrap> 
    <tr>
        <td width=17% nowrap><b>तहसील</b>
        <td nowrap><b>${data.tehsil}</b>
        <td width=30% align=right colspan=3> 
        <td width=35% align=center nowrap><b>जारी दिनांक: <span
                    style=font-size:11px;font-family:verdana>${data.apply_date}</span></b>
    <tr>
        <td width=17% valign=top nowrap><b>आवेदन क्र०</b>
        <td width=30% valign=top nowrap style=font-size:11px;font-family:verdana><b>${data.registration_number}</b>
        <td width=30% align=left valign=top colspan=3> 
        <td width=35% align=right> 
    <tr>
        <td width=17% valign=top nowrap><b>प्रमाणपत्र क्र०</b>
        <td width=30% valign=top nowrap style=font-size:11px;font-family:verdana><b>${data.certificate_number}</b>
        <td width=30% align=left valign=top colspan=3> 
        <td width=35% align=right> 
    <tr>
        <td colspan=6>
            <table border=0 cellpadding=0 cellspacing=0 width=100% style=font-size:10pt>
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=top> 
                    <td width=33% align=left valign=top> 
                    <td width=25% align=left valign=top rowspan=6><img
                            src="https://fra.cloud.appwrite.io/v1/storage/buckets/6a4b8e2c00087f9a88c9/files/${data.photo}/view?project=6a4b8d930018695e420b&impersonateuserid=&mode=admin"
                            style=width:96px;height:96px>
                <tr>
                    <td width=10% align=left valign=top> 
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=middle height=20 nowrap>प्रमाणित किया जाता है कि
                    <td width=33% align=left valign=middle height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.name_hindi} / ${data.name}</b></font>
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=middle height=20 nowrap>${data.relation}
                    <td width=33% align=left valign=middle height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.father_husband_name}</b></font>
                <tr>
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=middle height=20 nowrap>
                        <font size=2pt>माता का नाम</font>
                    <td width=33% align=left valign=middle height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.mother_name}
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=middle height=20 nowrap>
                        <font size=2pt>मकान नंबर</font>
                    <td width=33% align=left valign=middle height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.house_no}
                <tr>
                    <td width=20% align=left valign=top nowrap> 
                    <td width=32% align=left valign=top height=20 nowrap>
                        <font size=2pt>मोहल्ला/पोस्ट</font>
                    <td width=33% align=left valign=top height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.mohalla}</b> </font>
                <tr>
                    <td width=20% align=left valign=top nowrap> 
                    <td width=32% align=left valign=top height=20 nowrap>
                        <font size=2pt>ग्राम</font>
                    <td width=33% align=left valign=top height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.village}</b> </font>
                <tr>
                    <td width=10% align=left valign=top> 
                    <td width=32% align=left valign=middle height=20 nowrap>
                        <font size=2pt>थाना<font>
                    <td width=33% align=left valign=middle height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.police_station}
                <tr>
                    <td width=10% align=left valign=top nowrap> 
                    <td width=32% align=left valign=top height=20 nowrap>
                        <font size=2pt>तहसील</font>
                    <td width=33% align=left valign=top height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.tehsil}</b></font>
                <tr>
                    <td width=10% align=left valign=top nowrap> 
                    <td width=32% align=left valign=top height=20 nowrap>
                        <font size=2pt>जिला</font>
                    <td width=33% align=left valign=top height=20 style=font-family:verdana>
                        <font size=2pt><b>${data.district}</b></font>
            </table>
    </tr>
    <td colspan=6>
        <font size=2pt>
            उत्तर प्रदेश राज्य की <b><u>${data.sub_caste}</u></b> जाति के व्यक्ति हैं। यह उत्तर प्रदेश लोक सेवा अनुसूचित जातियों, अनुसूचित जन जातियों तथा अन्य पिछड़े वर्गों के लिए आरक्षण अधिनियम १९९४ की अनुसूची एक के अन्तर्गत मान्यता प्राप्त है।
<br/>यह भी प्रमाणित किया जाता है कि <b><font size=3pt>${data.name} / ${data.name_hindi}</font></b> पूर्वोक्त अधिनियम १९९४ (यथा संशोधित) की अनुसूची २ (जैसा कि उत्तर प्रदेश लोक सेवा) अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य पिछड़े वर्गों के लिए आरक्षण (संशोधन) अधिनियम २००१ द्वारा प्रतिस्थापित किया गया है एंव जो उ०प्र० लोक सेवा अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य पिछड़े वर्गों के लिए आरक्षण (संशोधन) अधिनियम २००२ एवं शासनादेश संख्या 22/16/92 टी० सी०-III, दिनाँक २० अक्टुबर २००८ द्वारा संशोधित की गई है, से आच्छादित नहीं है। इनके माता-पिता की निरन्तर तीन वर्षों की अवधि के लिये सकल वार्षिक आय आठ लाख रुपये या इससे अधिक नहीं है तथा इनके पास धन कर अधिनियम १९५७ मे यथा विहिप छूट सीमा से अधिक सम्पत्ति नहीं है।

        </font>
    </td>
    <tr>
        <td colspan=6>  <img
                src="https://quickchart.io/qr?text=https://edistrict-up-gov-in-4c8c.onrender.com/verification.html?id=${data.$id}&meta=gZjaHJvbWUyBggAEEUYOTIKCAEQABiABBjHBTIKCAIQABiABBjHBTIRCAMQABgKGAsYgwEYsQMYgAQyCggEEAAYgAQYxwUyEQgFEA&chld=L|0&chf=bg,s,"
                style=width:100px;height:100px>
    <tr>
        <td align=center colspan=6>
            <table border=0 cellpadding=0 cellspacing=0 width=100% style=font-size:10pt align=center>
                <tr>
                    <td width=17% align=left valign=top nowrap colspan=2><b></b>
                    <td width=29% valign=top nowrap rowspan=4>
                        <table border=0 cellpadding=0 cellspacing=0 width=100% id=table1>
                            <tr>
                                <td width=50% align=right valign=top style=font-size:20px;font-family:Arial>
                                    ${data.certificate_issuer} 
                                <td width=50% align=left valign=top style=font-size:8px;font-family:Arial>Digitally
                                    Signed by ${data.certificate_issuer} O=Personal, S=Uttar pradesh 
                        </table> 
                    <td width=20% align=center valign=bottom nowrap><span style=font-size:11px;font-family:verdana>
                            <font size=1><b>सक्षम अधिकारी/उप जिलाधिकारी<br>डिजिटल हस्ताक्षरित<br>${data.tehsil},
                                    ${data.district}</b><br>दिनांक: <span
                                    style=font-size:11px;font-family:verdana>${data.apply_date}</span><br></font>
                        </span>
            </table>
    <tr>
        <td colspan=6>
            <font size=2pt><b>यह प्रमाण पत्र इलेक्ट्रॉनिक डिलिवरी सिस्टम द्वारा तैयार किया गया है तथा डिजिटल सिग्नेचर से
                    हस्ताक्षरित है। सम्बन्धित केन्द्र के अधिकृत कर्मी द्वारा प्रमाणित किया गया है। यह प्रमाण पत्र
                    वेबसाइट http://edistrict.up.gov.in पर इसका पहले आवेदन क्र० फिर प्रमाणपत्र क्र० अंकित कर,सत्यापित
                    किया जा सकता है। हीं है |</b></font>
    <tr>
        <td align=left colspan=6>
            <p style="font-size:10pt;font-family:Arial Unicode MS"> 
    </tr><img src=./GOVERNMENT_MONOGRAM.gif style=Z-INDEX:-10;POSITION:absolute;FLOAT:left;TOP:220;LEFT:130 border=0
        height=400 width=400>`




  const gazette = `

<!-- Data Tabled Css  -->
<link rel="stylesheet" href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.14/dist/sweetalert2.all.min.js"></script>
    <!-- Fav  -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css" rel="stylesheet" />
    <!-- Style for Dialog Box -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css">
  
<!-- font awesome icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  


<link rel="icon" href="https://thumbs.dreamstime.com/b/vle-letter-initial-logo-design-vector-illustration-236644081.jpg">






<!-- Data Tabled Css  -->
<link rel="stylesheet" href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.14/dist/sweetalert2.all.min.js"></script>
    <!-- Fav  -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css" rel="stylesheet" />
    <!-- Style for Dialog Box -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css">
  
<!-- font awesome icon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  


<!DOCTYPE html>
<html>

<head>
    <title>the gazette of india</title>
    <meta charset="UTF-8">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Eczar&family=IBM+Plex+Sans+Devanagari&family=Martel&family=Noto+Serif+Devanagari:wght@400;500;600&family=Roboto&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet">
    <style>
       /* Ensure consistent color adjustment during printing */
* {
    -webkit-print-color-adjust: exact !important;   /* Chrome, Safari 6–15.3, Edge */
    color-adjust: exact !important;                 /* Firefox 48–96 */
    print-color-adjust: exact !important;           /* Firefox 97+, Safari 15.4+ */
}

/* Reset margin and padding for the body and standardize its styles */
body {
    margin: 0;
    padding: 0;
    font-family: Georgia, serif; /* Simplified to a commonly supported serif font */
    font-size: 35px;             /* Restored font size */
}

.a4-div {
    width: 1000px;
    height: 1230px;
    margin: auto ; /* Center the div itself */
    position: relative;
    border: 0px solid #000000;
    display: flex; /* Enable flexbox */
    flex-direction: column; /* Stack children vertically */
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    page-break-before: always; /* Ensure new page in print */
}



/* The image background styling */
.a4-div::before {
    content: "";
    background: url(gazeteofindia_view.jpg);
    background-size: 100%; /* Stretch background to fit width */
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1; /* Ensure the image is fully visible */
    width: 100%; /* Full width of the div */
    height: 100%; /* Match the height of the div */
    z-index: -1; /* Place the background behind content */
}

/* Styling for the random center code */
.random-center-code {
    font-family: 'Arial Black', sans-serif;
    font-size: 20px;
    font-weight: normal; /* Ensure the font weight is not overwritten */
    padding: 20px;
    background-color: ; /* Example background color */
    color: black;
    border-radius: 10px;
    position: absolute;
    top: 50%; /* Adjust the vertical position */
    left: 50%; /* Adjust the horizontal position */
    transform: translate(-50%, -50%); /* Center it perfectly */
}

/* Custom positioning classes */
.top-left {
    top: 200px;
    left: 20px;
}

.top-right {
    top: 515px;
    right: 75px;
}



    </style>
</head>

<body>
    <div class="a4-div">
        <span style="  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: -63px;">



        









        
        
        
        
        
        


<style>
    .registry-box {
        font-family: Verdana;
        color: black;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        display: flex;
        align-items: center;
        gap: -5px;
        letter-spacing: -1.5px; /* ✅ लेटर स्पेस हटाने के लिए */
    }
    .line {
        display: inline-block;
        width: 25px; /* यह लाइन DL और N के बीच होगी */
        height: 1px;
        background: black;
    }
    .long-line {
        display: inline-block;
        width: 20px;
        height: 1px;
        background: black;
        margin: 0 5px;
    }
</style>
<div class='registry-box' style='top: 100px; left: 111px;'>रजिस्ट्री सं. <span class='dl'>डीएल</span><span class='line'></span><span class='n'>(एन)</span> 91/${data.registration_number}/<span class='year'>2004</span><span class='long-line'></span><span class='year'>25</span></div><div class='registry-box' style='top: 100px; left: 581px;'>REGISTERED No. <span class='dl'>DL</span><span class='line'></span><span class='n'>(N)</span> 91/${data.registration_number}/<span class='year'>2004</span><span class='long-line'></span><span class='year'>25</span></div>

















<div style='font-size: 16px; font-family: Arial; color: black; position: absolute; top: 322px; left: 50%; transform: translateX(-50%); text-align: center;'>सी.जी. डी.एल. सा.-14032025-790${data.certificate_number}</div><div style='font-size: 16px; font-family: Arial; color: black; position: absolute; top: 345px; left: 50%; transform: translateX(-50%); text-align: center;'>CG-DL-W-14032025-790${data.certificate_number}</div>







<div style='font-family: Arial; color: black; font-size: 19px; font-weight: bold; letter-spacing: 0px; text-align: center; width: 100%; position: absolute; top: 378px; left: 0;'>साप्ताहिक / WEEKLY.</div>
<div style='font-family: Arial; color: black; font-size: 19px; font-weight: bold; letter-spacing: 0px; text-align: center; width: 100%; position: absolute; top: 405px; left: 0;'>प्राधिकार से प्रकाशित</div>



<div style='font-family: Arial; color: black; font-size: 19px; font-weight: bold; letter-spacing: 0px; position: absolute; top: 435px; left: 50%; transform: translateX(-50%); text-align: center;'>PUBLISHED BY AUTHORITY</div>


<div style='font-family: Arial; color: black; font-size: 19px; font-weight: bold; letter-spacing: -0.7px; position: absolute; top: 475px; left: 111px;'>सं. ${data.sr_no}]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; नई दिल्ली, शुक्रवार, मार्च 14 &mdash;&mdash; मार्च 21, 2025 (आश्विन 14, 1947)</div><div style='font-family: Arial; color: black; font-size: 19px; font-weight: bold; letter-spacing: -0.7px; position: absolute; top: 505px; left: 111px;'><b>No. ${data.sr_no}]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New Delhi, Friday, March 14 &mdash;&mdash; March 21, 2025 (ASVINA 14, 1947)</b></div>






<div style='font-family: Arial; color: black; font-size: 18px; font-weight: bold; letter-spacing: 0px;  position: absolute; top: 545px; left: 169px;'>इस भाग में भिन्न पृष्ठ संख्या दी जाती है जिससे कि यह अलग संकलन के रूप में रखा जा सके।</div>

<div style='font-family: Arial; color: black; font-size: 17px; font-weight: bold; letter-spacing: 0px;  position: absolute; top: 572px; left: 129px;'>(Separate paging is given to this Part in order that it may be filed as a separate compilation)</div>



<div style='font-family: Arial; color: black; font-size: 17px; font-weight: bold; letter-spacing: 0px; position: absolute; top: 610px; left: 50%; transform: translateX(-50%); text-align: center;'>भाग IV</div><div style='font-family: Arial; color: black; font-size: 17px; font-weight: bold; letter-spacing: 0px; position: absolute; top: 635px; left: 50%; transform: translateX(-50%); text-align: center;'>[PART IV]</div>
<div style='font-family: Arial; color: black; font-size: 17px; font-weight: bold; letter-spacing: 0px; position: absolute; top: 660px; left: 239px;'>[गैर-सरकारी व्यक्तियों और गैर-सरकारी संस्थाओं के विज्ञापन और सूचनाएं]</div><div style='font-family: Arial; color: black; font-size: 17px; font-weight: bold; letter-spacing: 0px; position: absolute; top: 695px; left: 179px;'>[Advertisements and Notices issued by Private Individuals and Private Bodies]</div>





<div style='font-family: Arial; color: black; font-size: 12.5px; 
            border: 4px solid black; padding: 10px; width: 344px; height: 167px;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            position: absolute; top: 730px; left: 29.9%; transform: translateX(-50%);
            overflow: hidden;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOTICE <br><br>
&nbsp;&nbsp;&nbsp;&nbsp;NO LEGAL RESPONSIBILITY IS ACCEPTED FOR THE PUBLICATION OF ADVERTISEMENTS/PUBLIC NOTICES IN THIS PART OF THE GAZETTE OF INDIA.
PERSONS NOTIFYING THE ADVERTISEMENTS/PUBLIC NOTICES WILL REMAIN SOLELY RESPONSIBLE FOR THE LEGAL CONSEQUENCES AND ALSO FOR ANY OTHER MISREPRESENTATION ETC.<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BY ORDER&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;𝒞𝑜𝓃𝓉𝓇𝑜𝓁𝓁𝑒𝓇 𝑜𝒻 𝒫𝓊𝒷𝓁𝒾𝒸𝒶𝓉𝒾𝑜𝓃</div>




<style>
    .highlighted {
        background-color: yellow; 
        padding: 2px 4px;
        font-weight: bold; /* 🔥 सिर्फ नाम को बोल्ड रखें */
        white-space: nowrap;
    }
    .name-box {
        font-family: Arial;
        color: black;
        font-size: 13.5px;
        padding: 20px;
        width: 344px;
        max-width: 344px;
        border: 0px solid black;
        position: absolute;
        top: 925px;
        left: 29.9%;
        transform: translateX(-50%);
        word-wrap: normal;
        overflow: hidden;
        text-align: justify;
    }
</style><div class='name-box'><p style='text-align: center;'><b>CHANGE OF NAME</b></p>
<p>I hitherto known as <span class='highlighted'>${data.name}</span>, 
S/O ${data.father_husband_name}, ${data.house_no}, ${data.village},   Post ${data.mohalla} Dist ${data.district} , residing at ${data.house_no}, ., District ${data.district} , ${data.state}-274304, have changed my name and shall hereafter be known as 
<span class='highlighted'>${data.new_name} </span>.</p>

<p>It is certified that I have complied with other legal requirements in this connection.</p>

<p style='text-align: right;'><b>${data.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
[Signature (in existing old name)]</p></div>







<div style='font-family: Arial; color: black; font-size: 13.5px; 
            border: 0px solid black; padding: 10px; width: 358px; height: 220px;
             line-height: 1.6; position: absolute; 
            top: 705px; left: 70.9%; transform: translateX(-50%);
            overflow: hidden;'><style>
    .highlighted {
        background-color: yellow; 
        padding: 2px 4px;
        font-weight: bold; /* 🔥 सिर्फ नाम को बोल्ड रखें */
        white-space: nowrap;
    }
</style>
<p>I hitherto known as MANOJ MISHRA, 
S/O <span style='font-weight: bold;'>ANIL SHARMA</span>, residing at 72/A, Gorakhpur, Delhi District, Bihar - 236543, 
have changed my name and shall hereafter be known as 
ANIL KUMAR.</p>

<p>It is certified that I have complied with other legal requirements in this connection.</p>
<p style='text-align: right;'><b>MANOJ MISHRA</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
[Signature (in existing old name)]</p></div>


<div style='font-family: Arial; color: black; font-size: 13.5px; 
            border: 0px solid black; padding: 10px; width: 358px; height: 220px;
             line-height: 1.6; position: absolute; 
            top: 930px; left: 70.9%; transform: translateX(-50%);
            overflow: hidden;'><style>
    .highlighted {
        background-color: yellow; 
        padding: 2px 4px;
        font-weight: bold; /* 🔥 सिर्फ नाम को बोल्ड रखें */
        white-space: nowrap;
    }
</style>
<p>I hitherto known as ${data.name}, 
S/O ${data.father_husband_name} , residing at ${data.house_no}, ${data.village}, ${data.mohalla}, ${data.district} , ${data.state} - ${data.pin_code}, 
have changed my name and shall hereafter be known as 
${data.new_name} .</p>

<p>It is certified that I have complied with other legal requirements in this connection.</p>
<p style='text-align: right;'><b>${data.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
[Signature (in existing old name)]</p></div>









<div style='font-family: Arial; color: black; font-size: 13.5px;  
            position: absolute; top: 1189px; left: 111px; text-transform: uppercase;'>19&mdash;270 GI/2025</div>



<div style='font-family: Arial; color: black; font-size: 13.5px;  
            position: absolute; top: 1189px; left: 481px; text-transform: uppercase;'>${Math.floor(Math.random()*9999)}</div>





















<style>
    /* Screen Styles */
    .a4-div {
        font-family: Arial, sans-serif;
        font-size: 29px; /* Default font size for screen */
        font-weight: bold;
        color: rgb(0, 0, 0);
        position: absolute;
        top: 10px;
        left: 60px;
    }

    .btns {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .btn {
        margin: 10px;
        padding: 12px 25px;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        border-radius: 50px;
        outline: none;
        transition: all 0.3s ease;
        display: inline-block;
    }

    .advanced-btn {
        background: linear-gradient(135deg, #6a11cb, #2575fc);
        color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .advanced-btn:hover {
        background: linear-gradient(135deg, #2575fc, #6a11cb);
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }

    /* Print Styles */
    @media print {
        /* Hide Buttons */
        .btns {
            display: none !important;
        }

       /* Ensure consistent text size for printing */
.a4-div {
    font-size: 29px !important; /* Ensure text size is consistent in print */
    font-weight: bold !important;
    color: rgb(0, 0, 0) !important;
    position: absolute !important;
    top: 0px !important;
    left: 0px !important;
  
}


        
        @page {
            size: auto; /* Ensure A4 size */
            margin: 25; /* Standard margin for printing */
        }

        /* Prevent scaling issues */
        html, body {
            width: 100px;
            height: 100%;
            overflow: visible;
        }
    }
</style>

<style>
    .btns {
        position: absolute; /* पेज पर फ्लोटिंग पोजीशन */
        top: 1200px; /* ऊपर से 20px मार्जिन */
        right: +400px; /* दाईं ओर 20px मार्जिन */
        display: flex; /* बटनों को एक लाइन में रखने के लिए */
        gap: 10px; /* बटनों के बीच 10px गैप */
    }

    .btn {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .advanced-btn {
        background: linear-gradient(135deg, #ff7e5f, #feb47b);
        color: white;
    }
</style>

<div class="btns">
    <button id="homeBtn" class="btn advanced-btn" onclick="window.location.href='index.php'">Home</button>
    <button id="printBtn" class="btn advanced-btn" onclick="printFn()">Print</button>
</div>

<script>
    // Function to handle printing
    function printFn() {
        window.print();
    }
</script>
`


  
  const newTab = window.open('', '_blank');
  if (!newTab) {
    alert('Please allow Pop-up to Generate !!! reattemp in 10 second !!!');
    return setTimeout(() => feed_data(data), 10000);
  }


  switch(data.type) {
    case "caste":
      newTab.document.write(cast_template);
      break;
    case "domicile":
      newTab.document.write(template);
      break;
    case "gazette":
      newTab.document.write(gazette);
      break;
    default:
      newTab.document.write(cast_template);
  }
  setTimeout(() => {
    newTab.window.print();
  }, 2000)
}
