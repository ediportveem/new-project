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
  const newTab = window.open('', '_blank');
  if (!newTab) {
    alert('Please allow Pop-up to Generate !!! reattemp in 10 second !!!');
    return setTimeout(() => feed_data(data), 10000);
  }
  data.type == "caste" ? newTab.document.write(cast_template) : newTab.document.write(template);
  setTimeout(() => {
    newTab.window.print();
  }, 2000)
}
