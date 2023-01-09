import React,{useState,useEffect} from 'react'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import {Link,useNavigate} from "react-router-dom"
import { Formik } from "formik"
import axios from 'axios'
import { useTranslation} from 'react-i18next';
import { logDOM } from '@testing-library/react'

const Persondetails = ({setVisibleee}) => {
  const [countrydata, setCountryData] = useState({
    countryName: '',
    countryCode: ''
  })
  const [countryerror, setCountryError] = useState("")
  let navigate=useNavigate()
  const [t,i18n] = useTranslation()
  let language= i18n.language;
  console.log(language);

 const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCountryData({
            countryName: data.country_name,
            countryCode: data.country_calling_code
        });
    }).catch((error) => {
        setCountryError(error)
    });
};

useEffect(()=> {
    getGeoInfo()
},[])

let handleSubmit = async(data) => {
   console.log(data);
//    await axios.post()
}


    
  return (
    <div className="form-screen overflow-auto ">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
            {t('personaldetails')}
                <div className="close" onClick={()=> setVisibleee(false)}>
                    <span >
                        <CloseIcon />
                    </span>
                </div>
            </h4>
            <Formik
                    initialValues={{ name:"", phone:"", address:"", email: '',accept:false }}
                    validate={values => {
                        const errors = {};
                        // validation name
                        if (!values.name) {
                            if(language == "en"){
                                errors.name = 'name is required';
                            }
                             else if (language == "ar"){
                                errors.name = 'الاسم مطلوب';
                            }
                           
                        }
                        else if (values.name.length > 50) {
                            if(language == "en"){
                                errors.name = 'max length must be 50 characters ';
                            }
                             else if (language == "ar"){
                                errors.name = 'اقصى عدد للحروف يجب انا يكون 50 حرف';
                            }
                            
                        }
                        //validation phone
                        if (!values.phone) {
                            if(language == "en"){
                                errors.phone = 'phone is required';
                            }
                             else if (language == "ar"){
                                errors.phone = 'رقم الموبايل مطلوب';
                            }
                                
                        }
                        
                        else if (isNaN(values.phone)) {
                            if(language == "en"){
                                errors.phone = 'Invalid phone number';
                            }
                             else if (language == "ar"){
                                errors.phone = 'رقم الموبايل غير صحيح';
                            }
                            
                        }
                        else if (values.phone.length > 16) {
                            if(language == "en"){
                                errors.phone = 'max length must be 16 characters';
                            }
                             else if (language == "ar"){
                                errors.phone = 'اقصى عدد للحروف يجب انا يكون 50 حرف';
                            }
                            
                        }
                        
                        // validation address
                        if (!values.address) {
                            if(language == "en"){
                                errors.address = 'address is required';
                            }
                             else if (language == "ar"){
                                errors.address = 'العنوان مطلوب';
                            }
                           
                        }
                        else if (values.address.length > 50) {
                            if(language == "en"){
                                errors.address = 'max length must be 50 characters';
                            }
                             else if (language == "ar"){
                                errors.address = 'اقصى عدد للحروف يجب انا يكون 50 حرف';
                            }
                            
                        }
                        //validation email
                        if (values.email) {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    if(language == "en"){
                                        errors.email = 'Invalid email address';
                                    }
                                    else if (language == "ar"){
                                        errors.email = 'البريد الالكترونى غير صحيح';

                                    }
                                }
                        } 
                         
                        // validation checkbox
                        if (!values.accept) {
                            if(language == "en"){
                                errors.accept = 'checked is required';
                            }
                             else if (language == "ar"){
                                errors.accept = 'الموافقه مطلوبه';
                            }
                           
                        } 
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        handleSubmit({"user-details":JSON.stringify(values),"cart-details":localStorage.getItem("cart"),"location-coordinates":sessionStorage.getItem("location")})
                        setSubmitting(false);
                        navigate("/")
                        }, 400);
                    }}
                    >
                     {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    
                }) => (
                    // action="/en?language=en" method="post"
            <form  id="orderplacement-form" accept-charset="UTF-8" onSubmit={handleSubmit}>
                <div className="js-form-item form-item js-form-type-textfield form-item-name js-form-item-name form-no-label">
                    <input autocomplete="off" data-drupal-selector="edit-name" type="text" id="edit-name" name="name" size="60" placeholder={t('form-name')} aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.name} 
                    className={errors.name && touched.name && errors.name ? "form-text required error-border" : "form-text required"} />
                </div> 
                <div className='validation-box'>
                    <span className='error-validation'>{errors.name && touched.name && errors.name}</span>
                </div>
                <div className="js-form-item form-item js-form-type-select form-item-countrycode js-form-item-countrycode form-no-label">
                    <select data-drupal-selector="edit-countrycode" id="edit-countrycode" name="countrycode" className="form-select required" required="required" aria-required="true" >
                        {
                            language == "en" ? (
                                <>
                                <option value="">- Select Country -</option>
                       <option value="" selected="selected">{countrydata.countryName}</option>
                       <option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option>
                       <option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option>
                       <option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option>
                       <option value="CO">Colombia</option><option value="KM">Comoros</option>
                       <option value="CG">Congo</option><option value="CD">Democratic Republic of the Congo</option>
                       <option value="CK">Cook Islands</option><option value="CR">Costa Rica</option>
                       <option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option>
                       <option value="CY">Cyprus</option><option value="CZ">Czech Republic</option>
                       <option value="CI">Cote d'Ivoire</option><option value="DK">Denmark</option>
                       <option value="DJ">Djibouti</option><option value="DM">Dominica</option>
                       <option value="DO">Dominican Republic</option><option value="EC">Ecuador</option>
                       <option value="EG">Egypt</option><option value="SV">El Salvador</option>
                       <option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option>
                       <option value="EE">Estonia</option><option value="ET">Ethiopia</option>
                       <option value="FK">Falkland Islands (Malvinas)</option>
                       <option value="FO">Faroe Islands</option><option value="FJ">Fiji</option>
                       <option value="FI">Finland</option><option value="FR">France</option>
                       <option value="GF">French Guiana</option><option value="PF">French Polynesia</option>
                       <option value="TF">French Southern Territories</option><option value="GA">Gabon</option>
                       <option value="GM">Gambia</option><option value="GE">Georgia</option>
                       <option value="DE">Germany</option><option value="GH">Ghana</option>
                       <option value="GI">Gibraltar</option><option value="GR">Greece</option>
                       <option value="GL">Greenland</option><option value="GD">Grenada</option>
                       <option value="GP">Guadeloupe</option><option value="GU">Guam</option>
                       <option value="GT">Guatemala</option><option value="GG">Guernsey</option>
                       <option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option>
                       <option value="GY">Guyana</option><option value="HT">Haiti</option>
                       <option value="HM">Heard Island and McDonald Islands</option>
                       <option value="VA">Holy See (Vatican City State)</option>
                       <option value="HN">Honduras</option><option value="HK">Hong Kong</option>
                       <option value="HU">Hungary</option><option value="IS">Iceland</option>
                       <option value="IN">India</option><option value="ID">Indonesia</option>
                       <option value="IR">Iran, Islamic Republic of</option><option value="IQ">Iraq</option>
                       <option value="IE">Ireland</option><option value="IM">Isle of Man</option>
                       <option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option>
                       <option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option>
                       <option value="KZ">Kazakhstan</option><option value="KE">Kenya</option>
                       <option value="KI">Kiribati</option><option value="KP">Korea, Democratic People's Republic of</option>
                       <option value="KR">Korea, Republic of</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the Former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option>
                       <option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine, State of</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="RE">Reunion</option>
                       <option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten (Dutch part)</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">Tajikistan</option><option value="TZ">United Republic of Tanzania</option><option value="TH">Thailand</option>
                       <option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VG">British Virgin Islands</option><option value="VI">US Virgin Islands</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                       </>
                            ):(
                                <>
                                <option value="">- اختر الدولة -</option><option value="" selected="selected">{countrydata.countryName}</option><option value="AF">أفغانستان</option><option value="AL">ألبانيا</option><option value="DZ">الجزائر</option><option value="AS">ساموا الأمريكية</option><option value="AD">أندورا</option><option value="AO">أنغولا</option><option value="AI">أنغويلا</option><option value="AQ">القطب الجنوبي</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">أرمينيا</option><option value="AW">أروبا</option><option value="AU">أستراليا</option><option value="AT">النمسا</option><option value="AZ">أذربيجان</option><option value="BS">الباهامس</option><option value="BH">البحرين</option><option value="BD">بنغلادش</option><option value="BB">باربادوس</option><option value="BY">بيلاروسيا</option><option value="BE">بلجيكا</option><option value="BZ">بيليز</option>
                                <option value="BJ">بينين</option><option value="BM">برمودا</option><option value="BT">بوتان</option><option value="BO">بوليفيا</option><option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">بوتسوانا</option><option value="BV">جزيرة بوفيه</option><option value="BR">البرازيل</option><option value="IO">إقليم المحيط الهندي البريطاني</option><option value="BN">Brunei Darussalam</option><option value="BG">بلغاريا</option><option value="BF">بوركينا فاسو</option><option value="BI">بوروندي</option><option value="KH">كمبوديا</option><option value="CM">الكاميرون</option><option value="CA">كندا</option><option value="CV">الرأس الأخضر</option><option value="KY">جزر الكايمان</option><option value="CF">جمهورية إفريقيا الوسطى</option><option value="TD">تشاد</option><option value="CL">تشيلي</option><option value="CN">الصين</option><option value="CX">جزيرة الكريسماس</option><option value="CC">جزر الكوكوس</option><option value="CO">كولومبيا</option><option value="KM">جزر القمر</option><option value="CG">Congo</option><option value="CD">Democratic Republic of the Congo</option><option value="CK">جزر كووك</option><option value="CR">كوستاريكا</option><option value="HR">كرواتيا</option><option value="CU">كوبا</option><option value="CW">Curacao</option><option value="CY">قبرص</option><option value="CZ">Czech Republic</option><option value="CI">Cote d'Ivoire</option><option value="DK">الدانمارك</option><option value="DJ">جيبوتي</option><option value="DM">دومينيكا</option><option value="DO">جمهورية الدومينيكان</option><option value="EC">الإكوادور</option><option value="EG">مصر</option><option value="SV">السلفادور</option><option value="GQ">غينيا الإستوائية</option><option value="ER">اريتريا</option><option value="EE">إستونيا</option><option value="ET">إثيوبيا</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">جزر فارو</option><option value="FJ">فيجية</option><option value="FI">فنلندا</option><option value="FR">فرنسا</option><option value="GF">غويانا الفرنسية</option><option value="PF">بولينيزيا الفرنسية</option>
                                <option value="TF">مناطق فرنسا الجنوبية</option><option value="GA">الغابون</option><option value="GM">غامبيا</option><option value="GE">جورجيا</option><option value="DE">ألمانيا</option><option value="GH">غانا</option><option value="GI">جبل طارق</option><option value="GR">اليونان</option><option value="GL">غرينلاند</option><option value="GD">غرينادا</option><option value="GP">غواديلوب</option><option value="GU">غوام</option><option value="GT">غواتيمالا</option><option value="GG">غيرنسي</option><option value="GN">غينيا</option><option value="GW">غينيا-بيساو</option><option value="GY">غوايانا</option><option value="HT">هاييتي</option><option value="HM">Heard Island and McDonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">الهندوراس</option><option value="HK">Hong Kong</option><option value="HU">هنغاريا</option><option value="IS">آيسلندا</option><option value="IN">الهند</option><option value="ID">أندونيسيا</option><option value="IR">Iran, Islamic Republic of</option><option value="IQ">العراق</option><option value="IE">ايرلندا</option><option value="IM">جزيرة مان</option><option value="IL">إسرائيل</option><option value="IT">إيطاليا</option><option value="JM">جامايكا</option><option value="JP">اليابان</option><option value="JE">جيرسي</option><option value="JO">الأردن</option><option value="KZ">كازاخستان</option><option value="KE">كينيا</option><option value="KI">كيريباتي</option><option value="KP">Korea, Democratic People's Republic of</option><option value="KR">Korea, Republic of</option><option value="KW">الكويت</option>
                                <option value="KG">قيرغيزستان</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">لاتفيا</option><option value="LB">لبنان</option><option value="LS">ليسوتو</option><option value="LR">ليبيريا</option><option value="LY">ليبيا</option><option value="LI">ليختنشتاين</option><option value="LT">ليتوانيا</option><option value="LU">لكسمبورغ</option><option value="MO">Macao</option><option value="MK">Macedonia, the Former Yugoslav Republic of</option><option value="MG">مدغشقر</option><option value="MW">الملاوي</option><option value="MY">ماليزيا</option><option value="MV">المالديف</option><option value="ML">مالي</option><option value="MT">مالطا</option><option value="MH">جزر مارشال</option><option value="MQ">المارتينيك</option><option value="MR">موريتانيا</option><option value="MU">موريشيوس</option><option value="YT">مايوت</option><option value="MX">المكسيك</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">موناكو</option><option value="MN">منغوليا</option><option value="ME">الجبل الأسود</option><option value="MS">مونتسيرات</option><option value="MA">المغرب</option><option value="MZ">موزمبيق</option><option value="MM">Myanmar</option><option value="NA">ناميبيا</option><option value="NR">ناورو</option><option value="NP">نيبال</option><option value="NL">هولندا</option><option value="NC">كاليدونيا الجديدة</option><option value="NZ">نيوزيلندا</option><option value="NI">نيكاراغوا</option><option value="NE">النيجر</option><option value="NG">نيجيريا</option><option value="NU">نيوي</option><option value="NF">جزيرة نورفولك</option><option value="MP">جزر ماريانا الشمالية</option><option value="NO">النرويج</option><option value="OM">عمان</option><option value="PK">باكستان</option>
                                <option value="PW">بالاو</option><option value="PS">Palestine, State of</option><option value="PA">بنما</option><option value="PG">بابوا غينيا الجديدة</option><option value="PY">باراجواي</option><option value="PE">البيرو</option><option value="PH">الفليبين</option><option value="PN">Pitcairn</option><option value="PL">بولندا</option><option value="PT">البرتغال</option><option value="PR">بورتو ريكو</option><option value="QA">قطر</option><option value="RO">رومانيا</option><option value="RU">Russian Federation</option><option value="RW">رواندا</option><option value="RE">Reunion</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">ساموا</option><option value="SM">سان مارينو</option><option value="ST">Sao Tome and Principe</option><option value="SA">المملكة العربية السعودية</option><option value="SN">السنغال</option><option value="RS">صربيا</option><option value="SC">سيشل</option><option value="SL">سيراليون</option><option value="SG">سنغافورة</option><option value="SX">Sint Maarten (Dutch part)</option><option value="SK">سلوفاكيا</option><option value="SI">سلوفينيا</option><option value="SB">جزر سليمان</option><option value="SO">الصومال</option><option value="ZA">جنوب أفريقيا</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">إسبانيا</option><option value="LK">سيريلانكا</option><option value="SD">السودان</option>
                                <option value="SR">سورينام</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">السويد</option><option value="CH">سويسرا</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">طاجكستان</option><option value="TZ">United Republic of Tanzania</option><option value="TH">تايلاند</option><option value="TL">تيمور الشرقية</option><option value="TG">توغو</option><option value="TK">توكيلاو</option><option value="TO">تونجا</option><option value="TT">Trinidad and Tobago</option><option value="TN">تونس</option><option value="TR">تركيا</option><option value="TM">تركمانستان</option><option value="TC">Turks and Caicos Islands</option><option value="TV">توفالو</option><option value="UG">أوغندا</option><option value="UA">أوكرانيا</option><option value="AE">الإمارات العربية المتحدة</option><option value="GB">المملكة المتحدة</option><option value="US">الولايات المتحدة الأمريكية</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">أوروغواي</option><option value="UZ">أوزبكستان</option><option value="VU">فانواتو</option><option value="VE">فنزويلا</option><option value="VN">Viet Nam</option><option value="VG">الجزر العذراء البريطانية</option><option value="VI">US Virgin Islands</option><option value="WF">Wallis and Futuna</option><option value="EH">الصحراء الغربية</option><option value="YE">اليمن</option><option value="ZM">زامبيا</option><option value="ZW">زيمبابوي</option>
                                </>
                            )
                        }
                       
                       
                    </select>
                </div> 
                <div className="js-form-item form-item js-form-type-tel form-item-phone js-form-item-phone">
                    <label for="edit-phone" className="js-form-required form-required">{countrydata.countryCode}</label>
                    <input autocomplete="off" data-drupal-selector="edit-phone" type="tel" id="edit-phone" name="phone" size="30" placeholder={t('form-phone')}  aria-required="true" onChange={handleChange} onBlur={handleBlur}  
                    value={values.phone} className={errors.phone && touched.phone && errors.phone ? "form-tel required error-border" : "form-tel required"} />
                </div>
                <div className='validation-box'>
                  <span className='error-validation'>{errors.phone && touched.phone && errors.phone}</span>
                </div>
                <div className="js-form-item form-item js-form-type-textfield form-item-address js-form-item-address form-no-label">
                    <input autocomplete="off" data-drupal-selector="edit-address" type="text" id="edit-address" name="address"  size="60" placeholder={t('form-address')} aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.address} className={errors.address && touched.address && errors.address ? "form-text required error-border" : "form-text required"} />
                </div>
                <div className='validation-box'>
                   <span className='error-validation'>{errors.address && touched.address && errors.address}</span>
                </div>
                <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
                    <input autocomplete="off" data-drupal-selector="edit-email" id="edit-email" name="email" size="30"  placeholder={t('form-email')} onChange={handleChange}
                     onBlur={handleBlur} value={values.email} className={errors.email && touched.email && errors.email ? "form-email error-border" : "form-email"} />
                </div>
                <div className='validation-box'>
                    <span className='error-validation'>{errors.email && touched.email && errors.email}</span>
                </div>
                <div className="js-form-item form-item js-form-type-textarea form-item-instructions js-form-item-instructions form-no-label">
                    <div>
                        <textarea autocomplete="off" data-drupal-selector="edit-instructions" id="edit-instructions" name="instructions" rows="5" cols="60" placeholder="Instructions" className="form-textarea"></textarea>
                    </div>
                </div>
                <div className="js-form-item form-item js-form-type-checkbox form-item-accept js-form-item-accept">
                    <input data-drupal-selector="edit-accept" type="checkbox" id="edit-accept" name="accept" aria-required="true" onChange={handleChange}
                     onBlur={handleBlur} value={values.accept} className={errors.accept && touched.accept && errors.accept ? "accept form-checkbox required error-border" : "accept form-checkbox required"} />
                    <label for="edit-accept" className="option js-form-required form-required"> {t('condition')}</label>
                </div>
                <div className='validation-box'>
                    <span className='error-validation'>{errors.accept && touched.accept && errors.accept}</span>
                </div>
                <input data-drupal-selector="edit-language" type="hidden" name="language" value={language}></input>

                <div className="placeOrder bg-white w-full">
                    <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value={t('placeorder')} className="button button--primary js-form-submit form-submit" disabled={isSubmitting} />
                </div>
            </form>
            )}
            </Formik>
        </div>
    </div> 
  )
}

export default Persondetails




        