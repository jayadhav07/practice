import React, { useEffect, useState } from "react";
import KycHeader from "../Components/KycHeader";
import "../Style/KYC.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countries = [
  "Select Country",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina	",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso	",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic	",
  "Chad",
  "Chile",
  "China",
  "Colombia	",
  "Comoros",
  "Congo (Congo-Brazzaville)	",
  "Costa Rica	",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark	",
  "Djibouti	",
  "Dominica",
  "Dominican Republic	",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea	",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau	",
  "Guyana",
  "Haiti",
  "Holy See	",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar ",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand	",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea	",
  "North Macedonia	",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State	",
  "Panama	",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis	",
  "Saint Lucia	",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino	",
  "Sao Tome and Principe	",
  "Saudi Arabia	",
  "Senegal",
  "Serbia	",
  "Seychelles",
  "Sierra Leone	",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa	",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste	",
  "Togo",
  "Tonga",
  "Trinidad and Tobago	",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates	",
  "United Kingdom",
  "United States of America	",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  // Add more countries here...
];

const currencies = [
  "Select Country",
  "Afghanistan-Afghani",
  "Albania-Lek",
  "Algeria-Dinar",
  "Andorra-Euro",
  "Angola-New Kwanza",
  "Antigua and Barbuda-East Caribbean dollar",
  "Argentina-Peso",
  "Armenia-Dram",
  "Australia-Australian dollar",
  "Austria-Euro ",
  "Azerbaijan-Manat",
  "Bahrain-Bahrain dinar",
  "Bangladesh-Taka",
  "Barbados-Barbados dollar",
  "Belarus-Belorussian ruble",
  "Belgium-Euro ",
  "Belize-Belize dollar",
  "Benin-CFA Franc",
  "Bhutan-Ngultrum",
  "Bolivia-Boliviano",
  "Bosnia and Herzegovina-Convertible Mark",
  "Botswana-Pula",
  "Brazil-Real",
  "Brunei-Brunei dollar",
  "Bulgaria-Lev",
  "Burkina Faso-CFA Franc",
  "Burundi-Burundi franc",
  "Cambodia-Riel",
  "Cameroon-CFA Franc",
  "Canada-Canadian dollar",
  "Cape Verde-Cape Verdean escudo",
  "Central African Republic-CFA Franc",
  "Chad-CFA Franc",
  "Chile-Chilean Peso",
  "China-Chinese Yuan",
  "Colombia-Colombian Peso",
  "Comoros-Franc",
  "Costa Rica-Colón",
  "Cote d’Ivoire-CFA Franc",
  "Croatia-Croatian",
  "Cuba-Cuban Peso",
  "Cyprus-Euro",
  "Czech Republic-Koruna",
  "Denmark-Danish Krone",
  "Djibouti-Djiboutian franc",
  "Dominica-East Caribbean dollar",
  "Dominican Republic-Dominican Peso",
  "East Timor (Timor-Leste)-U.S. dollar",
  "Ecuador-U.S. dollar",
  "Egypt-Egyptian pound",
  "El Salvador-Colón; U.S. dollar",
  "Equatorial Guinea-CFA Franc",
  "Eritrea-Nakfa",
  "Estonia-Estonia Kroon; Euro",
  "Ethiopia-Birr",
  "Federated States of Micronesia-U.S. Dollar",
  "Fiji-Fiji dollar",
  "Finland-Euro",
  "France-Euro",
  "Gabon-CFA Franc",
  "Georgia-Lari",
  "Germany-Euro (formerly Deutsche mark)",
  "Ghana-Cedi",
  "Greece-Euro",
  "Grenada-East Caribbean dollar",
  "Guatemala-Quetzal",
  "Guinea-Guinean franc",
  "Guinea-Bissau-CFA Franc",
  "Guyana-Guyanese dollar",
  "Haiti-Gourde",
  "Honduras-Lempira",
  "Hungary-Forint",
  "Iceland-Icelandic króna",
  "India-Indian Rupee",
  "Indonesia-Rupiah",
  "Iran-Rial",
  "Iraq-Iraqi Dinar",
  "Ireland-Euro",
  "Israel-Shekel",
  "Italy-Euro ",
  "Jamaica-Jamaican dollar",
  "Japan-Yen",
  "Jordan-Jordanian dinar",
  "Kazakhstan-Tenge",
  "Kenya-Kenya shilling",
  "Kiribati-Kiribati dollar",
  "Kuwait-Kuwaiti Dinar",
  "Kyrgyzstan-Som",
  "Laos-New Kip",
  "Latvia-Lats",
  "Lebanon-Lebanese pound",
  "Lesotho-Maluti",
  "Liberia-Liberian dollar",
  "Libya-Libyan dinar",
  "Liechtenstein-Swiss franc",
  "Lithuania-Litas",
  "Luxembourg-Euro",
  "Macedonia-Denar",
  "Madagascar-Malagasy Ariary",
  "Malawi-Kwacha",
  "Malaysia-Ringgit",
  "Maldives-Rufiyaa",
  "Mali-CFA Franc",
  "Malta-Euro",
  "Marshall Islands-U.S. Dollar",
  "Mauritania-Ouguiya",
  "Mauritius-Mauritian rupee",
  "Mexico-Mexican peso",
  "Moldova-Leu",
  "Monaco-Euro",
  "Mongolia-Togrog",
  "Montenegro-Euro",
  "Morocco-Dirham",
  "Mozambique-Metical",
  "Myanmar (Burma)-Kyat",
  "Namibia-Namibian dollar",
  "Nauru-Australian dollar",
  "Nepal-Nepalese rupee",
  "Netherlands-Euro",
  "New Zealand-New Zealand dollar",
  "Nicaragua-Gold cordoba",
  "Niger-CFA Franc",
  "Nigeria-Naira",
  "North Korea-Won",
  "Norway-Norwegian krone",
  "Oman-Omani rial",
  "Pakistan-Pakistani rupee",
  "Palau-U.S. dollar",
  "Palestine-Palestine Pound",
  "Panama-Balboa; U.S. dollar",
  "Papua New Guinea-Kina",
  "Paraguay-Guaraní",
  "Peru-Nuevo sol",
  "Philippines-Peso",
  "Poland-Zloty",
  "Portugal-Euro ",
  "Qatar-Qatari riyal",
  "Republic of the Congo-CFA Franc",
  "Romania-Romanian Rupee",
  "Russia-Ruble",
  "Rwanda-Rwandan franc",
  "Saint Kitts and Nevis-East Caribbean dollar",
  "Saint Lucia-East Caribbean dollar",
  "Saint Vincent and the Grenadines-East Caribbean dollar",
  "Samoa-Tala",
  "San Marino-Euro",
  "Sao Tome and Principe-Dobra",
  "Saudi Arabia-Riyal",
  "Senegal-CFA Franc",
  "Serbia-Serbian Dinar",
  "Seychelles-Seychelles rupee",
  "Sierra Leone-Leone",
  "Singapore-Singapore dollar",
  "Slovakia-Euro",
  "Slovenia-Slovenian tolar; euro",
  "Solomon Islands-Solomon Islands dollar",
  "Somalia-Somali shilling",
  "South Africa-Rand",
  "South Korea-Won",
  "South Sudan-Sudanese Pound",
  "Spain-Euro ",
  "Sri Lanka-Sri Lankan rupee",
  "Sudan-Sudanese Pound",
  "Suriname-Surinamese dollar",
  "Swaziland-Lilangeni",
  "Sweden-Krona",
  "Switzerland-Swiss franc",
  "Syria-Syrian pound",
  "Taiwan-Taiwan dollar",
  "Tajikistan-somoni",
  "Tanzania-Tanzanian shilling",
  "Thailand-Baht",
  "The Bahamas-Bahamian dollar",
  "The Gambia-Dalasi",
  "Togo-CFA Franc",
  "Tonga-Pa’anga",
  "Trinidad and Tobago-Trinidad and Tobago dollar",
  "Tunisia-Tunisian dinar",
  "Turkey-Turkish lira (YTL)",
  "Turkmenistan-Manat",
  "Tuvalu-Tuvaluan Dollar",
  "Uganda-Ugandan new shilling",
  "Ukraine-Hryvnia",
  "United Arab Emirates-U.A.E. Dirham",
  "United Kingdom-Pound sterling",
  "United States of America-Dollar",
  "Uruguay-Uruguay peso",
  "Uzbekistan-Uzbekistani sum",
  "Vanuatu-Vatu",
  "Vatican City (Holy See)-Euro",
  "Venezuela-Bolivar",
  "Vietnam-Dong",
  "Yemen-Rial",
  "Zambia-Kwacha",
  "Zimbabwe-United States dollar",
];

const KYC = () => {
  const initialFormData = {
    registeredCompanyName: "",
    companyRegisteredAddress: "",
    emailAddress: "",
    corporateDomainName: "",
    ParentCompany: "",
    ContactNumber: "",
    companyWebsite: "",
    NumberOfEmployees: "",
    BusinessStructure: "",
    otherStructure: "",
    NatureOfBusiness: "",
    otherBusiness: "",
    countryOfIncorporation: "",
    companyRegistrationNumber: "",
    TradeLicenseExpiryData: "",
    DateOfIncorporation: "",
    TradeLicenseNumber: "",
    VAT: "",
    BankName: "",
    BankBranchAddress: "",
    AccountName: "",
    AccountNumber: "",
    BankAccountMangersName: "",
    CorrespondentBankName: "",
    BankCountry: "",
    SwiftCode: "",
    AccountCurrency: "",
    IBAN: "",
    BankAccountManagersContactDetails: "",
    CorrespondentBankSwiftCode: "",
    PrimaryContactName: "",
    PrimaryContactDesignation: "",
    PrimaryContactPhone: "",
    PrimaryContactEmail: "",
    OperationDepartmentName: "",
    OperationDepartmentDesignation: "",
    OperationDepartMentPhone: "",
    OperationDepartmentEmail: "",
    CreditNAME: "",
    CreditDesignation: "",
    CreditPhone: "",
    CreditEmail: "",
    AccountDepartName: "",
    AcoountDepartDesignation: "",
    AccountDepartmentPhone: "",
    AccountDepartmentEmail: "",
    ProposedBusiness: "",
    ContactPerson: "",

    TradeReferenceName1: "",
    TradeReferenceName2: "",
    TradeReferenceName3: "",
    TradeReferenceName4: "",

    TradeReferencePhone1: "",
    TradeReferencePhone2: "",
    TradeReferencePhone3: "",
    TradeReferencePhone4: "",

    TradeReferenceEmail1: "",
    TradeReferenceEmail2: "",
    TradeReferenceEmail3: "",
    TradeReferenceEmail4: "",

    shareHolderName1: "",
    shareHolderName2: "",
    shareHolderName3: "",
    shareHolderName4: "",
    shareHolderName5: "",
    Percentage1: "",
    Percentage2: "",
    Percentage3: "",
    Percentage4: "",
    Percentage5: "",
    ShareHolderCountry1: "",
    ShareHolderCountry2: "",
    ShareHolderCountry3: "",
    ShareHolderCountry4: "",
    ShareHolderCountry5: "",
    AuthorisedSignature: "",
    WebsiteURL: "",
    certificateOfIncorporation: "",
    memorandum: "",
    tradeLicenseCertificate: "",
    taxRegCertificate: "",
    companyProfile: "",
    BankRefLetter: "",
    PassPortCopy: "",
    AuthorisedSignatureImage: "",
  };

  const [Formvalues, setFormValues] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      // Company Inforamtion Error Handling

      case "registeredCompanyName":
        if (value.trim() === "") {
          error = " Company Name is required";
        } else if (value.length < 5) {
          error = "Company Name must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = " Company Name must contain at least one letter";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          error = "Company Name can only contain letters, numbers";
        }
        break;
      case "emailAddress":
        if (
          !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;

      case "corporateDomainName":
        if (value.trim() === "") {
          error = " Domain Name is required";
        } else if (value.length < 5) {
          error = "Domain Name must be at least 5 characters long";
        } else if (
          !/^[A-Za-z0-9\.-]+[A-Za-z0-9]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Domain Name Invalid";
        }
        break;

      case "companyRegisteredAddress":
        if (value.trim() === "") {
          error = "Address is required";
        } else if (value.length < 5) {
          error = "Address must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Invalid";
        }
        break;
      case "ParentCompany":
        if (value.trim() === "") {
          error = "Parent Company is required";
        } else if (value.length < 5) {
          error = " Parent Company Name must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Parent Company must contain at least one letter";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          error = "Parent Company can only contain letters and numbers";
        }
        break;
      case "ContactNumber":
        if (value.trim() === "") {
          error = "Contact Number is required";
        }

        break;

      case "companyWebsite":
        if (value.trim() === "") {
          error = " Website is required";
        } else if (
          !/^www\.+[A-Za-z0-9]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae)$/.test(
            value
          )
        ) {
          error = " Invalid";
        }
        break;
      case "NumberOfEmployees":
        if (value.trim() === "") {
          error = "Number of employees is required";
        } else if (value < 1) {
          error = "Number of employee cannnot be less than 1";
        }
        if (!/^\d*$/.test(value)) {
          error = "Invalid";
        }
        break;

      // Company Structure Error Hnadling

      case "otherStructure":
        if (Formvalues.BusinessStructure === "Others" && value.trim() === "") {
          error = "Required";
        } else if (
          Formvalues.BusinessStructure === "Others" &&
          value.length < 5
        ) {
          error = "Business Structure cannnot be less than 5";
        } else if (
          Formvalues.BusinessStructure === "Others" &&
          !/^[a-zA-Z\s]+$/.test(value)
        ) {
          error = "Business Structure contains only letter";
        }

        break;

      case "BusinessStructure":
        if (value.trim() === "") {
          error = "Business structure is required";
        }

        break;

      case "otherBusiness":
        if (Formvalues.NatureOfBusiness === "Others" && value.trim() === "") {
          error = "Required";
        } else if (
          Formvalues.NatureOfBusiness === "Others" &&
          value.length < 5
        ) {
          error = "Nature Of Business cannnot be less than 5";
        } else if (
          Formvalues.NatureOfBusiness === "Others" &&
          !/^[a-zA-Z\s]+$/.test(value)
        ) {
          error = "Nature Of Business contains only letter";
        }

        break;

      case "NatureOfBusiness":
        if (value.trim() === "") {
          error = "Nature Of Business is required";
        }

        break;

      case "countryOfIncorporation":
        if (value.trim() === "") {
          error = "country Of Incorporation is required";
        }
        break;

      case "companyRegistrationNumber":
        if (value.trim() === "") {
          error = " Registration Number is required";
        } else if (value.length < 5) {
          error = " Registration Number must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error = "Registration Number can only contain letters and numbers";
        }
        break;

      case "TradeLicenseExpiryData":
        const selectedDate = new Date(value);
        const currentDate = new Date();

        if (value.trim() === "" || selectedDate <= currentDate) {
          error = "Invalid Date";
        }
        // else if (selectedDate <= currentDate) {
        //   error = "Invalid Date";
        // }
        break;
      case "DateOfIncorporation":
        const DateOfIncorporation = new Date(value);
        const currentDateOfIncorporation = new Date();
        if (
          value.trim() === "" ||
          DateOfIncorporation >= currentDateOfIncorporation
        ) {
          error = "Invalid Date";
        }
        break;
      case "TradeLicenseNumber":
        if (value.trim() === "") {
          error = " License Number is required";
        } else if (value.length < 5) {
          error = " License Number must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error = "License Number can only contain letters and numbers";
        }
        break;

      case "VAT":
        if (value.length > 0) {
          if (value.length < 5) {
            error = "VAT number must be at least 5 characters long";
          } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
            error = "VAT number can only contain letters and numbers";
          }
        }

        break;

      // Bank Details Error Handling

      case "BankName":
        if (value.trim() === "") {
          error = "Bank Name is required";
        } else if (value.length < 2) {
          error = "Bank Name must be at least 2 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Bank Name must contain at least one letter";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          error = "Bank Name can only contain letters and numbers";
        }
        break;
      case "BankBranchAddress":
        if (value.trim() === "") {
          error = "Address is required";
        } else if (value.length < 5) {
          error = "Address must be at least 5 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Invalid";
        }
        break;

      case "AccountName":
        if (value.trim() === "") {
          error = "Account Name is required";
        } else if (value.length < 5) {
          error = "Account Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Account Name can only contain letters";
        }
        break;

      case "AccountNumber":
        if (value.trim() === "") {
          error = "Account Number is required";
        } else if (value.length < 5) {
          error = "Account Number must be at least 5 characters long";
        } else if (!/^(?=.*[0-9])[a-zA-Z0-9]+$/.test(value)) {
          error = "Account Number can only contain letters and numbers";
        }
        break;

      case "BankAccountMangersName":
        if (value.length > 0) {
          if (value.length < 5) {
            error = " Mangers Name must be at least 5 characters long";
          } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
            error = " Mangers Name can only contain letters";
          }
        }

        break;
      case "CorrespondentBankName":
        if (value.length > 0) {
          if (value.length < 2) {
            error = " Bank Name must be at least 2 characters long";
          } else if (!/[a-zA-Z]/.test(value)) {
            error = " Bank Name must contain at least one letter";
          } else if (!/^[a-zA-Z0-9_\s]+$/.test(value)) {
            error = "Bank Name can only contain letters and numbers";
          }
        }

        break;

      case "BankCountry":
        if (value.trim() === "") {
          error = "Bank Country is required";
        }
        break;
      case "SwiftCode":
        if (value.trim() === "") {
          error = "Swift Code is required";
        } else if (value.length < 8) {
          error = "Swift Code must be at least 8 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "Swift Code must contain at least one letter";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          error = "Swift Code can only contain letters and numbers";
        }
        break;
      case "AccountCurrency":
        if (value.trim() === "") {
          error = "Currency is required";
        }
        break;
      case "IBAN":
        if (value.trim() === "") {
          error = "IBAN/ABA is required";
        } else if (value.length < 9) {
          error = "IBAN/ABA must be at least 9 characters long";
        } else if (!/[a-zA-Z]/.test(value)) {
          error = "IBAN/ABA must contain at least one letter";
        } else if (!/\d/.test(value)) {
          error = "IBAN/ABA must contain at least one number";
        } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          error = "IBAN/ABA can only contain letters and numbers";
        }
        break;

      case "BankAccountManagersContactDetails":
        break;
      case "CorrespondentBankSwiftCode":
        if (value.length > 0) {
          if (value.length < 8) {
            error = " Swift Code must be at least 8 characters long";
          } else if (!/[a-zA-Z]/.test(value)) {
            error = "Swift Code must contain at least one letter";
          } else if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
            error = "Swift Code can only contain letters and numbers";
          }
        }

        break;

      // Company Contact Details Error Handling

      case "PrimaryContactName":
        if (value.trim() === "") {
          error = " Name is required";
        } else if (value.length < 5) {
          error = " Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;

      case "PrimaryContactDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;
      case "PrimaryContactEmail":
        if (
          !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;

      case "PrimaryContactPhone":
        if (value.trim() === "") {
          error = "Invalid";
        }
        break;
      case "OperationDepartmentName":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;
      case "OperationDepartmentDesignation":
        if (value.trim() === "") {
          error = " Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "OperationDepartMentPhone":
        if (value.trim() === "") {
          error = "Invalid";
        }
        break;
      case "OperationDepartmentEmail":
        if (
          !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;

      case "CreditNAME":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Name can only contain letters";
        }
        break;

      case "CreditDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "CreditPhone":
        if (value.trim() === "") {
          error = "Invalid";
        }
        break;
      case "CreditEmail":
        if (
          !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;
      case "AccountDepartName":
        if (value.trim() === "") {
          error = "Name is required";
        } else if (value.length < 5) {
          error = "Name must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Name can only contain letters";
        }

        break;

      case "AcoountDepartDesignation":
        if (value.trim() === "") {
          error = "Designation is required";
        } else if (value.length < 2) {
          error = "Designation must be at least 2 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Designation can only contain letters";
        }
        break;

      case "AccountDepartmentPhone":
        if (value.trim() === "") {
          error = "Invalid";
        }
        break;

      case "AccountDepartmentEmail":
        if (
          !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
            value
          )
        ) {
          error = "Invalid email address";
        }
        break;

      case "ProposedBusiness":
        if (value.trim() === "") {
          error = "Required";
        } else if (value.length < 5) {
          error = "Proposed Business must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Proposed Business can only contain letters";
        }
        break;
      case "ContactPerson":
        if (value.trim() === "") {
          error = "Contact Person is required";
        } else if (value.length < 5) {
          error = "Contact Person must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Contact Person  can only contain letters";
        }
        break;

      // Trade Reference Error Handling

      case "TradeReferenceEmail1":
        if (Formvalues.TradeReferenceName1) {
          if (Formvalues.TradeReferenceName1.length < 5) {
            error = "Name must be at least 5 characters long ";
          }
          if (!/^[a-zA-Z\s.']+$/.test(Formvalues.TradeReferenceName1)) {
            error = "Name can only contain letters";
          }
          if (value.trim() === "" && !Formvalues.TradeReferencePhone1) {
            error = "Email and phone is Required";
          } else if (
            !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
              value
            )
          ) {
            error = "Invalid email address";
          } else if (Formvalues.TradeReferencePhone1.length < 10) {
            error = "Invalid Phone";
          }
        }
        break;

      case "TradeReferenceEmail2":
        if (Formvalues.TradeReferenceName2) {
          if (Formvalues.TradeReferenceName2.length < 5) {
            error = "Name must be at least 5 characters long ";
          }
          if (!/^[a-zA-Z\s.']+$/.test(Formvalues.TradeReferenceName2)) {
            error = "Name can only contain letters";
          }
          if (value.trim() === "" && !Formvalues.TradeReferencePhone2) {
            error = "Email and phone is Required";
          } else if (
            !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
              value
            )
          ) {
            error = "Invalid email address";
          } else if (Formvalues.TradeReferencePhone2.length < 10) {
            error = "Invalid Phone";
          }
        }
        break;

      case "TradeReferenceEmail3":
        if (Formvalues.TradeReferenceName3) {
          if (Formvalues.TradeReferenceName3.length < 5) {
            error = "Name must be at least 5 characters long ";
          }
          if (!/^[a-zA-Z\s.']+$/.test(Formvalues.TradeReferenceName3)) {
            error = "Name can only contain letters";
          }
          if (value.trim() === "" && !Formvalues.TradeReferencePhone3) {
            error = "Email and phone is Required";
          } else if (
            !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
              value
            )
          ) {
            error = "Invalid email address";
          } else if (Formvalues.TradeReferencePhone3.length < 10) {
            error = "Invalid Phone";
          }
        }
        break;

      case "TradeReferenceEmail4":
        if (Formvalues.TradeReferenceName4) {
          if (Formvalues.TradeReferenceName4.length < 5) {
            error = "Name must be at least 5 characters long ";
          }
          if (!/^[a-zA-Z\s.']+$/.test(Formvalues.TradeReferenceName4)) {
            error = "Name can only contain letters";
          }
          if (value.trim() === "" && !Formvalues.TradeReferencePhone4) {
            error = "Email and phone is Required";
          } else if (
            !/^[A-Za-z0-9_*&^~!$%=+}{'?\.-]+@[A-Za-z]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae|.co.in)$/.test(
              value
            )
          ) {
            error = "Invalid email address";
          } else if (Formvalues.TradeReferencePhone4.length < 10) {
            error = "Invalid Phone";
          }
        }
        break;

      // Shareholder section

      case "shareHolderName1":
        if (value.trim() === "") {
          error = "Required";
        } else if (value.length < 5 ) {
          error = "Name must be at least 5 characters long";
        }
       
        else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = "Name can only contain letters";
        }

        break;
      case "Percentage1":
        if (value.trim() === "") {
          error = "Required";
        } else if (value < 1 || value > 100) {
          error = "shareholding should be between 1 to 100";
        }
        break;

      case "ShareHolderCountry1":
        if (value.trim() === "") {
          error = "Required";
        }

        break;

      case "shareHolderName2":
        if (value) {
          if (value.length < 5) {
            error = "Name must be 5 charchters long";
          }
          if (!/^[a-zA-Z\s.']+$/.test(value)) {
            error = "Name can only contain letters";
          }
          if (
            Formvalues.Percentage2.trim() === "" &&
            !Formvalues.ShareHolderCountry2
          ) {
            error = " % and country is Required";
          } else if (Formvalues.Percentage2 < 1) {
            error = "Peracenatge cannot be less than 1";
          }
          if (Formvalues.shareHolderName3.length < 1) {
            if (
              parseFloat(Formvalues.Percentage2) +
                parseFloat(Formvalues.Percentage1) >
              100
            ) {
              error = "Total shareholding should between 0 and 100";
            }
          }
        }
        break;

      case "shareHolderName3":
        if (value) {
          if (value.length < 5) {
            error = "Name must be 5 charchters long";
          }
          if (!/^[a-zA-Z\s.']+$/.test(value)) {
            error = "Name can only contain letters";
          }
          if (
            Formvalues.Percentage3.trim() === "" &&
            !Formvalues.ShareHolderCountry3
          ) {
            error = " % and country is Required";
          } else if (Formvalues.Percentage3 < 1) {
            error = "Peracenatge cannot be less than 1";
          }

          if (Formvalues.shareHolderName4 < 1) {
            if (
              parseFloat(Formvalues.Percentage2) +
                parseFloat(Formvalues.Percentage1) +
                parseFloat(Formvalues.Percentage3) >
              100
            ) {
              error = "Peracenatge should between 0 and 100";
            }
          }
        }
        break;

      case "shareHolderName4":
        if (value) {
          if (value.length < 5) {
            error = "Name must be 5 charchters long";
          }
          if (!/^[a-zA-Z\s.']+$/.test(value)) {
            error = "Name can only contain letters";
          }
          if (
            Formvalues.Percentage4.trim() === "" &&
            !Formvalues.ShareHolderCountry4
          ) {
            error = " % and country is Required";
          } else if (Formvalues.Percentage4 < 1) {
            error = "Peracenatge cannot be less than 1";
          }

          if (Formvalues.shareHolderName5 < 1) {
            if (
              parseFloat(Formvalues.Percentage2) +
                parseFloat(Formvalues.Percentage1) +
                parseFloat(Formvalues.Percentage3) +
                parseFloat(Formvalues.Percentage4) >
              100
            ) {
              error = "Total shareholding should between 0 and 100";
            }
          }
        }
        break;

      case "shareHolderName5":
        if (value) {
          if (value.length < 5) {
            error = "Name must be 5 charchters long";
          }
          if (!/^[a-zA-Z\s.']+$/.test(value)) {
            error = "Name can only contain letters";
          }
          if (
            Formvalues.Percentage5.trim() === "" &&
            !Formvalues.ShareHolderCountry5
          ) {
            error = " % and country is Required";
          } else if (Formvalues.Percentage5 < 1) {
            error = "Peracenatge cannot be less than 1";
          }

          if (
            parseFloat(Formvalues.Percentage2) +
              parseFloat(Formvalues.Percentage1) +
              parseFloat(Formvalues.Percentage3) +
              parseFloat(Formvalues.Percentage4) +
              parseFloat(Formvalues.Percentage5) >
            100
          ) {
            error = "Total shareholding should between 0 and 100";
          }
        }
        break;

      // UPLOAD Documents section

      case "AuthorisedSignature":
        if (value.trim() === "") {
          error = " Signatory is required";
        } else if (value.length < 5) {
          error = " Signatory must be at least 5 characters long";
        } else if (!/^[a-zA-Z\s.']+$/.test(value)) {
          error = " Signatory can only contain letters";
        }
        break;

      case "WebsiteURL":
        if (value.trim() === "") {
          error = "URL is required";
        } else if (
          !/^www\.+[A-Za-z0-9]+(\.com|\.net|\.org|\.info|\.biz|\.edu|\.gov|\.mil|\.int|\.us|\.uk|\.ca|\.au|\.de|\.jp|\.fr|\.in|\.cn|\.br|\.ae)$/.test(
            value
          )
        ) {
          error = " Invalid";
        }
        break;

      case "certificateOfIncorporation":
        if (value.trim() === "") {
          error = "Required";
        }
        break;

      case "memorandum":
        if (value.trim() === "") {
          error = "Required";
        }
        break;
      case "tradeLicenseCertificate":
        if (value.trim() === "") {
          error = "Required";
        }
        break;
      case "taxRegCertificate":
        if (value.trim() === "") {
          error = "Required";
        }

        break;

      case "AuthorisedSignatureImage":
        if (value.trim() === "") {
          error = "Required";
        }

        break;

      default:
        break;
    }

    return error;
  };

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...Formvalues, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
    // console.log(value);
  };

  const handleFocus = (fieldName) => {
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    for (const field in Formvalues) {
      // console.log(Formvalues);
      const value = Formvalues[field];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;

        hasErrors = true;
      }
    }

    // Check for empty fields and add 'required' error
    // for (const field in Formvalues) {
    //   // console.log(Formvalues)
    //   if ( !newErrors[field]) {
    //     newErrors[field] = "This field is required";
    //     hasErrors = true;
    //   }
    // }

    setFormErrors(newErrors);

    if (!hasErrors) {
      console.log("Form data:", Formvalues);
      // You can submit the form data or perform further actions here
    } else {
      console.log(
        "Form contains errors or empty fields. Please correct them.",
        formErrors
      );
    }
  };

  // handling Business Structure error to disappear when anyother option is selected except other
  useEffect(() => {
    if (Formvalues.BusinessStructure !== "Others") {
      setFormValues({
        ...Formvalues,
        otherStructure: "", // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        otherStructure: "",
      });
    }
  }, [Formvalues.BusinessStructure]);

  // handling nature of business error to disappear when anyother option is selected except other
  useEffect(() => {
    if (Formvalues.NatureOfBusiness !== "Others") {
      setFormValues({
        ...Formvalues,
        otherBusiness: "", // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        otherBusiness: "",
      });
    }
  }, [Formvalues.NatureOfBusiness]);

  useEffect(() => {
    if (Formvalues.TradeReferenceName1 === "") {
      setFormValues({
        ...Formvalues,
        TradeReferenceEmail1: "",
        TradeReferencePhone1: "",
        // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        TradeReferenceEmail1: "",
        TradeReferencePhone1: "",
      });
    }
  }, [Formvalues.TradeReferenceName1]);

  useEffect(() => {
    if (Formvalues.TradeReferenceName2 === "") {
      setFormValues({
        ...Formvalues,
        TradeReferenceEmail2: "",
        TradeReferencePhone2: "",
        // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        TradeReferenceEmail2: "",
        TradeReferencePhone2: "",
      });
    }
  }, [Formvalues.TradeReferenceName2]);

  useEffect(() => {
    if (Formvalues.TradeReferenceName3 === "") {
      setFormValues({
        ...Formvalues,
        TradeReferenceEmail3: "",
        TradeReferencePhone3: "",
        // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        TradeReferenceEmail3: "",
        TradeReferencePhone3: "",
      });
    }
  }, [Formvalues.TradeReferenceName3]);

  useEffect(() => {
    if (Formvalues.TradeReferenceName4 === "") {
      setFormValues({
        ...Formvalues,
        TradeReferenceEmail4: "",
        TradeReferencePhone4: "",
        // Reset inputText
        // error: "",
      });
      setFormErrors({
        ...formErrors,
        TradeReferenceEmail4: "",
        TradeReferencePhone4: "",
      });
    }
  }, [Formvalues.TradeReferenceName4]);

  return (
    <>
      <KycHeader />
      {/* KYC FORM */}
      <form>
        <div className="kycContainer">
          {/* Company Information Container */}

          <div className="Infocontainer">
            <h3>Company Information</h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>
                    Registered Company Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="registeredCompanyName"
                    value={Formvalues.registeredCompanyName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("registeredCompanyName")}
                    placeholder="Company Name"
                  />
                  {formErrors.registeredCompanyName && (
                    <div className="error">
                      {formErrors.registeredCompanyName}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Parent Company/Group Company <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="ParentCompany"
                    value={Formvalues.ParentCompany}
                    onChange={handlChange}
                    onFocus={() => handleFocus("ParentCompany")}
                    placeholder="Parent Company"
                  />
                  {formErrors.ParentCompany && (
                    <div className="error">{formErrors.ParentCompany}</div>
                  )}
                </div>
                <div>
                  <label>
                    Company Registered Address <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyRegisteredAddress"
                    value={Formvalues.companyRegisteredAddress}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyRegisteredAddress")}
                    placeholder="Address"
                  />

                  {formErrors.companyRegisteredAddress && (
                    <div className="error">
                      {formErrors.companyRegisteredAddress}
                    </div>
                  )}
                </div>
                <div className="contactNumber-company">
                  <label>
                    Contact Number <span className="star">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.ContactNumber}
                    onFocus={() => handleFocus("ContactNumber")}
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        ContactNumber: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        ContactNumber: "",
                      });
                    }}
                  />
                  {formErrors.ContactNumber && (
                    <div className="error">{formErrors.ContactNumber}</div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={Formvalues.emailAddress}
                    onChange={handlChange}
                    onFocus={() => handleFocus("emailAddress")}
                    placeholder="Email"
                  />
                  {formErrors.emailAddress && (
                    <div className="error">{formErrors.emailAddress}</div>
                  )}
                </div>
                <div>
                  <label>
                    Company Website <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyWebsite"
                    value={Formvalues.companyWebsite}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyWebsite")}
                    placeholder="www.example.com"
                  />

                  {formErrors.companyWebsite && (
                    <div className="error">{formErrors.companyWebsite}</div>
                  )}
                </div>

                <div>
                  <label>
                    Corporate Domain Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="corporateDomainName"
                    value={Formvalues.corporateDomainName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("corporateDomainName")}
                    placeholder="example.com"
                  />

                  {formErrors.corporateDomainName && (
                    <div className="error">
                      {formErrors.corporateDomainName}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Number of Employees <span className="star">*</span>
                  </label>
                  <input
                    type="number"
                    name="NumberOfEmployees"
                    value={Formvalues.NumberOfEmployees}
                    onChange={handlChange}
                    onFocus={() => handleFocus("NumberOfEmployees")}
                    placeholder="Number Of Employees"
                  />
                  {formErrors.NumberOfEmployees && (
                    <div className="error">{formErrors.NumberOfEmployees}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Company Structure */}

          <div className="Infocontainer">
            <h3>COMPANY STRUCTURE </h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>Business Structure </label>
                  <select
                    name="BusinessStructure"
                    value={Formvalues.BusinessStructure}
                    onChange={handlChange}
                    onFocus={() => handleFocus("BusinessStructure")}
                  >
                    <option value="">Select</option>
                    <option value="Public Company">Public Company</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Private Company">Private Company</option>
                    <option value="Sole Propprietorship">
                      Sole Propprietorship
                    </option>
                    <option value="Others">Others</option>
                  </select>
                  {formErrors.BusinessStructure && (
                    <div className="error">{formErrors.BusinessStructure}</div>
                  )}
                </div>
                <div>
                  <label>If Other Structure (please specify)</label>
                  <input
                    type="text"
                    value={Formvalues.otherStructure}
                    name="otherStructure"
                    onChange={handlChange}
                    onFocus={() => handleFocus("otherStructure")}
                    disabled={Formvalues.BusinessStructure !== "Others"}
                    placeholder="Other Structure"
                  />
                  {formErrors.otherStructure && (
                    <div className="error">{formErrors.otherStructure}</div>
                  )}
                </div>
                <div>
                  <label>
                    Nature of Business <span className="star">*</span>
                  </label>
                  <select
                    name="NatureOfBusiness"
                    value={Formvalues.NatureOfBusiness}
                    onChange={handlChange}
                    onFocus={() => handleFocus("NatureOfBusiness")}
                  >
                    <option value="">Select</option>

                    <option value="Refining">Refining</option>
                    <option value="Trading">Trading</option>
                    <option value="Shipping"> Shipping </option>
                    <option value="Distribution">Distribution</option>
                    <option value="Storage">Storage</option>
                    <option value="Others">Others</option>
                  </select>
                  {formErrors.NatureOfBusiness && (
                    <div className="error">{formErrors.NatureOfBusiness}</div>
                  )}
                </div>
                <div>
                  <label>If Other Business (please specify)</label>
                  <input
                    type="text"
                    name="otherBusiness"
                    value={Formvalues.otherBusiness}
                    onChange={handlChange}
                    onFocus={() => handleFocus("otherBusiness")}
                    disabled={Formvalues.NatureOfBusiness !== "Others"}
                    placeholder="Other Business"
                  />
                  {formErrors.otherBusiness && (
                    <div className="error">{formErrors.otherBusiness}</div>
                  )}
                </div>
                <div>
                  <label>
                    Country of Incorporation <span className="star">*</span>
                  </label>
                  <select
                    name="countryOfIncorporation"
                    value={Formvalues.countryOfIncorporation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("countryOfIncorporation")}
                  >
                    {countries.map((country, i) => (
                      <option key={i} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

                  {formErrors.countryOfIncorporation && (
                    <div className="error">
                      {formErrors.countryOfIncorporation}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Date of Incorporation <span className="star">*</span>
                  </label>
                  <input
                    type="date"
                    name="DateOfIncorporation"
                    value={Formvalues.DateOfIncorporation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("DateOfIncorporation")}
                  />

                  {formErrors.DateOfIncorporation && (
                    <div className="error">
                      {formErrors.DateOfIncorporation}
                    </div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>
                    Company Registration No <span className="star">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="companyRegistrationNumber"
                    value={Formvalues.companyRegistrationNumber}
                    onChange={handlChange}
                    onFocus={() => handleFocus("companyRegistrationNumber")}
                    placeholder="Company Registration Number"
                  />

                  {formErrors.companyRegistrationNumber && (
                    <div className="error">
                      {formErrors.companyRegistrationNumber}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Trade License Number <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="TradeLicenseNumber"
                    value={Formvalues.TradeLicenseNumber}
                    onChange={handlChange}
                    onFocus={() => handleFocus("TradeLicenseNumber")}
                    placeholder="Trade License Number"
                  />

                  {formErrors.TradeLicenseNumber && (
                    <div className="error">{formErrors.TradeLicenseNumber}</div>
                  )}
                </div>
                <div>
                  <label>
                    Trade License Expiry Date <span className="star">*</span>
                  </label>
                  <input
                    type="date"
                    name="TradeLicenseExpiryData"
                    value={Formvalues.TradeLicenseExpiryData}
                    onChange={handlChange}
                    onFocus={() => handleFocus("TradeLicenseExpiryData")}
                  />

                  {formErrors.TradeLicenseExpiryData && (
                    <div className="error">
                      {formErrors.TradeLicenseExpiryData}
                    </div>
                  )}
                </div>
                <div>
                  <label>VAT Registration Number</label>
                  <input
                    type="text"
                    name="VAT"
                    value={Formvalues.VAT}
                    onChange={handlChange}
                    onFocus={() => handleFocus("VAT")}
                    placeholder="VAT Registration Number"
                  />

                  {formErrors.VAT && (
                    <div className="error">{formErrors.VAT}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details */}

          <div className="Infocontainer">
            <h3>Bank Details</h3>
            <div className="infoFlexContainer">
              <div className="flexItem1">
                <div>
                  <label>
                    Bank Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="BankName"
                    value={Formvalues.BankName}
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankName")}
                    placeholder="Bank Name"
                  />
                  {formErrors.BankName && (
                    <div className="error">{formErrors.BankName}</div>
                  )}
                </div>
                <div>
                  <label>
                    Bank Country <span className="star">*</span>
                  </label>
                  <select
                    type="text"
                    value={Formvalues.BankCountry}
                    name="BankCountry"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankCountry")}
                  >
                    {countries.map((country, i) => (
                      <option key={i} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {formErrors.BankCountry && (
                    <div className="error">{formErrors.BankCountry}</div>
                  )}
                </div>
                <div>
                  <label>
                    Bank Branch Address <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.BankBranchAddress}
                    name="BankBranchAddress"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankBranchAddress")}
                    placeholder="Bank Branch Address"
                  />
                  {formErrors.BankBranchAddress && (
                    <div className="error">{formErrors.BankBranchAddress}</div>
                  )}
                </div>
                <div>
                  <label>
                    Swift Code <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.SwiftCode}
                    name="SwiftCode"
                    onChange={handlChange}
                    onFocus={() => handleFocus("SwiftCode")}
                    placeholder="Swift Code"
                  />

                  {formErrors.SwiftCode && (
                    <div className="error">{formErrors.SwiftCode}</div>
                  )}
                </div>
                <div>
                  <label>
                    Account Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.AccountName}
                    name="AccountName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountName")}
                    placeholder="Account Name"
                  />

                  {formErrors.AccountName && (
                    <div className="error">{formErrors.AccountName}</div>
                  )}
                </div>
                <div>
                  <label>
                    Account Currency <span className="star">*</span>
                  </label>
                  <select
                    type="text"
                    value={Formvalues.AccountCurrency}
                    name="AccountCurrency"
                    onChange={handlChange}
                    onFocus={() => handleFocus("SwiftCode")}
                  >
                    {currencies.map((currency, i) => (
                      <option key={i} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                  {formErrors.AccountCurrency && (
                    <div className="error">{formErrors.AccountCurrency}</div>
                  )}
                </div>
              </div>
              <div className="flexItem2">
                <div>
                  <label>
                    Account Number <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.AccountNumber}
                    name="AccountNumber"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountNumber")}
                    placeholder="Account Number"
                  />
                  {formErrors.AccountNumber && (
                    <div className="error">{formErrors.AccountNumber}</div>
                  )}
                </div>
                <div>
                  <label>
                    IBAN/ABA <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="IBAN"
                    value={Formvalues.IBAN}
                    onChange={handlChange}
                    onFocus={() => handleFocus("IBAN")}
                    placeholder="IBAN/ABA"
                  />
                  {formErrors.IBAN && (
                    <div className="error">{formErrors.IBAN}</div>
                  )}
                </div>
                <div>
                  <label>Bank Account Manager's Name </label>
                  <input
                    type="text"
                    value={Formvalues.BankAccountMangersName}
                    name="BankAccountMangersName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("BankAccountMangersName")}
                    placeholder="Bank Account Mangers Name"
                  />
                  {formErrors.BankAccountMangersName && (
                    <div className="error">
                      {formErrors.BankAccountMangersName}
                    </div>
                  )}
                </div>
                <div className="contactNumber-company">
                  <label>Bank Account Manager's Contact Details</label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.BankAccountManagersContactDetails}
                    onFocus={() =>
                      handleFocus("BankAccountManagersContactDetails")
                    }
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        BankAccountManagersContactDetails: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        BankAccountManagersContactDetails: "",
                      });
                    }}
                  />

                  {formErrors.BankAccountManagersContactDetails && (
                    <div className="error">
                      {formErrors.BankAccountManagersContactDetails}
                    </div>
                  )}
                </div>
                <div>
                  <label>Correspondent Bank Name </label>
                  <input
                    type="text"
                    value={Formvalues.CorrespondentBankName}
                    name="CorrespondentBankName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CorrespondentBankName")}
                    placeholder="Correspondent Bank Name"
                  />

                  {formErrors.CorrespondentBankName && (
                    <div className="error">
                      {formErrors.CorrespondentBankName}
                    </div>
                  )}
                </div>

                <div>
                  <label>Correspondent Bank SWIFT Code</label>
                  <input
                    type="text"
                    value={Formvalues.CorrespondentBankSwiftCode}
                    name="CorrespondentBankSwiftCode"
                    onChange={handlChange}
                    onFocus={() =>
                      handleFocus("BankAccountManagersContactDetails")
                    }
                    placeholder="Correspondent Bank Swift Code"
                  />

                  {formErrors.CorrespondentBankSwiftCode && (
                    <div className="error">
                      {formErrors.CorrespondentBankSwiftCode}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ShareHolders Section */}
          <div className="Infocontainer">
            <h3>SHAREHOLDERS</h3>
            <table
              style={{ width: "100%", textAlign: "center" }}
              cellSpacing={13}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>%</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="shareHolderName1"
                      value={Formvalues.shareHolderName1}
                      onChange={handlChange}
                      onFocus={() => handleFocus("shareHolderName1")}
                    />

                    {formErrors.shareHolderName1 && (
                      <div className="error">{formErrors.shareHolderName1}</div>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Percentage1"
                      value={Formvalues.Percentage1}
                      onChange={handlChange}
                      onFocus={() => handleFocus("Percentage1")}
                    />

                    {formErrors.Percentage1 && (
                      <div className="error">{formErrors.Percentage1}</div>
                    )}
                  </td>
                  <td>
                    <select
                      name="ShareHolderCountry1"
                      value={Formvalues.ShareHolderCountry1}
                      onChange={handlChange}
                      onFocus={() => handleFocus("ShareHolderCountry1")}
                      className="sharholderCountry"
                    >
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {formErrors.ShareHolderCountry1 && (
                      <div className="error">
                        {formErrors.ShareHolderCountry1}
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      name="shareHolderName2"
                      value={Formvalues.shareHolderName2}
                      onChange={handlChange}
                      onFocus={() => handleFocus("shareHolderName2")}
                    />
                    {formErrors.shareHolderName2 && (
                      <div className="error">{formErrors.shareHolderName2}</div>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Percentage2"
                      value={Formvalues.Percentage2}
                      onChange={handlChange}
                      onFocus={() => handleFocus("Percentage2")}
                      disabled={!Formvalues.shareHolderName2}
                    />
                  </td>
                  <td>
                    <select
                      name="ShareHolderCountry2"
                      value={Formvalues.ShareHolderCountry2}
                      onChange={handlChange}
                      onFocus={() => handleFocus("ShareHolderCountry2")}
                      className="sharholderCountry"
                      disabled={!Formvalues.shareHolderName2}
                    >
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      name="shareHolderName3"
                      value={Formvalues.shareHolderName3}
                      onChange={handlChange}
                      onFocus={() => handleFocus("shareHolderName3")}
                    />
                    {formErrors.shareHolderName3 && (
                      <div className="error">{formErrors.shareHolderName3}</div>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Percentage3"
                      value={Formvalues.Percentage3}
                      onChange={handlChange}
                      onFocus={() => handleFocus("Percentage3")}
                      disabled={!Formvalues.shareHolderName3}
                    />
                  </td>
                  <td>
                    <select
                      name="ShareHolderCountry3"
                      value={Formvalues.ShareHolderCountry3}
                      onChange={handlChange}
                      onFocus={() => handleFocus("ShareHolderCountry3")}
                      className="sharholderCountry"
                      disabled={!Formvalues.shareHolderName3}
                    >
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      name="shareHolderName4"
                      value={Formvalues.shareHolderName4}
                      onChange={handlChange}
                      onFocus={() => handleFocus("shareHolderName4")}
                    />
                    {formErrors.shareHolderName4 && (
                      <div className="error">{formErrors.shareHolderName4}</div>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Percentage4"
                      value={Formvalues.Percentage4}
                      onChange={handlChange}
                      onFocus={() => handleFocus("Percentage4")}
                      disabled={!Formvalues.shareHolderName4}
                    />
                  </td>
                  <td>
                    <select
                      name="ShareHolderCountry4"
                      value={Formvalues.ShareHolderCountry4}
                      onChange={handlChange}
                      onFocus={() => handleFocus("ShareHolderCountry4")}
                      className="sharholderCountry"
                      disabled={!Formvalues.shareHolderName4}
                    >
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="text"
                      name="shareHolderName5"
                      value={Formvalues.shareHolderName5}
                      onChange={handlChange}
                      onFocus={() => handleFocus("shareHolderName5")}
                    />
                    {formErrors.shareHolderName5 && (
                      <div className="error">{formErrors.shareHolderName5}</div>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      name="Percentage5"
                      value={Formvalues.Percentage5}
                      onChange={handlChange}
                      onFocus={() => handleFocus("Percentage5")}
                      disabled={!Formvalues.shareHolderName5}
                    />
                    {formErrors.Percentage5 && (
                      <div className="error">{formErrors.Percentage5}</div>
                    )}
                  </td>
                  <td>
                    <select
                      name="ShareHolderCountry5"
                      value={Formvalues.ShareHolderCountry5}
                      onChange={handlChange}
                      onFocus={() => handleFocus("ShareHolderCountry5")}
                      className="sharholderCountry"
                      disabled={!Formvalues.shareHolderName5}
                    >
                      {countries.map((country, i) => (
                        <option key={i} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Company Contact Details */}

          <div className="CompanyContactDetailContainer">
            <h3>Company Contact Details </h3>
            <div className="CompanyContactFlexContainer">
              <div>
                <h5>
                  Primary Contact Details <span className="star">*</span>
                </h5>
                <div>
                  <label>
                    Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.PrimaryContactName}
                    name="PrimaryContactName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactName")}
                    placeholder="Name"
                  />
                  {formErrors.PrimaryContactName && (
                    <div className="error">{formErrors.PrimaryContactName}</div>
                  )}
                </div>
                <div>
                  <label>
                    Designation <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.PrimaryContactDesignation}
                    name="PrimaryContactDesignation"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactDesignation")}
                    placeholder="Designation"
                  />
                  {formErrors.PrimaryContactDesignation && (
                    <div className="error">
                      {formErrors.PrimaryContactDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Phone <span className="star">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.PrimaryContactPhone}
                    onFocus={() => handleFocus("PrimaryContactPhone")}
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        PrimaryContactPhone: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        PrimaryContactPhone: "",
                      });
                    }}
                  />

                  {formErrors.PrimaryContactPhone && (
                    <div className="error">
                      {formErrors.PrimaryContactPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="email"
                    value={Formvalues.PrimaryContactEmail}
                    name="PrimaryContactEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("PrimaryContactEmail")}
                    placeholder="Email Address"
                  />
                  {formErrors.PrimaryContactEmail && (
                    <div className="error">
                      {formErrors.PrimaryContactEmail}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h5>Operations Department Contact Details</h5>
                <div>
                  <label>
                    Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.OperationDepartmentName}
                    name="OperationDepartmentName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("OperationDepartmentName")}
                    placeholder="Name"
                  />
                  {formErrors.OperationDepartmentName && (
                    <div className="error">
                      {formErrors.OperationDepartmentName}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Designation <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.OperationDepartmentDesignation}
                    name="OperationDepartmentDesignation"
                    onChange={handlChange}
                    onFocus={() =>
                      handleFocus("OperationDepartmentDesignation")
                    }
                    placeholder="Designation"
                  />
                  {formErrors.OperationDepartmentDesignation && (
                    <div className="error">
                      {formErrors.OperationDepartmentDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Phone <span className="star">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.OperationDepartMentPhone}
                    name="OperationDepartMentPhone"
                    onFocus={() => handleFocus("OperationDepartMentPhone")}
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        OperationDepartMentPhone: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        OperationDepartMentPhone: "",
                      });
                    }}
                  />

                  {formErrors.OperationDepartMentPhone && (
                    <div className="error">
                      {formErrors.OperationDepartMentPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="email"
                    value={Formvalues.OperationDepartmentEmail}
                    name="OperationDepartmentEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("OperationDepartmentEmail")}
                    placeholder="Email Address"
                  />
                  {formErrors.OperationDepartmentEmail && (
                    <div className="error">
                      {formErrors.OperationDepartmentEmail}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="CompanyContactFlexContainer">
              <div>
                <h5>
                  Credit/Finance Contact Details <span className="star">*</span>
                </h5>
                <div>
                  <label>
                    Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.CreditNAME}
                    name="CreditNAME"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditNAME")}
                    placeholder="Name"
                  />
                  {formErrors.CreditNAME && (
                    <div className="error">{formErrors.CreditNAME}</div>
                  )}
                </div>
                <div>
                  <label>
                    Designation <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.CreditDesignation}
                    name="CreditDesignation"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditDesignation")}
                    placeholder="Designation"
                  />

                  {formErrors.CreditDesignation && (
                    <div className="error">{formErrors.CreditDesignation}</div>
                  )}
                </div>
                <div>
                  <label>
                    Phone <span className="star">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.CreditPhone}
                    onFocus={() => handleFocus("CreditPhone")}
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        CreditPhone: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        CreditPhone: "",
                      });
                    }}
                  />
                  {formErrors.CreditPhone && (
                    <div className="error">{formErrors.CreditPhone}</div>
                  )}
                </div>
                <div>
                  <label>
                    Email Address <span className="star">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    value={Formvalues.CreditEmail}
                    name="CreditEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("CreditEmail")}
                    placeholder="Email Address"
                  />
                  {formErrors.CreditEmail && (
                    <div className="error">{formErrors.CreditEmail}</div>
                  )}
                </div>
              </div>
              <div>
                <h5>
                  Accounting Department Contact Details{" "}
                  <span className="star">*</span>
                </h5>
                <div>
                  <label>
                    Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    value={Formvalues.AccountDepartName}
                    name="AccountDepartName"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountDepartName")}
                    placeholder="Name"
                  />
                  {formErrors.AccountDepartName && (
                    <div className="error">{formErrors.AccountDepartName}</div>
                  )}
                </div>
                <div>
                  <label>
                    Designation <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    name="AcoountDepartDesignation"
                    value={Formvalues.AcoountDepartDesignation}
                    onChange={handlChange}
                    onFocus={() => handleFocus("AcoountDepartDesignation")}
                    placeholder="Designation"
                  />
                  {formErrors.AcoountDepartDesignation && (
                    <div className="error">
                      {formErrors.AcoountDepartDesignation}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Phone <span className="star">*</span>
                  </label>
                  <PhoneInput
                    country={"ae"}
                    value={Formvalues.AccountDepartmentPhone}
                    name="AccountDepartmentPhone"
                    onFocus={() => handleFocus("AccountDepartmentPhone")}
                    placeholder="Phone No."
                    onChange={(value) => {
                      setFormValues({
                        ...Formvalues,
                        AccountDepartmentPhone: value,
                      });
                      setFormErrors({
                        ...formErrors,
                        AccountDepartmentPhone: "",
                      });
                    }}
                  />

                  {formErrors.AccountDepartmentPhone && (
                    <div className="error">
                      {formErrors.AccountDepartmentPhone}
                    </div>
                  )}
                </div>
                <div>
                  <label>
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="email"
                    value={Formvalues.AccountDepartmentEmail}
                    name="AccountDepartmentEmail"
                    onChange={handlChange}
                    onFocus={() => handleFocus("AccountDepartmentEmail")}
                    placeholder="Email Address"
                  />
                  {formErrors.AccountDepartmentEmail && (
                    <div className="error">
                      {formErrors.AccountDepartmentEmail}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                What is the proposed business with Adam Energy FZE?{" "}
                <span className="star">*</span>
              </label>
              <input
                type="text"
                value={Formvalues.ProposedBusiness}
                name="ProposedBusiness"
                onChange={handlChange}
                onFocus={() => handleFocus("ProposedBusiness")}
                placeholder="Proposed Business"
              />
              {formErrors.ProposedBusiness && (
                <div className="error error2">
                  {formErrors.ProposedBusiness}
                </div>
              )}
            </div>
            <div className="proposedContainer">
              <label style={{ padding: "10px 25px" }}>
                Who is your Contact Person in Adam Energy FZE?
                <span className="star">*</span>
              </label>
              <input
                type="text"
                value={Formvalues.ContactPerson}
                name="ContactPerson"
                onChange={handlChange}
                onFocus={() => handleFocus("ContactPerson")}
                placeholder="Proposed Business"
              />
              {formErrors.ContactPerson && (
                <div className="error error2">{formErrors.ContactPerson}</div>
              )}
            </div>
          </div>

          {/* Trade Reference */}

          <div className="Infocontainer">
            <h3>Trade Reference </h3>
            <p style={{ color: "#666666", padding: "9px 25px" }}>
              Please provide Trade Reference details:
            </p>
            <table
              style={{ width: "100%", textAlign: "center" }}
              cellSpacing={13}
              className="tradereferenceTable"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={Formvalues.TradeReferenceName1}
                      name="TradeReferenceName1"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceName1")}
                      placeholder="Name 1"
                    />
                  </td>

                  <td>
                    <PhoneInput
                      country={"ae"}
                      value={Formvalues.TradeReferencePhone1}
                      onFocus={() => handleFocus("TradeReferencePhone1")}
                      disabled={!Formvalues.TradeReferenceName1}
                      placeholder="Phone 1"
                      onChange={(value) => {
                        setFormValues({
                          ...Formvalues,
                          TradeReferencePhone1: value,
                        });
                        setFormErrors({
                          ...formErrors,
                          TradeReferencePhone1: "",
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={Formvalues.TradeReferenceEmail1}
                      name="TradeReferenceEmail1"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceEmail1")}
                      disabled={!Formvalues.TradeReferenceName1}
                      placeholder="Email 1"
                    />
                  </td>
                </tr>
                {formErrors.TradeReferenceEmail1 && (
                  <div className="error">{formErrors.TradeReferenceEmail1}</div>
                )}
                <tr>
                  <td>
                    <input
                      type="text"
                      value={Formvalues.TradeReferenceName2}
                      name="TradeReferenceName2"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceName2")}
                      placeholder="Name 2"
                    />
                  </td>
                  <td>
                    <PhoneInput
                      country={"ae"}
                      value={Formvalues.TradeReferencePhone2}
                      onFocus={() => handleFocus("TradeReferencePhone1")}
                      disabled={!Formvalues.TradeReferenceName2}
                      placeholder="Phone 2"
                      onChange={(value) => {
                        setFormValues({
                          ...Formvalues,
                          TradeReferencePhone2: value,
                        });
                        setFormErrors({
                          ...formErrors,
                          TradeReferencePhone2: "",
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={Formvalues.TradeReferenceEmail2}
                      name="TradeReferenceEmail2"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceEmail2")}
                      disabled={!Formvalues.TradeReferenceName2}
                      placeholder="Email 2"
                    />
                  </td>
                </tr>
                {formErrors.TradeReferenceEmail2 && (
                  <div className="error">{formErrors.TradeReferenceEmail2}</div>
                )}
                <tr>
                  <td>
                    <input
                      type="text"
                      value={Formvalues.TradeReferenceName3}
                      name="TradeReferenceName3"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceName3")}
                      placeholder="Name 3"
                    />
                  </td>
                  <td>
                    <PhoneInput
                      country={"ae"}
                      value={Formvalues.TradeReferencePhone3}
                      onFocus={() => handleFocus("TradeReferencePhone3")}
                      disabled={!Formvalues.TradeReferenceName3}
                      placeholder="Phone 3"
                      onChange={(value) => {
                        setFormValues({
                          ...Formvalues,
                          TradeReferencePhone3: value,
                        });
                        setFormErrors({
                          ...formErrors,
                          TradeReferencePhone3: "",
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={Formvalues.TradeReferenceEmail3}
                      name="TradeReferenceEmail3"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceEmail3")}
                      disabled={!Formvalues.TradeReferenceName3}
                      placeholder="Email 3"
                    />
                  </td>
                </tr>

                {formErrors.TradeReferenceEmail3 && (
                  <div className="error">{formErrors.TradeReferenceEmail3}</div>
                )}
                <tr>
                  <td>
                    <input
                      type="text"
                      value={Formvalues.TradeReferenceName4}
                      name="TradeReferenceName4"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceName4")}
                      placeholder="Name 4"
                    />
                  </td>
                  <td>
                    <PhoneInput
                      country={"ae"}
                      value={Formvalues.TradeReferencePhone4}
                      onFocus={() => handleFocus("TradeReferencePhone4")}
                      disabled={!Formvalues.TradeReferenceName4}
                      placeholder="Phone 4"
                      onChange={(value) => {
                        setFormValues({
                          ...Formvalues,
                          TradeReferencePhone4: value,
                        });
                        setFormErrors({
                          ...formErrors,
                          TradeReferencePhone4: "",
                        });
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={Formvalues.TradeReferenceEmail4}
                      name="TradeReferenceEmail4"
                      onChange={handlChange}
                      onFocus={() => handleFocus("TradeReferenceEmail4")}
                      disabled={!Formvalues.TradeReferenceName4}
                      placeholder="Email 4"
                    />
                  </td>
                </tr>
                {formErrors.TradeReferenceEmail4 && (
                  <div className="error">{formErrors.TradeReferenceEmail4}</div>
                )}
              </tbody>
            </table>
          </div>

          {/* Upload KYC Documents */}

          <div className="Infocontainer kycDocumentsContainer">
            <h3>UPLOAD KYC DOCUMENTS</h3>
            <br />
            <p className="signMsg" style={{ margin: "0px 20px" }}>
              Please Upload File size less than 350kb
            </p>
            <div>
              <label>
                1) Certificate of Incorporation <span className="star">*</span>{" "}
              </label>
              <input
                type="file"
                onChange={handlChange}
                name="certificateOfIncorporation"
                value={Formvalues.certificateOfIncorporation}
                onFocus={() => handleFocus("TradeReferenceEmail4")}
              />

              {formErrors.certificateOfIncorporation && (
                <div className="error">
                  {formErrors.certificateOfIncorporation}
                </div>
              )}
            </div>
            <div>
              <label>
                2) Memorandum/Article of Association and Shareholding Structure
                (Evidencing Ultimate Business Owners) signed by company
                authorized signatory, stamped. and documents supporting UBO's.{" "}
                <span className="star">*</span>
              </label>
              <input
                type="file"
                onChange={handlChange}
                value={Formvalues.memorandum}
                name="memorandum"
                onFocus={() => handleFocus("memorandum")}
              />

              {formErrors.memorandum && (
                <div className="error">{formErrors.memorandum}</div>
              )}
            </div>
            <div style={{ display: "inline-block" }}>
              <label>
                3) Trade License <span className="star">*</span>{" "}
              </label>
              <input
                type="file"
                onChange={handlChange}
                name="tradeLicenseCertificate"
                value={Formvalues.tradeLicenseCertificate}
                onFocus={() => handleFocus("tradeLicenseCertificate")}
              />

              {formErrors.tradeLicenseCertificate && (
                <div className="error">
                  {formErrors.tradeLicenseCertificate}
                </div>
              )}
            </div>
            <div className="textCertficate-container">
              <label>
                4) Tax Registration Certificate <span className="star">*</span>
              </label>
              <input
                type="file"
                onChange={handlChange}
                name="taxRegCertificate"
                value={Formvalues.taxRegCertificate}
                onFocus={() => handleFocus("tradeLicenseCertificate")}
              />

              {formErrors.tradeLicenseCertificate && (
                <div className="error">
                  {formErrors.tradeLicenseCertificate}
                </div>
              )}
            </div>
            <div className="url">
              <label>
                6) Website URL <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Website URL"
                value={Formvalues.WebsiteURL}
                name="WebsiteURL"
                onChange={handlChange}
                onFocus={() => handleFocus("WebsiteURL")}
              />
              {formErrors.WebsiteURL && (
                <div className="error">{formErrors.WebsiteURL}</div>
              )}
            </div>
            <div>
              <label>5) Company Profile ( If Available) </label>
              <input type="file" />
            </div>

            <div>
              <label>7) Bank Reference Letter ( Upon Trade or Request) </label>
              <input type="file" />
            </div>
            <div>
              <label>
                8) Passport Copies of the Ultimate Beneficial Owners and
                Authorized Signatory <span className="star">*</span>
              </label>
              <input
                type="file"
                onChange={handlChange}
                name="PassPortCopy"
                value={Formvalues.PassPortCopy}
                onFocus={() => handleFocus("PassPortCopy")}
              />

              {formErrors.PassPortCopy && (
                <div className="error">{formErrors.PassPortCopy}</div>
              )}
            </div>

            <div className="declarationContainer">
              <h4>
                Declaration <span className="star">*</span>
              </h4>
              <p>
                {" "}
                <span>
                  <input type="checkbox" />
                </span>{" "}
                I DECLARE THAT: - This application form was completed by me, a
                representative authorized to submit this form on behalf of the
                registered company. I do hereby declare that the information
                provided herein above and, in the documents, appended herewith
                is true and correct to the best of my knowledge and belief and
                nothing has been falsely stated or concealed therein. I
                understand that if the said information as given by me is proved
                to be false, then I will be held liable under the provisions of
                the applicable UAE Law.
              </p>
            </div>

            <div>
              <label>
                Authorized Signatory <span className="star">*</span>
              </label>
              <input
                type="file"
                name="AuthorisedSignatureImage"
                value={Formvalues.AuthorisedSignatureImage}
                onChange={handlChange}
                onFocus={() => handleFocus("AuthorisedSignatureImage")}
              />
              <p className="signMsg" style={{ margin: "8px 0px" }}>
                Please upload your signature Image
              </p>
              {formErrors.AuthorisedSignatureImage && (
                <div className="error">
                  {formErrors.AuthorisedSignatureImage}
                </div>
              )}
            </div>

            <div className="authorised-sign">
              <label>
                Authorized Signatory Name <span className="star">*</span>
              </label>
              <input
                type="text"
                placeholder="Authorized Signatory Name"
                value={Formvalues.AuthorisedSignature}
                name="AuthorisedSignature"
                onChange={handlChange}
                onFocus={() => handleFocus("AuthorisedSignature")}
              />
              {formErrors.AuthorisedSignature && (
                <div className="error">{formErrors.AuthorisedSignature}</div>
              )}
            </div>

            <div className="submit-btn">
              <button type="submit" onClick={handleSubmit}>
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default KYC;
