const countries = [
    {
        text: "+293",
        flag: "af",
        value: "af",
        key: "af",
        content: "Afghanistan"
    },
    { text: "Aland Islands", flag: "ax" },
    { text: "Albania", flag: "al" },
    { text: "Algeria", flag: "dz" },
    { text: "American Samoa", flag: "as" },
    { text: "Andorra", flag: "ad" },
    { text: "Angola", flag: "ao" },
    { text: "Anguilla", flag: "ai" },
    { text: "Antigua", flag: "ag" },
    { text: "Argentina", flag: "ar" },
    { text: "Armenia", flag: "am" },
    { text: "Aruba", flag: "aw" },
    { text: "Australia", flag: "au" },
    { text: "Austria", flag: "at" },
    { text: "Azerbaijan", flag: "az" },
    { text: "Bahamas", flag: "bs" },
    { text: "Bahrain", flag: "bh" },
    { text: "Bangladesh", flag: "bd" },
    { text: "Barbados", flag: "bb" },
    { text: "Belarus", flag: "by" },
    { text: "Belgium", flag: "be" },
    { text: "Belize", flag: "bz" },
    { text: "Benin", flag: "bj" },
    { text: "Bermuda", flag: "bm" },
    { text: "Bhutan", flag: "bt" },
    { text: "Bolivia", flag: "bo" },
    { text: "Bosnia", flag: "ba" },
    { text: "Botswana", flag: "bw" },
    { text: "Bouvet Island", flag: "bv" },
    { text: "Brazil", flag: "br" },
    { text: "British Virgin Islands", flag: "vg" },
    { text: "Brunei", flag: "bn" },
    { text: "Bulgaria", flag: "bg" },
    { text: "Burkina Faso", flag: "bf" },
    { text: "Burma", flag: "mm", alias: "Myanmar" },
    { text: "Burundi", flag: "bi" },
    { text: "Caicos Islands", flag: "tc" },
    { text: "Cambodia", flag: "kh" },
    { text: "Cameroon", flag: "cm" },
    { text: "Canada", flag: "ca" },
    { text: "Cape Verde", flag: "cv" },
    { text: "Cayman Islands", flag: "ky" },
    { text: "Central African Republic", flag: "cf" },
    { text: "Chad", flag: "td" },
    { text: "Chile", flag: "cl" },
    { text: "China", flag: "cn" },
    { text: "Christmas Island", flag: "cx" },
    { text: "Cocos Islands", flag: "cc" },
    { text: "Colombia", flag: "co" },
    { text: "Comoros", flag: "km" },
    { text: "Congo", flag: "cd" },
    { text: "Congo Brazzaville", flag: "cg" },
    { text: "Cook Islands", flag: "ck" },
    { text: "Costa Rica", flag: "cr" },
    { text: "Cote Divoire", flag: "ci" },
    { text: "Croatia", flag: "hr" },
    { text: "Cuba", flag: "cu" },
    { text: "Cyprus", flag: "cy" },
    { text: "Czech Republic", flag: "cz" },
    { text: "Denmark", flag: "dk" },
    { text: "Djibouti", flag: "dj" },
    { text: "Dominica", flag: "dm" },
    { text: "Dominican Republic", flag: "do" },
    { text: "Ecuador", flag: "ec" },
    { text: "Egypt", flag: "eg" },
    { text: "El Salvador", flag: "sv" },
    { text: "Equatorial Guinea", flag: "gq" },
    { text: "Eritrea", flag: "er" },
    { text: "Estonia", flag: "ee" },
    { text: "Ethiopia", flag: "et" },
    { text: "Europeanunion", flag: "eu" },
    { text: "Falkland Islands", flag: "fk" },
    { text: "Faroe Islands", flag: "fo" },
    { text: "Fiji", flag: "fj" },
    { text: "Finland", flag: "fi" },
    { text: "France", flag: "fr" },
    { text: "French Guiana", flag: "gf" },
    { text: "French Polynesia", flag: "pf" },
    { text: "French Territories", flag: "tf" },
    { text: "Gabon", flag: "ga" },
    { text: "Gambia", flag: "gm" },
    { text: "Georgia", flag: "ge" },
    { text: "Germany", flag: "de" },
    { text: "Ghana", flag: "gh" },
    { text: "Gibraltar", flag: "gi" },
    { text: "Greece", flag: "gr" },
    { text: "Greenland", flag: "gl" },
    { text: "Grenada", flag: "gd" },
    { text: "Guadeloupe", flag: "gp" },
    { text: "Guam", flag: "gu" },
    { text: "Guatemala", flag: "gt" },
    { text: "Guinea", flag: "gn" },
    { text: "Guinea-Bissau", flag: "gw" },
    { text: "Guyana", flag: "gy" },
    { text: "Haiti", flag: "ht" },
    { text: "Heard Island", flag: "hm" },
    { text: "Honduras", flag: "hn" },
    { text: "Hong Kong", flag: "hk" },
    { text: "Hungary", flag: "hu" },
    { text: "Iceland", flag: "is" },
    { text: "India", flag: "in" },
    { text: "Indian Ocean Territory", flag: "io" },
    { text: "Indonesia", flag: "id" },
    { text: "Iran", flag: "ir" },
    { text: "Iraq", flag: "iq" },
    { text: "Ireland", flag: "ie" },
    { text: "Israel", flag: "il" },
    { text: "Italy", flag: "it" },
    { text: "Jamaica", flag: "jm" },
    { text: "Jan Mayen", flag: "sj", alias: "Svalbard" },
    { text: "Japan", flag: "jp" },
    { text: "Jordan", flag: "jo" },
    { text: "Kazakhstan", flag: "kz" },
    { text: "Kenya", flag: "ke" },
    { text: "Kiribati", flag: "ki" },
    { text: "Kuwait", flag: "kw" },
    { text: "Kyrgyzstan", flag: "kg" },
    { text: "Laos", flag: "la" },
    { text: "Latvia", flag: "lv" },
    { text: "Lebanon", flag: "lb" },
    { text: "Lesotho", flag: "ls" },
    { text: "Liberia", flag: "lr" },
    { text: "Libya", flag: "ly" },
    { text: "Liechtenstein", flag: "li" },
    { text: "Lithuania", flag: "lt" },
    { text: "Luxembourg", flag: "lu" },
    { text: "Macau", flag: "mo" },
    { text: "Macedonia", flag: "mk" },
    { text: "Madagascar", flag: "mg" },
    { text: "Malawi", flag: "mw" },
    { text: "Malaysia", flag: "my" },
    { text: "Maldives", flag: "mv" },
    { text: "Mali", flag: "ml" },
    { text: "Malta", flag: "mt" },
    { text: "Marshall Islands", flag: "mh" },
    { text: "Martinique", flag: "mq" },
    { text: "Mauritania", flag: "mr" },
    { text: "Mauritius", flag: "mu" },
    { text: "Mayotte", flag: "yt" },
    { text: "Mexico", flag: "mx" },
    { text: "Micronesia", flag: "fm" },
    { text: "Moldova", flag: "md" },
    { text: "Monaco", flag: "mc" },
    { text: "Mongolia", flag: "mn" },
    { text: "Montenegro", flag: "me" },
    { text: "Montserrat", flag: "ms" },
    { text: "Morocco", flag: "ma" },
    { text: "Mozambique", flag: "mz" },
    { text: "Namibia", flag: "na" },
    { text: "Nauru", flag: "nr" },
    { text: "Nepal", flag: "np" },
    { text: "Netherlands", flag: "nl" },
    { text: "Netherlandsantilles", flag: "an" },
    { text: "New Caledonia", flag: "nc" },
    { text: "New Guinea", flag: "pg" },
    { text: "New Zealand", flag: "nz" },
    { text: "Nicaragua", flag: "ni" },
    { text: "Niger", flag: "ne" },
    { text: "Nigeria", flag: "ng" },
    { text: "Niue", flag: "nu" },
    { text: "Norfolk Island", flag: "nf" },
    { text: "North Korea", flag: "kp" },
    { text: "Northern Mariana Islands", flag: "mp" },
    { text: "Norway", flag: "no" },
    { text: "Oman", flag: "om" },
    { text: "Pakistan", flag: "pk" },
    { text: "Palau", flag: "pw" },
    { text: "Palestine", flag: "ps" },
    { text: "Panama", flag: "pa" },
    { text: "Paraguay", flag: "py" },
    { text: "Peru", flag: "pe" },
    { text: "Philippines", flag: "ph" },
    { text: "Pitcairn Islands", flag: "pn" },
    { text: "Poland", flag: "pl" },
    { text: "Portugal", flag: "pt" },
    { text: "Puerto Rico", flag: "pr" },
    { text: "Qatar", flag: "qa" },
    { text: "Reunion", flag: "re" },
    { text: "Romania", flag: "ro" },
    { text: "Russia", flag: "ru" },
    { text: "Rwanda", flag: "rw" },
    { text: "Saint Helena", flag: "sh" },
    { text: "Saint Kitts and Nevis", flag: "kn" },
    { text: "Saint Lucia", flag: "lc" },
    { text: "Saint Pierre", flag: "pm" },
    { text: "Saint Vincent", flag: "vc" },
    { text: "Samoa", flag: "ws" },
    { text: "San Marino", flag: "sm" },
    { text: "Sandwich Islands", flag: "gs" },
    { text: "Sao Tome", flag: "st" },
    { text: "Saudi Arabia", flag: "sa" },
    { text: "Scotland", flag: "gb sct" },
    { text: "Senegal", flag: "sn" },
    { text: "Serbia", flag: "cs" },
    { text: "Serbia", flag: "rs" },
    { text: "Seychelles", flag: "sc" },
    { text: "Sierra Leone", flag: "sl" },
    { text: "Singapore", flag: "sg" },
    { text: "Slovakia", flag: "sk" },
    { text: "Slovenia", flag: "si" },
    { text: "Solomon Islands", flag: "sb" },
    { text: "Somalia", flag: "so" },
    { text: "South Africa", flag: "za" },
    { text: "South Korea", flag: "kr" },
    { text: "Spain", flag: "es" },
    { text: "Sri Lanka", flag: "lk" },
    { text: "Sudan", flag: "sd" },
    { text: "Suritext", flag: "sr" },
    { text: "Swaziland", flag: "sz" },
    { text: "Sweden", flag: "se" },
    { text: "Switzerland", flag: "ch" },
    { text: "Syria", flag: "sy" },
    { text: "Taiwan", flag: "tw" },
    { text: "Tajikistan", flag: "tj" },
    { text: "Tanzania", flag: "tz" },
    { text: "Thailand", flag: "th" },
    { text: "Timorleste", flag: "tl" },
    { text: "Togo", flag: "tg" },
    { text: "Tokelau", flag: "tk" },
    { text: "Tonga", flag: "to" },
    { text: "Trinidad", flag: "tt" },
    { text: "Tunisia", flag: "tn" },
    { text: "Turkey", flag: "tr" },
    { text: "Turkmenistan", flag: "tm" },
    { text: "Tuvalu", flag: "tv" },
    { text: "U.A.E.", flag: "ae", alias: "United Arab Emirates" },
    { text: "Uganda", flag: "ug" },
    { text: "Ukraine", flag: "ua" },
    { text: "United Kingdom", flag: "gb" },
    { text: "United States", flag: "us", alias: "America" },
    { text: "Uruguay", flag: "uy" },
    { text: "US Minor Islands", flag: "um" },
    { text: "US Virgin Islands", flag: "vi" },
    { text: "Uzbekistan", flag: "uz" },
    { text: "Vanuatu", flag: "vu" },
    { text: "Vatican City", flag: "va" },
    { text: "Venezuela", flag: "ve" },
    { text: "Vietnam", flag: "vn" },
    { text: "Wales", flag: "gb wls" },
    { text: "Wallis and Futuna", flag: "wf" },
    { text: "Western Sahara", flag: "eh" },
    { text: "Yemen", flag: "ye" },
    { text: "Zambia", flag: "zm" },
    { text: "Zimbabwe", flag: "zw" }
];

export default countries;
