// src/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faDownload} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
    faLocationDot,
    faGithub,
    faLinkedin,
    faEnvelope,
    faDownload,
);

export default FontAwesomeIcon;
