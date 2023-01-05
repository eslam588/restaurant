import React,{useState,useEffect} from 'react'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import {Link,useNavigate} from "react-router-dom"
import { Formik } from "formik"
import axios from 'axios'


const Persondetails = () => {
  const [countrydata, setCountryData] = useState({
    countryName: '',
    countryCode: ''
  })
  const [countryerror, setCountryError] = useState("")
  let navigate=useNavigate()


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

    
console.log(countrydata);

    
  return (
    <div className="form-screen overflow-auto ">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
                Personal details
                <Link to="/" className="close">
                    <span >
                        <CloseIcon />
                    </span>
                </Link>
            </h4>
            <Formik
                    initialValues={{ name:"", phone:"", address:"", email: '',accept:false }}
                    validate={values => {
                        const errors = {};
                        // validation name
                        if (!values.name) {
                            errors.name = 'name is required';
                        }
                        else if (values.name.length > 50) {
                            errors.name = 'max length must be 50 characters ';
                        }
                        //validation phone
                        if (!values.phone) {
                                errors.phone = 'phone is required';
                        }
                        // else if (/[0-9]{9,16}$/.test(values.phone)) {
                        //     errors.phone = 'Invalid phone number';
                        // }
                        else if (values.phone.length > 16) {
                            errors.phone = 'max length must be 16 characters';
                        }
                        
                        // validation address
                        if (!values.address) {
                            errors.address = 'address is required';
                        }
                        else if (values.address.length > 50) {
                            errors.address = 'max length must be 50 characters';
                        }
                        //validation email
                        // if (!values.email) {
                        // errors.email = 'input is required';
                        // } 
                        // else if (values.email.length > 50) {
                        //     errors.email = 'max length must be 50 characters';
                        //     }
                        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        //     errors.email = 'Invalid email address';
                        // }
                        // validation checkbox
                        if (!values.accept) {
                            errors.accept = 'checked is required';
                        } 
                        console.log(errors);
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        
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
                    <input autocomplete="off" data-drupal-selector="edit-name" type="text" id="edit-name" name="name" size="60" placeholder="Name*" aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.name} 
                    className={errors.name && touched.name && errors.name ? "form-text required error-border" : "form-text required"} />
                </div> 
                <div className='validation-box'>
                    <span className='error-validation'>{errors.name && touched.name && errors.name}</span>
                </div>
                <div className="js-form-item form-item js-form-type-select form-item-countrycode js-form-item-countrycode form-no-label">
                    <select data-drupal-selector="edit-countrycode" id="edit-countrycode" name="countrycode" className="form-select required" required="required" aria-required="true" >
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
                       
                    </select>
                </div> 
                <div className="js-form-item form-item js-form-type-tel form-item-phone js-form-item-phone">
                    <label for="edit-phone" className="js-form-required form-required">{countrydata.countryCode}</label>
                    <input autocomplete="off" data-drupal-selector="edit-phone" type="tel" id="edit-phone" name="phone" size="30" placeholder="Mobile number*"  aria-required="true" onChange={handleChange} onBlur={handleBlur}  
                    value={values.phone} className={errors.phone && touched.phone && errors.phone ? "form-tel required error-border" : "form-tel required"} />
                </div>
                <div className='validation-box'>
                  <span className='error-validation'>{errors.phone && touched.phone && errors.phone}</span>
                </div>
                <div className="js-form-item form-item js-form-type-textfield form-item-address js-form-item-address form-no-label">
                    <input autocomplete="off" data-drupal-selector="edit-address" type="text" id="edit-address" name="address"  size="60" placeholder="Address*" aria-required="true" onChange={handleChange} onBlur={handleBlur} value={values.address} className={errors.address && touched.address && errors.address ? "form-text required error-border" : "form-text required"} />
                </div>
                <div className='validation-box'>
                   <span className='error-validation'>{errors.address && touched.address && errors.address}</span>
                </div>
                <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
                    <input autocomplete="off" data-drupal-selector="edit-email" id="edit-email" name="email" size="30"  placeholder="E-mail address" onChange={handleChange}
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
                    <label for="edit-accept" className="option js-form-required form-required"> I acknowledge that I have read and agree to the Terms and conditions</label>
                </div>
                <div className='validation-box'>
                    <span className='error-validation'>{errors.accept && touched.accept && errors.accept}</span>
                </div>
                <div className="placeOrder bg-white w-full">
                    <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Place order" className="button button--primary js-form-submit form-submit" disabled={isSubmitting} />
                </div>
            </form>
            )}
            </Formik>
        </div>
    </div> 
  )
}

export default Persondetails



//value="1"

{/* <input data-drupal-selector="edit-language" type="hidden" name="language" value="en" />
    <input data-drupal-selector="edit-cart" type="hidden" name="cart" value="" />
    <input data-drupal-selector="edit-subtotal" type="hidden" name="subtotal" value="" />
    <input data-drupal-selector="edit-delivery-charges" type="hidden" name="delivery_charges" value="" />
    <input data-drupal-selector="edit-total" type="hidden" name="total" value="" />
    <input data-drupal-selector="edit-coordinates" type="hidden" name="coordinates" value="" />
    
    <input autocomplete="off" data-drupal-selector="form-nfmyqkfybwculubpkwtftkqdjqrbehurvp2fr6yp0ro" type="hidden" name="form_build_id" value="form-NfmYQKfybwcUluBPKwtfTkqDJQrBeHURVP2fr6Yp0Ro" />
    <input data-drupal-selector="edit-orderplacement-form" type="hidden" name="form_id" value="orderplacement_form" /> */}



            <select data-drupal-selector="edit-countrycode" id="edit-countrycode" name="countrycode" class="form-select required" required="required" aria-required="true"><option value="" selected="selected">- Select Country -</option><option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Democratic Republic of the Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="CI">Cote d'Ivoire</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran, Islamic Republic of</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KP">Korea, Democratic People's Republic of</option><option value="KR">Korea, Republic of</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the Former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine, State of</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="RE">Reunion</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten (Dutch part)</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">Tajikistan</option><option value="TZ">United Republic of Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VG">British Virgin Islands</option><option value="VI">US Virgin Islands</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select>
